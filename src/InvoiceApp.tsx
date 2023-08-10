import { Box, Typography, Container } from "@mui/material";

import {
  ClientView,
  InvoiceView,
  CompanyView,
  ListItemsView,
  TotalView,
  FormView,
} from "./components/";
import { useContext } from "react";
import { InvoiceContext } from "./context/InvoiceContext";

export const InvoiceApp = () => {
  const { invoice, items, total } = useContext(InvoiceContext);
  if (!invoice) return <div>Cargando...</div>;

  const { id, name, client, company } = invoice;
  return (
    <Container
      maxWidth="lg"
      sx={{
        marginTop: "40px",
        padding: "20px 20px",
        bgcolor: "#222",
        borderRadius: "8px",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Typography variant="h2" color={"#efb810"}>
          Factura
        </Typography>
        <InvoiceView id={id} name={name} />
        <Box
          sx={{
            width: "100%",
            marginTop: "20px",
            marginBottom: "20px",
            display: "flex",
            gap: "2rem",
          }}
        >
          <ClientView client={client} />
          <CompanyView company={company} />
        </Box>
        <ListItemsView items={items} />
        <TotalView total={total} />
        <FormView />
      </Box>
    </Container>
  );
};
