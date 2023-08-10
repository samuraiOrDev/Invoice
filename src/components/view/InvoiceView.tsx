import { Box, List, ListItem, ListItemText } from "@mui/material"
import { FC } from "react";

interface Props {id: number; name: string;}
export const InvoiceView:FC<Props> = ({id, name}) => {
  return (
    <Box sx={{ width: "100%", marginTop: "20px", marginBottom: "20px", color: "#fff" }}>
          <List sx={{ border: "3px solid #efb810", borderRadius: "8px" }}>
            <ListItem>
              <ListItemText primary={`Identificador de la Factura: ${id}`}/>
            </ListItem>
            <ListItem sx={{ borderTop: "3px solid #efb810" }}>
              <ListItemText primary={`Nombre: ${name}`} />
            </ListItem>
          </List>
        </Box>
  )
}
