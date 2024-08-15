import React, { useEffect, useState } from 'react'
import Product from './Product';

import AppleIcon from '@mui/icons-material/Apple';
import LaptopWindowsIcon from '@mui/icons-material/LaptopWindows';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CategoryIcon from '@mui/icons-material/Category';
import SnowmobileIcon from '@mui/icons-material/Snowmobile';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CakeIcon from '@mui/icons-material/Cake';
import ChairIcon from '@mui/icons-material/Chair';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import HeadphonesIcon from '@mui/icons-material/Headphones';

import { Box, Grid } from '@mui/material';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Icono = ({index, fontsize}) => {
    return (
        index === 0 ? <AppleIcon fontSize={fontsize} />
        : index === 1 ? <LaptopWindowsIcon fontSize={fontsize} />
        : index === 2 ? <CameraAltIcon fontSize={fontsize} />
        : index === 3 ? <AttachFileIcon fontSize={fontsize} />
        : index === 4 ? <CategoryIcon fontSize={fontsize} />
        : index === 5 ? <SnowmobileIcon fontSize={fontsize} />
        : index === 6 ? <EmojiEventsOutlinedIcon fontSize={fontsize} />
        : index === 7 ? <AgricultureIcon fontSize={fontsize} />
        : index === 8 ? <AutoStoriesIcon fontSize={fontsize} />
        : index === 9 ? <CakeIcon fontSize={fontsize} />
        : index === 10 ? <ChairIcon fontSize={fontsize} />
        : index === 11 ? <HeadphonesIcon fontSize={fontsize} />
        : index === 12 ? <CheckroomIcon fontSize={fontsize} />
        : <LocalPrintshopIcon fontSize={fontsize} />
    )
}


export const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = React.useState(null)

    useEffect(() => {
        fetch('http://mitienda.local:3002/products')
          .then(res => res.json())
          .then(data => setProducts(data))
          .catch(error => setMessage('Error en servicio de PRODUCTOS'))

          console.log("products")
          console.log(products)
          
      }, []);
  return (
    <>
    <Stack sx={{ width: '100%' }} spacing={2}>
      {
        message 
        ? <Alert severity="error">{ message }</Alert>
        : ''
      }
    </Stack>
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        
        {products && products?.map((product,index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
                <Product key={product._id} { ...product }>
                    <Icono  fontsize={'large'} index={index}/>
                </Product>
          </Grid>
            
        ))}
      </Grid>
    </Box>

    </>
  )
}
