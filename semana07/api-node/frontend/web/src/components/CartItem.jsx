import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import ExtensionIcon from '@mui/icons-material/Extension';

export const CartItem = ({ id, name, quantity, price }) => {
  return (
    <>
      <ListItem  disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ExtensionIcon />
            </ListItemIcon>
            <Grid container
              direction='column'
            >
              <Grid item>
                <ListItemText primary={name} />
              </Grid>
              <Grid item>
                <ListItemText secondary={ `Precio: Q. ${price ?? 0}`} />
              </Grid>
              <Grid item>
                <ListItemText secondary={ `Cantidad: ${quantity ?? 0}`} />
              </Grid>

            </Grid>
            
          </ListItemButton>

        </ListItem>
    </>
  )
}
