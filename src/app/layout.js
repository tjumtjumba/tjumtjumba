import "./globals.css";

export const metadata = {
  title: "Tjumba Tjumba",
  description: "Music for the people",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
