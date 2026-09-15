import Link from "next/link";
import { notFound } from "next/navigation";
import { CTA } from "@/components/site/CTA";
import { Breadcrumbs, FaqSection, JsonLd, articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/components/site/Seo";
import { blogArticles, getArticle } from "@/lib/blog-data";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return pageMetadata(article.title, article.description, `/blog/${article.slug}`);
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const crumbs = [{ name: "Início", href: "/" }, { name: "Blog", href: "/blog" }, { name: article.title, href: `/blog/${article.slug}` }];
  return <main><JsonLd id={`breadcrumb-${article.slug}`} data={breadcrumbJsonLd(crumbs)} /><JsonLd id={`article-${article.slug}`} data={articleJsonLd(article)} /><JsonLd id={`faq-${article.slug}`} data={faqJsonLd(article.faqs)} /><article className="section articlePage"><Breadcrumbs items={crumbs} /><p className="eyebrow">{article.category}</p><h1>{article.title}</h1><p className="lead">{article.summary}</p><p className="intentText">Intenção de busca: {article.intent}. Este guia apoia a página comercial, sem substituir a decisão de compra.</p>{article.sections.map((section)=><section className="card" key={section.title}><h2>{section.title}</h2>{section.paragraphs?.map((paragraph)=><p key={paragraph}>{paragraph}</p>)}{section.bullets ? <ul>{section.bullets.map((bullet)=><li key={bullet}>{bullet}</li>)}</ul> : null}</section>)}<section className="card"><h2>Próximo passo</h2><p>Se este assunto é relevante para sua loja, veja a página comercial relacionada e fale com vendas com o contexto certo.</p><div className="routeLinks"><Link className="button primary" href={`${article.commercialHref}?origem=blog-${article.slug}`}>{article.commercialLabel}</Link>{article.related.map((link)=><Link className="button secondary" href={`${link.href}?origem=blog-${article.slug}`} key={link.href}>{link.label}</Link>)}</div></section></article><FaqSection items={article.faqs} /><CTA label="Falar com vendas" source={`blog-${article.slug}`} /></main>;
}
