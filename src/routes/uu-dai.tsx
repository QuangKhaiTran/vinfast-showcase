import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Tag, Calendar } from "lucide-react";

const offers = [
  { title: "Ưu đãi VF 9 tháng 5", discount: "Giảm 100 triệu", expires: "31/05/2026", desc: "Tặng kèm gói sạc 1 năm miễn phí và bảo dưỡng 3 lần đầu." },
  { title: "Ra mắt VF 8 phiên bản đặc biệt", discount: "Tặng pin trọn đời", expires: "30/06/2026", desc: "Áp dụng cho 500 khách hàng đầu tiên đặt cọc trong tháng." },
  { title: "Combo VF 3 + sạc tại nhà", discount: "Tặng bộ sạc 7 kW", expires: "30/05/2026", desc: "Lắp đặt miễn phí, hỗ trợ thủ tục và đăng kiểm." },
  { title: "Lái thử nhận quà", discount: "Quà tặng 2 triệu", expires: "Liên tục", desc: "Đăng ký lái thử bất kỳ mẫu xe nào để nhận voucher mua sắm." },
];

export const Route = createFileRoute("/uu-dai")({
  head: () => ({
    meta: [
      { title: "Ưu đãi & Khuyến mãi — VinFast" },
      { name: "description", content: "Cập nhật chương trình ưu đãi, khuyến mãi mới nhất khi mua xe điện VinFast: VF 3, VF 8, VF 9." },
    ],
  }),
  component: () => (
    <Layout>
      <section className="bg-gradient-hero py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold">Ưu đãi <span className="text-gradient-primary">đặc biệt</span></h1>
          <p className="mt-4 text-lg text-muted-foreground">Cơ hội sở hữu xe điện VinFast với mức ưu đãi tốt nhất.</p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-6">
        {offers.map((o) => (
          <div key={o.title} className="p-8 rounded-3xl bg-card border border-border hover:border-primary/40 transition relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-primary opacity-20 rounded-full blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold"><Tag size={12} /> {o.discount}</div>
              <h3 className="text-2xl font-bold mt-4">{o.title}</h3>
              <p className="text-muted-foreground mt-3">{o.desc}</p>
              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground"><Calendar size={14} /> Hết hạn: {o.expires}</div>
                <Link to="/lien-he" className="text-primary text-sm font-semibold hover:underline">Nhận ưu đãi →</Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  ),
});
