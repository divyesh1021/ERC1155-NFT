import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import { React, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

const Pages = ["Home", "Token", "Contact Us", "About Us", "Login", "Log-out"];

const DrawerComp = () => {
    const [openDrawer, setDrawer] = useState(false);

    return (
        <>
            <Drawer open={openDrawer} onClose={() => setDrawer(false)}>
                <List>
                    {
                        Pages.map((page, index) => (
                            <ListItemButton key={index}>
                                <ListItemIcon>
                                    <ListItemText>{page}</ListItemText>
                                </ListItemIcon>
                            </ListItemButton>
                        ))
                    }

                </List>
            </Drawer>
            <IconButton sx={{ color: 'white', marginLeft: 'auto' }} onClick={() => setDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
            <IconButton onClick={() => setDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </>
    );
};

export default DrawerComp;