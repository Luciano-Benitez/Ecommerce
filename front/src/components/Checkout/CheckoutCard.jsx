import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import accounting from 'accounting';
import st from '../Checkout/CheckoutCard.module.css';

const CheckoutCard = ({product: {id, name, productType, image, price, rating, description}}) => {
    
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded)
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
        <IconButton aria-label="add to cart">
          <DeleteRoundedIcon fontSize='large' />
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

export default CheckoutCard;
