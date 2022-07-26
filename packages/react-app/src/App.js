import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import TabsMenu from "./components/TabsMenu";
import Carousel from "./components/Carousel";
import "@rainbow-me/rainbowkit/dist/index.css";
import WalletButton from "./components/WalletButton";
import FlipCard from "./components/FlipCard";
import { sneaker } from "./data/sneaker";
import { sneaker2 } from "./data/sneaker2";
import { sneaker3 } from "./data/sneaker3";
import AppLogo from "../src/assets/BezelLogo.jpg";

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const slides = [
  {
    url:
      "https://media.about.nike.com/images/6c1588f7-484e-4234-baf3-293c3e500f27/nikere-creation-la-2v1a5372-108930.jpg?fm=jpg&q=80&fit=max&crop=1600%2C1067%2C0%2C0&w=4000&w=3840",
    title: "story1",
  },
  {
    url:
      "https://images.complex.com/complex/images/c_crop,h_1073,w_1913,x_7,y_7/c_fill,dpr_2.0,f_auto,q_auto,w_768/fl_lossy,pg_1/kjxulpyn4auoqk1k1vtc/zadeh-kicks-sneaker-ponzi-scheme?fimg-ssr",
    title: "story1",
  },
  {
    url:
      "https://cdn.shopify.com/s/files/1/0214/7974/files/Asics_x_Sneaker_Politics_Gel-Lyte_III_Lifestyles_EDITED_FINAL_SET_STUDIO_BLOG-3_2048x2048.jpg?v=1652886328",
    title: "story1",
  },
  {
    url:
      "https://blog.laced.co.uk/wp-content/uploads/2021/07/LACED_YEEZY_DAY_2021_BLOG_TILE_1200_X_628-copy-1.jpg",
    title: "story1",
  },
  {
    url:
      "https://sneakernews.com/wp-content/uploads/2022/06/stussy-nike-air-max-2013-fossil-release-date-1.jpg",
    title: "story1",
  },
];

const containerStyles = {
  width: "1000px",
  height: "500px",
  margin: "0 auto",
};

const App = () => {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to top, #c1dfc4 0%, #deecdd 100%)",
        overflow: "scroll",
      }}
    >
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 10,
            }}
          >
            <img style={{ width: "15%" }} src={AppLogo} alt="Bezel App" />
            <WalletButton />
          </div>
          <h2 style={{ textAlign: "center", margin: "20px" }}>
            Read the latest stories on all things kick related{" "}
          </h2>
          <div style={containerStyles}>
            <Carousel slides={slides} />
          </div>
          <TabsMenu />

          <div>
            <h3 style={{ color: "#232323", textAlign: "center" }}>
              *All markets are resolved after 24hrs*
            </h3>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <FlipCard sneaker={sneaker} />
              <FlipCard sneaker={sneaker2} />
              <FlipCard sneaker={sneaker3} />
            </div>
          </div>
        </RainbowKitProvider>
      </WagmiConfig>
    </div>
  );
};

export default App;
