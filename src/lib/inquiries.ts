import { apiFetch } from "@/lib/api";

export interface Inquiry {
  id: string;
  name: string;
  fatherName?: string;
  address?: string;
  panCard?: string;
  phone: string;
  email: string;
  aadhaar: string;
  quota: string;
  plotSize: string;
  payment_status: string;
  slot_status: string;
  created_at: string;
}



// Map backend _id to id for the frontend components
const mapInquiry = (data: any): Inquiry => ({
  ...data,
  id: data._id,
});

export async function getInquiries(): Promise<Inquiry[]> {
  const data = await apiFetch('/inquiries', { requireAuth: true });
  return data.map(mapInquiry);
}

export async function addInquiry(inquiry: Omit<Inquiry, "id" | "created_at" | "payment_status" | "slot_status">): Promise<Inquiry> {
  const data = await apiFetch('/inquiries', {
    method: 'POST',
    body: JSON.stringify(inquiry)
  });
  return mapInquiry(data);
}

export async function updatePaymentStatus(id: string, status: string): Promise<void> {
  await apiFetch(`/inquiries/${id}/payment`, {
    method: 'PATCH',
    body: JSON.stringify({ status }),
    requireAuth: true
  });
}

export async function deleteInquiry(id: string) {
  await apiFetch(`/inquiries/${id}`, {
    method: 'DELETE',
    requireAuth: true
  });
}
