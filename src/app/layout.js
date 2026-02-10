import { Inter, Lexend } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-lexend",
  display: "swap",
});

export const metadata = {
  title: "Leadder — BPO Financeiro",
  description: "Leadder — BPO Financeiro. Sua gestão financeira descomplicada. Confiança, previsibilidade e tranquilidade para o seu negócio.",
  keywords: "BPO Financeiro, Gestão Financeira, Leadder, Contas a Pagar, Contas a Receber, Fluxo de Caixa",
  icons: {
    icon: "/LeadderLogo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${lexend.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
