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
import { Delete } from "../ui";

interface Props {
  items: Item[] | undefined;
}
export const ListItemsView: FC<Props> = ({ items }) => {
  if (!items) return <div>Cargando...</div>;
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
              <TableCell sx={{ color: "#efb810", textTransform: "uppercase" }}>
                Product
              </TableCell>
              <TableCell sx={{ color: "#efb810", textTransform: "uppercase" }}>
                Price
              </TableCell>
              <TableCell sx={{ color: "#efb810", textTransform: "uppercase" }}>
                Quantity
              </TableCell>
              <TableCell sx={{ color: "#efb810", textTransform: "uppercase" }}>
                Actions
              </TableCell>
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
                <TableCell align="left" sx={{ color: "#fff" }}>
                  <Delete id={item.product} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
