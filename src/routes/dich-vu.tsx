import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import service from "@/assets/service.jpg";
import { Wrench, ShieldCheck, Headphones, Truck } from "lucide-react";

const services = [
  { icon: Wrench, title: "Bảo dưỡng định kỳ", desc: "Quy trình bảo dưỡng chuẩn 5 sao tại hệ thống xưởng dịch vụ chính hãng." },
  { icon: ShieldCheck, title: "Bảo hành mở rộng", desc: "Bảo hành xe lên đến 10 năm và pin trọn đời theo chính sách VinFast." },
  { icon: Headphones, title: "Hỗ trợ 24/7", desc: "Tổng đài hỗ trợ kỹ thuật và cứu hộ hoạt động xuyên suốt 24 giờ." },
  { icon: Truck, title: "Cứu hộ tận nơi", desc: "Dịch vụ cứu hộ miễn phí trong bán kính 100km tại các thành phố lớn." },
];

export const Route = createFileRoute("/dich-vu")({
  head: () => ({
    meta: [
      { title: "Dịch vụ sau bán hàng — VinFast" },
      { name: "description", content: "Hệ sinh thái dịch vụ trọn đời cùng VinFast: bảo dưỡng, bảo hành, cứu hộ và hỗ trợ kỹ thuật 24/7." },
      { property: "og:image", content: service },
    ],
  }),
  component: () => (
    <Layout>
      <section className="relative py-32 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(10,15,30,0.88), rgba(10,15,30,0.65)), url(${service})` }}>
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold">Dịch vụ <span className="text-gradient-primary">trọn đời</span></h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">Yên tâm trên mọi cung đường với hệ sinh thái dịch vụ chính hãng từ VinFast.</p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-6">
        {services.map((s) => (
          <div key={s.title} className="p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition flex gap-5">
            <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow shrink-0"><s.icon size={24} /></div>
            <div><h3 className="text-xl font-bold">{s.title}</h3><p className="mt-2 text-muted-foreground">{s.desc}</p></div>
          </div>
        ))}
      </section>
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="rounded-3xl bg-gradient-primary p-12 text-center shadow-glow">
          <h2 className="text-3xl md:text-4xl font-bold">Cần hỗ trợ ngay?</h2>
          <p className="mt-3 text-primary-foreground/90">Hotline 1900 23 23 89 — phục vụ 24/7</p>
          <Link to="/lien-he" className="inline-block mt-6 rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-foreground hover:scale-105 transition-transform">Liên hệ ngay</Link>
        </div>
      </section>
    </Layout>
  ),
});
