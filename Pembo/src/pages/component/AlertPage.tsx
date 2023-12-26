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
  useTheme,
  useMediaQuery
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import mockData from '../../assets/mockData.json'

const products = mockData.products;

const ProductsTable = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box overflow="auto">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Stock Quantity</TableCell>
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
                  <Box display="flex" alignItems="center">
                    <img
                      src={product.image_url}
                      alt={product.name}
                      style={{ width: '50px', height: '50px', marginRight: '10px' }}
                    />
                    {isMobile ? product.name.slice(0, 15) + '...' : product.name}
                  </Box>
                </TableCell>
                <TableCell align="right">{product.price}</TableCell>
                <TableCell align="right">{isMobile ? product.description.slice(0, 50) + '...' : product.description}</TableCell>
                <TableCell align="right">{product.stock_quantity}</TableCell>
                <TableCell align="right">
                  <IconButton color="primary">
                    <AddIcon />
                  </IconButton>
                  <IconButton color="secondary">
                    <EditIcon />
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
