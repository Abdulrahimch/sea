import "@/styles/globals.css";
import localFont from "next/font/local";
const font = localFont({
  src: [
    { path: "../../public/fonts/Monotype  - Helvetica Now Text.otf" },
    { path: "../../public/fonts/Monotype  - Helvetica Now Display Medium.otf" },
    { path: "../../public/fonts/SuisseIntlMono-Regular.otf" },
  ],
});
export default function App({ Component, pageProps }) {
  return (
    <main className={font.className}>
      <Component {...pageProps} />
    </main>
  );
}
