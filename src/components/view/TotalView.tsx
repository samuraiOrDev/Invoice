import { Box, Button } from "@mui/material";
import { FC, useContext } from "react";
import { InvoiceContext } from "../../context/InvoiceContext";

interface Props {
  total: number;
}
export const TotalView: FC<Props> = ({ total }) => {
  const { handleChaneViewForm, activeForm } = useContext(InvoiceContext);
  return (
    <Box
      sx={{
        marginTop: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "2rem",
        marginBottom: "20px",
      }}
    >
      <Button variant="contained" onClick={handleChaneViewForm}>
        {activeForm ? "Ocultar formulario" : "Añadir un Producto"}
      </Button>
      <Button variant="contained" color="success">
        {total}
      </Button>
    </Box>
  );
};
