import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { cars } from "@/data/cars";

export const Route = createFileRoute("/xe-may-dien")({
  head: () => ({
    meta: [
      { title: "Xe máy điện VinFast — Thông minh & Bền bỉ" },
      { name: "description", content: "Dải xe máy điện VinFast với pin LFP an toàn, quãng đường ấn tượng và công nghệ kết nối thông minh." },
    ],
  }),
  component: () => {
    const bikes = cars.filter((c) => c.category === "Xe máy điện");
    return (
      <Layout>
        <section className="bg-gradient-hero py-24">
          <div className="max-w-7xl mx-auto px-6">
            <span className="text-primary text-xs font-semibold tracking-widest uppercase">Xe máy điện</span>
            <h1 className="text-5xl md:text-7xl font-bold mt-4">Di chuyển <span className="text-gradient-primary">xanh</span> mỗi ngày</h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">Xe máy điện VinFast — thiết kế hiện đại, vận hành êm ái, không phát thải.</p>
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-8">
          {bikes.map((b) => (
            <Link key={b.slug} to="/lien-he" className="rounded-3xl bg-card border border-border overflow-hidden group hover:border-primary/40 transition">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={b.image} alt={b.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold">{b.name}</h2>
                <p className="text-muted-foreground mt-2">{b.tagline}</p>
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div><div className="text-lg font-bold">{b.range}</div><div className="text-xs text-muted-foreground">Quãng đường</div></div>
                  <div><div className="text-lg font-bold">{b.power}</div><div className="text-xs text-muted-foreground">Công suất</div></div>
                  <div><div className="text-lg font-bold text-primary">{b.price}</div><div className="text-xs text-muted-foreground">Giá từ</div></div>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </Layout>
    );
  },
});
