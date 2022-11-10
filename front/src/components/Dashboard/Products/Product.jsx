import React from 'react';
import {useNavigate, Link} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import accounting from 'accounting';
import st from './Product.module.css';


function Product({product: {id, name, productType, image, price, rating, description}}) {    
    const history = useNavigate();
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded)
    };

    const goEdit = (e) => {
      e.preventDefault();
      history(`/DashboardAdmin/EditProduct/` + id);
    };

  return (
    <div className={st.card} >
    <Card  >
      <CardHeader
        action = {
          <Typography  variant='h5' color='textSecondary' >
                {accounting.formatMoney(price)}
          </Typography>
        }
        title={name}
        subheader='In Stock'
      />
        <CardMedia sx={{display:'flex', justifyContent:'center', height:'11rem', borderRadius: '10px'}} /* className={st.image} */
          image={image[0]}
          title={name}
        /> 
      <CardContent>
        <Typography variant="body2" color="text.seconda ry">
          {productType}
        </Typography>
      </CardContent>
      <CardActions className={st.cardContent}>
        <IconButton  aria-label="add to cart"  onClick={goEdit}  > 
            <ModeEditIcon fontSize='medium' />
        </IconButton>
        <IconButton>
          {Array(rating).fill().map((_, i) => (
            <p>&#11088;</p>
          ))}
        </IconButton>
        <IconButton sx={{padding:'1rem'}} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
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
