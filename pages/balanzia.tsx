import Head from "next/head";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import Header from "../components/header";

export default function BalanziaSupport() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/balanzia-support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar el formulario. Inténtalo más tarde.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
      setStatus("error");
    }
  }

  return (
    <>
      <Head>
        <title>Balanzia – Support</title>
      </Head>
      <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Header />
        <section className="max-w-3xl mx-auto px-6 py-16 font-mono">
          <Link href="/" className="text-blue-600 hover:underline">
            {t('balanzia.backToHome')}
          </Link>
          <header className="mt-6 mb-10 space-y-4">
            <p className="text-4xl">🔋</p>
            <h1 className="text-3xl font-bold">{t('balanzia.title')}</h1>
            <p className="text-base text-gray-600 dark:text-gray-300">
              {t('balanzia.subtitle')}
            </p>
          </header>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                {t('balanzia.form.name')}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                {t('balanzia.form.email')}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                {t('balanzia.form.message')}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full lg:w-auto px-6 py-2 font-semibold rounded-md bg-gray-900 text-white hover:bg-gray-700 disabled:opacity-50 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-300"
            >
              {status === "loading" ? t('balanzia.form.sending') : t('balanzia.form.send')}
            </button>

            {status === "success" && (
              <p className="text-green-600 dark:text-green-400">{t('balanzia.form.success')}</p>
            )}
            {status === "error" && (
              <p className="text-red-600 dark:text-red-400">{errorMessage || t('balanzia.form.error')}</p>
            )}
          </form>

          <section className="mt-14 space-y-6">
            <h2 className="text-2xl font-semibold">{t('balanzia.privacy.title')}</h2>

            <p className="text-base text-gray-600 dark:text-gray-300">
              {t('balanzia.privacy.intro')}
            </p>
            
            <p className="text-base text-gray-600 dark:text-gray-300">
              {t('balanzia.privacy.respect')}
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">1. Data we access</h3>
              
              <div className="space-y-3">
                <h4 className="text-lg font-semibold">1.1 Apple Health data (HealthKit)</h4>
                <p className="text-base text-gray-600 dark:text-gray-300">
                  With your explicit permission, Balanzia reads certain data from Apple Health, such as:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 ml-4">
                  <li>Heart rate and heart rate variability (HRV)</li>
                  <li>Sleep duration and sleep stages</li>
                  <li>Workouts and activity (steps, calories, exercise minutes)</li>
                  <li>VO2max and other cardio metrics</li>
                </ul>
                <p className="text-base text-gray-600 dark:text-gray-300">
                  We use this information only to:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 ml-4">
                  <li>calculate metrics like biological age, body battery and recovery state, and</li>
                  <li>show you insights and recommendations inside the App.</li>
                </ul>
                <p className="text-base text-gray-600 dark:text-gray-300">
                  We do not:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 ml-4">
                  <li>write data back to Apple Health,</li>
                  <li>share Apple Health data with third parties, or</li>
                  <li>use Apple Health data for advertising or marketing.</li>
                </ul>
                <p className="text-base text-gray-600 dark:text-gray-300">
                  All processing of Apple Health data happens on your device.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-lg font-semibold">1.2 Usage analytics</h4>
                <p className="text-base text-gray-600 dark:text-gray-300">
                  To understand how the App is used and improve it, we use a privacy‑focused analytics service, PostHog, hosted in the EU.
                </p>
                <p className="text-base text-gray-600 dark:text-gray-300">
                  PostHog may collect:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 ml-4">
                  <li>app events (for example: which screens are visited, which features are used),</li>
                  <li>basic technical information (device model, OS version, approximate region),</li>
                  <li>a random identifier for your device/session.</li>
                </ul>
                <p className="text-base text-gray-600 dark:text-gray-300">
                  We do not send the following to PostHog:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 ml-4">
                  <li>names, email addresses or contact details,</li>
                  <li>Apple Health / HealthKit data,</li>
                  <li>any medical or highly sensitive personal data.</li>
                </ul>
                <p className="text-base text-gray-600 dark:text-gray-300">
                  You can limit analytics collection by disabling tracking in your device settings (Limit Ad Tracking / App Tracking), or by not using the App.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold">2. Legal basis</h3>
              <p className="text-base text-gray-600 dark:text-gray-300">
                If you are in the European Economic Area or the UK, we process:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 ml-4">
                <li>Apple Health data only with your explicit consent, given when you grant HealthKit permissions.</li>
                <li>Usage analytics data based on our legitimate interest in understanding how the App is used and improving stability and features.</li>
              </ul>
              <p className="text-base text-gray-600 dark:text-gray-300">
                You can withdraw HealthKit permissions at any time in Settings → Privacy & Security → Health → Balanzia on your device.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold">3. Data storage and retention</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 ml-4">
                <li>Apple Health data is stored by Apple in Apple Health on your device. Balanzia only reads it when needed and does not export it.</li>
                <li>Analytics data is stored by PostHog for as long as necessary for product analytics and then deleted or anonymized according to their retention policy.</li>
              </ul>
              <p className="text-base text-gray-600 dark:text-gray-300">
                We do not create our own cloud database with your health data.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold">4. Children's privacy</h3>
              <p className="text-base text-gray-600 dark:text-gray-300">
                Balanzia is not directed to children under 16. If you are a parent or guardian and believe that a child has used the App and provided data, please contact us so we can help you delete any related data.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold">5. Your rights</h3>
              <p className="text-base text-gray-600 dark:text-gray-300">
                Depending on your location, you may have rights over your personal data, including:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 ml-4">
                <li>access to the data we process about you,</li>
                <li>correction of inaccurate data,</li>
                <li>deletion of data where applicable,</li>
                <li>restriction or objection to certain processing,</li>
                <li>data portability.</li>
              </ul>
              <p className="text-base text-gray-600 dark:text-gray-300">
                Because we do not operate user accounts and do not store health data on our own servers, the main way to exercise your rights is:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 ml-4">
                <li>revoking HealthKit permissions in iOS settings, and</li>
                <li>uninstalling the App from your device.</li>
              </ul>
              <p className="text-base text-gray-600 dark:text-gray-300">
                If you want to exercise any of your rights related to analytics data, contact us using the details below.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold">6. Changes to this policy</h3>
              <p className="text-base text-gray-600 dark:text-gray-300">
                We may update this privacy policy from time to time. Any changes will be published on this page with an updated "Last updated" date.
              </p>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
