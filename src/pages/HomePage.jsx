// Página inicial com a proposta principal da Toocki Food.
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

const imagensBanner = [
  { ficheiro: "nbm.jpg", altKey: "home.bannerImages.nbm" },
  { ficheiro: "mnnk.jpg", altKey: "home.bannerImages.mnnk" },
  { ficheiro: "mnm.jpg", altKey: "home.bannerImages.mnm" },
  { ficheiro: "kjk.jpg", altKey: "home.bannerImages.kjk" },
  { ficheiro: "IMG-20250203-WA0078.jpg", altKey: "home.bannerImages.wa0078" },
  { ficheiro: "IMG-20250203-WA0031.jpg", altKey: "home.bannerImages.wa0031" },
  { ficheiro: "IMG-20241014-WA0208.jpg", altKey: "home.bannerImages.wa0208" },
  { ficheiro: "IMG-20241014-WA0206.jpg", altKey: "home.bannerImages.wa0206" },
  { ficheiro: "farinha de massango2.jpg", altKey: "home.bannerImages.farinha2" },
  { ficheiro: "farinha de massango1.jpg", altKey: "home.bannerImages.farinha1" },
  { ficheiro: "bisoite.jpeg", altKey: "home.bannerImages.bisoite" },
];

function HomePage() {
  const { t } = useLanguage();
  const [indiceBanner, setIndiceBanner] = useState(0);

  useEffect(() => {
    const temporizador = setInterval(() => {
      setIndiceBanner((indiceAtual) => {
        if (imagensBanner.length <= 1) {
          return indiceAtual;
        }

        let proximoIndice = Math.floor(Math.random() * imagensBanner.length);
        if (proximoIndice === indiceAtual) {
          proximoIndice = (proximoIndice + 1) % imagensBanner.length;
        }

        return proximoIndice;
      });
    }, 3000);

    return () => clearInterval(temporizador);
  }, []);

  const imagemBannerAtual = imagensBanner[indiceBanner];

  return (
    <div className="home-layout">
      <section className="hero reveal">
        <div className="hero-content">
          <p className="section-tag">{t("home.sectionTag")}</p>
          <h2>
            {t("home.titleStart")} <span>{t("home.titleHighlight")}</span>{" "}
            {t("home.titleEnd")}
          </h2>
          <p>{t("home.description")}</p>

          <div className="hero-gallery" aria-label={t("home.galleryAria")}>
            <img
              className="hero-gallery-image"
              src="/banner/massango.jpg"
              alt={t("home.galleryImage1Alt")}
              loading="lazy"
            />
            <img
              className="hero-gallery-image"
              src="/banner/massango0.jpg"
              alt={t("home.galleryImage2Alt")}
              loading="lazy"
            />
          </div>

          <div className="cta-row">
            <Link className="btn btn-primary" to="/produtos">
              {t("home.ctaProducts")}
            </Link>
            <Link className="btn btn-outline" to="/sobre">
              {t("home.ctaCompany")}
            </Link>
          </div>
        </div>

        <aside className="hero-card hero-card-banner">
          <div className="hero-banner" aria-label={t("home.bannerAria")}>
            <img
              key={imagemBannerAtual.ficheiro}
              className="hero-banner-image"
              src={encodeURI(`/banner/nani/${imagemBannerAtual.ficheiro}`)}
              alt={t(imagemBannerAtual.altKey)}
              loading="lazy"
            />
          </div>
        </aside>
      </section>

      {/* Bloco de indicadores para valorizar os diferenciais da empresa. */}
      <section className="hero-metrics reveal">
        <article className="metric-card">
          <img
            className="metric-image"
            src="/banner/farinha%20de%20massango.jpg"
            alt={t("home.metricSpecialityImageAlt")}
            loading="lazy"
          />
          <p className="metric-label">{t("home.metricSpecialityLabel")}</p>
          <h3>{t("home.metricSpecialityTitle")}</h3>
          <p>{t("home.metricSpecialityText")}</p>
        </article>

        <article className="metric-card">
          <img
            className="metric-image"
            src="/banner/nokia.jpg"
            alt={t("home.metricSnacksImageAlt")}
            loading="lazy"
          />
          <p className="metric-label">{t("home.metricSnacksLabel")}</p>
          <h3>{t("home.metricSnacksTitle")}</h3>
          <p>{t("home.metricSnacksText")}</p>
        </article>

        <article className="metric-card">
          <img
            className="metric-image"
            src="/banner/massano123.jpg"
            alt={t("home.metricCommitmentImageAlt")}
            loading="lazy"
          />
          <p className="metric-label">{t("home.metricCommitmentLabel")}</p>
          <h3>{t("home.metricCommitmentTitle")}</h3>
          <p>{t("home.metricCommitmentText")}</p>
        </article>
      </section>
    </div>
  );
}

export default HomePage;
