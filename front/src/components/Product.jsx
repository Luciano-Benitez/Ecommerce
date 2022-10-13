import React from 'react';
import { makeStyles } from '@mui/material';
import clsx from 'clsx';
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



// const useStyles = makeStyles((theme) => ({
//     root: {
//         maxWidth: 345,
//     }, 
//     action: {
//       marginTop: '1rem',
//     },
//     media: {
//         heigth: 0,
//         paddingTop: '56.25%',
//     },
//     expand: {
//         transform: 'rotate(0deg)',
//         marginLeft: 'auto',
//         transition: theme.transition.create('transform', {
//             duration: theme.transition.duration.shortest,
//         }),
//     },
// }));


function Product() {
    // const classes = useStyles() 
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded)
    };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <Typography variant='h5' color='textSecondary' >
                {accounting.formatMoney(50)}
          </Typography>
        }
        title='Shoes'
        subheader="In Stock"
      />
      <CardMedia
        component="img"
        height="194"
        image = ''
        title='Shoes Nike'
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
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
            // className={clsx(classes.expand, {
            //     [classes.expandOpen]: expanded,
            // })}
            // onClick={handleExpandClick}
            // aria-expanded={expanded}
            // aria-label="show more"
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
  );
};

export default Product;
