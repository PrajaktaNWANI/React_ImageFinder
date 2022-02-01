import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import './Breadcrumb.css';

const Breadcrumb = ({OnTextChange,onCountChange}) =>
{

    return(
        //Pass Value To App.js
        <Box className="txtfieldcontainer">
            <TextField className="txtsearchimg" label="Search Images" 
            onChange={(e) => OnTextChange(e.target.value)} />

            <TextField className="txtnoogimg" label="No Of Images" 
            onChange={(e) => onCountChange(e.target.value)} />
        </Box>
    ); 
}

export default Breadcrumb;
