import './App.css';
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
// import { YourComponent } from "./YourComponent";



import Home from "./components/Home";
// import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/js/bootstrap.bundle.js';
import Header from "./components/Header";
import Token from "./components/Token";
import Owner from "./components/Owner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import Abi from "./contracts/NFT.json";
import { ethers } from "ethers";



function App() {

  // const { chains, provider } = configureChains(
  //   [ chain.goerli, chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum,],
  //   [alchemyProvider({ alchemyId: "https://eth-goerli.g.alchemy.com/v2/eYPcJWT30EiKCUTry7a820UuBqeaMEz_" }), publicProvider()]
  // );

  // const { connectors } = getDefaultWallets({
  //   appName: "My RainbowKit App",
  //   chains
  // });

  // const wagmiClient = createClient({
  //   autoConnect: true,
  //   connectors,
  //   provider
  // });



  const [State, setState] = useState({ provider: null, signer: null, contract: null });

  useEffect(() => {
    const Connect_wallet = async () => {
      const Contract_add = "0x73aeb03a2817cEFcFB26101F093D7EE177b1dFFA";
      const Contract_Abi = Abi.abi;
      const { ethereum } = window;
      const account = await ethereum.request({ method: 'eth_requestAccounts' });

      const provider = new ethers.providers.Web3Provider(ethereum);
      // console.log(provider);
      const Signer = provider.getSigner();
      const contract = new ethers.Contract(Contract_add, Contract_Abi, Signer);
      setState({ provider, Signer, contract });
    };
    Connect_wallet();
  }, [])





  return (
    <>
      <div className="App">
        <BrowserRouter>
        {/* <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains}>
            <Header state={State} />
          </RainbowKitProvider>
        </WagmiConfig> */}
            <Header state={State} />

          <Routes>
            <Route path="Home" element={<Home state={State} />}></Route>
            <Route path="" element={<Home state={State} />}></Route>
            <Route path="/Token" element={<Token state={State} />}></Route>
            <Route path="/Owner" element={<Owner state={State} />}></Route>
          </Routes>
        </BrowserRouter>

       
      </div>
    </>
  );
}

export default App;
