export interface TypeInvoice {
  id: number;
  name: string;
  client: Client;
  company: Company;
  items: Item[];
  total: number;
}

export interface Client {
  name: string;
  lastName: string;
  address: Address;
}

export interface Address {
  country: string;
  city: string;
  street: string;
  number: number;
}

export interface Company {
  name: string;
  fiscalNumber: number;
}

export interface Item {
  product: string;
  price: number;
  quantity: number;
}

export interface TypeInvoiceContext {
  invoice: TypeInvoice | undefined;
  items: Item[] | undefined;
  errorProduct: boolean;
  errorPrice: boolean;
  errorQuantity: boolean;
  formData: Item;
  handleInputChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  validateForm: () => boolean;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  total: number;
  activeForm: boolean;
  handleChaneViewForm: () => void;
  handleDeleteItem: (id: string) => void;
}
