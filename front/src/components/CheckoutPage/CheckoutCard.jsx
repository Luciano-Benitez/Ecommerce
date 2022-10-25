import React from 'react';
import {useDispatch} from 'react-redux';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import accounting from 'accounting';
import {remove_cart} from '../../actions/index';
import st from './CheckoutCard.module.css';

const CheckoutCard = ({product: {id, name, productType, image, price, rating, description}}) => {

    const dispatch = useDispatch();
    const RemoveCart = () => {
      dispatch(remove_cart(id));
    };

  return (
    <div className={st.root} >
    <Card>
      <CardHeader
        action = {
          <Typography  variant='h5' color='textSecondary' >
                {accounting.formatMoney(price)}
          </Typography>
        }
        title={name}
        subheader='In Stock'
      />
      <CardMedia 
      image={image}
        title={name}
      />
      <CardContent>
        <Typography variant="body2" color="text.seconda ry">
          {productType}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={st.cardAct}>
          {Array(rating).fill().map((_, i) => (
            <p >&#11088;</p>
          ))}
        <IconButton aria-label="add to cart" onClick={RemoveCart}>
          <DeleteRoundedIcon fontSize='large'/>
        </IconButton>
      </CardActions>
    </Card>
    </div>
  );
};

export default CheckoutCard;
