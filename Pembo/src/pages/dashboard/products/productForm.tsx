import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography, FormControlLabel, Checkbox, Select, MenuItem, InputLabel, FormControl, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDropzone } from 'react-dropzone';
import { Product } from '../../../types/dataTypes';

type ImageFile = File & {
    preview: string;
};

const Input = styled(TextField)(({ theme }) => ({
    margin: theme.spacing(1),
}));

const StyledDropZone = styled('div')(({ theme }) => ({
    border: `2px dashed ${theme.palette.primary.main}`,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2),
    textAlign: 'center',
    cursor: 'pointer',
    marginBottom: theme.spacing(2),
}));

const ProductForm = ({ existingProduct }: { existingProduct?: Product }) => {
    const navigate = useNavigate();
    const { productId } = useParams();
    const isEditMode = Boolean(existingProduct || productId);

    const initialState = {
        id: existingProduct?.id || 0,
        name: '',
        description: '',
        price: '',
        category_id: 0,
        stock_quantity: 0,
        images: [],
        image_url: '',
    };

    const [product, setProduct] = useState<Product>(initialState);
    const [images, setImages] = useState<ImageFile[]>([]);
    const [categories, setCategories] = useState([{ id: '10', name: 'Ten' }, { id: '20', name: 'Twenty' }]);

    useEffect(() => {
        if (isEditMode && existingProduct) {
            setProduct(existingProduct);
            // convert images to the ImageFile type here
        }
    }, [isEditMode, existingProduct]);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        setImages(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })));
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    useEffect(() => {
        // Clean up the previews
        return () => images.forEach(file => URL.revokeObjectURL(file.preview));
    }, [images]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isEditMode) {
            console.log('Update product', product);
        } else {
            console.log('Create product', product);
        }
        navigate('/products');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProduct(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h5" gutterBottom>
                {isEditMode ? 'Edit Product' : 'Create a New Product'}
            </Typography>

            <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Typography variant="h6" gutterBottom>
                    Basic details
                </Typography>
                <Input
                    fullWidth
                    name="name"
                    label="Product Name"
                    variant="outlined"
                    value={product.name}
                    onChange={handleChange}
                />
                <ReactQuill theme="snow" value={product.description} onChange={value => setProduct(prev => ({ ...prev, description: value }))} />

                <Typography variant="h6" gutterBottom>
                    Images
                </Typography>
                <StyledDropZone {...getRootProps()}>
                    <input {...getInputProps()} />
                    {isDragActive ? <p>Drop the images here...</p> : <p>Drag 'n' drop some images here, or click to select images</p>}
                    <Box>
                        {images.map((file, index) => (
                            <Box key={index} sx={{ margin: 1 }}>
                                <img src={file.preview} alt={`preview-${index}`} style={{ width: '100px', height: '100px' }} />
                            </Box>
                        ))}
                    </Box>
                </StyledDropZone>

                <Typography variant="h6" gutterBottom>
                    Pricing and Stock
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Input
                            fullWidth
                            type="number"
                            name="price"
                            label="Price"
                            variant="outlined"
                            value={product.price}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Input
                            fullWidth
                            type="number"
                            name="stock_quantity"
                            label="Stock Quantity"
                            variant="outlined"
                            value={product.stock_quantity}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>

                <Typography variant="h6" gutterBottom>
                    Category
                </Typography>
                <FormControl fullWidth>
                    <InputLabel id="category-select-label">Category</InputLabel>
                    <Select
                        labelId="category-select-label"
                        id="category-select"
                        name="category_id"
                        value={product.category_id}
                        label="Category"
                        onChange={(e) => setProduct(prev => ({ ...prev, category_id: Number(e.target.value) }))}
                    >
                        {categories.map((cat) => (
                            <MenuItem key={cat.id} value={cat.id}>
                                {cat.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 2 }}>
                    <Button variant="outlined" onClick={() => navigate('/product/list')}>
                        Cancel
                    </Button>
                    <Button type="submit" variant="contained" color="primary">
                        {isEditMode ? 'Update' : 'Create'}
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default ProductForm;
