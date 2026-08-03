import { JsonLd } from "@/lib/seo";
import type { FAQ } from "@/data/faqs";
import { Eyebrow } from "@/components/sections";

export function FAQSection({
  items,
  title = "Frequently asked questions",
  intro = "Clear answers to common questions about scheduling, service, and what to expect.",
}: {
  items: FAQ[];
  title?: string;
  intro?: string;
}) {
  return <section className="section faq-section"><div className="container faq-layout"><div className="faq-intro"><Eyebrow>Helpful answers</Eyebrow><h2>{title}</h2><p>{intro}</p></div><div className="faq-list">{items.map((item, index) => <details key={item.question} open={index === 0}><summary><span>{item.question}</span><i aria-hidden="true"/></summary><p>{item.answer}</p></details>)}</div></div><JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: items.map(item => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) }}/></section>;
}
