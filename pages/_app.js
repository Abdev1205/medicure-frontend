import "@/styles/globals.css";
import DataProvider from "@/context/DataProvider";
export default function App({ Component, pageProps }) {
  return (
    <DataProvider>
      <Component {...pageProps} />
    </DataProvider>
  );
}
