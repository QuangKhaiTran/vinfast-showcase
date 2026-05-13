import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { news } from "@/data/news";

export const Route = createFileRoute("/tin-tuc")({
  head: () => ({
    meta: [
      { title: "Tin tức VinFast — Cập nhật mới nhất" },
      { name: "description", content: "Tin tức và sự kiện mới nhất từ VinFast: ra mắt sản phẩm, ưu đãi và hành trình quốc tế." },
    ],
  }),
  component: () => (
    <Layout>
      <section className="bg-gradient-hero py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold">Tin tức & <span className="text-gradient-primary">Sự kiện</span></h1>
          <p className="mt-4 text-lg text-muted-foreground">Cập nhật những hành trình mới nhất của VinFast.</p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8">
        {news.map((n) => (
          <Link key={n.slug} to="/tin-tuc/$slug" params={{ slug: n.slug }} className="rounded-2xl bg-card border border-border overflow-hidden group hover:border-primary/40 transition">
            <img src={n.image} alt={n.title} className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            <div className="p-6">
              <div className="text-xs text-muted-foreground">{n.date}</div>
              <h2 className="text-xl font-bold mt-2 leading-snug">{n.title}</h2>
              <p className="text-sm text-muted-foreground mt-3">{n.excerpt}</p>
              <span className="text-primary text-sm font-semibold mt-4 inline-block">Đọc thêm →</span>
            </div>
          </Link>
        ))}
      </section>
    </Layout>
  ),
});
