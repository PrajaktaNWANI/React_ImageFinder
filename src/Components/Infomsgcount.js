import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    snack:
    {
        '& > *':
        {
            color:'#fff',
            backgroundColor:'#000000'
        }
    }
})


const Infomsgcount = ({ open, toggleMsg }) => {

    const classes=useStyles();

    const handleClose = () => {
        toggleMsg(false);
    }

    return (

        <Snackbar className={classes.snack} open={open} autoHideDuration={3000} onClose={handleClose}>
            <MuiAlert severity="info" onClose={handleClose}>
                No Of Image Should be between 3 to 200
            </MuiAlert>
        </Snackbar>
    )

}
export default Infomsgcount;