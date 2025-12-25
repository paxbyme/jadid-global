import "@/styles/globals.css";

export const metadata = {
  title: "Jadid",
  description: "Milliy ma’rifat va jadid merosi uchun multimedia portal",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz">
      <body>{children}</body>
    </html>
  );
}
