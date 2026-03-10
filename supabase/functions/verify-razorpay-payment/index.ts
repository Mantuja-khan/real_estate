import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, inquiryId, email, name, area, amount } = await req.json();

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !inquiryId) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Verify signature using HMAC SHA256
    const keySecret = Deno.env.get("RAZORPAY_KEY_SECRET")!;
    const body = `${razorpay_order_id}|${razorpay_payment_id}`;

    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
      "raw",
      encoder.encode(keySecret),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"]
    );
    const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(body));
    const expectedSignature = Array.from(new Uint8Array(signature))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    if (expectedSignature !== razorpay_signature) {
      return new Response(
        JSON.stringify({ error: "Payment verification failed" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Update payment status
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    await supabase
      .from("inquiries")
      .update({ payment_status: "completed" })
      .eq("id", inquiryId);

    // Send confirmation email via Lovable AI gateway
    const lovableApiKey = Deno.env.get("LOVABLE_API_KEY");
    if (lovableApiKey && email) {
      try {
        const supabaseProjectId = Deno.env.get("SUPABASE_URL")!.match(/https:\/\/(.+)\.supabase\.co/)?.[1];
        const emailRes = await fetch(`https://api.lovable.dev/api/v1/send-transactional-email`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${lovableApiKey}`,
            "x-supabase-project-id": supabaseProjectId || "",
          },
          body: JSON.stringify({
            to: email,
            subject: `Slot Confirmed - ${area} | La Maison`,
            html: `
              <div style="font-family: 'DM Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; padding: 40px 30px;">
                <div style="text-align: center; margin-bottom: 30px;">
                  <h1 style="font-size: 28px; color: #1a1a2e; margin: 0;">🏠 La Maison</h1>
                </div>
                <div style="background: #f0fdf4; border-radius: 12px; padding: 24px; text-align: center; margin-bottom: 24px;">
                  <div style="font-size: 48px; margin-bottom: 8px;">✅</div>
                  <h2 style="color: #166534; margin: 0 0 8px;">Slot Confirmed!</h2>
                  <p style="color: #15803d; margin: 0;">Your payment has been verified successfully.</p>
                </div>
                <div style="background: #f8fafc; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                  <h3 style="color: #1a1a2e; margin: 0 0 16px;">Booking Details</h3>
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr><td style="padding: 8px 0; color: #64748b;">Name</td><td style="padding: 8px 0; font-weight: 600; text-align: right;">${name}</td></tr>
                    <tr><td style="padding: 8px 0; color: #64748b;">Area</td><td style="padding: 8px 0; font-weight: 600; text-align: right;">${area}</td></tr>
                    <tr><td style="padding: 8px 0; color: #64748b;">Amount Paid</td><td style="padding: 8px 0; font-weight: 600; text-align: right;">₹${Number(amount).toLocaleString("en-IN")}</td></tr>
                    <tr><td style="padding: 8px 0; color: #64748b;">Payment ID</td><td style="padding: 8px 0; font-weight: 600; text-align: right; font-size: 12px;">${razorpay_payment_id}</td></tr>
                  </table>
                </div>
                <p style="color: #64748b; font-size: 14px; text-align: center;">
                  Our team will contact you shortly with further details about your property in <strong>${area}</strong>.
                </p>
                <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
                <p style="color: #94a3b8; font-size: 12px; text-align: center;">
                  © La Maison Real Estate Pvt. Ltd. | All rights reserved.
                </p>
              </div>
            `,
          }),
        });
        console.log("Email send result:", emailRes.status);
      } catch (emailErr) {
        console.error("Email error:", emailErr);
      }
    }

    console.log(`Payment verified for ${name} (${email}): Area: ${area}, Amount: ₹${amount}, Payment: ${razorpay_payment_id}`);

    return new Response(
      JSON.stringify({ success: true, message: "Payment verified and slot confirmed" }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
