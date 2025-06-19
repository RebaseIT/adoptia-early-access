import React, { useState, useEffect, useRef } from 'react';
import { Heart, Mail, Sparkles, Users, Shield, Star, Globe, Send, ChevronDown, CalendarCheck, Search, HeartHandshake, BarChart3 } from 'lucide-react';
import { saveEmail } from './utils/emailStorage';

type Language = 'es' | 'en';

interface Content {
  en: {
    nav: {
      language: string;
    };
    hero: {
      comingSoon: string;
      title: string;
      subtitle: string;
      description: string;
      emailPlaceholder: string;
      joinWaitlist: string;
      earlyAccess: string;
      meaningfulConnections: string;
    };
    features: {
      title: string;
      subtitle: string;
      aiMatching: {
        title: string;
        description: string;
      };
      personalityMatch: {
        title: string;
        description: string;
      };
      expertSupport: {
        title: string;
        description: string;
      };
    };
    testimonials: {
      title: string;
      petsManagement: {
        title: string;
        description: string;
      };
      adopterFinder: {
        title: string;
        description: string;
      };
      followUp: {
        title: string;
        description: string;
      };
      analytics: {
        title: string;
        description: string;
      };
    };
    contact: {
      title: string;
      email: string;
    };
    footer: {
      copyright: string;
    };
  };
  es: {
    nav: {
      language: string;
    };
    hero: {
      comingSoon: string;
      title: string;
      subtitle: string;
      description: string;
      emailPlaceholder: string;
      joinWaitlist: string;
      earlyAccess: string;
      meaningfulConnections: string;
    };
    features: {
      title: string;
      subtitle: string;
      aiMatching: {
        title: string;
        description: string;
      };
      personalityMatch: {
        title: string;
        description: string;
      };
      expertSupport: {
        title: string;
        description: string;
      };
    };
    testimonials: {
      title: string;
      petsManagement: {
        title: string;
        description: string;
      };
      adopterFinder: {
        title: string;
        description: string;
      };
      followUp: {
        title: string;
        description: string;
      };
      analytics: {
        title: string;
        description: string;
      };
    };
    contact: {
      title: string;
      email: string;
    };
    footer: {
      copyright: string;
    };
  };
}

