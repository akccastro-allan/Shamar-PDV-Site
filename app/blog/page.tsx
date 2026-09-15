import Link from "next/link";
import { PageHero } from "@/components/site/PageHero";
import { Breadcrumbs, JsonLd, breadcrumbJsonLd } from "@/components/site/Seo";
import { blogArticles } from "@/lib/blog-data";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Blog Shamar PDV: guias práticos para loja", "Conteúdo útil sobre PDV offline, migração, autopeças, backup, restauração e escolha entre Single e Network.", "/blog");

const crumbs = [{ name: "Início", href: "/" }, { name: "Blog", href: "/blog" }];
const groups = ["Operação", "Migração", "Estoque e produtos", "Segurança dos dados", "Escolha do PDV"];

export default function BlogPage(){return <main><JsonLd id="breadcrumb-blog" data={breadcrumbJsonLd(crumbs)} /><PageHero eyebrow="Blog" title="Guias práticos para escolher, migrar e operar um PDV." text="Conteúdo de apoio para reduzir risco antes de falar com vendas: offline, migração, cadastro de autopeças, backup e escolha entre Single e Network." cta="Falar com vendas" ctaHref="/contato?origem=blog"/><section className="section compactTop"><Breadcrumbs items={crumbs} /></section><section className="section grid cols3">{blogArticles.map((article)=><article className="card" key={article.slug}><span className="pill">{article.category}</span><h3>{article.title}</h3><p>{article.summary}</p><Link className="button secondary" href={`/blog/${article.slug}`}>Ler guia</Link></article>)}</section><section className="section"><p className="eyebrow">Temas</p><div className="featureList">{groups.map((group)=><div key={group}>{group}</div>)}</div></section></main>}
