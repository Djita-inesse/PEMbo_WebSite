import React, { useState, useCallback } from 'react';
import { Box, Button, TextField, Typography, FormControlLabel, Checkbox, Select, MenuItem, InputLabel, FormControl, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDropzone } from 'react-dropzone';

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

const ProductCreate = () => {
  // State hooks for each form field
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [oldPrice, setOldPrice] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [category, setCategory] = useState('');
  const [keepSelling, setKeepSelling] = useState(false);
  const [images, setImages] = useState<ImageFile[]>([]);

  // Dropzone setup
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
    setImages(acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })));
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  // Fake categories
  const categories = [{ id: 10, name: 'Ten' }, { id: 20, name: 'Twenty' }];

  React.useEffect(() => {
    return () => images.forEach(file => URL.revokeObjectURL(file.preview));
  }, [images]);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        Create a new product
      </Typography>

      <Box component="form" noValidate autoComplete="off">
        <Typography variant="h6" gutterBottom>
          Basic details
        </Typography>
        <Input
          fullWidth
          label="Product Name"
          variant="outlined"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <ReactQuill theme="snow" value={description} onChange={setDescription} />

        <Typography variant="h6" gutterBottom>
          Images
        </Typography>
        <StyledDropZone {...getRootProps()}>
          <input {...getInputProps()} />
          {
            isDragActive ?
              <p>Drop the images here...</p> :
              <p>Drag 'n' drop some images here, or click to select images</p>
          }
          <Box>
            {images.map((file) => (
              <Box key={file.name} sx={{ margin: 1 }}>
                <img src={file.preview} alt={file.name} style={{ width: '100px', height: '100px' }} />
              </Box>
            ))}
          </Box>
        </StyledDropZone>

        <Typography variant="h6" gutterBottom>
          Pricing
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Input
              fullWidth
              type="number"
              label="Old price"
              variant="outlined"
              value={oldPrice}
              onChange={(e) => setOldPrice(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              fullWidth
              type="number"
              label="New price"
              variant="outlined"
              value={newPrice}
              onChange={(e) => setNewPrice(e.target.value)}
            />
          </Grid>
        </Grid>
        <FormControlLabel
          control={<Checkbox checked={keepSelling} onChange={(e) => setKeepSelling(e.target.checked)} />}
          label="Keep selling when stock is empty"
        />

        <Typography variant="h6" gutterBottom>
          Category
        </Typography>
        <FormControl fullWidth>
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
            value={category}
            label="Category"
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <MenuItem key={cat.id} value={cat.id}>
                {cat.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 2 }}>
          <Button variant="outlined" color="primary">
            Cancel
          </Button>
          <Button variant="contained" color="secondary">
            Create
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCreate;
