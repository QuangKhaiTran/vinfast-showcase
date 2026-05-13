import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/ve-chung-toi")({
  head: () => ({
    meta: [
      { title: "Về VinFast — Câu chuyện thương hiệu" },
      { name: "description", content: "VinFast là hãng xe điện toàn cầu của người Việt với sứ mệnh kiến tạo tương lai di chuyển xanh và thông minh." },
    ],
  }),
  component: () => (
    <Layout>
      <section className="bg-gradient-hero py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold">Về <span className="text-gradient-primary">VinFast</span></h1>
          <p className="mt-6 text-xl text-muted-foreground">Mạnh mẽ. Sáng tạo. Trách nhiệm. Ba giá trị cốt lõi định hình hành trình kiến tạo tương lai di chuyển bền vững của VinFast.</p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-lg text-muted-foreground leading-relaxed">Thành lập năm 2017, VinFast nhanh chóng trở thành hãng xe Việt Nam đầu tiên gia nhập thị trường xe điện toàn cầu. Với chiến lược tập trung 100% vào xe thuần điện, VinFast đã có mặt tại hơn 50 thị trường trên thế giới.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[{ v: "2017", l: "Năm thành lập" },{ v: "120+", l: "Showroom toàn quốc" },{ v: "50+", l: "Thị trường quốc tế" }].map((s) => (
            <div key={s.l} className="p-8 rounded-2xl bg-card border border-border text-center">
              <div className="text-4xl font-bold text-gradient-primary">{s.v}</div>
              <div className="text-sm text-muted-foreground mt-2">{s.l}</div>
            </div>
          ))}
        </div>
        <h2 className="text-3xl font-bold mt-16 mb-4">Sứ mệnh</h2>
        <p className="text-muted-foreground leading-relaxed">Tạo ra cuộc cách mạng xe điện trên quy mô toàn cầu, đưa di chuyển xanh đến gần hơn với mọi người, mọi nhà.</p>
      </section>
    </Layout>
  ),
});
