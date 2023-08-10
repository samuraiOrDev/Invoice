import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import { FC } from "react";

interface TypeClient {
  name: string;
  lastName: string;
  address: {
    country: string;
    city: string;
    street: string;
    number: number;
  };
}
interface Props {
  client: TypeClient;
}
export const ClientView: FC<Props> = ({ client }) => {
  const { name, lastName, address } = client;
  const { country, street, number, city } = address;
  return (
    <Box sx={{ width: "50%" }}>
      <Typography variant="h3" sx={{ marginBottom: "5px", color: "#efb810" }}>
        Datos del cliente
      </Typography>
      <List
        sx={{ border: "3px solid #efb810", borderRadius: "8px", color: "#fff" }}
      >
        <ListItem sx={{ bgcolor: "#333", color: "#efb810" }}>
          <ListItemText primary={`${name} ${lastName}`} />
        </ListItem>
        <ListItem sx={{ borderTop: "3px solid #efb810" }}>
          <ListItemText primary={country} />
        </ListItem>
        <ListItem sx={{ borderTop: "3px solid #efb810" }}>
          <ListItemText primary={city} />
        </ListItem>
        <ListItem sx={{ borderTop: "3px solid #efb810" }}>
          <ListItemText primary={`${street} - ${number}`} />
        </ListItem>
      </List>
    </Box>
  );
};
