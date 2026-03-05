// Configuracao principal do Vite para o projeto React.
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Exporta a configuracao com o plugin React ativado.
export default defineConfig({
  plugins: [react()],
});
