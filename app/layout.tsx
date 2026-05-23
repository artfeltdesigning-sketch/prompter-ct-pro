import "./globals.css";

export const metadata = {
  title: "PROMPTER CT PRO AI CREATOR",
  description: "Hollywood cinematic AI creation studio"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
