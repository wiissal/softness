import "@fontsource-variable/fraunces/full.css";
import "@fontsource-variable/fraunces/full-italic.css";
import "@fontsource-variable/manrope";
import "./globals.css";
import MotionProvider from "@/components/MotionProvider";

export const metadata = {
  title: "Softness -Food made with softness.",
  description:
    "Fresh ingredients, thoughtful cooking and simple moments made to be shared.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}