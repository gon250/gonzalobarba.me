import Head from "next/head";
import Link from "next/link";
import { FormEvent, useState } from "react";

export default function MareasSanlucarSupport() {
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
      const response = await fetch("/api/mareas-support", {
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
        <title>Mareas Sanlúcar – Soporte</title>
      </Head>
      <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <section className="max-w-3xl mx-auto px-6 py-16 font-mono">
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to home
          </Link>
          <header className="mt-6 mb-10 space-y-4">
            <p className="text-4xl">🌊</p>
            <h1 className="text-3xl font-bold">Mareas Sanlúcar</h1>
            <p className="text-base text-gray-600 dark:text-gray-300">
              iOS app to check Sanlúcar de Barrameda tides in real time. Need help or have feedback? Reach out below.
            </p>
          </header>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full lg:w-auto px-6 py-2 font-semibold rounded-md bg-gray-900 text-white hover:bg-gray-700 disabled:opacity-50"
            >
              {status === "loading" ? "Enviando…" : "Enviar"}
            </button>

            {status === "success" && (
              <p className="text-green-600">¡Gracias! Te responderé pronto.</p>
            )}
            {status === "error" && (
              <p className="text-red-600">{errorMessage || "Ocurrió un error. Intenta de nuevo."}</p>
            )}
          </form>

          <section className="mt-14 space-y-4">
            <h2 className="text-2xl font-semibold">Privacy Policy</h2>
            <p className="text-base text-gray-600 dark:text-gray-300">
              Mareas Sanlúcar does not store any personal information. The app simply displays the current tide data
              for Sanlúcar de Barrameda and contains no offensive or sensitive content. Contact details shared via
              this form are only used to reply to your message.
            </p>
          </section>
        </section>
      </main>
    </>
  );
}
