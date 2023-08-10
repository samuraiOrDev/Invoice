import ReactDOM from "react-dom/client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";

import "./index.css";
import { InvoiceApp } from "./InvoiceApp";
import { InvoiceProvider } from "./context/InvoiceProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <CssBaseline />
    <InvoiceProvider>
      <InvoiceApp />
    </InvoiceProvider>
  </>
);
