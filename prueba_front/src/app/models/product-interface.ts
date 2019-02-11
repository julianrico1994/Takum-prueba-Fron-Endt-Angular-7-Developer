export interface ProductInterface {
  productId?: string;
  id?: number;
  name: string;
  description: string;
  cost: string;
  category?: number | string;
  user?: number | string;
  deleted_at?: string | null;
}
