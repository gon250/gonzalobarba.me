import { FormEvent, useState } from "react";
import ExvaperLayout, { useExvaperLanguage } from "../../components/exvaper/layout";
import { content } from "../../components/exvaper/content";

const inputClass =
  "w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100";

export default function ExvaperSupport() {
  const lang = useExvaperLanguage();
  const t = content[lang].support;
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/exvaper-support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error();
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <ExvaperLayout lang={lang} title={t.title}>
      <h2 className="text-2xl font-semibold mb-3">{t.heading}</h2>
      <p className="mb-10 text-base text-gray-700 dark:text-gray-300">{t.intro}</p>

      <section className="mb-14 space-y-3">
        <h3 className="text-xl font-semibold mb-4">{t.faqTitle}</h3>
        {t.faq.map(([question, answer]) => (
          <details key={question} className="rounded-lg border border-gray-200 dark:border-gray-700 px-4 py-3">
            <summary className="cursor-pointer font-semibold">{question}</summary>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{answer}</p>
          </details>
        ))}
      </section>

      <section id="contact">
        <h3 className="text-xl font-semibold mb-6">{t.formTitle}</h3>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Honeypot for bots, hidden from people and screen readers. */}
          <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2">{t.form.name}</label>
            <input id="name" name="name" type="text" required minLength={2} autoComplete="name" className={inputClass} />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">{t.form.email}</label>
            <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
          </div>
          <div>
            <label htmlFor="topic" className="block text-sm font-semibold mb-2">{t.form.topic}</label>
            <select id="topic" name="topic" className={inputClass} defaultValue="purchase">
              {Object.entries(t.form.topics).map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-2">{t.form.message}</label>
            <textarea id="message" name="message" rows={5} required minLength={10} maxLength={5000} className={inputClass} />
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">{t.form.privacyNote}</p>
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full lg:w-auto px-6 py-2 font-semibold rounded-md bg-gray-900 text-white hover:bg-gray-700 disabled:opacity-50 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-300"
          >
            {status === "loading" ? t.form.sending : t.form.send}
          </button>
          {status === "success" && (
            <p className="text-green-600 dark:text-green-400" role="status" aria-live="polite">{t.form.success}</p>
          )}
          {status === "error" && (
            <p className="text-red-600 dark:text-red-400" role="alert" aria-live="assertive">{t.form.error}</p>
          )}
        </form>
      </section>
    </ExvaperLayout>
  );
}
