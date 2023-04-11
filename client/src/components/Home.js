import React from "react";
import { Button, Typography } from "@mui/material";
import image from "../assets/bg.jpg";
import { Link } from "react-router-dom";
import Web3 from "web3";


// import { maxHeight } from "@mui/system";
const Home = () => {
    return (
        <>
            <div className="div1" style={{backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"100%" }}>
                <Typography style={{fontSize:"80px",fontFamily:"cursive"}} variant="h1">Welcome to Decentralize</Typography>
                <Typography variant="h3">NFT marketplace for your community</Typography>
                {/* <Button size    ="large" variant="conained"><Link to="/Token">Show Token</Link></Button> */}
            </div>
        </>
    )
};

export default Home;
