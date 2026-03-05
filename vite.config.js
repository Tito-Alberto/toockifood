// Configuracao principal do Vite para o projeto React.
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const githubPagesBase =
  isGithubActions && repositoryName ? `/${repositoryName}/` : "/";

// Exporta a configuracao com o plugin React ativado.
export default defineConfig({
  base: githubPagesBase,
  plugins: [react()],
});
