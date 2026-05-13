import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/lien-he")({
  head: () => ({
    meta: [
      { title: "Liên hệ VinFast — Đặt lái thử & Tư vấn" },
      { name: "description", content: "Đăng ký lái thử, nhận tư vấn ưu đãi mua xe điện VinFast. Hotline 1900 23 23 89." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <section className="bg-gradient-hero py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold">Liên <span className="text-gradient-primary">hệ</span></h1>
          <p className="mt-4 text-lg text-muted-foreground">Đội ngũ VinFast luôn sẵn sàng hỗ trợ bạn.</p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {[
            { icon: Phone, label: "Hotline", value: "1900 23 23 89" },
            { icon: Mail, label: "Email", value: "support@vinfast.vn" },
            { icon: MapPin, label: "Trụ sở", value: "Khu Đình Vũ, Hải An, Hải Phòng" },
          ].map((c) => (
            <div key={c.label} className="p-6 rounded-2xl bg-card border border-border flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow shrink-0">
                <c.icon size={20} />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">{c.label}</div>
                <div className="text-lg font-semibold mt-1">{c.value}</div>
              </div>
            </div>
          ))}
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="lg:col-span-3 p-8 rounded-3xl bg-card border border-border space-y-5"
        >
          <h2 className="text-2xl font-bold">Đăng ký lái thử</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <input required placeholder="Họ và tên" className="bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-primary outline-none" />
            <input required type="tel" placeholder="Số điện thoại" className="bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-primary outline-none" />
          </div>
          <input type="email" placeholder="Email" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-primary outline-none" />
          <select className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-primary outline-none">
            <option>Mẫu xe quan tâm</option>
            <option>VF 9</option><option>VF 8</option><option>VF 3</option><option>Evo200</option>
          </select>
          <textarea rows={4} placeholder="Lời nhắn của bạn" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-primary outline-none" />
          <button className="rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold shadow-glow hover:scale-[1.02] transition-transform">Gửi đăng ký</button>
          {sent && <p className="text-sm text-primary">Cảm ơn bạn! Chúng tôi sẽ liên hệ trong vòng 24 giờ.</p>}
        </form>
      </section>
    </Layout>
  );
}
