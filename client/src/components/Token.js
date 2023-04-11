import { ethers } from 'ethers';
import { Button, Card, CardContent, Grid, TextField, Typography, ImageList, ImageListItem } from "@mui/material";
import { useState, useEffect } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
// import Web3 from "web3";
const { Long } = require('bson');


const Token = ({ state }) => {
    // const [Owner_Acc, setOwner_Acc] = useState("");
    // const [connected_account, setConnected_account] = useState("");
    // const [url, setToken_url] = useState('');
    // const [token_id, setToken_id] = useState('');
    const [Images, setImage] = useState([]);
    const [id, setId] = useState([]);
    // const [new_token_id,set_new_Token_id] = useState();
    // const [tokenURI, set_new_tokenURI] = useState("");
    // const [totalSupply, settotalSupply] = useState("");
    const [Quantity, setQuantity] = useState("");
    const [Price, setPrice] = useState([]);


    const token = [];
    // const Images1 = [];
    // let User_account;


    // useEffect(() => {
    //     ShowToken();
    // }, []);


    const ShowToken = async () => {

        try {
            // event.preventDefault();
            const { ethereum } = window;
            const { contract } = state;

            // const web3 = new Web3(window.web3.currentProvider);
            // const account = await web3.eth.getAccounts();
            // const connected_account = account[0];
            // setConnected_account(connected_account);
            // User_account = connected_account;
            // console.log('connected_account-----------------', connected_account);
            // const acc = contract.owner().then((a) => {
            //     const O_a = a;
            //     setOwner_Acc(O_a);
            //     // console.log('O_A========',O_a);
            // });
            // const token_balance = await contract.balanceOf(Owner_Acc);
            const token_balance = await contract.Token_length();
            const Token = Number(token_balance);
            // console.log('token_balance-=-=-=-=-=============', Token);



            for (let i = 1; i <= Token; i++) {
                const Token_uri = await contract.tokenURI(i);
                // console.log('Token----------------------------000000000', Token_uri);
                token.push({ i, Token_uri });
            }

            // console.log("token length------", token.length);
            // console.log('token=-=-=-=-=-=4-4444444', token);

            for (var j = 0; j < token.length; j++) {
                const tokens = token[j];
                // console.log('Tokens--------------------@@@@@2', tokens);
                setId([...id, tokens.i]);
                id.push(tokens.i);
                const meta_data = await fetch(tokens.Token_uri);
                // console.log('metadat7778787787878787',meta_data);/
                const data = await meta_data.json();
                // console.log("metadata=========", data);
                setImage([...Images, data.image]);
                const img = data.image;
                // console.log('img==================', img);
                Images.push(img);

                const b = await contract.TokenRate(j);
                console.log('bbbbbbbbbbbbbbbbb', b);
                const c = ethers.utils.formatEther(b);
                // const c = Number(b/1000000000000000000);
                console.log('cccccccccccccccccccccc', c);
                setPrice([...Price, c]);
                // Images1.push(img);
                Price.push(c);
                console.log("price:", Price);


            }

            // for (var k=0; k < token.length; k++) {
            //     const b = await contract.TokenRate(k);
            //     const c = Number(b);
            //     setPrice([...Price,c]);
            // }
            console.log('ppppppppppppppppppp', Price);


            // console.log("images------------------", Images);
        } catch (e) {
            console.log('eeeeeeeeeeeeeeeeeeeeee', e);
        }
    }



    const Mint_nft = async (event) => {

        try {
            event.preventDefault();
            console.log(event.target.id);

            const token_ID = event.target.id;
            const { contract } = state;

            const b = await contract.TokenRate(event.target.id - 1);
            console.log('^^^^^^^^^^^', b);


            // console.log('id=-=-=-=-=-=->><><>',Price);
            const d = Number(b);
            console.log('ddddddddddddddddddd', d);
            // setPrice(...Price,(d/1000000000000000000));
            // const z = ethers.utils.formatEther(d);
            // console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',z);
            // const c = (z)*Quantity;
            const c = (d / 1000000000000000000) * Quantity;
            console.log('ccccccccccccccccccccccccccccccccc', c);

            const amount = { value: ethers.utils.parseEther(c.toString()) };
            console.log('ppppppppppppppppppp', Price);
            // const 
            const mint_nft = await contract.mintNft(token_ID, Quantity, amount);
        } catch (error) {
            // alert('hello')
            alert(error.error.message.slice(5, 47));
            // console.log(error.map((p)=>{return p}));
            // console.error(error.message);  
            // console.log(error.data.message);    

        }
    }


    // const Addnew_Token = async (event) => {
    //     event.preventDefault();
    //     const { contract } = state;
    //     const add_token = await contract.AddnewToken(new_token_id,totalSupply,Price,tokenURI);
    //     // setValue();
    // }


    // console.log('images!!!!!!!!!!!!!!!!!!1', Images1);

    // const Token_url = async (event) => {
    //     event.preventDefault();
    //     const { contract } = state;
    //     const Token_base_url = await contract._setTokenURI(token_id, url);
    //     console.log('token_url=========', Token_base_url);
    //     console.log('transaction hash===-=-=-=-', Token_base_url.hash);
    // }

    return (
        <>
            <div style={{ marginTop: "75px", textAlign: "center" }}>
                <Card style={{ marginTop: "10px", marginLeft: "50px", marginRight: "50px", padding: "10px 5px", minHeight: "50px", backgroundColor: "rgb(115, 147, 179,0.2)", }}>
                    <Typography variant="h2" component="h2" style={{ fontSize: "38px", padding: "3px" }}>Mint Your NFT</Typography>
                </Card>
                <Card style={{ marginTop: "10px", marginLeft: "50px", marginRight: "50px", padding: "10px 5px", minHeight: "50px", backgroundColor: "rgb(115, 147, 179,0.2)", }}>
                    <Button variant='contained' color='success' onClick={ShowToken} > <VisibilityIcon />Available-Token</Button>
                </Card>
                {/* {connected_account === Owner_Acc ?} */}
                <Card style={{ marginTop: "10px", marginLeft: "50px", marginRight: "50px", padding: "10px 5px", minHeight: "200px" }}>
                    <ImageList sx={{ height: 800 }} cols={3}>
                        {Images.map((data, index) => (<>
                            <ImageListItem>
                                <img src={data} height="auto" alt="" key={index} />
                                <Typography>Token ID : {id[index]}</Typography>
                                <Typography>Token Price : {Price[index]} Ether </Typography>

                                <TextField placeholder="" onChange={(e) => { setQuantity(e.target.value) }} />
                                <Button type="submit" id={id[index]} onClick={Mint_nft} variant="outlined">Mint-nft</Button>
                            </ImageListItem>
                        </>
                        ))}
                    </ImageList>
                </Card>
            </div>
        </>
    );
};

export default Token;