import React from 'react';
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

function Product() {
    
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded)
    };

  return (
    <div className={st.root} >
    <Card classNmae={null} >
      <CardHeader
        action = {
          <Typography className={null} variant='h5' color='textSecondary' >
                {accounting.formatMoney(50)}
          </Typography>
        }
        title='Shoes'
        subheader="In Stock"
      />
      <CardMedia className={null}
      image={null}
        title='Shoes Nike'
      />
      <CardContent>
        <Typography variant="body2" color="text.seconda ry">
          Running Shoes
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to cart">
          <AddShoppingCart fontSize='large' />
        </IconButton>
        <IconButton>
          {Array(4).fill().map((_, i) => (
            <p>&#11088;</p>
          ))}
        </IconButton>
        <IconButton
            className={null}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>    
          <Typography paragraph >
            Zapatillas de deporte para correr.
          </Typography>
        </CardContent>
      </Collapse> 
    </Card>
    </div>
  );
};

export default Product;
