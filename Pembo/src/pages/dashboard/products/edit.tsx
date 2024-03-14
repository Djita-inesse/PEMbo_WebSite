import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductForm from './productForm';
import { Product } from '../../../types/dataTypes';
import mockData from '../../../assets/mockData.json';

const { products } = mockData;

interface RouteParams {
    productId: string;
    [key: string]: string;
}

const fetchProductById = async (productId: string): Promise<Product | undefined> => {
    return products.find((product) => product.id === Number(productId));
}

const ProductEdit = () => {


    const { productId } = useParams<RouteParams>();
    const [existingProduct, setExistingProduct] = useState<Product | undefined>();

    useEffect(() => {
        const fetchAndSetProduct = async () => {
            if (!productId) return;
            const productData = await fetchProductById(productId);
            if (productData) {
                setExistingProduct(productData);
            } else {
                // Handle the error case when the product is not found
                console.error('Product not found');
                // navigate back to a default page or show an error message
            }
        };
        fetchAndSetProduct();
    }, [productId]);

    return <ProductForm existingProduct={existingProduct} />;
};

export default ProductEdit;
