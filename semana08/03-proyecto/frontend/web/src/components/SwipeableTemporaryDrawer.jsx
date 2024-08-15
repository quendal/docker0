import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { CartItem } from './CartItem';

export default function SwipeableTemporaryDrawer() {
  const [cart, setCart] = React.useState([]);
  const [message, setMessage] = React.useState(null)

  const datos = []

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: true,
  });

  React.useEffect(() => {
    fetch('http://mitienda.local:5000/cart')
      .then(res => res.json())
      .then(data => setCart(data))
      .catch(error => setMessage('Error en servicio de: CARRITO'))
    console.log("cart")
    console.log(cart.items)
  }, []);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {
          cart.items?.map(item => (
          <CartItem  key={item.id} { ...item }  />
        ))}
      </List>
      <Divider />
      <ListItem  disablePadding>
          <ListItemButton>
            <ListItemText primary={`Total Q. ${ cart.total ?? 0 }`} />
          </ListItemButton>
        </ListItem>
      
    </Box>
  );

  return (
    <div>
      <Stack sx={{ width: '100%' }} spacing={2}>
      {
        message 
        ? <Alert severity="error">{ message }</Alert>
        : ''
      }
    </Stack>
      {/* {['left', 'right', 'top', 'bottom'].map((anchor) => ( */}
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>Abrir Carrito</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
