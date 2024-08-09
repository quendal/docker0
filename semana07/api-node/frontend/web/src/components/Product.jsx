import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';



export default function Product({ children, _id, name, price, description }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Grid container 
        direction='column' 
        alignItems="center"
        justifyContent="center"
        >
            <Grid item>
            { children }
            </Grid>
            <Grid>
                <Typography gutterBottom variant="h5" component="div">
                {name}
                </Typography>
            </Grid>
        </Grid>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
