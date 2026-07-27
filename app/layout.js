import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "CodeFolio | Developer Portfolio Builder",
    template: "%s | CodeFolio",
  },

  description:
    "Build and share your professional developer portfolio in minutes. Showcase projects, skills, GitHub, LinkedIn and resume with beautiful templates.",

  keywords: [
    "Portfolio",
    "Developer Portfolio",
    "React",
    "Next.js",
    "Web Developer",
    "Frontend",
    "Full Stack",
    "CodeFolio",
  ],

  authors: [
    {
      name: "Akanksha Dharamkar",
    },
  ],

  creator: "Akanksha Dharamkar",

  // metadataBase: new URL("https://your-domain.vercel.app"),

  openGraph: {
    title: "CodeFolio",
    description:
      "Create beautiful developer portfolios with multiple templates.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
     <body className="min-h-full flex flex-col">
  <Toaster
    position="top-right"
    toastOptions={{
      duration: 2500,
      style: {
        borderRadius: "12px",
        background: "#111827",
        color: "#fff",
      },
    }}
  />

  {children}
</body>
    </html>
  );
}
