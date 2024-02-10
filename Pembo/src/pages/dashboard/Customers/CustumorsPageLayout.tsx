import { Box, Button, Tab, Tabs, Typography } from '@mui/material';
import React from 'react';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import "../../../css/CustumorsPage.css";
import { Outlet } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
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

const { users, addresses, } = mockData;
type Props = {};
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const CustomerPageLayout = (props: Props) => {
  
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };


  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [displayedusers, setDisplayedusers] = useState(users);
  const [selectedaddresses, setSelectedaddresses] = useState<number>();
  const [stockFilter, setStockFilter] = useState(String)
  const [text, seText] = useState('')

  // Helper function to find the addresses name by its ID
  const getaddressesName = (addressesId: number) => {
    const addresse = addresses.find((adr) => adr.id === addressesId);
    return addresse ? addresse.city : 'Unknown';
  };

  // Helper function to update the displayed users based on the search text
  const updateuserssDisplay = (text: string) => {
    seText(text)
    setDisplayedusers(users.filter(user => user.username.toLowerCase().includes(text.toLowerCase())))
  }

  // Helper function to update the displayed products based on the selected addresses
  const updateusersaddresses = (addressesId: number) => {
    console.log(addressesId);
    if (addressesId === 0) {
      setDisplayedusers(users)
      return;
    }
    setSelectedaddresses(addressesId)
    setDisplayedusers(users.filter(user => user.id=== addressesId))
  }

  // Helper function to update the displayed products based on the stock filter
  /*const updateusersaddressesfilter = (addressesFilter: string) => {
    setStockFilter(addressesFilter)
    if (stockFilter === 'in-stock') {
      setDisplayedProducts(products.filter(product => product.stock_quantity > 0))
    } else if (stockFilter === 'out-of-stock') {
      setDisplayedProducts(products.filter(product => product.stock_quantity === 0))
    } else {
      setDisplayedProducts(products)
    }
  }*/

  const navigateToEdit = () => {
    window.location.href = '/Customers/Edit';
  }
  return (
    
    <><div className="title">
      <p>Account
        <div> <Button className='ImExBtn'><SaveAltIcon sx={{ fontSize: "large" }} />Import</Button>
          <Button className='ImExBtn'><FileUploadOutlinedIcon sx={{ fontSize: "large" }} />Export</Button></div>
      </p>

      <div className='addbtn'>

        <Button variant="contained"> + Add</Button>
      </div>{" "}
    </div><div>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="All" {...a11yProps(0)} />
            <Tab label="Accepts Marketing" {...a11yProps(1)} />
            <Tab label="Prospect" {...a11yProps(2)} />
            <Tab label="Returning" {...a11yProps(3)} />
          </Tabs>
        </Box>

        <CustomTabPanel value={value} index={0}>
        <Box sx={{ mb: 3 }}>
        <TextField
          sx={{ mb: 2, width: '100%' }}
          placeholder="Search by username"
          InputProps={{
            startAdornment: <SearchIcon />,
          }}
          type="search"
          variant="outlined"
          value={text}
          onChange={(e) => updateuserssDisplay(e.target.value)}
        />

        
      
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="users table">
          <TableHead>
            <TableRow>
              <TableCell>username</TableCell>
              <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone_number</TableCell>
              <TableCell align="right">Adressse</TableCell>
              <TableCell align="right">Role</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedusers.map((user) => (
              <TableRow
                key={user.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      src={"https://loremflickr.com/640/480?lock=2695804426911744"}
                      style={{ width: '40px', height: '40px', marginRight: '10px', borderRadius:'40px', background:"red" }}
                    />
                    {isMobile ? user.username.slice(0, 15) + '...' : user.first_name}
                    <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>
                      {getaddressesName(user.id)}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="right">{`$${user.first_name}`}</TableCell>
                <TableCell align="right">{`$${user.last_name}`}</TableCell>
                <TableCell align="right">{`$${user.email}`}</TableCell>
                <TableCell align="right">{`$${user.phone_number}`}</TableCell>
                <TableCell align="right">{getaddressesName(user.id)}</TableCell>
                <TableCell align="right">{`$${user.role}`}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={navigateToEdit} color="primary">
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
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
         Accepts Marketing
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
        Prospect
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
        Returning
        </CustomTabPanel>
      </div></>

      
      
      );
};

export default CustomerPageLayout;