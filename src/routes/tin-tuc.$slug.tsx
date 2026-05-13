import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { getNews, news } from "@/data/news";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/tin-tuc/$slug")({
  loader: ({ params }) => {
    const item = getNews(params.slug);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.item.title} — VinFast` },
      { name: "description", content: loaderData?.item.excerpt ?? "" },
      { property: "og:image", content: loaderData?.item.image ?? "" },
    ],
  }),
  notFoundComponent: () => (
    <Layout><div className="max-w-4xl mx-auto px-6 py-32 text-center"><h1 className="text-4xl font-bold">Không tìm thấy bài viết</h1><Link to="/tin-tuc" className="text-primary mt-4 inline-block">← Tất cả tin tức</Link></div></Layout>
  ),
  errorComponent: ({ error }) => (
    <Layout><div className="max-w-4xl mx-auto px-6 py-32 text-center">{error.message}</div></Layout>
  ),
  component: NewsDetail,
});

function NewsDetail() {
  const { item } = Route.useLoaderData();
  const others = news.filter((n) => n.slug !== item.slug).slice(0, 2);
  return (
    <Layout>
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/tin-tuc" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"><ArrowLeft size={16} /> Tất cả tin tức</Link>
        <div className="text-xs text-primary font-semibold tracking-widest uppercase mt-8">{item.date}</div>
        <h1 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">{item.title}</h1>
        <img src={item.image} alt={item.title} className="w-full aspect-[16/9] object-cover rounded-3xl mt-10" />
        <div className="mt-10 space-y-6 text-lg text-muted-foreground leading-relaxed">
          {item.content.map((p, i) => (<p key={i}>{p}</p>))}
        </div>
      </article>
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold mb-8">Bài viết khác</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {others.map((n) => (
            <Link key={n.slug} to="/tin-tuc/$slug" params={{ slug: n.slug }} className="rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/40 transition">
              <img src={n.image} alt={n.title} className="w-full aspect-[16/9] object-cover" loading="lazy" />
              <div className="p-5"><div className="text-xs text-muted-foreground">{n.date}</div><h3 className="font-bold mt-1">{n.title}</h3></div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
