import {
  Typography,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { FC } from "react";
import { Item } from "../../context/interface-invoice";

interface Props {
  items: Item[] | undefined;
}
export const ListItemsView: FC<Props> = ({ items }) => {
  if (!items) return <div>Cargando...</div>;

  const keys = Object.keys(items[0]);
  return (
    <>
      <Typography variant="h3" sx={{ marginBottom: "5px", color: "#efb810" }}>
        Productos de la factura
      </Typography>
      <TableContainer component={Paper}>
        <Table
          sx={{
            minWidth: 650,
            bgcolor: "#222",
            border: "3px solid #efb810",
            borderRadius: "8px",
          }}
        >
          <TableHead sx={{ bgcolor: "#333", color: "#efb810" }}>
            <TableRow>
              {keys.map((key) => (
                <TableCell key={key} sx={{ color: "#efb810" }}>
                  {key.toUpperCase()}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" sx={{ color: "#fff" }}>
                  {" "}
                  {item.product}
                </TableCell>
                <TableCell align="left" sx={{ color: "#fff" }}>
                  {item.price}
                </TableCell>
                <TableCell align="left" sx={{ color: "#fff" }}>
                  {item.quantity}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
