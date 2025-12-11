import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Initialize language from localStorage
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language') as Language;
      if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es')) {
        setLanguageState(savedLanguage);
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return the key if translation is not found
      }
    }

    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations = {
  en: {
    header: {
      contact: 'Contact'
    },
    home: {
      title: 'Gonzalo Barba',
      description: 'Full Stack Engineer, front-end passionate and games enthusiast.',
      projects: {
        supahabits: {
          name: 'SupaHabits',
          description: 'Creating beneficial habits and finding solutions to common problems.',
          status: 'Active'
        },
        shareplaylist: {
          name: 'SharePlaylist',
          description: 'Create music playlists and invite friends to add their favorite tracks.',
          status: 'Active'
        },
        lluviaapp: {
          name: 'LluviaApp',
          description: 'Nature sounds generator for relaxation and focus.',
          status: 'Active'
        },
        poinpoin: {
          name: 'Poinpoin',
          description: 'Interactive planning poker tool for agile teams.',
          status: 'Discontinued'
        },
        mareas: {
          name: 'Mareas Sanlúcar',
          description: 'iOS app to view Sanlúcar de Barrameda tides in real time.',
          status: 'Active'
        },
        balanzia: {
          name: 'Balanzia',
          description: 'iOS app to calculate your body battery, bio age and more.',
          status: 'Active'
        }
      }
    },
    balanzia: {
      title: 'Balanzia',
      subtitle: 'Calculate your body battery, bio age and more with Balanzia.',
      backToHome: '← Back to home',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send',
        sending: 'Sending…',
        success: 'Thank you! I will get back to you soon.',
        error: 'An error occurred. Please try again.'
      },
      privacy: {
        title: 'Privacy Policy',
        intro: 'This privacy policy explains how Balanzia ("we", "us", "our") handles your data when you use the Balanzia mobile application (the "App").',
        respect: 'Balanzia is designed to respect your privacy. We collect and process only the minimum data needed to provide the core features of the App.',
        section1: {
          title: '1. Data we access',
          healthkit: {
            title: '1.1 Apple Health data (HealthKit)',
            intro: 'With your explicit permission, Balanzia reads certain data from Apple Health, such as:',
            items: [
              'Heart rate and heart rate variability (HRV)',
              'Sleep duration and sleep stages',
              'Workouts and activity (steps, calories, exercise minutes)',
              'VO2max and other cardio metrics'
            ],
            use: 'We use this information only to:',
            useItems: [
              'calculate metrics like biological age, body battery and recovery state, and',
              'show you insights and recommendations inside the App.'
            ],
            notDo: 'We do not:',
            notDoItems: [
              'write data back to Apple Health,',
              'share Apple Health data with third parties, or',
              'use Apple Health data for advertising or marketing.'
            ],
            onDevice: 'All processing of Apple Health data happens on your device.'
          },
          analytics: {
            title: '1.2 Usage analytics',
            intro: 'To understand how the App is used and improve it, we use a privacy‑focused analytics service, PostHog, hosted in the EU.',
            collect: 'PostHog may collect:',
            collectItems: [
              'app events (for example: which screens are visited, which features are used),',
              'basic technical information (device model, OS version, approximate region),',
              'a random identifier for your device/session.'
            ],
            notSend: 'We do not send the following to PostHog:',
            notSendItems: [
              'names, email addresses or contact details,',
              'Apple Health / HealthKit data,',
              'any medical or highly sensitive personal data.'
            ],
            limit: 'You can limit analytics collection by disabling tracking in your device settings (Limit Ad Tracking / App Tracking), or by not using the App.'
          }
        },
        section2: {
          title: '2. Legal basis',
          intro: 'If you are in the European Economic Area or the UK, we process:',
          items: [
            'Apple Health data only with your explicit consent, given when you grant HealthKit permissions.',
            'Usage analytics data based on our legitimate interest in understanding how the App is used and improving stability and features.'
          ],
          withdraw: 'You can withdraw HealthKit permissions at any time in Settings → Privacy & Security → Health → Balanzia on your device.'
        },
        section3: {
          title: '3. Data storage and retention',
          items: [
            'Apple Health data is stored by Apple in Apple Health on your device. Balanzia only reads it when needed and does not export it.',
            'Analytics data is stored by PostHog for as long as necessary for product analytics and then deleted or anonymized according to their retention policy.'
          ],
          noCloud: 'We do not create our own cloud database with your health data.'
        },
        section4: {
          title: '4. Children\'s privacy',
          content: 'Balanzia is not directed to children under 16. If you are a parent or guardian and believe that a child has used the App and provided data, please contact us so we can help you delete any related data.'
        },
        section5: {
          title: '5. Your rights',
          intro: 'Depending on your location, you may have rights over your personal data, including:',
          rights: [
            'access to the data we process about you,',
            'correction of inaccurate data,',
            'deletion of data where applicable,',
            'restriction or objection to certain processing,',
            'data portability.'
          ],
          exercise: 'Because we do not operate user accounts and do not store health data on our own servers, the main way to exercise your rights is:',
          exerciseItems: [
            'revoking HealthKit permissions in iOS settings, and',
            'uninstalling the App from your device.'
          ],
          contact: 'If you want to exercise any of your rights related to analytics data, contact us using the details below.'
        },
        section6: {
          title: '6. Changes to this policy',
          content: 'We may update this privacy policy from time to time. Any changes will be published on this page with an updated "Last updated" date.'
        }
      }
    },
    mareas: {
      title: 'Mareas Sanlúcar',
      subtitle: 'iOS app to check Sanlúcar de Barrameda tides in real time. Need help or have feedback? Reach out below.',
      backToHome: '← Back to home',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send',
        sending: 'Sending…',
        success: 'Thank you! I will get back to you soon.',
        error: 'Could not send form. Please try again later.'
      }
    }
  },
  es: {
    header: {
      contact: 'Contacto'
    },
    home: {
      title: 'Gonzalo Barba',
      description: 'Ingeniero Full Stack, apasionado del front-end y entusiasta de los videojuegos.',
      projects: {
        supahabits: {
          name: 'SupaHabits',
          description: 'Creando hábitos beneficiosos y encontrando soluciones a problemas comunes.',
          status: 'Activo'
        },
        shareplaylist: {
          name: 'SharePlaylist',
          description: 'Crea listas de reproducción musicales e invita a amigos a añadir sus canciones favoritas.',
          status: 'Activo'
        },
        lluviaapp: {
          name: 'LluviaApp',
          description: 'Generador de sonidos de la naturaleza para relajación y concentración.',
          status: 'Activo'
        },
        poinpoin: {
          name: 'Poinpoin',
          description: 'Herramienta interactiva de planning poker para equipos ágiles.',
          status: 'Discontinuado'
        },
        mareas: {
          name: 'Mareas Sanlúcar',
          description: 'App iOS para ver las mareas de Sanlúcar de Barrameda en tiempo real.',
          status: 'Activo'
        },
        balanzia: {
          name: 'Balanzia',
          description: 'App iOS para calcular tu batería corporal, edad biológica y más.',
          status: 'Activo'
        }
      }
    },
    balanzia: {
      title: 'Balanzia',
      subtitle: 'Calcula tu batería corporal, edad biológica y más con Balanzia.',
      backToHome: '← Volver al inicio',
      form: {
        name: 'Nombre',
        email: 'Correo electrónico',
        message: 'Mensaje',
        send: 'Enviar',
        sending: 'Enviando…',
        success: '¡Gracias! Te responderé pronto.',
        error: 'Ocurrió un error. Por favor, inténtalo de nuevo.'
      },
      privacy: {
        title: 'Política de Privacidad',
        intro: 'Esta política de privacidad explica cómo Balanzia ("nosotros", "nuestro") maneja tus datos cuando utilizas la aplicación móvil Balanzia (la "App").',
        respect: 'Balanzia está diseñada para respetar tu privacidad. Solo recopilamos y procesamos los datos mínimos necesarios para proporcionar las funciones principales de la App.',
        section1: {
          title: '1. Datos a los que accedemos',
          healthkit: {
            title: '1.1 Datos de Apple Health (HealthKit)',
            intro: 'Con tu permiso explícito, Balanzia lee ciertos datos de Apple Health, como:',
            items: [
              'Frecuencia cardíaca y variabilidad de la frecuencia cardíaca (HRV)',
              'Duración del sueño y fases del sueño',
              'Entrenamientos y actividad (pasos, calorías, minutos de ejercicio)',
              'VO2max y otras métricas cardio'
            ],
            use: 'Usamos esta información solo para:',
            useItems: [
              'calcular métricas como edad biológica, batería corporal y estado de recuperación, y',
              'mostrarte perspectivas y recomendaciones dentro de la App.'
            ],
            notDo: 'No:',
            notDoItems: [
              'escribimos datos de vuelta a Apple Health,',
              'compartimos datos de Apple Health con terceros, o',
              'usamos datos de Apple Health para publicidad o marketing.'
            ],
            onDevice: 'Todo el procesamiento de datos de Apple Health ocurre en tu dispositivo.'
          },
          analytics: {
            title: '1.2 Analíticas de uso',
            intro: 'Para entender cómo se usa la App y mejorarla, usamos un servicio de analíticas enfocado en la privacidad, PostHog, alojado en la UE.',
            collect: 'PostHog puede recopilar:',
            collectItems: [
              'eventos de la app (por ejemplo: qué pantallas se visitan, qué funciones se usan),',
              'información técnica básica (modelo de dispositivo, versión del SO, región aproximada),',
              'un identificador aleatorio para tu dispositivo/sesión.'
            ],
            notSend: 'No enviamos lo siguiente a PostHog:',
            notSendItems: [
              'nombres, direcciones de correo electrónico o detalles de contacto,',
              'datos de Apple Health / HealthKit,',
              'cualquier dato médico o altamente sensible.'
            ],
            limit: 'Puedes limitar la recopilación de analíticas deshabilitando el rastreo en la configuración de tu dispositivo (Limitar rastreo de anuncios / Rastreo de apps), o no usando la App.'
          }
        },
        section2: {
          title: '2. Base legal',
          intro: 'Si te encuentras en el Espacio Económico Europeo o el Reino Unido, procesamos:',
          items: [
            'Datos de Apple Health solo con tu consentimiento explícito, otorgado cuando concedes permisos de HealthKit.',
            'Datos de analíticas de uso basados en nuestro interés legítimo de entender cómo se usa la App y mejorar la estabilidad y funciones.'
          ],
          withdraw: 'Puedes retirar los permisos de HealthKit en cualquier momento en Ajustes → Privacidad y Seguridad → Salud → Balanzia en tu dispositivo.'
        },
        section3: {
          title: '3. Almacenamiento y retención de datos',
          items: [
            'Los datos de Apple Health son almacenados por Apple en Apple Health en tu dispositivo. Balanzia solo los lee cuando es necesario y no los exporta.',
            'Los datos de analíticas son almacenados por PostHog durante el tiempo necesario para analíticas de producto y luego eliminados o anonimizados según su política de retención.'
          ],
          noCloud: 'No creamos nuestra propia base de datos en la nube con tus datos de salud.'
        },
        section4: {
          title: '4. Privacidad de menores',
          content: 'Balanzia no está dirigida a menores de 16 años. Si eres padre o tutor y crees que un menor ha usado la App y proporcionado datos, por favor contáctanos para que podamos ayudarte a eliminar cualquier dato relacionado.'
        },
        section5: {
          title: '5. Tus derechos',
          intro: 'Dependiendo de tu ubicación, puedes tener derechos sobre tus datos personales, incluyendo:',
          rights: [
            'acceso a los datos que procesamos sobre ti,',
            'corrección de datos inexactos,',
            'eliminación de datos cuando sea aplicable,',
            'restricción u objeción a cierto procesamiento,',
            'portabilidad de datos.'
          ],
          exercise: 'Como no operamos cuentas de usuario y no almacenamos datos de salud en nuestros propios servidores, la forma principal de ejercer tus derechos es:',
          exerciseItems: [
            'revocando los permisos de HealthKit en la configuración de iOS, y',
            'desinstalando la App de tu dispositivo.'
          ],
          contact: 'Si deseas ejercer alguno de tus derechos relacionados con datos de analíticas, contáctanos usando los detalles a continuación.'
        },
        section6: {
          title: '6. Cambios a esta política',
          content: 'Podemos actualizar esta política de privacidad de vez en cuando. Cualquier cambio será publicado en esta página con una fecha actualizada de "Última actualización".'
        }
      }
    },
    mareas: {
      title: 'Mareas Sanlúcar',
      subtitle: 'App iOS para consultar las mareas de Sanlúcar de Barrameda en tiempo real. ¿Necesitas ayuda o tienes comentarios? Contáctanos a continuación.',
      backToHome: '← Volver al inicio',
      form: {
        name: 'Nombre',
        email: 'Correo electrónico',
        message: 'Mensaje',
        send: 'Enviar',
        sending: 'Enviando…',
        success: '¡Gracias! Te responderé pronto.',
        error: 'No se pudo enviar el formulario. Por favor, inténtalo más tarde.'
      }
    }
  }
};
