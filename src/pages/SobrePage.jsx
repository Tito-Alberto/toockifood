// Página que apresenta a história e os valores da Toocki Food.
import { useLanguage } from "../i18n/LanguageContext";

function SobrePage() {
  const { t } = useLanguage();
  const cards = t("about.cards");

  return (
    <section className="content-page reveal">
      <p className="section-tag">{t("about.sectionTag")}</p>
      <h2>{t("about.heading")}</h2>

      <div className="grid-two">
        {cards.map((card) => (
          <article className="panel" key={card.title}>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SobrePage;
