import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { cars } from "@/data/cars";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/xe-o-to")({
  head: () => ({
    meta: [
      { title: "Xe ô tô điện VinFast — VF 3, VF 8, VF 9" },
      {
        name: "description",
        content:
          "Toàn bộ dải xe ô tô điện VinFast: từ mini đô thị VF 3 đến SUV cao cấp VF 9. So sánh giá, thông số và đặt xe ngay.",
      },
    ],
  }),
  component: CarsPage,
});

function CarsPage() {
  const otoCars = cars.filter((c) => c.category !== "Xe máy điện");
  return (
    <Layout>
      <section className="bg-gradient-hero py-24">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-primary text-xs font-semibold tracking-widest uppercase">
            Dải xe ô tô điện
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mt-4">
            Một chiếc xe cho <br />
            <span className="text-gradient-primary">mọi hành trình</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Khám phá đầy đủ dải xe ô tô điện VinFast với đa dạng phân khúc, công nghệ
            và phong cách để bạn lựa chọn.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 space-y-10">
        {otoCars.map((car, i) => (
          <Link
            key={car.slug}
            to="/xe-o-to/$model"
            params={{ model: car.slug }}
            className={`group grid md:grid-cols-2 gap-8 items-center rounded-3xl bg-card border border-border overflow-hidden hover:border-primary/40 hover:shadow-elegant transition-all ${
              i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="p-8 md:p-12">
              <span className="text-xs px-2 py-1 rounded-full bg-secondary">
                {car.category}
              </span>
              <h2 className="text-4xl font-bold mt-4">{car.name}</h2>
              <p className="text-muted-foreground mt-2">{car.tagline}</p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <Stat label="Quãng đường" value={car.range} />
                <Stat label="Công suất" value={car.power} />
                <Stat label="0–100 km/h" value={car.acceleration} />
              </div>
              <div className="mt-8 flex items-center justify-between">
                <div>
                  <div className="text-xs text-muted-foreground">Giá từ</div>
                  <div className="text-xl font-bold text-primary">{car.price}</div>
                </div>
                <span className="inline-flex items-center gap-2 text-primary font-semibold">
                  Chi tiết <ArrowRight size={18} />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </Layout>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xl font-bold">{value}</div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </div>
  );
}