import "./globals.css";

export const metadata = {
  title: "Softness — Food made with softness.",
  description:
    "Fresh ingredients, thoughtful cooking and simple moments made to be shared.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}