import { Box, Button } from "@mui/material";
import { FC } from "react";

interface Props {
  total: number;
}
export const TotalView: FC<Props> = ({ total }) => {
  return (
    <Box
      sx={{
        marginTop: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <Button variant="contained" color="success">
        {total}
      </Button>
    </Box>
  );
};
