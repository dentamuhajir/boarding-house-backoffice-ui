export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    stock: number;
    status: 'Active' | 'Limited' | 'Out of Stock';
}