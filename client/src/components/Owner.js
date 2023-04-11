// import { ethers } from 'ethers';
import { Button, Card, CardContent, Grid, TextField, Typography, ImageList, ImageListItem } from "@mui/material";
import { ethers } from "ethers";
import { useState, useEffect } from "react";

// import * as React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
// import AddLinkIcon from '@mui/icons-material/AddLink';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import ListItemText from '@mui/material/ListItemText';
// import MailIcon from '@mui/icons-material/Mail';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';


import Web3 from "web3";


// const drawerWidth = 240;



const Owner = ({ state }) => {
    const [Owner_Acc, setOwner_Acc] = useState("");
    const [connected_account, setConnected_account] = useState("");
    const [url, setToken_url] = useState('');
    const [token_id, setToken_id] = useState('');
    const [Images, setImage] = useState([]);
    // const [id,setId] = useState();
    const [new_token_id, set_new_Token_id] = useState();
    const [tokenURI, set_new_tokenURI] = useState("");
    const [totalSupply, settotalSupply] = useState("");
    const [Price, setPrice] = useState("");
    const [Balance, setBalance] = useState("0");
    const [disable, setdisable] = useState(false);

    const token = [];
    // const imge = [];
    // const Images1 = [];
    let User_account;


    // useEffect(() => {
    //     const ShowToken = async () => {
    //         const { ethereum } = window;
    //         const { contract } = state;

    //         const web3 = new Web3(window.web3.currentProvider);
    //         const account = await web3.eth.getAccounts();
    //         const connected_account = account[0];
    //         setConnected_account(connected_account);
    //         // User_account = connected_account;
    //         // console.log('connected_account-----------------', connected_account);
    //         const acc = contract.owner().then((a) => {
    //             const O_a = a;
    //             setOwner_Acc(O_a);
    //             // console.log('O_A========',O_a);
    //         });
    //         // const token_balance = await contract.balanceOf(Owner_Acc);
    //         const token_balance = await contract.Token_length();
    //         const Token = Number(token_balance);
    //         // console.log('token_balance-=-=-=-=-=============', Token);



    //         for (let i = 1; i <= Token; i++) {
    //             const Token_uri = await contract.tokenURI(i);
    //             // console.log('Token----------------------------000000000', Token_uri);
    //             token.push({ i, Token_uri });
    //             // setId(i);
    //         }

    //         // console.log("token length------", token.length);
    //         // console.log('token=-=-=-=-=-=4-4444444', token);

    //         for (var j = 0; j < token.length; j++) {
    //             const tokens = token[j];
    //             // console.log('Tokens--------------------@@@@@2',tokens);
    //             const meta_data = await fetch(tokens.Token_uri);
    //             // console.log('metadat7778787787878787',meta_data);/
    //             const data = await meta_data.json();
    //             // console.log("metadata=========", data);
    //             setImage([...Images, data.image]);
    //             const img = data.image;
    //             // console.log('img==================', img);
    //             Images.push(img);
    //             // imge.push(img);
    //             // Images1.push(img);
    //         }

    //         // setdisable(false);


    //         // console.log("images------------------", Images);

    //     }
    //     ShowToken();
    // }, []);

    const Show_Token = async () => {
        const { ethereum } = window;
        const { contract } = state;

        const web3 = new Web3(window.web3.currentProvider);
        const account = await web3.eth.getAccounts();
        const connected_account = account[0];       
        setConnected_account(connected_account);
        // User_account = connected_account;
        // console.log('connected_account-----------------', connected_account);
        const acc = contract.owner().then((a) => {
            const O_a = a;
            setOwner_Acc(O_a);
            console.log('O_A========',O_a);
        });
        // const token_balance = await contract.balanceOf(Owner_Acc);
        const token_balance = await contract.Token_length();
        const Token = Number(token_balance);
        // console.log('token_balance-=-=-=-=-=============', Token);



        for (let i = 1; i <= Token; i++) {
            const Token_uri = await contract.tokenURI(i);
            // console.log('Token----------------------------000000000', Token_uri);
            token.push({ i, Token_uri });
            // setId(i);
        }

        // console.log("token length------", token.length);
        // console.log('token=-=-=-=-=-=4-4444444', token);

        for (var j = 0; j < token.length; j++) {
            const tokens = token[j];
            // console.log('Tokens--------------------@@@@@2',tokens);
            const meta_data = await fetch(tokens.Token_uri);
            // console.log('metadat7778787787878787',meta_data);/
            const data = await meta_data.json();
            // console.log("metadata=========", data);
            setImage([...Images, data.image]);
            const img = data.image;
            // console.log('img==================', img);
            Images.push(img);
            // imge.push(img);
            // Images1.push(img);
        }

        setdisable(true);


        // console.log("images------------------", Images);

    }




    // const Mint_nft = async () => {
    //     const { contract } = state;
    //     const mint_nft = await contract.
    // }


    const Addnew_Token = async (event) => {
        event.preventDefault();
        const { contract } = state;
        const add_token = await contract.AddnewToken(new_token_id, totalSupply, Price, tokenURI);
    }

    // const showimage = async () => {
    //     console.log('showimaghvbejfrhvfrhvfr ',imge);
    // }

    // showimage();


    // console.log('images!!!!!!!!!!!!!!!!!!1', Images1);

    const Token_url = async (event) => {
        event.preventDefault();
        const { contract } = state;
        const Token_base_url = await contract._setTokenURI(token_id, url);
        console.log('token_url=========', Token_base_url);
        console.log('transaction hash===-=-=-=-', Token_base_url.hash);
    }

    const contract_balance = async () => {
        const { contract } = state;

        const bal = await contract.Contract_balance();
        // console.log('contract_balance000000000',bal);
        const balance1 = ethers.utils.formatEther(bal);
        // console.log('contract_balance001balance11111110000000',balance1);

        setBalance(balance1);
    }

    const Withdraw_balance = async () => {
        const { contract } = state;
        const mint_nft = await contract.Withdraw();
    }

    // const { window } = state;
    // const [mobileOpen, setMobileOpen] = React.useState(false);

    // const handleDrawerToggle = () => {
    //     setMobileOpen(!mobileOpen);
    // };

    // const drawer = (
    //     <div>
    //         <Toolbar />
    //         <Divider />
    //         <List>
    //             {['Contract Balance', 'Set-URI', 'Avilable Token', 'New Token'].map((text, index) => (
    //                 <ListItem key={text} disablePadding>
    //                     <ListItemButton>
    //                         <ListItemIcon>
    //                             {index % 2 === 0 ? <AccountBalanceWalletIcon /> : <AddLinkIcon />}
    //                         </ListItemIcon>
    //                         <ListItemText primary={text} />
    //                     </ListItemButton>
    //                 </ListItem>
    //             ))}
    //         </List>
    //         <Divider />
    //         {/* <List>
    //             {['All mail', 'Trash', 'Spam'].map((text, index) => (
    //                 <ListItem key={text} disablePadding>
    //                     <ListItemButton>
    //                         <ListItemIcon>
    //                             {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
    //                         </ListItemIcon>
    //                         <ListItemText primary={text} />
    //                     </ListItemButton>
    //                 </ListItem>
    //             ))}
    //         </List> */}
    //     </div>
    // );

    // const container = window !== undefined ? () => window().document.body : undefined;



    return (
        <>
            <div style={{ marginTop: "75px", padding: "50px" }}>
                {/* {connected_account === Owner_Acc ?} */}
                <Typography variant="h5" component="h2">Contract-Balance</Typography>
                <Card style={{ maxWidth: "50%", margin: "0 auto", padding: "10px 5px" }}>
                    <CardContent>
                        <form onSubmit={Token_url}>
                            <Grid style={{ padding: "15px", textAlign: "center" }} >
                                <Typography>Contract-Balance : {Balance} Ether </Typography>
                            </Grid>
                            <Grid xs={20} item>
                                <Button type="submit" variant="contained" color="primary" size="large" onClick={contract_balance}>Check-Balance</Button>
                                <Button type="submit" variant="contained" color="success" size="large" onClick={Withdraw_balance}>Withdraw-Balance</Button>
                            </Grid>
                        </form>

                    </CardContent>
                </Card>
                <Typography variant="h5" component="h2" style={{ marginTop: "50px" }}>Set-token-URI</Typography>
                <Card style={{ maxWidth: "50%", marginLeft: "425px", padding: "10px 5px" }}>
                    <CardContent>
                        <form onSubmit={Token_url}>
                            <Grid style={{ padding: "15px" }} container spacing={1} xs={20} sm={12} item>
                                <Typography>Token-ID</Typography>
                                <TextField label="Token-id" placeholder="Enter Token-id" variant="outlined" fullWidth onChange={(e) => { setToken_id(e.target.value) }} />
                            </Grid>
                            <Grid style={{ padding: "15px" }} container spacing={1}>
                                <Typography>Token-URI</Typography>
                                <TextField label="URL" placeholder="Enter URL" variant="outlined" fullWidth onChange={(e) => { setToken_url(e.target.value) }} />
                            </Grid>
                            <Grid xs={20} item>
                                <Button type="submit" variant="contained" color="primary" size="large">SET URL</Button>
                            </Grid>
                        </form>

                    </CardContent>
                </Card>
                <Typography variant="h5" component="h2" style={{ marginTop: "50px" }}>Add-New-Token</Typography>
                <Card style={{ maxWidth: "50%", marginLeft: "425px", padding: "10px 5px" }}>
                    <CardContent>
                        <form onSubmit={Addnew_Token}>
                            <Grid style={{ padding: "15px" }} container spacing={1} xs={20} sm={12} item>
                                <Typography>Token-ID</Typography>
                                <TextField label="Token-id" placeholder="Enter Token-id" variant="outlined" fullWidth onChange={(e) => { set_new_Token_id(e.target.value) }} />
                            </Grid>
                            <Grid style={{ padding: "15px" }} container spacing={1}>
                                <Typography>Token-URI</Typography>
                                <TextField label="URL" placeholder="Enter URL" variant="outlined" fullWidth onChange={(e) => { set_new_tokenURI(e.target.value) }} />
                            </Grid>
                            <Grid style={{ padding: "15px" }} container spacing={1}>
                                <Typography>Token-Supply</Typography>
                                <TextField label="Token-Supply" placeholder="Enter Token-Total-Supply" variant="outlined" fullWidth onChange={(e) => { settotalSupply(e.target.value) }} />
                            </Grid>
                            <Grid style={{ padding: "15px" }} container spacing={1}>
                                <Typography>Token-Price</Typography>
                                <TextField label="Token-Price" placeholder="Enter Token-Price as Ether" variant="outlined" fullWidth onChange={(e) => { setPrice(ethers.utils.parseEther(e.target.value)) }} />
                            </Grid>
                            <Grid xs={20} item>
                                <Button type="submit" variant="contained" color="primary" size="large">Add-new-token</Button>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
                {/* <Typography  variant="h5" component="h2" style={{marginTop: "50px"}}>Available-Token</Typography> */}
                <Button type="submit" variant="outlined" style={{ marginTop: "50px" }} onClick={Show_Token}  disabled={disable} >Available-Token</Button>
                <Card style={{ maxWidth: "100%", margin: "", padding: "10px 5px" }}>
                    <ImageList sx={{ height: 500 }} cols={3}>
                        {Images.map((data, index) => (<>
                            <ImageListItem>
                                <img src={data} height="auto" alt="" key={index} />
                            </ImageListItem>
                        </>
                        ))}
                    </ImageList>
                </Card>
            </div>

            {/* <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                >
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                > */}
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            {/* <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Toolbar />
                </Box>
            </Box> */}
        </>
    );
};

export default Owner;