
import {CartContextProvider} from "@/components/CartContext";
import GlobalStyles from "./Style/GlobalStyle";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </>
  );
}
