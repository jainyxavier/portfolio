import "./globals.css";

export const metadata = {
  title: "Jaíny Xavier",
  description: "Sejam bem-vindos ao meu portfólio!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-slate-900">{children}</body>
    </html>
  );
}
