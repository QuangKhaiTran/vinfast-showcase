import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Car3D } from "@/components/site/Car3D";
import { cars } from "@/data/cars";
import { ArrowRight, Battery, Zap, Shield, Gauge } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VinFast — Mạnh mẽ. Sáng tạo. Trách nhiệm." },
      {
        name: "description",
        content:
          "Khám phá dải xe điện VinFast: SUV thông minh, xe đô thị mini và xe máy điện. Đặt lái thử và sở hữu xe điện ngay hôm nay.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[92vh] overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 opacity-30">
          <Car3D />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-32 grid lg:grid-cols-2 gap-12 items-center">
          <div className="z-10 animate-fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold tracking-widest uppercase">
              Tương lai di chuyển
            </span>
            <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05]">
              Vận hành <span className="text-gradient-primary">tương lai</span>
              <br />
              bằng xe điện Việt
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Dải sản phẩm xe điện đa dạng từ mini đô thị đến SUV cao cấp. Công nghệ
              thông minh, vận hành mạnh mẽ, không phát thải.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/xe-o-to"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform"
              >
                Khám phá xe ô tô <ArrowRight size={18} />
              </Link>
              <Link
                to="/lien-he"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold hover:bg-secondary transition-colors"
              >
                Đặt lái thử
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                { v: "468", u: "km / lần sạc" },
                { v: "5.5s", u: "0–100 km/h" },
                { v: "10", u: "năm bảo hành" },
              ].map((s) => (
                <div key={s.u}>
                  <div className="text-3xl font-bold text-gradient-primary">{s.v}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.u}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[500px] hidden lg:block">
            <Car3D />
          </div>
        </div>
      </section>

      {/* Models */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-wrap items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-primary text-xs font-semibold tracking-widest uppercase">
              Sản phẩm nổi bật
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">Khám phá dải xe</h2>
          </div>
          <Link to="/xe-o-to" className="text-sm text-primary hover:underline">
            Xem tất cả →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.slice(0, 3).map((car) => (
            <Link
              key={car.slug}
              to="/xe-o-to/$model"
              params={{ model: car.slug }}
              className="group rounded-3xl bg-card border border-border overflow-hidden hover:border-primary/50 hover:shadow-glow transition-all"
            >
              <div className="aspect-[16/10] overflow-hidden bg-gradient-hero">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">{car.name}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-secondary">
                    {car.category}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{car.tagline}</p>
                <div className="flex items-center justify-between mt-6">
                  <span className="text-primary font-semibold">{car.price}</span>
                  <ArrowRight
                    size={20}
                    className="text-primary group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-card/30 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-4xl md:text-5xl font-bold text-center max-w-3xl mx-auto">
            Công nghệ <span className="text-gradient-primary">tiên phong</span> trong từng chi tiết
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { icon: Battery, t: "Pin LFP an toàn", d: "Công nghệ pin Lithium-iron-phosphate bền bỉ, an toàn hàng đầu." },
              { icon: Zap, t: "Sạc siêu nhanh", d: "Sạc 10-70% chỉ trong 24 phút tại trạm sạc DC." },
              { icon: Shield, t: "5 sao an toàn", d: "Đạt chuẩn an toàn hàng đầu Euro NCAP & ASEAN NCAP." },
              { icon: Gauge, t: "Hiệu suất cao", d: "Mô-men xoắn cực đại tức thì, tăng tốc mượt mà." },
            ].map((f) => (
              <div
                key={f.t}
                className="p-6 rounded-2xl bg-background border border-border hover:border-primary/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                  <f.icon size={24} />
                </div>
                <h3 className="font-semibold text-lg mt-4">{f.t}</h3>
                <p className="text-sm text-muted-foreground mt-2">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-32 bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(10,15,30,0.85), rgba(10,15,30,0.7)), url(${heroBg})` }}
      >
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-6xl font-bold">
            Sẵn sàng cho hành trình mới?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Đặt lịch lái thử miễn phí hoặc tham khảo ưu đãi giới hạn từ VinFast.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              to="/lien-he"
              className="rounded-full bg-gradient-primary px-8 py-4 font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform"
            >
              Đặt lái thử ngay
            </Link>
            <Link
              to="/dai-ly"
              className="rounded-full border border-border bg-background/50 backdrop-blur px-8 py-4 font-semibold hover:bg-secondary transition"
            >
              Tìm đại lý gần bạn
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}