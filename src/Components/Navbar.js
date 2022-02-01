import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CollectionsIcon from '@mui/icons-material/Collections';

import './Navbar.css';

const Navbar = () => {


    return (
        <div>

            <AppBar position="static" className="mainAppbar">
                <Toolbar>
                    <CollectionsIcon />
                    <Typography variant="h5" className="navHeader">Image Finder</Typography>
                </Toolbar>
            </AppBar>

        </div>

    );

}

export default Navbar;