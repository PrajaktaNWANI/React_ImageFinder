import './Image.css';
import Card from '@mui/material/Card';

const Image = ( {image}) => {

    return (
        <Card className='imagesCard'>
        <img className='allImages' alt={image.tags} src={image.largeImageURL} />
        </Card>

    )
}

export default Image;