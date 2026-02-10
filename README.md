# Leadder — BPO Financeiro

<p align="center">
  <img src="public/LeadderLogo.png" alt="Leadder Logo" width="200" />
</p>

<p align="center">
  <strong>Sua gestão financeira descomplicada.</strong><br/>
  BPO Financeiro de excelência para empresas que buscam crescimento com segurança.
</p>

<p align="center">
  <a href="https://leadder.com.br">🌐 Website</a> •
  <a href="https://api.whatsapp.com/send?phone=5511911110140">💬 WhatsApp</a> •
  <a href="mailto:contato@leadder.com.br">📧 E-mail</a>
</p>

---

## 📋 Sobre o Projeto

Website institucional da **Leadder**, empresa especializada em BPO Financeiro (Business Process Outsourcing). O site apresenta os serviços oferecidos, a equipe, processo de trabalho e formulário de contato integrado com EmailJS.

## 🚀 Tecnologias

| Tecnologia | Uso |
|---|---|
| **Next.js 15** | Framework React com App Router |
| **React 19** | Biblioteca de UI |
| **Framer Motion** | Animações e transições |
| **EmailJS** | Envio de formulário de contato |
| **next/font** | Carregamento otimizado de fontes |
| **next/image** | Otimização automática de imagens |

## 🏗️ Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css       # Design system completo
│   ├── layout.js         # Layout raiz com fontes
│   └── page.js           # Página principal
└── components/
    ├── Header.jsx        # Navegação fixa com scroll detection
    ├── Hero.jsx          # Seção principal com animações
    ├── Team.jsx          # Equipe + selo Sebrae
    ├── Features.jsx      # Grid de serviços (6 cards)
    ├── Clients.jsx       # Carrossel de clientes
    ├── WhyUs.jsx         # Diferenciais com glassmorphism
    ├── HowItWorks.jsx    # Processo circular + timeline
    ├── Contact.jsx       # Formulário com EmailJS
    ├── Footer.jsx        # Rodapé com links e redes sociais
    └── WhatsAppButton.jsx # Botão flutuante pulsante
```

## ⚡ Funcionalidades

- **Design responsivo** — Desktop, tablet e mobile
- **Animações** — Entrada suave com Framer Motion em todas as seções
- **Formulário de contato** — Integrado com EmailJS para envio direto ao e-mail
- **Botão WhatsApp flutuante** — Com animação de pulsar, sempre visível
- **SEO otimizado** — Meta tags, semântica HTML5, fontes não-bloqueantes
- **Performance** — Imagens otimizadas via `next/image`, fontes via `next/font`
- **Navbar inteligente** — Destaque automático da seção ativa ao rolar

## 🛠️ Instalação e Desenvolvimento

```bash
# Clonar o repositório
git clone https://github.com/mauricior38/leadder.git

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

O site estará disponível em **http://localhost:3000**

## 📦 Build para Produção

```bash
npm run build
npm start
```

## 🔧 Variáveis de Ambiente

O projeto utiliza EmailJS para o formulário de contato. As credenciais estão configuradas diretamente no componente `Contact.jsx`:

- **Service ID:** `service_r52tei7`
- **Template ID:** `template_37drz4o`
- **Public Key:** `Z0BOGblabxyKQI71d`

## 📄 Licença

Este projeto é proprietário da **Leadder Gestão Financeira**. Todos os direitos reservados.

---

<p align="center">
  Desenvolvido com ❤️ para a <strong>Leadder</strong>
</p>
