import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Car3D } from "@/components/site/Car3D";
import { getCar, cars } from "@/data/cars";
import { ArrowLeft, Battery, Gauge, Zap } from "lucide-react";

export const Route = createFileRoute("/xe-o-to/$model")({
  loader: ({ params }) => {
    const car = getCar(params.model);
    if (!car) throw notFound();
    return { car };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.car.name} — VinFast` },
      { name: "description", content: loaderData?.car.description ?? "" },
      { property: "og:image", content: loaderData?.car.image ?? "" },
    ],
  }),
  notFoundComponent: () => (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-32 text-center">
        <h1 className="text-4xl font-bold">Không tìm thấy xe</h1>
        <Link to="/xe-o-to" className="text-primary mt-4 inline-block">
          ← Quay lại danh sách xe
        </Link>
      </div>
    </Layout>
  ),
  errorComponent: ({ error }) => (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-32 text-center">
        <p>{error.message}</p>
      </div>
    </Layout>
  ),
  component: ModelPage,
});

function ModelPage() {
  const { car } = Route.useLoaderData();
  return (
    <Layout>
      <section className="bg-gradient-hero relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Link
              to="/xe-o-to"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
            >
              <ArrowLeft size={16} /> Tất cả xe
            </Link>
            <span className="block mt-6 text-primary text-xs font-semibold tracking-widest uppercase">
              {car.category}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mt-3">{car.name}</h1>
            <p className="mt-4 text-xl text-muted-foreground">{car.tagline}</p>
            <p className="mt-6 text-base text-muted-foreground max-w-xl">
              {car.description}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/lien-he"
                className="rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold shadow-glow hover:scale-105 transition-transform"
              >
                Đặt cọc {car.price}
              </Link>
              <Link
                to="/lien-he"
                className="rounded-full border border-border px-7 py-3.5 text-sm font-semibold hover:bg-secondary"
              >
                Đăng ký lái thử
              </Link>
            </div>
          </div>
          <div className="relative h-[420px] rounded-3xl overflow-hidden">
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10">Thông số nổi bật</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Battery, label: "Quãng đường", value: car.range },
            { icon: Zap, label: "Công suất", value: car.power },
            { icon: Gauge, label: "Tăng tốc 0–100", value: car.acceleration },
          ].map((s) => (
            <div key={s.label} className="p-8 rounded-2xl bg-card border border-border">
              <s.icon className="text-primary" size={28} />
              <div className="text-3xl font-bold mt-4">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-10">Trải nghiệm 3D</h2>
        <div className="relative h-[500px] rounded-3xl overflow-hidden bg-gradient-hero border border-border">
          <Car3D />
          <div className="absolute bottom-4 left-4 text-xs text-muted-foreground">
            Mô hình mô phỏng · Tự động xoay
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10">Có thể bạn quan tâm</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {cars.filter((c) => c.slug !== car.slug).slice(0, 3).map((c) => (
            <Link
              key={c.slug}
              to="/xe-o-to/$model"
              params={{ model: c.slug }}
              className="rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 transition"
            >
              <img src={c.image} alt={c.name} className="w-full aspect-[16/10] object-cover" loading="lazy" />
              <div className="p-5">
                <h3 className="font-bold text-lg">{c.name}</h3>
                <p className="text-sm text-muted-foreground">{c.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}