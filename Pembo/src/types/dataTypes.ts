// User.ts
export interface User {
    id: number;
    username: string;
    password: string;
    email: string;
    role: 'Admin' | 'Customer';
    first_name: string;
    last_name: string;
    phone_number: string;
  }
  
  // Address.ts
  export interface Address {
    id: number;
    user_id: number;
    city: string;
    state: string;
    zip: string;
  }
  
  // Category.ts
  export interface Category {
    id: number;
    name: string;
  }
  
  // Product.ts
  export interface Product {
    id: number;
    category_id: number;
    name: string;
    description: string;
    price: string;
    stock_quantity: number;
    image_url: string;
  }
  
  // Review.ts
  export interface Review {
    id: number;
    product_id: number;
    user_id: number;
    rating: number;
    comment: string;
    date_created: string;
  }
  
  // Cart.ts
  export interface Cart {
    id: number;
    user_id: number;
  }
  
  // CartItem.ts
  export interface CartItem {
    id: number;
    cart_id: number;
    product_id: number;
    quantity: number;
  }
  
  // Order.ts
  export interface Order {
    id: number;
    user_id: number;
    address_id: number;
    date_created: string;
    status: 'Delivered' | 'Shipped' | 'Processing';
  }
  
  // OrderItem.ts
  export interface OrderItem {
    id: number;
    order_id: number;
    product_id: number;
    quantity: number;
    price_each: string;
  }
    