const content: Content = {
  en: {
    nav: {
      language: 'Español'
    },
    hero: {
      comingSoon: 'Coming Soon',
      title: 'Find your perfect pet companion',
      subtitle: 'Be the first to experience the future of pet adoption',
      description: 'Adoptia is an AI-powered platform that helps you find your ideal pet match. We aim to create meaningful relationships between people and animals — because adoption should be about true connection.',
      emailPlaceholder: 'Enter your email address',
      joinWaitlist: 'Join the Waitlist',
      earlyAccess: 'Early subscribers will receive exclusive benefits',
      meaningfulConnections: 'Because some connections are meant to happen, be ready when they do'
    },
    features: {
      title: 'Revolutionizing pet adoption',
      subtitle: 'Discover how Adoptia makes finding your perfect companion effortless',
      aiMatching: {
        title: 'AI-Powered matching',
        description: 'Our advanced algorithm analyzes personality traits, lifestyle, and preferences to find your ideal pet companion.'
      },
      personalityMatch: {
        title: 'Personality compatibility',
        description: 'Match with pets based on emotional compatibility, ensuring a lasting and happy relationship for both you and your new friend.'
      },
      expertSupport: {
        title: 'Expert guidance',
        description: 'Get personalized support from pet adoption specialists throughout your journey to find the perfect match.'
      }
    },
    testimonials: {
      title: 'Empower your shelter',
      petsManagement: {
        title: 'Smart Interview Scheduling',
        description: 'Schedule interviews and visits with adopters through an automated calendar, saving time and improving the adoption experience.'
      },
      adopterFinder: {
        title: 'AI-Powered adopter matching',
        description: 'Our advanced algorithm connects your animals with the most compatible adopters, increasing successful placements by 40%.'
      },
      followUp: {
        title: 'Post-adoption follow-up',
        description: 'Automated follow-up system ensures successful transitions with check-ins, training resources, and ongoing support for new families.'
      },
      analytics: {
        title: 'Data-driven insights',
        description: 'Comprehensive analytics dashboard tracks adoption rates, success metrics, and operational efficiency to optimize your shelter\'s impact.'
      }
    },
    steps: {
      title: 'Adopt in 3 easy steps',
      step1: {
        title: 'Create your profile',
        description: 'Fill your profile with your lifestyle, ideal pet, preferences, and everything that helps us understand what you\'re looking for.'
      },
      step2: {
        title: 'Get recommendations',
        description: 'Our AI algorithm analyzes your information and shows you the best matches. Interact with our assistant to refine your search.'
      },
      step3: {
        title: 'Meet your new friend',
        description: 'Contact the shelter and set up an appointment to meet your future companion in person.'
      }
    },
    contact: {
      title: 'Have questions?',
      email: 'Contact us at hello@adoptia.app',
      loveToHear: 'We\'d love to hear from you!'
    },
    footer: {
      copyright: '2025 Adoptia. All rights reserved.'
    }
  },
  es: {
    nav: {
      language: 'English'
    },
    hero: {
      comingSoon: 'Muy Pronto',
      title: 'Encontrá tu compañero perfecto',
      subtitle: 'Descubrí una nueva forma de encontrar a tu compañero de vida.',
      description: 'Adoptia es una plataforma impulsada por inteligencia artificial que te ayuda a encontrar a tu compañero animal ideal. Nuestro objetivo es crear vínculos significativos entre personas y animales, porque la adopción debe basarse en una conexión auténtica.',
      emailPlaceholder: 'Ingresá tu email',
      joinWaitlist: 'Reservar mi lugar',
      earlyAccess: 'Los primeros suscriptores recibirán beneficios exclusivos',
      meaningfulConnections: 'Porque algunas conexiones están destinadas a suceder, estate listo cuando lleguen'
    },
    features: {
      title: 'Revolucionando la adopción de mascotas',
      subtitle: 'Descubrí cómo Adoptia hace que encontrar tu compañero perfecto sea fácil',
      aiMatching: {
        title: 'Matching por IA',
        description: 'Nuestro algoritmo avanzado analiza rasgos de personalidad, estilo de vida y preferencias para encontrar tu compañero ideal.'
      },
      personalityMatch: {
        title: 'Compatibilidad',
        description: 'Hacé match con mascotas basándote en compatibilidad emocional, asegurando una relación duradera y feliz para vos y tu nuevo amigo.'
      },
      expertSupport: {
        title: 'Guía experta',
        description: 'Obtené apoyo personalizado de especialistas en adopción de mascotas durante todo tu proceso para encontrar el match perfecto.'
      }
    },
    testimonials: {
      title: 'Potenciá tu refugio',
      petsManagement: {
        title: 'Gestión de Citas con Adoptantes',
        description: 'Coordiná entrevistas y visitas con adoptantes desde una agenda automatizada, optimizando tiempos y mejorando la experiencia de adopción.'
      },
      adopterFinder: {
        title: 'Matching de adoptantes por IA',
        description: 'Publicá los perfiles de tus animales en Adoptia y utilizá nuestra tecnología de compatibilidad avanzada para mejorar la tasa de adopciones exitosas en un 80%.'
      },
      followUp: {
        title: 'Seguimiento post-adopción',
        description: 'Supervisá cada adopción con nuestro sistema de seguimiento, que garantiza transiciones exitosas mediante check-ins, recursos y apoyo continuo para las nuevas familias.'
      },
      analytics: {
        title: 'Insights basados en datos',
        description: 'Accedé a un panel de análisis completo para monitorear adopciones, evaluar resultados y mejorar la gestión y el impacto de tu refugio.'
      }
    },
    steps: {
      title: 'Adoptá en 3 sencillos pasos',
      step1: {
        title: 'Creá tu perfil',
        description: 'Completá tu perfil con tu estilo de vida, mascota ideal, preferencias y todo lo que nos ayude a entender qué estás buscando.'
      },
      step2: {
        title: 'Recibí recomendaciones',
        description: 'Nuestro algoritmo de IA analiza tu información y te muestra las mejores coincidencias. Interactuá con nuestro asistente para refinar tu búsqueda.'
      },
      step3: {
        title: 'Conocé a tu nuevo amigo',
        description: 'Contactá al refugio y programá una cita para conocer a tu futuro compañero en persona.'
      }
    },
    contact: {
      title: '¿Tenés preguntas?',
      email: 'Escribinos a hola@rebaseit.tech',
      loveToHear: '¡Nos encantaría saber de vos!'
    },
    footer: {
      copyright: '2025 Adoptia. Todos los derechos reservados.'
    }
  }
};

