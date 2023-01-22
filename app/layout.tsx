import { Roboto } from "@next/font/google";
import MantineTheme from "@/components/MantineTheme";
import "./global.css";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MantineTheme>{children}</MantineTheme>
      </body>
    </html>
  );
}
