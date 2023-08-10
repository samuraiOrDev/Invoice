import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import { FC } from "react";

interface TypeCompany {
  name: string;
  fiscalNumber: number;
}
interface Props {
  company: TypeCompany;
}
export const CompanyView: FC<Props> = ({ company }) => {
  const { name, fiscalNumber } = company;
  return (
    <Box sx={{ width: "50%" }}>
      <Typography variant="h3" sx={{ color: "#efb810", marginBottom: "5px" }}>
        Datos de la empresa
      </Typography>
      <List
        sx={{ border: "3px solid #efb810", borderRadius: "8px", color: "#fff" }}
      >
        <ListItem sx={{ bgcolor: "#333", color: "#efb810" }}>
          <ListItemText primary={name} />
        </ListItem>
        <ListItem sx={{ borderTop: "3px solid #efb810" }}>
          <ListItemText primary={fiscalNumber} />
        </ListItem>
      </List>
    </Box>
  );
};
