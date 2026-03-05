// Página de contacto para clientes e parceiros comerciais.
import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

function ContactoPage() {
  const { t } = useLanguage();
  const [pedidoEnviado, setPedidoEnviado] = useState(false);

  function handleSubmit(evento) {
    evento.preventDefault();
    setPedidoEnviado(true);
    evento.currentTarget.reset();
  }

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

        <form className="panel contact-form" onSubmit={handleSubmit}>
          <h3>{t("contact.formTitle")}</h3>
          <label htmlFor="nome">{t("contact.nameLabel")}</label>
          <input
            id="nome"
            name="nome"
            type="text"
            placeholder={t("contact.namePlaceholder")}
            onChange={() => setPedidoEnviado(false)}
          />

          <label htmlFor="email">{t("contact.emailLabel")}</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder={t("contact.emailPlaceholder")}
            onChange={() => setPedidoEnviado(false)}
          />

          <label htmlFor="mensagem">{t("contact.messageLabel")}</label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows="4"
            placeholder={t("contact.messagePlaceholder")}
            onChange={() => setPedidoEnviado(false)}
          />

          <button className="btn btn-primary" type="submit">
            {t("contact.sendButton")}
          </button>

          {pedidoEnviado ? (
            <p className="form-success" role="status" aria-live="polite">
              {t("contact.successMessage")}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

export default ContactoPage;
