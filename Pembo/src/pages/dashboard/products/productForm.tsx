import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography, FormControlLabel, Checkbox, Select, MenuItem, InputLabel, FormControl, Grid } from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import mockData from '../../../assets/mockData.json';

const { products, categories, } = mockData;

// Assuming you have a function to fetch a product by ID for editing
// and functions to update or create a product
//  getProductById, updateProduct, createProduct }
const getProductById = async (id:number) => {
    return products.find((product) => product.id === id);
}
const updateProduct = async (id:number, product) => {
    // Update the product
    products[products.findIndex((p) => p.id === id)] = product;
}


const ProductForm = ({ existingProduct }) => {
    const navigate = useNavigate();
    const { productId } = useParams();
    const isEditMode = !!existingProduct || !!productId;

    // Initial state setup
    const initialState = {
        name: '',
        description: '',
        oldPrice: '',
        newPrice: '',
        category: '',
        keepSelling: false,
        images: [],
    };

    const [product, setProduct] = useState(initialState);
    const [categories] = useState([{ id: 10, name: 'Ten' }, { id: 20, name: 'Twenty' }]); // Example categories

    useEffect(() => {
        const fetchProduct = async () => {
            if (!isEditMode) return;
            // Fetch the product to edit
            const productData = existingProduct ? existingProduct : await getProductById(productId);
            setProduct(productData);
        };
        fetchProduct();
    }, [isEditMode, existingProduct, productId]);

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        setProduct((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isEditMode) {
            await updateProduct(productId, product);
        } else {
            await createProduct(product);
        }
        navigate('/products'); // Navigate back to products list after submit
    };

    // UI rendering with conditional logic for Create/Edit modes
    return (
        <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
            <Typography variant="h5" gutterBottom>
                {isEditMode ? 'Edit Product' : 'Create New Product'}
            </Typography>

            <TextField
                fullWidth
                label="Product Name"
                variant="outlined"
                name="name"
                value={product.name}
                onChange={handleChange}
                margin="normal"
            />

            {/* Additional fields (description, pricing, etc.) follow the same pattern */}
            {/* ReactQuill for description, TextFields for pricing, and so on */}

            <FormControl fullWidth margin="normal">
                <InputLabel>Category</InputLabel>
                <Select
                    name="category"
                    value={product.category}
                    label="Category"
                    onChange={handleChange}
                >
                    {categories.map((cat) => (
                        <MenuItem key={cat.id} value={cat.name}>
                            {cat.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControlLabel
                control={
                    <Checkbox
                        checked={product.keepSelling}
                        onChange={handleChange}
                        name="keepSelling"
                    />
                }
                label="Keep selling when out of stock"
            />

            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                {isEditMode ? 'Save Changes' : 'Create Product'}
            </Button>
        </Box>
    );
};

export default ProductForm;
