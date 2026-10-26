import Link from "next/link";
import styles from "./content-sections.module.css";

export function ContentSections({ sections }: { sections: { heading: string; paragraphs: string[]; links?: { title: string; href: string }[] }[] }) {
  return sections.map((section) => <section className={styles.section} key={section.heading}>
    <h2>{section.heading}</h2>
    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    {section.links && <ul className={styles.resources}>{section.links.map((link) => <li key={link.href}><Link href={link.href}>{link.title}</Link></li>)}</ul>}
  </section>);
}
