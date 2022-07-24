import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import TabsMenu from "./components/TabsMenu";
import "@rainbow-me/rainbowkit/dist/index.css";
import WalletButton from "./components/WalletButton";
import FlipCard from "./components/FlipCard";
import { sneaker } from "./data/sneaker";
import { sneaker2 } from "./data/sneaker2";
import { sneaker3 } from "./data/sneaker3";

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

const App = () => {
  return (
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
          <h1>Bezel</h1>
          <WalletButton />
        </div>
        <TabsMenu />

        <div>
          <h3 style={{ color: "#232323" }}>
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
  );
};

export default App;
