// Página de catálogo com os produtos principais da empresa.
import produtos from "../data/produtos";
import { useLanguage } from "../i18n/LanguageContext";

function ProdutosPage() {
  const { t } = useLanguage();
  const produtosTraduzidos = t("products.items");
  const mapaProdutos = Object.fromEntries(
    produtosTraduzidos.map((produto) => [produto.id, produto]),
  );

  return (
    <section className="content-page reveal">
      <p className="section-tag">{t("products.sectionTag")}</p>
      <h2>{t("products.heading")}</h2>
      <p className="section-intro">{t("products.intro")}</p>

      <div className="product-grid">
        {produtos.map((produto) => {
          const produtoTraduzido = mapaProdutos[produto.id];
          if (!produtoTraduzido) {
            return null;
          }

          return (
            <article className="product-card" key={produto.id}>
              {produto.imagem ? (
                <img
                  className="product-image"
                  src={produto.imagem}
                  alt={produtoTraduzido.nome}
                  loading="lazy"
                />
              ) : null}
              <h3>{produtoTraduzido.nome}</h3>
              <p>{produtoTraduzido.descricao}</p>
              <p className="highlight">{produtoTraduzido.destaque}</p>
              <p className="packaging">{produtoTraduzido.pacote}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default ProdutosPage;
