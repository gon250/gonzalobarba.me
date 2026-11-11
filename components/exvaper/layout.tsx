import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import Header from "../header";
import { useLanguage } from "../../contexts/LanguageContext";
import { APP_STORE_URL, content, Lang } from "./content";
import logo from "../../public/exvaper-logo.png";

/// Picks the language from ?lang=es|en (the App Store links each listing to its language), then the site setting.
export function useExvaperLanguage(): Lang {
  const router = useRouter();
  const { language, setLanguage } = useLanguage();
  const requested = router.query.lang;

  useEffect(() => {
    if ((requested === "es" || requested === "en") && requested !== language) {
      setLanguage(requested);
    }
  }, [requested, language, setLanguage]);

  return requested === "es" || requested === "en" ? requested : language;
}

export default function ExvaperLayout({ lang, title, children }: { lang: Lang; title: string; children: ReactNode }) {
  const t = content[lang];
  const query = lang === "es" ? "?lang=es" : "";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={t.tagline} />
        <meta name="apple-itunes-app" content="app-id=6833396669" />
      </Head>
      <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Header />
        <section className="max-w-3xl mx-auto px-6 py-16 font-mono">
          <Link href="/" className="text-blue-600 hover:underline">
            {t.backToHome}
          </Link>
          <header className="mt-6 mb-10 flex flex-col sm:flex-row sm:items-center gap-5">
            <Image src={logo} width={72} height={72} alt="Exvaper" className="rounded-2xl shadow-md" />
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">Exvaper</h1>
              <p className="text-base text-gray-600 dark:text-gray-300">{t.tagline}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                <Link href={APP_STORE_URL} className="text-emerald-600 dark:text-emerald-400 hover:underline">{t.download}</Link>
                <Link href={`/exvaper${query}`} className="text-blue-600 hover:underline">{t.supportLink}</Link>
                <Link href={`/exvaper/privacy${query}`} className="text-blue-600 hover:underline">{t.privacyLink}</Link>
              </div>
            </div>
          </header>
          {children}
        </section>
      </main>
    </>
  );
}
