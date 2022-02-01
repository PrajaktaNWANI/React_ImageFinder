
import Image from "./Image";
import Grid from '@mui/material/Grid';


const Images = ({ data }) => {

    //console.log('data', data);
    return (
        <Grid container>
            {
                data.map(image => (
                   <Grid xs={3} key={image.id}> <Image image={image} /></Grid>
                ))
            }
        </Grid>
    )

}

export default Images;