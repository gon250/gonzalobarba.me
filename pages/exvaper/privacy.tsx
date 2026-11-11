import Link from "next/link";
import ExvaperLayout, { useExvaperLanguage } from "../../components/exvaper/layout";
import { content, UPDATED } from "../../components/exvaper/content";

export default function ExvaperPrivacy() {
  const lang = useExvaperLanguage();
  const t = content[lang].privacy;
  const contactHref = lang === "es" ? "/exvaper?lang=es#contact" : "/exvaper#contact";

  return (
    <ExvaperLayout lang={lang} title={t.title}>
      <h2 className="text-2xl font-semibold mb-6">{t.heading}</h2>

      <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-5 mb-10">
        <p className="font-semibold mb-2">{t.summaryTitle}</p>
        <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
          {t.summary.map((line) => <li key={line}>{line}</li>)}
        </ul>
      </div>

      <div className="space-y-8">
        {t.sections.map((section) => (
          <section key={section.title} className="space-y-3">
            <h3 className="text-xl font-semibold">{section.title}</h3>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph} className="text-base text-gray-600 dark:text-gray-300">{paragraph}</p>
            ))}
            {section.items && (
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 ml-4">
                {section.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            )}
            {section.after?.map((paragraph) => (
              <p key={paragraph} className="text-base text-gray-600 dark:text-gray-300">{paragraph}</p>
            ))}
          </section>
        ))}
      </div>

      <p className="mt-10 text-base">
        <Link href={contactHref} className="text-blue-600 hover:underline">
          {lang === "es" ? "Contactar →" : "Contact us →"}
        </Link>
      </p>
      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">{UPDATED[lang]}</p>
    </ExvaperLayout>
  );
}
