import { createContext, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "toockifood_language";
const DEFAULT_LANGUAGE = "pt";
const SUPPORTED_LANGUAGES = ["pt", "en", "es"];

const translations = {
  pt: {
    app: {
      brandKicker: "PME Angolana",
      menu: {
        home: "Início",
        about: "Sobre",
        products: "Produtos",
        contact: "Contacto",
        ariaLabel: "Menu principal",
        open: "Abrir menu",
        close: "Fechar menu",
      },
      footer: {
        line1: "Toocki Food - Farinha e biscoito de massango para toda a família.",
        line2: "Todos os direitos reservados.",
      },
      language: {
        label: "Idioma",
        pt: "Português",
        en: "English",
        es: "Español",
      },
    },
    home: {
      sectionTag: "Alimento local, qualidade real",
      titleStart: "Toocki Food transforma o",
      titleHighlight: "massango",
      titleEnd: "em valor para a mesa.",
      description:
        "Somos uma PME dedicada à produção de farinha de massango e biscoitos de massango, com foco no sabor, na nutrição e na confiança.",
      galleryAria: "Imagens de massango",
      galleryImage1Alt: "Farinha de massango pronta para consumo",
      galleryImage2Alt: "Grãos de massango selecionados",
      ctaProducts: "Ver produtos",
      ctaCompany: "Conhecer a empresa",
      bannerAria: "Banner com imagens da produção",
      metricSpecialityLabel: "Especialidade",
      metricSpecialityTitle: "Farinha de Massango",
      metricSpecialityText: "Textura fina para papas, bolos e receitas tradicionais.",
      metricSpecialityImageAlt: "Imagem de farinha de massango",
      metricSnacksLabel: "Linha de snacks",
      metricSnacksTitle: "Biscoito de Massango",
      metricSnacksText: "Sabor caseiro com foco na qualidade e textura crocante.",
      metricSnacksImageAlt: "Imagem de biscoito de massango",
      metricCommitmentLabel: "Compromisso",
      metricCommitmentTitle: "Qualidade constante",
      metricCommitmentText: "Padrão de higiene e controlo em todas as etapas.",
      metricCommitmentImageAlt: "Imagem de controlo de qualidade",
      bannerImages: {
        nbm: "Imagem de produção Toocki Food",
        mnnk: "Imagem de produto Toocki Food",
        mnm: "Imagem de embalagem Toocki Food",
        kjk: "Imagem de linha de produção",
        wa0078: "Imagem de produto Toocki Food",
        wa0031: "Imagem de produto Toocki Food",
        wa0208: "Imagem de produto Toocki Food",
        wa0206: "Imagem de produto Toocki Food",
        farinha2: "Farinha de massango Toocki Food",
        farinha1: "Farinha de massango Toocki Food",
        bisoite: "Biscoito de massango Toocki Food",
      },
    },
    about: {
      sectionTag: "Quem somos",
      heading: "Uma PME focada na alimentação de base local",
      cards: [
        {
          title: "História",
          text: "A Toocki Food nasceu para valorizar o massango, um cereal importante para a alimentação da nossa comunidade. A empresa cresce com uma visão simples: produzir com qualidade e respeito pelo consumidor.",
        },
        {
          title: "Missão",
          text: "Oferecer farinha de massango e biscoito de massango com padrão seguro, sabor consistente e preço justo para o mercado local.",
        },
        {
          title: "Visão",
          text: "Tornar-se numa referência regional em produtos derivados de massango, fortalecendo a produção nacional e gerando emprego.",
        },
        {
          title: "Valores",
          text: "Transparência, higiene, responsabilidade social, melhoria contínua e parceria com produtores locais.",
        },
      ],
    },
    products: {
      sectionTag: "Linha Toocki Food",
      heading: "Produtos de massango para consumo diário",
      intro:
        "Cada produto é preparado com matéria-prima selecionada e controlo de qualidade em todas as etapas.",
      items: [
        {
          id: "farinha_premium",
          nome: "Farinha de Massango Premium",
          descricao:
            "Farinha fina e nutritiva para papas, bolos e receitas tradicionais com sabor autêntico.",
          destaque: "100% massango selecionado",
          pacote: "Embalagens de 1kg e 5kg",
        },
        {
          id: "biscoito_crocante",
          nome: "Biscoito de Massango Crocante",
          descricao:
            "Biscoito leve para pequeno-almoço e lanches, preparado com ingredientes locais.",
          destaque: "Sem corantes artificiais",
          pacote: "Pacotes de 150g e 300g",
        },
      ],
    },
    contact: {
      sectionTag: "Fale connosco",
      heading: "Estamos prontos para tratar do seu pedido",
      directTitle: "Contacto direto",
      phoneLabel: "Telefone",
      emailLabel: "Email",
      addressLabel: "Morada",
      scheduleLabel: "Horário",
      scheduleValue: "Segunda a Sexta-feira, 08:00 - 17:00",
      formTitle: "Pedido de informações",
      nameLabel: "Nome",
      namePlaceholder: "O seu nome",
      emailPlaceholder: "O seu email",
      messageLabel: "Mensagem",
      messagePlaceholder: "Escreva a sua mensagem",
      sendButton: "Enviar",
      successMessage: "Seu pedido foi enviado com sucesso.",
    },
  },
  en: {
    app: {
      brandKicker: "Angolan SME",
      menu: {
        home: "Home",
        about: "About",
        products: "Products",
        contact: "Contact",
        ariaLabel: "Main menu",
        open: "Open menu",
        close: "Close menu",
      },
      footer: {
        line1: "Toocki Food - Massango flour and biscuits for every family.",
        line2: "All rights reserved.",
      },
      language: {
        label: "Language",
        pt: "Português",
        en: "English",
        es: "Español",
      },
    },
    home: {
      sectionTag: "Local food, real quality",
      titleStart: "Toocki Food turns",
      titleHighlight: "massango",
      titleEnd: "into value for your table.",
      description:
        "We are an SME focused on producing massango flour and massango biscuits, with emphasis on taste, nutrition and trust.",
      galleryAria: "Massango images",
      galleryImage1Alt: "Massango flour ready for consumption",
      galleryImage2Alt: "Selected massango grains",
      ctaProducts: "View products",
      ctaCompany: "Know the company",
      bannerAria: "Production image banner",
      metricSpecialityLabel: "Specialty",
      metricSpecialityTitle: "Massango Flour",
      metricSpecialityText: "Fine texture for porridge, cakes and traditional recipes.",
      metricSpecialityImageAlt: "Massango flour image",
      metricSnacksLabel: "Snack line",
      metricSnacksTitle: "Massango Biscuit",
      metricSnacksText: "Homemade taste with focus on quality and crunchy texture.",
      metricSnacksImageAlt: "Massango biscuit image",
      metricCommitmentLabel: "Commitment",
      metricCommitmentTitle: "Consistent quality",
      metricCommitmentText: "Hygiene and quality control standards at every stage.",
      metricCommitmentImageAlt: "Quality control image",
      bannerImages: {
        nbm: "Toocki Food production image",
        mnnk: "Toocki Food product image",
        mnm: "Toocki Food packaging image",
        kjk: "Production line image",
        wa0078: "Toocki Food product image",
        wa0031: "Toocki Food product image",
        wa0208: "Toocki Food product image",
        wa0206: "Toocki Food product image",
        farinha2: "Toocki Food massango flour",
        farinha1: "Toocki Food massango flour",
        bisoite: "Toocki Food massango biscuit",
      },
    },
    about: {
      sectionTag: "Who we are",
      heading: "An SME focused on local-based nutrition",
      cards: [
        {
          title: "History",
          text: "Toocki Food was created to value massango, an important grain for our community's nutrition. The company grows with a simple vision: produce with quality and respect for the consumer.",
        },
        {
          title: "Mission",
          text: "Provide massango flour and massango biscuits with safe standards, consistent flavor and fair price for the local market.",
        },
        {
          title: "Vision",
          text: "Become a regional reference in massango-derived products, strengthening national production and creating jobs.",
        },
        {
          title: "Values",
          text: "Transparency, hygiene, social responsibility, continuous improvement and partnership with local producers.",
        },
      ],
    },
    products: {
      sectionTag: "Toocki Food Line",
      heading: "Massango products for daily consumption",
      intro:
        "Each product is prepared with selected raw material and quality control at every stage.",
      items: [
        {
          id: "farinha_premium",
          nome: "Premium Massango Flour",
          descricao:
            "Fine and nutritious flour for porridge, cakes and traditional recipes with authentic flavor.",
          destaque: "100% selected massango",
          pacote: "1kg and 5kg packages",
        },
        {
          id: "biscoito_crocante",
          nome: "Crunchy Massango Biscuit",
          descricao:
            "Light biscuit for breakfast and snacks, prepared with local ingredients.",
          destaque: "No artificial colorants",
          pacote: "150g and 300g packs",
        },
      ],
    },
    contact: {
      sectionTag: "Talk to us",
      heading: "We are ready to handle your request",
      directTitle: "Direct contact",
      phoneLabel: "Phone",
      emailLabel: "Email",
      addressLabel: "Address",
      scheduleLabel: "Hours",
      scheduleValue: "Monday to Friday, 08:00 - 17:00",
      formTitle: "Information request",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      messageLabel: "Message",
      messagePlaceholder: "Write your message",
      sendButton: "Send",
      successMessage: "Your request was sent successfully.",
    },
  },
  es: {
    app: {
      brandKicker: "PyME Angoleña",
      menu: {
        home: "Inicio",
        about: "Sobre",
        products: "Productos",
        contact: "Contacto",
        ariaLabel: "Menú principal",
        open: "Abrir menú",
        close: "Cerrar menú",
      },
      footer: {
        line1: "Toocki Food - Harina y galletas de massango para toda la familia.",
        line2: "Todos los derechos reservados.",
      },
      language: {
        label: "Idioma",
        pt: "Português",
        en: "English",
        es: "Español",
      },
    },
    home: {
      sectionTag: "Alimento local, calidad real",
      titleStart: "Toocki Food transforma el",
      titleHighlight: "massango",
      titleEnd: "en valor para la mesa.",
      description:
        "Somos una PyME dedicada a la producción de harina de massango y galletas de massango, con enfoque en sabor, nutrición y confianza.",
      galleryAria: "Imágenes de massango",
      galleryImage1Alt: "Harina de massango lista para consumo",
      galleryImage2Alt: "Granos de massango seleccionados",
      ctaProducts: "Ver productos",
      ctaCompany: "Conocer la empresa",
      bannerAria: "Banner con imágenes de la producción",
      metricSpecialityLabel: "Especialidad",
      metricSpecialityTitle: "Harina de Massango",
      metricSpecialityText: "Textura fina para papillas, pasteles y recetas tradicionales.",
      metricSpecialityImageAlt: "Imagen de harina de massango",
      metricSnacksLabel: "Línea de snacks",
      metricSnacksTitle: "Galleta de Massango",
      metricSnacksText: "Sabor casero con enfoque en calidad y textura crujiente.",
      metricSnacksImageAlt: "Imagen de galleta de massango",
      metricCommitmentLabel: "Compromiso",
      metricCommitmentTitle: "Calidad constante",
      metricCommitmentText: "Estándar de higiene y control en todas las etapas.",
      metricCommitmentImageAlt: "Imagen de control de calidad",
      bannerImages: {
        nbm: "Imagen de producción Toocki Food",
        mnnk: "Imagen de producto Toocki Food",
        mnm: "Imagen de empaque Toocki Food",
        kjk: "Imagen de línea de producción",
        wa0078: "Imagen de producto Toocki Food",
        wa0031: "Imagen de producto Toocki Food",
        wa0208: "Imagen de producto Toocki Food",
        wa0206: "Imagen de producto Toocki Food",
        farinha2: "Harina de massango Toocki Food",
        farinha1: "Harina de massango Toocki Food",
        bisoite: "Galleta de massango Toocki Food",
      },
    },
    about: {
      sectionTag: "Quiénes somos",
      heading: "Una PyME enfocada en la alimentación de base local",
      cards: [
        {
          title: "Historia",
          text: "Toocki Food nació para valorizar el massango, un cereal importante para la alimentación de nuestra comunidad. La empresa crece con una visión simple: producir con calidad y respeto por el consumidor.",
        },
        {
          title: "Misión",
          text: "Ofrecer harina de massango y galletas de massango con estándar seguro, sabor consistente y precio justo para el mercado local.",
        },
        {
          title: "Visión",
          text: "Convertirse en una referencia regional en productos derivados de massango, fortaleciendo la producción nacional y generando empleo.",
        },
        {
          title: "Valores",
          text: "Transparencia, higiene, responsabilidad social, mejora continua y alianza con productores locales.",
        },
      ],
    },
    products: {
      sectionTag: "Línea Toocki Food",
      heading: "Productos de massango para consumo diario",
      intro:
        "Cada producto se prepara con materia prima seleccionada y control de calidad en todas las etapas.",
      items: [
        {
          id: "farinha_premium",
          nome: "Harina de Massango Premium",
          descricao:
            "Harina fina y nutritiva para papillas, pasteles y recetas tradicionales con sabor auténtico.",
          destaque: "100% massango seleccionado",
          pacote: "Envases de 1kg y 5kg",
        },
        {
          id: "biscoito_crocante",
          nome: "Galleta de Massango Crujiente",
          descricao:
            "Galleta ligera para desayuno y meriendas, preparada con ingredientes locales.",
          destaque: "Sin colorantes artificiales",
          pacote: "Paquetes de 150g y 300g",
        },
      ],
    },
    contact: {
      sectionTag: "Hable con nosotros",
      heading: "Estamos listos para atender su pedido",
      directTitle: "Contacto directo",
      phoneLabel: "Teléfono",
      emailLabel: "Email",
      addressLabel: "Dirección",
      scheduleLabel: "Horario",
      scheduleValue: "Lunes a viernes, 08:00 - 17:00",
      formTitle: "Solicitud de información",
      nameLabel: "Nombre",
      namePlaceholder: "Su nombre",
      emailPlaceholder: "Su email",
      messageLabel: "Mensaje",
      messagePlaceholder: "Escriba su mensaje",
      sendButton: "Enviar",
      successMessage: "Su solicitud fue enviada con éxito.",
    },
  },
};

function getByPath(source, path) {
  return path
    .split(".")
    .reduce((current, part) => (current && part in current ? current[part] : undefined), source);
}

function detectLanguage() {
  if (typeof window === "undefined") {
    return DEFAULT_LANGUAGE;
  }

  const savedLanguage = window.localStorage.getItem(STORAGE_KEY);
  if (savedLanguage && SUPPORTED_LANGUAGES.includes(savedLanguage)) {
    return savedLanguage;
  }

  const browserLanguage = window.navigator.language?.slice(0, 2).toLowerCase();
  if (browserLanguage && SUPPORTED_LANGUAGES.includes(browserLanguage)) {
    return browserLanguage;
  }

  return DEFAULT_LANGUAGE;
}

const LanguageContext = createContext(null);

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(detectLanguage);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(() => {
    function t(path) {
      const currentValue = getByPath(translations[language], path);
      if (currentValue !== undefined) {
        return currentValue;
      }

      const fallbackValue = getByPath(translations[DEFAULT_LANGUAGE], path);
      return fallbackValue !== undefined ? fallbackValue : path;
    }

    return {
      language,
      setLanguage,
      supportedLanguages: SUPPORTED_LANGUAGES,
      t,
    };
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage deve ser usado dentro de LanguageProvider.");
  }

  return context;
}

export { LanguageProvider, useLanguage };
