import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { FC, useContext } from "react";
import { InvoiceContext } from "../../context/InvoiceContext";

const CssTextField = styled(TextField)({
  "& label": {
    color: "#efb810",
  },
  "& label.Mui-focused": {
    color: "#efb810",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#efb810",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#efb810",
    },
    "&:hover fieldset": {
      borderColor: "#efb810",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#efb810",
    },
  },
});
const CssInputAdorment = styled(InputAdornment)({
  "& .MuiTypography-root": {
    color: "#efb810",
  },
});
export const FormView: FC = () => {
  const {
    errorProduct,
    errorPrice,
    errorQuantity,
    formData,
    handleInputChange,
    handleSubmit,
  } = useContext(InvoiceContext);
  return (
    <Box
      component={"form"}
      sx={{ "& > :not(style)": { m: 1, width: "100%" } }}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Typography variant="h4" sx={{ marginBottom: "5px", color: "#efb810" }}>
        Nuevo Producto
      </Typography>
      <FormControl
        variant="standard"
        sx={{
          bgcolor: "#333",
          padding: "20px 20px",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          borderRadius: "8px",
          width: "100%",
          border: "solid",
          borderColor: "#efb810",
        }}
        size="medium"
      >
        {" "}
        <CssTextField
          id="product"
          label="Producto"
          name="product"
          value={formData.product}
          error={errorProduct}
          onChange={handleInputChange}
        />
        <CssTextField
          id="price"
          label="Precio"
          name="price"
          type="number"
          value={formData.price}
          error={errorPrice}
          InputProps={{
            startAdornment: (
              <CssInputAdorment position="start" sx={{ color: "#efb810" }}>
                €
              </CssInputAdorment>
            ),
          }}
          onChange={handleInputChange}
        />
        <CssTextField
          helperText=" "
          id="quantity"
          type="number"
          label="Cantidad"
          name="quantity"
          value={formData.quantity}
          error={errorQuantity}
          onChange={handleInputChange}
        />
        <Button variant="contained" type="submit">
          Agregar producto
        </Button>
      </FormControl>
    </Box>
  );
};
