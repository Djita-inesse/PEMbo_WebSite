import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
  IconButton,
  Typography,
  TextField,
  useTheme,
  useMediaQuery
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// Assume that mockData is imported from a JSON file or similar
import mockData from '../../../assets/mockData.json';

const { products, categories } = mockData;

const ProductsTable = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Helper function to find the category name by its ID
  const getCategoryName = (categoryId: number) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.name : 'Unknown';
  };

  return (
    <Box sx={{ overflow: 'auto', p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h4" component="div">
          Products
        </Typography>
        <Button variant="contained" startIcon={<AddIcon />} sx={{ bgcolor: 'secondary.main' }}>
          Add
        </Button>
      </Box>
      <Box sx={{ mb: 3 }}>
        <TextField
          sx={{ mb: 2, width: '100%' }}
          placeholder="Search by product name"
          InputProps={{
            startAdornment: <SearchIcon />,
          }}
        />
        {/* Add Selects for Category, Status, and Stock here */}
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="products table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="right">Stock</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      src={product.image_url}
                      alt={product.name}
                      style={{ width: '50px', height: '50px', marginRight: '10px' }}
                    />
                    {isMobile ? product.name.slice(0, 15) + '...' : product.name}
                    <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>
                      {getCategoryName(product.category_id)}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="right" sx={{ color: product.stock_quantity > 0 ? 'success.main' : 'error.main' }}>
                  {product.stock_quantity} in stock
                </TableCell>
                <TableCell align="right">{`$${product.price}`}</TableCell>
                <TableCell align="right">{getCategoryName(product.category_id)}</TableCell>
                <TableCell align="right">
                  <IconButton color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton color="secondary">
                    <MoreVertIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProductsTable;