import { useState } from "react";
import { cn } from "@/lib/utils";

import t1_1 from "@/assets/floor-3bhk-t1-1.jpg";
import t1_2 from "@/assets/floor-3bhk-t1-2.jpg";
import t1_3 from "@/assets/floor-3bhk-t1-3.jpg";
import t1_4 from "@/assets/floor-3bhk-t1-4.jpg";

import t2_1 from "@/assets/floor-3bhk-t2-1.jpg";
import t2_2 from "@/assets/floor-3bhk-t2-2.jpg";
import t2_3 from "@/assets/floor-3bhk-t2-3.jpg";
import t2_4 from "@/assets/floor-3bhk-t2-4.jpg";

import t3_1 from "@/assets/floor-3bhk-t3-1.jpg";
import t3_2 from "@/assets/floor-3bhk-t3-2.jpg";
import t3_3 from "@/assets/floor-3bhk-t3-3.jpg";
import t3_4 from "@/assets/floor-3bhk-t3-4.jpg";

import t4_1 from "@/assets/floor-3bhk-t4-1.jpg";
import t4_2 from "@/assets/floor-3bhk-t4-2.jpg";
import t4_3 from "@/assets/floor-3bhk-t4-3.jpg";
import t4_4 from "@/assets/floor-3bhk-t4-4.jpg";

const plans = [
  {
    id: "type1",
    label: "3BHK Type 1",
    area: "1,250 sq.ft.",
    images: [
      { src: t1_1, alt: "3BHK Type 1 — Floor Plan" },
      { src: t1_2, alt: "3BHK Type 1 — Alternate Layout" },
      { src: t1_3, alt: "3BHK Type 1 — Living Room" },
      { src: t1_4, alt: "3BHK Type 1 — Master Bedroom" },
    ],
  },
  {
    id: "type2",
    label: "3BHK Type 2",
    area: "1,450 sq.ft.",
    images: [
      { src: t2_1, alt: "3BHK Type 2 — Floor Plan" },
      { src: t2_2, alt: "3BHK Type 2 — Alternate Layout" },
      { src: t2_3, alt: "3BHK Type 2 — Kitchen" },
      { src: t2_4, alt: "3BHK Type 2 — Balcony" },
    ],
  },
  {
    id: "type3",
    label: "3BHK Type 3",
    area: "1,650 sq.ft.",
    images: [
      { src: t3_1, alt: "3BHK Type 3 — Floor Plan" },
      { src: t3_2, alt: "3BHK Type 3 — Alternate Layout" },
      { src: t3_3, alt: "3BHK Type 3 — Living & Dining" },
      { src: t3_4, alt: "3BHK Type 3 — Bathroom" },
    ],
  },
  {
    id: "type4",
    label: "3BHK Type 4",
    area: "1,850 sq.ft.",
    images: [
      { src: t4_1, alt: "3BHK Type 4 — Floor Plan" },
      { src: t4_2, alt: "3BHK Type 4 — Alternate Layout" },
      { src: t4_3, alt: "3BHK Type 4 — Entrance Foyer" },
      { src: t4_4, alt: "3BHK Type 4 — Kids Room" },
    ],
  },
];

const FloorPlanSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = plans[activeIdx];

  return (
    <section id="floor-plans" className="py-20 bg-accent/30">
      <div className="container">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold tracking-widest text-muted-foreground mb-1">— FLOOR PLANS</p>
        </div>

        {/* Plan tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {plans.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActiveIdx(i)}
              className={cn(
                "px-6 py-3 rounded-full text-sm font-medium transition-colors border",
                i === activeIdx
                  ? "bg-primary text-primary-foreground border-primary shadow-md"
                  : "bg-card text-foreground border-border hover:bg-accent"
              )}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Images grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {active.images.map((img, i) => (
            <div
              key={`${active.id}-${i}`}
              className="rounded-xl overflow-hidden border bg-card shadow-sm hover:shadow-lg transition-shadow"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-52 md:h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FloorPlanSection;
