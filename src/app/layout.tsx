import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a2e" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://tudominio.com"),
  title: {
    default: "Fullstack Developer | Portafolio Profesional",
    template: "%s | Fullstack Developer",
  },
  description:
    "Desarrollador Fullstack especializado en backend robusto con FastAPI, Node.js y PostgreSQL, combinado con frontend moderno usando React y Next.js. Creando productos digitales completos y escalables.",
  keywords: [
    "Fullstack Developer",
    "Backend Developer",
    "FastAPI",
    "Node.js",
    "PostgreSQL",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "Software Engineer",
  ],
  authors: [{ name: "Luis Zarate" }],
  creator: "Luis Zarate",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/",
    siteName: "Fullstack Developer Portfolio",
    title: "Fullstack Developer | Portafolio Profesional",
    description:
      "Desarrollador Fullstack especializado en backend robusto y frontend moderno. Creando productos digitales completos.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fullstack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fullstack Developer | Portafolio Profesional",
    description:
      "Desarrollador Fullstack especializado en backend robusto y frontend moderno.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              console.log('%c Hey, curious recruiter! ', 'background: #6366f1; color: white; font-size: 16px; padding: 8px 16px; border-radius: 4px;');
              console.log('%c Check out the source code: https://github.com/RobertPX/portafolio ', 'color: #6366f1; font-size: 12px;');
              console.log('%c Built with Next.js 15, TypeScript, TailwindCSS & Framer Motion ', 'color: #10b981; font-size: 12px;');
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