function App() {
  const [language, setLanguage] = useState<Language>('es');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  const sectionRefs = {
    hero: useRef<HTMLElement>(null),
    features: useRef<HTMLElement>(null),
    steps: useRef<HTMLElement>(null),
    testimonials: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null)
  };

  const t = content[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    try {
      const result = await saveEmail(email, language);
      setIsSubmitting(false);
      
      if (result.success) {
        setIsSubmitted(true);
        setEmail('');
        
        // Reset success message after 3 seconds
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        // Handle error - you might want to show an error message
        console.error('Failed to save email');
      }
    } catch (error) {
      setIsSubmitting(false);
      console.error('Error submitting email:', error);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px'
      }
    );

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const isVisible = (sectionId: string) => visibleSections.has(sectionId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-800">Adoptia</span>
          </div>
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-200 shadow-sm"
          >
            <Globe className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">{t.nav.language}</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        ref={sectionRefs.hero}
        id="hero"
        className={`relative min-h-screen flex items-center justify-center px-6 py-20 transition-all duration-1000 ${
          isVisible('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-red-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-8 animate-bounce">
            <Sparkles className="w-4 h-4" />
            <span>{t.hero.comingSoon}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
            {t.hero.title}
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>

          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>

          {/* Email Form */}
          <div className="max-w-lg mx-auto mb-8">
            {isSubmitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-full flex items-center justify-center space-x-2">
                <Heart className="w-6 h-6 fill-current" />
                <span className="font-medium">Welcome to the Adoptia family!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-center justify-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.hero.emailPlaceholder}
                  className="w-full sm:flex-1 px-8 py-5 rounded-full border-2 border-gray-200 focus:border-red-400 focus:ring-4 focus:ring-red-100 outline-none transition-all duration-200 text-lg max-w-sm"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-10 py-5 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg whitespace-nowrap flex-shrink-0"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send className="w-6 h-6" />
                      <span>{t.hero.joinWaitlist}</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Urgency Elements */}
          <div className="flex items-center justify-center text-base text-gray-700 italic">
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-red-500 fill-current" />
              <span>{t.hero.meaningfulConnections}</span>
            </div>
          </div>

        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* Features Section */}
      <section 
        ref={sectionRefs.features}
        id="features"
        className={`py-20 px-6 bg-white transition-all duration-1000 delay-200 ${
          isVisible('features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-800 delay-300 ${
            isVisible('features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              {t.features.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.features.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className={`bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-800 delay-400 transform hover:-translate-y-2 ${
              isVisible('features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t.features.aiMatching.title}</h3>
              <p className="text-gray-600 leading-relaxed">{t.features.aiMatching.description}</p>
            </div>

            <div className={`bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-800 delay-500 transform hover:-translate-y-2 ${
              isVisible('features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white fill-current" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t.features.personalityMatch.title}</h3>
              <p className="text-gray-600 leading-relaxed">{t.features.personalityMatch.description}</p>
            </div>

            <div className={`bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-800 delay-600 transform hover:-translate-y-2 ${
              isVisible('features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t.features.expertSupport.title}</h3>
              <p className="text-gray-600 leading-relaxed">{t.features.expertSupport.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Preview */}
      <section 
        ref={sectionRefs.steps}
        id="steps"
        className={`py-20 px-6 bg-white transition-all duration-1000 delay-200 ${
          isVisible('steps') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-800 delay-300 ${
            isVisible('steps') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              {t.steps.title}
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Steps Column */}
            <div className={`space-y-12 transition-all duration-1000 delay-400 ${
              isVisible('steps') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              {/* Step 1 */}
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{t.steps.step1.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t.steps.step1.description}
                  </p>
                </div>
              </div>

              {/* Connecting line */}
              <div className="ml-8 w-0.5 h-8 bg-gradient-to-b from-orange-300 to-red-300"></div>

              {/* Step 2 */}
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{t.steps.step2.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t.steps.step2.description}
                  </p>
                </div>
              </div>

              {/* Connecting line */}
              <div className="ml-8 w-0.5 h-8 bg-gradient-to-b from-orange-300 to-red-300"></div>

              {/* Step 3 */}
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{t.steps.step3.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t.steps.step3.description}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Image Column */}
            <div className={`lg:order-last transition-all duration-1000 delay-500 ${
              isVisible('steps') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <img
                src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Happy person with adopted dog"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section 
        ref={sectionRefs.testimonials}
        id="testimonials"
        className={`py-20 px-6 bg-gray-50 transition-all duration-1000 delay-200 ${
          isVisible('testimonials') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-800 text-center mb-16 transition-all duration-800 delay-300 ${
            isVisible('testimonials') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            {t.testimonials.title}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-800 delay-400 transform hover:-translate-y-2 ${
              isVisible('testimonials') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mb-6">
                <CalendarCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{t.testimonials.petsManagement.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{t.testimonials.petsManagement.description}</p>
            </div>

            <div className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-800 delay-500 transform hover:-translate-y-2 ${
              isVisible('testimonials') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mb-6">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{t.testimonials.adopterFinder.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{t.testimonials.adopterFinder.description}</p>
            </div>

            <div className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-800 delay-600 transform hover:-translate-y-2 ${
              isVisible('testimonials') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
                <HeartHandshake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{t.testimonials.followUp.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{t.testimonials.followUp.description}</p>
            </div>

            <div className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-800 delay-700 transform hover:-translate-y-2 ${
              isVisible('testimonials') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{t.testimonials.analytics.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{t.testimonials.analytics.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        ref={sectionRefs.contact}
        id="contact"
        className={`py-20 px-6 bg-gradient-to-r from-red-50 to-orange-50 transition-all duration-1000 delay-200 ${
          isVisible('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className={`max-w-2xl mx-auto text-center transition-all duration-800 delay-300 ${
          isVisible('contact') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{t.contact.title}</h2>
          <p className="text-lg text-gray-600 mb-8">
            {t.contact.email}
          </p>
          <div className="flex items-center justify-center space-x-2 text-red-600">
            <Mail className="w-5 h-5" />
            <span className="font-medium">{t.contact.loveToHear}</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-xl font-bold">Adoptia</span>
          </div>
          <p className="text-gray-400 text-sm">{t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
