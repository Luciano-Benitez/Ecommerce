import React from 'react';
import {useDispatch} from 'react-redux';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {AddShoppingCart} from '@mui/icons-material/';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import accounting from 'accounting';
import st from '../Products/product.module.css';
import {Cart} from '../../actions/index';
// import {Zapas} from './img/Zapas.jpg';

function Product({product: {id, name, productType, image, price, rating, description}}) {
  console.log('image:', image)
    
    const dispatch = useDispatch();
    const [cart] = React.useState({id, name, productType, image, price, rating, description});
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded)
    };

    const addToCart = () => {  //Envía productos al estado global.
      dispatch(Cart(cart)); 
    };

  return (
    <div className={st.root} >
    <Card className={null} >
      <CardHeader
        action = {
          <Typography className={null} variant='h5' color='textSecondary' >
                {accounting.formatMoney(price)}
          </Typography>
        }
        title={name}
        subheader='In Stock'
      />
      <div className={st.img} >
        <CardMedia 
          src={image}
          title={name}
        />
      </div>
      <CardContent>
        <Typography variant="body2" color="text.seconda ry">
          {productType}
        </Typography>
      </CardContent>
      <CardActions className={st.cardAct}>
        <IconButton aria-label="add to cart" onClick={addToCart} >
          <AddShoppingCart fontSize='large' />
        </IconButton>
        <IconButton>
          {Array(rating).fill().map((_, i) => (
            <p>&#11088;</p>
          ))}
        </IconButton>
        <IconButton onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
          <ExpandMoreIcon/>
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>    
          <Typography paragraph >{description}</Typography>
        </CardContent>
      </Collapse> 
    </Card>
    </div>
  );
};

export default Product;
