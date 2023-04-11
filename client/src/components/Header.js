import { useNavigate } from "react-router-dom";
import { React, useState } from "react";
import { AppBar, Button, Tab, Tabs, Link, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import DrawerComp from "./DrawerComp";
import Web3 from "web3";
// import { ConnectButton } from '@rainbow-me/rainbowkit';



const Header = ({ state }) => {

    const [Owner_Acc, setOwner_Acc] = useState("");
    const [connected_account, setConnected_account] = useState("");

    const ShowToken = async () => {
        const { ethereum } = window;
        // const { contract } = state;

        const web3 = new Web3(window.web3.currentProvider);
        const account = await web3.eth.getAccounts();
        const connected_account = account[0];
        setConnected_account(connected_account);
        // User_account = connected_account;
        console.log('connected_account-----------------', connected_account);
        const acc = state.contract.owner().then((a) => {
            const O_a = a;
            setOwner_Acc(O_a);
            console.log('O_A========', O_a);
        });

    }
    ShowToken();
    const Navigate = useNavigate();
    // const Pages = [{text:"Home",onclick:()=>Navigate("/Navbar")}];
    const User = ["Home", "Token"];
    const Pages = ["Home", "Token", "Owner"];
    // const Pages = ["Home","Token","Contact Us","About Us "];
    // const Route = ["/Home","/Token","/Contact Us","/About Us "];


    const [val, setValue] = useState(0);

    const handle = (e, newvalue) => {
        setValue(newvalue);
    }

    const SwitchAccount = async () => {
        const { ethereum } = window;
        // console.log("ghhjggggggggggg")
        if (ethereum) {
            // const account = await ethereum.request({ method: "eth_requestAccounts" });

            const account = window.ethereum.request({
                method: 'wallet_requestPermissions',
                params: [{
                    eth_accounts: {},
                },],
            });

        }
        window.ethereum.on("accountsChanged", () => {
            window.location.reload();
        });   
    }

    const theme = useTheme();

    const isMatch = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <>
            <AppBar sx={{ background: "#063970" }}>
                <Toolbar>
                    <ShoppingCartCheckoutIcon />
                    {
                        isMatch ? (
                            <>
                                <Typography sx={{ fontSize: "1.5rem", paddingLeft: "100%" }}>
                                    NFT
                                </Typography>
                                <DrawerComp />

                            </>
                        ) : (
                            <>
                                <Tabs textColor="inherit" value={val} onChange={handle} indicatorColor="secondary" sx={{ marginLeft: "auto" }}>
                                    {

                                        User.map((page, index) => (
                                            connected_account !== Owner_Acc ?
                                                (<Tab key={index} label={page} onClick={() => Navigate(`/${page}`)} />) : null
                                        ))
                                    }
                                    {
                                        Pages.map((page, index) => (
                                            connected_account === Owner_Acc ?
                                                (<Tab key={index} label={page} onClick={() => Navigate(`/${page}`)} />) : null
                                        ))
                                    }

                                </Tabs>
                                <Button variant="contained" sx={{ marginLeft: "auto" }} onClick={() => SwitchAccount()}>Switch Account</Button>
                                {/* <ConnectButton /> */}
                            </>
                        )
                    }

                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;