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
  description: "Sua gestão financeira descomplicada. BPO Financeiro de excelência para empresas que buscam crescimento com segurança.",
  keywords: "BPO Financeiro, Gestão Financeira, Leadder, Contas a Pagar, Contas a Receber, Fluxo de Caixa, Conciliação Bancária",
  metadataBase: new URL("https://www.leadder.com.br"),
  icons: {
    icon: "/LeadderLogo.png",
  },
  openGraph: {
    title: "Leadder — BPO Financeiro",
    description: "Sua gestão financeira descomplicada. BPO Financeiro de excelência para empresas que buscam crescimento com segurança.",
    url: "https://www.leadder.com.br",
    siteName: "Leadder",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leadder — BPO Financeiro",
    description: "Sua gestão financeira descomplicada. BPO Financeiro de excelência para empresas que buscam crescimento com segurança.",
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
