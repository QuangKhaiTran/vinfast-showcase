import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import charging from "@/assets/charging.jpg";
import { Zap, MapPin, Clock } from "lucide-react";

const stations = [
  { name: "Trạm sạc Vincom Bà Triệu", city: "Hà Nội", power: "150 kW DC", slots: 8 },
  { name: "Trạm sạc Landmark 81", city: "TP. HCM", power: "250 kW DC", slots: 12 },
  { name: "Trạm sạc Vinhomes Ocean Park", city: "Hà Nội", power: "120 kW DC", slots: 6 },
  { name: "Trạm sạc Vincom Đà Nẵng", city: "Đà Nẵng", power: "150 kW DC", slots: 8 },
  { name: "Trạm sạc Vinpearl Nha Trang", city: "Khánh Hòa", power: "120 kW DC", slots: 6 },
  { name: "Trạm sạc Vincom Cần Thơ", city: "Cần Thơ", power: "150 kW DC", slots: 8 },
];

export const Route = createFileRoute("/tram-sac")({
  head: () => ({
    meta: [
      { title: "Hệ thống trạm sạc V-Green — VinFast" },
      { name: "description", content: "Mạng lưới hơn 150.000 cổng sạc V-Green phủ khắp 63 tỉnh thành." },
      { property: "og:image", content: charging },
    ],
  }),
  component: () => (
    <Layout>
      <section className="relative py-32 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(10,15,30,0.85), rgba(10,15,30,0.6)), url(${charging})` }}>
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-primary text-xs font-semibold tracking-widest uppercase">V-Green</span>
          <h1 className="text-5xl md:text-7xl font-bold mt-3">Trạm sạc <span className="text-gradient-primary">phủ khắp</span><br />mọi nẻo đường</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">Mạng lưới sạc lớn nhất Việt Nam với hơn 150.000 cổng sạc, hiện diện tại 63 tỉnh thành.</p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[{ icon: Zap, v: "150.000+", l: "Cổng sạc toàn quốc" },{ icon: MapPin, v: "63/63", l: "Tỉnh thành phủ sóng" },{ icon: Clock, v: "24/7", l: "Vận hành liên tục" }].map((s) => (
            <div key={s.l} className="p-8 rounded-2xl bg-card border border-border">
              <s.icon className="text-primary" size={28} />
              <div className="text-4xl font-bold mt-4 text-gradient-primary">{s.v}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
        <h2 className="text-3xl font-bold mb-8">Trạm sạc nổi bật</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stations.map((s) => (
            <div key={s.name} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-bold text-lg leading-snug">{s.name}</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary shrink-0">{s.power}</span>
              </div>
              <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground"><MapPin size={14} /> {s.city}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.slots} cổng sạc khả dụng</div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  ),
});
