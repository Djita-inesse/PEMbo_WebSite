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
  useMediaQuery,
  FormControl,
  Select,
  MenuItem,
  InputLabel
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import mockData from '../../../assets/mockData.json';
import { useState } from 'react';

const { products, categories, } = mockData;

const ProductsTable = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [displayedProducts, setDisplayedProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState<number>();
  const [stockFilter, setStockFilter] = useState(String)
  const [text, seText] = useState('')

  // Helper function to find the category name by its ID
  const getCategoryName = (categoryId: number) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.name : 'Unknown';
  };

  // Helper function to update the displayed products based on the search text
  const updateProductsDisplay = (text: string) => {
    seText(text)
    setDisplayedProducts(products.filter(product => product.name.toLowerCase().includes(text.toLowerCase())))
  }

  // Helper function to update the displayed products based on the selected category
  const updateProductsCategory = (categoryId: number) => {
    console.log(categoryId);
    if (categoryId === 0) {
      setDisplayedProducts(products)
      return;
    }
    setSelectedCategory(categoryId)
    setDisplayedProducts(products.filter(product => product.category_id === categoryId))
  }

  // Helper function to update the displayed products based on the stock filter
  const updateProductsStock = (stockFilter: string) => {
    setStockFilter(stockFilter)
    if (stockFilter === 'in-stock') {
      setDisplayedProducts(products.filter(product => product.stock_quantity > 0))
    } else if (stockFilter === 'out-of-stock') {
      setDisplayedProducts(products.filter(product => product.stock_quantity === 0))
    } else {
      setDisplayedProducts(products)
    }
  }

  const navigateToCreate = () => {
    window.location.href = '/product/create';
  }
  return (
    <Box sx={{ overflow: 'auto', p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h4" component="div">
          Products
        </Typography>
        <Button variant="contained" startIcon={<AddIcon />} sx={{ bgcolor: 'secondary.main' }} onClick={navigateToCreate}>
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
          type="search"
          variant="outlined"
          value={text}
          onChange={(e) => updateProductsDisplay(e.target.value)}
        />
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
            value={selectedCategory}
            label="Category"
            onChange={(e) => updateProductsCategory(e.target.value as number)}
          >
            <MenuItem value={0}>All Categories</MenuItem>
            {categories.map((category) => (
              <MenuItem key={category.id} value={category.id}>
                {category.name}
              </MenuItem>
            )
            )}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="stock-select-label">Stock</InputLabel>
          <Select
            labelId="stock-select-label"
            id="stock-select"
            value={stockFilter}
            label="Stock"
            onChange={(e) => updateProductsStock(e.target.value as string)}
          >
            <MenuItem value="">All Stock</MenuItem>
            <MenuItem value="in-stock">In Stock</MenuItem>
            <MenuItem value="out-of-stock">Out of Stock</MenuItem>
          </Select>
        </FormControl>
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
            {displayedProducts.map((product) => (
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