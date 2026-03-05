// Arquivo principal de rotas e estrutura do site.
import { useEffect, useState } from "react";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import { useLanguage } from "./i18n/LanguageContext";
import HomePage from "./pages/HomePage";
import SobrePage from "./pages/SobrePage";
import ProdutosPage from "./pages/ProdutosPage";
import ContactoPage from "./pages/ContactoPage";

function App() {
  const { language, setLanguage, supportedLanguages, t } = useLanguage();
  // Estado que controla abertura do menu em telas menores.
  const [menuAberto, setMenuAberto] = useState(false);
  // Captura a rota atual para fechar menu após navegação.
  const location = useLocation();

  const menuLinks = [
    { to: "/", label: t("app.menu.home") },
    { to: "/sobre", label: t("app.menu.about") },
    { to: "/produtos", label: t("app.menu.products") },
    { to: "/contacto", label: t("app.menu.contact") },
  ];

  // Fecha o menu mobile quando o utilizador muda de página.
  useEffect(() => {
    setMenuAberto(false);
  }, [location.pathname]);

  return (
    <div className="site-wrapper">
      {/* Cabeçalho fixo com a identidade da empresa e links de navegação. */}
      <header className="topbar">
        <div className="topbar-head">
          <div className="brand">
            {/* Espaço dedicado para o logotipo da marca. */}
            <div className="brand-logo-wrap" aria-hidden="true">
              <img
                className="brand-logo"
                src="/logo-toocki-food.jpg"
                onError={(evento) => {
                  // Faz fallback em cadeia para evitar logo quebrado.
                  const imagemAtual = evento.currentTarget.getAttribute("src");
                  if (imagemAtual === "/logo-toocki-food.jpg") {
                    evento.currentTarget.src = "/logo-toocki-food.png";
                    return;
                  }

                  if (imagemAtual === "/logo-toocki-food.png") {
                    evento.currentTarget.src = "/logo-toocki-food.svg";
                    return;
                  }

                  evento.currentTarget.onerror = null;
                }}
                alt=""
              />
            </div>

            <div className="brand-text">
              <p className="brand-kicker">{t("app.brandKicker")}</p>
              <h1>Toocki Food</h1>
            </div>
          </div>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuAberto}
            aria-controls="menu-principal"
            aria-label={menuAberto ? t("app.menu.close") : t("app.menu.open")}
            onClick={() => setMenuAberto((valorAtual) => !valorAtual)}
          >
            {/* Texto oculto para acessibilidade no botão hambúrguer. */}
            <span className="sr-only">
              {menuAberto ? t("app.menu.close") : t("app.menu.open")}
            </span>
            {/* Ícone hambúrguer com três linhas que animam para X. */}
            <span className="menu-toggle-icon" aria-hidden="true">
              <span className="menu-toggle-line"></span>
              <span className="menu-toggle-line"></span>
              <span className="menu-toggle-line"></span>
            </span>
          </button>
        </div>

        <nav
          id="menu-principal"
          className={menuAberto ? "menu menu-open" : "menu"}
          aria-label={t("app.menu.ariaLabel")}
        >
          {menuLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={() => setMenuAberto(false)}
              className={({ isActive }) =>
                isActive ? "menu-link active" : "menu-link"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="language-switch">
          <label className="language-label" htmlFor="language-select">
            {t("app.language.label")}
          </label>
          <select
            id="language-select"
            className="language-select"
            value={language}
            onChange={(evento) => setLanguage(evento.target.value)}
            aria-label={t("app.language.label")}
          >
            {supportedLanguages.map((codigo) => (
              <option key={codigo} value={codigo}>
                {t(`app.language.${codigo}`)}
              </option>
            ))}
          </select>
        </div>
      </header>

      {/* Área principal onde cada página é exibida conforme a rota. */}
      <main className="page-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/produtos" element={<ProdutosPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
      </main>

      {/* Rodapé com informações resumidas da marca. */}
      <footer className="footer">
        <p>{t("app.footer.line1")}</p>
        <p>
          Copyright {new Date().getFullYear()} - {t("app.footer.line2")}
        </p>
      </footer>
    </div>
  );
}

export default App;
