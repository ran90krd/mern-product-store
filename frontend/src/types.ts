export type Product = {
  _id?: string | undefined;
  name: string;
  image: string;
  price: number;
  description?: string;
};

export type ProductResponse = {
  success: boolean;
  message: string;
};

export type ProductStore = {
  products: Product[];
  setProducts: (products: Product[]) => void;
  createProduct: (newProduct: Partial<Product>) => Promise<ProductResponse>;
  fetchProducts: () => Promise<void>;
  deleteProduct: (pid: string) => Promise<ProductResponse>;
  updateProduct: (
    pid: string,
    updatedProduct: Partial<Product>
  ) => Promise<ProductResponse>;
};
