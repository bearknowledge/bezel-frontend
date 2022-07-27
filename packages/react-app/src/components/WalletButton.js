import { ConnectButton } from "@rainbow-me/rainbowkit";

const WalletButton = () => {
  return (
    <div
      style={
        {
          width: "50px",
          height: "25px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }
      }
    >
      <ConnectButton />
    </div>
  );
};

export default WalletButton;
