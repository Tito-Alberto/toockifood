// Página de contacto para clientes e parceiros comerciais.
import { useLanguage } from "../i18n/LanguageContext";

function ContactoPage() {
  const { t } = useLanguage();

  return (
    <section className="content-page reveal">
      <p className="section-tag">{t("contact.sectionTag")}</p>
      <h2>{t("contact.heading")}</h2>

      <div className="grid-two">
        <article className="panel">
          <h3>{t("contact.directTitle")}</h3>
          <p>
            {t("contact.phoneLabel")}: +244 940 099 331
          </p>
          <p>
            {t("contact.emailLabel")}: toockifood01@gmail.com
          </p>
          <p>
            {t("contact.addressLabel")}: Lubango, Angola
          </p>
          <p>
            {t("contact.scheduleLabel")}: {t("contact.scheduleValue")}
          </p>
        </article>

        <form className="panel contact-form">
          <h3>{t("contact.formTitle")}</h3>
          <label htmlFor="nome">{t("contact.nameLabel")}</label>
          <input
            id="nome"
            name="nome"
            type="text"
            placeholder={t("contact.namePlaceholder")}
          />

          <label htmlFor="email">{t("contact.emailLabel")}</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder={t("contact.emailPlaceholder")}
          />

          <label htmlFor="mensagem">{t("contact.messageLabel")}</label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows="4"
            placeholder={t("contact.messagePlaceholder")}
          />

          <button className="btn btn-primary" type="button">
            {t("contact.sendButton")}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactoPage;
