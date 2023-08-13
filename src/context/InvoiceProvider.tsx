import { FC, useEffect, useState } from "react";
import { InvoiceContext } from "./InvoiceContext";
import { getInvoice } from "../services";
import { Item, TypeInvoice } from "./interface-invoice";

interface Props {
  children: React.ReactNode;
}
export const InvoiceProvider: FC<Props> = ({ children }) => {
  // Globals States
  const [invoice, setInvoice] = useState<TypeInvoice | undefined>(undefined);
  const [items, setItems] = useState<Item[] | undefined>(undefined);
  // Form State
  const [errorProduct, setErrorProduct] = useState(false);
  const [errorPrice, setErrorPrice] = useState(false);
  const [errorQuantity, setErrorQuantity] = useState(false);
  const [formData, setFormData] = useState({
    product: "",
    price: 0,
    quantity: 0,
  });
  const [total, setTotal] = useState(0);
  const [activeForm, setActiveForm] = useState(false);
  const handleChaneViewForm = () => setActiveForm((state) => !state);
  //Funciones Form
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const validateForm = () => {
    let result = true;
    if (!formData.product) {
      setErrorProduct(true);
      result = false;
    }
    if (formData.price == 0) {
      setErrorPrice(true);
      result = false;
    }
    if (formData.quantity == 0) {
      setErrorQuantity(true);
      result = false;
    }
    return result;
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Validación
    if (validateForm()) {
      if (items) {
        setItems([...items, formData]);
        setTotal((state) => state + formData.price * formData.quantity);
      } else {
        setItems([formData]);
      }
      setFormData({
        product: "",
        price: 0,
        quantity: 0,
      });
      setErrorPrice(false);
      setErrorProduct(false);
      setErrorQuantity(false);
      return;
    } else {
      return;
    }
  };
  const handleDeleteItem = (id: string) => {
    const newItems = items?.filter((item) => {
      if (item.product != id) {
        return item;
      } else {
        setTotal(total - item.price);
      }
    });
    setItems(newItems);
  };
  useEffect(() => {
    const response = getInvoice();
    const initialValueTotal = response.items
      .map((item) => item.price * item.quantity)
      .reduce((acc, currentValue) => acc + currentValue, 0);
    setInvoice({ ...response, total: initialValueTotal });
    setItems(response.items);
    setTotal(initialValueTotal);
  }, []);
  return (
    <InvoiceContext.Provider
      value={{
        invoice,
        items,
        errorProduct,
        errorPrice,
        errorQuantity,
        formData,
        handleInputChange,
        validateForm,
        handleSubmit,
        total,
        activeForm,
        handleChaneViewForm,
        handleDeleteItem,
      }}
    >
      {children}
    </InvoiceContext.Provider>
  );
};
