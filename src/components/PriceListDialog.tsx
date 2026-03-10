import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { IndianRupee } from "lucide-react";

const priceData = [
  {
    plotSize: "147.72 Sq.Yards",
    unitSize: 1329.48,
    rows: [
      { floor: "1st Floor", buc: 12350, reg: 49000, tenPct: "15,92,908", thirtyPct: "49,25,723", sixtyPct: "98,51,447", total: "1,64,19,078" },
      { floor: "2nd Floor", buc: 11975, reg: 49000, tenPct: "15,43,052", thirtyPct: "47,76,157", sixtyPct: "95,52,314", total: "1,59,20,523" },
      { floor: "3rd Floor", buc: 11975, reg: 49000, tenPct: "15,43,052", thirtyPct: "47,76,157", sixtyPct: "95,52,314", total: "1,59,20,523" },
      { floor: "4th Floor", buc: 11975, reg: 49000, tenPct: "15,43,052", thirtyPct: "47,76,157", sixtyPct: "95,52,314", total: "1,59,20,523" },
    ],
  },
  {
    plotSize: "150.32 Sq.Yards",
    unitSize: 1352.88,
    rows: [
      { floor: "1st Floor", buc: 12350, reg: 49000, tenPct: "16,21,807", thirtyPct: "50,12,420", sixtyPct: "1,00,24,841", total: "1,67,08,068" },
      { floor: "2nd Floor", buc: 11975, reg: 49000, tenPct: "15,71,074", thirtyPct: "48,60,221", sixtyPct: "97,20,443", total: "1,62,00,738" },
      { floor: "3rd Floor", buc: 11975, reg: 49000, tenPct: "15,71,074", thirtyPct: "48,60,221", sixtyPct: "97,20,443", total: "1,62,00,738" },
      { floor: "4th Floor", buc: 11975, reg: 49000, tenPct: "15,71,074", thirtyPct: "48,60,221", sixtyPct: "97,20,443", total: "1,62,00,738" },
    ],
  },
  {
    plotSize: "151.34 Sq.Yards",
    unitSize: 1362.06,
    rows: [
      { floor: "1st Floor", buc: 12350, reg: 49000, tenPct: "16,33,144", thirtyPct: "50,46,432", sixtyPct: "1,00,92,865", total: "1,68,21,441" },
      { floor: "2nd Floor", buc: 11975, reg: 49000, tenPct: "15,82,067", thirtyPct: "48,93,201", sixtyPct: "97,86,401", total: "1,63,10,669" },
      { floor: "3rd Floor", buc: 11975, reg: 49000, tenPct: "15,82,067", thirtyPct: "48,93,201", sixtyPct: "97,86,401", total: "1,63,10,669" },
      { floor: "4th Floor", buc: 11975, reg: 49000, tenPct: "15,82,067", thirtyPct: "48,93,201", sixtyPct: "97,86,401", total: "1,63,10,669" },
    ],
  },
  {
    plotSize: "161.13 Sq.Yards",
    unitSize: 1450.17,
    rows: [
      { floor: "1st Floor", buc: 12350, reg: 49000, tenPct: "17,41,960", thirtyPct: "53,72,880", sixtyPct: "1,07,45,760", total: "1,79,09,600" },
      { floor: "2nd Floor", buc: 11975, reg: 49000, tenPct: "16,87,579", thirtyPct: "52,09,736", sixtyPct: "1,04,19,471", total: "1,73,65,786" },
      { floor: "3rd Floor", buc: 11975, reg: 49000, tenPct: "16,87,579", thirtyPct: "52,09,736", sixtyPct: "1,04,19,471", total: "1,73,65,786" },
      { floor: "4th Floor", buc: 11975, reg: 49000, tenPct: "16,87,579", thirtyPct: "52,09,736", sixtyPct: "1,04,19,471", total: "1,73,65,786" },
    ],
  },
];

const PriceListDialog = ({ trigger }: { trigger: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-6xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <IndianRupee className="h-5 w-5 text-primary" />
            Price List
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-8 mt-4">
          {priceData.map((plot) => (
            <div key={plot.plotSize}>
              <h3 className="font-bold text-lg mb-3 text-primary">
                Plot Size: {plot.plotSize} &nbsp;|&nbsp; Unit Size: {plot.unitSize} sqft
              </h3>
              <div className="overflow-x-auto rounded-lg border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted text-muted-foreground">
                      <th className="px-3 py-2 text-left font-semibold whitespace-nowrap">Floor</th>
                      <th className="px-3 py-2 text-right font-semibold whitespace-nowrap">BUC Price/sqft (₹)</th>
                      <th className="px-3 py-2 text-right font-semibold whitespace-nowrap">Registration (₹)</th>
                      <th className="px-3 py-2 text-right font-semibold whitespace-nowrap">10% On Allotment</th>
                      <th className="px-3 py-2 text-right font-semibold whitespace-nowrap">30% in 45 Days</th>
                      <th className="px-3 py-2 text-right font-semibold whitespace-nowrap">60% On Possession</th>
                      <th className="px-3 py-2 text-right font-semibold whitespace-nowrap">Basic Unit Cost (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {plot.rows.map((r, i) => (
                      <tr
                        key={r.floor}
                        className={i % 2 === 0 ? "bg-background" : "bg-muted/30"}
                      >
                        <td className="px-3 py-2 font-medium whitespace-nowrap">{r.floor}</td>
                        <td className="px-3 py-2 text-right whitespace-nowrap">₹{r.buc.toLocaleString("en-IN")}</td>
                        <td className="px-3 py-2 text-right whitespace-nowrap">₹{r.reg.toLocaleString("en-IN")}</td>
                        <td className="px-3 py-2 text-right whitespace-nowrap">₹{r.tenPct}</td>
                        <td className="px-3 py-2 text-right whitespace-nowrap">₹{r.thirtyPct}</td>
                        <td className="px-3 py-2 text-right whitespace-nowrap">₹{r.sixtyPct}</td>
                        <td className="px-3 py-2 text-right font-bold whitespace-nowrap">₹{r.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
          <p className="text-xs text-muted-foreground">* Prices are indicative and subject to change. Please contact us for the latest pricing.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PriceListDialog;
