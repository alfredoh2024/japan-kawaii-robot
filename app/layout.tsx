import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Japan Kawaii Trip Planner",
  description: "Itinerario interactivo estilo kawaii para Osaka, Kioto y Tokio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
