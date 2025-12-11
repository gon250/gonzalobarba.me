import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useLanguage } from "../contexts/LanguageContext";
import profilePic from "../public/me-ios.jpg";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <header className="z-30 flex items-center w-full h-20 sm:h-24 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="container flex justify-between items-center px-6 mx-auto">
        <div className="flex justify-center items-center gap-2 sm:gap-3">
          <Image src={profilePic} width={40} height={40} alt="profile" className="rounded-full" />
          <span className="text-sm sm:text-md font-black text-gray-800 dark:text-white uppercase">
            Gonzalo Barba
          </span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
            className="px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm font-semibold rounded-md bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
            aria-label="Toggle language"
          >
            {language === 'en' ? 'ES' : 'EN'}
          </button>
          <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"></path>
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
            )}
          </button>
          <Link href="mailto:me@gonzalobarba.com" className="text-sm sm:text-base px-3 sm:px-6 py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
            {t('header.contact')}
          </Link>
        </div>
      </div>
    </header>
  );
}
