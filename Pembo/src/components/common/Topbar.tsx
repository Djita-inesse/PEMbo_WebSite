import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import sizeConfigs from "../../configs/sizeConfigs";
import React from "react";
import { PersonAdd, Settings, Logout } from "@mui/icons-material";

export default function Topbar() {
  // reserarch bar action
  const [openSB, setOpenSB] = React.useState(false);
  const handleClickOpenSB = () => {
    setOpenSB(true);
  };

  const handleCloseSB = () => {
    setOpenSB(false);
  };

  //Avartar btn action
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigateToAccount = () => {
    window.location.href = '/Account';
  }
  const navigateToLogin = () => {
    window.location.href = '/Login';
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${sizeConfigs.sidebar.width})`,
        ml: sizeConfigs.sidebar.width,
        boxShadow: "unset",
        backgroundColor: colorConfigs.topbar.bg,
        color: colorConfigs.topbar.color,
      }}
    >
      <Toolbar>
        <Typography variant="h6">
          <React.Fragment>
            <Button
              sx={{
                "&: hover": {
                  border: "none",
                },
                border: "none",
              }}
              variant="outlined"
              onClick={handleClickOpenSB}
            >
              <SearchOutlinedIcon
                sx={{
                  color: colorConfigs.sidebar.color,
                  fontSize: "35px",
                }}
              />
            </Button>
            <Dialog open={openSB} onClose={handleCloseSB}>
              <DialogTitle>Search</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  <Box
                    sx={{
                      background: "rgb(243, 244, 246)",
                      fontFamily:
                        'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
                      width: "522px",
                      fontSize: "0.75rem",
                      fontWeight: "500",
                      color: "rgb(108, 115, 127)",
                      padding: "8px",
                      height: "40px",
                      borderRadius: "5px",
                      textAlign: "center",
                    }}
                  >
                    {" "}
                    <strong>
                      <TipsAndUpdatesOutlinedIcon
                        sx={{
                          marginBottom: "-8px",
                          color: colorConfigs.sidebar.color,
                          fontSize: "25px",
                        }}
                      />{" "}
                      Tip.
                    </strong>
                    Search by entering a keyword and pressing Enter
                  </Box>
                </DialogContentText>
                <TextField
                  autoFocus
                  id="outlined-basic"
                  margin="dense"
                  label="Search"
                  type="text"
                  variant="outlined"
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseSB} variant="text">
                  Cancel
                </Button>
                <Button onClick={handleCloseSB}>Search</Button>
              </DialogActions>
            </Dialog>
          </React.Fragment>

        
          <Box
            sx={{
              width: `calc(100% - ${sizeConfigs.sidebar.width})`,
              ml: sizeConfigs.sidebar.width,
              boxShadow: "unset",
              display: "flex",
              backgroundColor: colorConfigs.topbar.bg,
              color: colorConfigs.topbar.color,
            }}
          >
            <React.Fragment>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  marginLeft: "1350%",
                  marginTop: "-48px",
                }}
              >
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <NotificationsIcon/>
                  </IconButton>
                </Tooltip>
              </Box>

              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "transla!teY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={navigateToAccount}>
                  <Avatar /> 2
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Add another account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </React.Fragment>
          </Box>
          <Box
            sx={{
              width: `calc(100% - ${sizeConfigs.sidebar.width})`,
              ml: sizeConfigs.sidebar.width,
              boxShadow: "unset",
              display: "flex",
              backgroundColor: colorConfigs.topbar.bg,
              color: colorConfigs.topbar.color,
            }}
          >
            <React.Fragment>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  marginLeft: "1350%",
                  marginTop: "-48px",
                }}
              >
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                  </IconButton>
                </Tooltip>
              </Box>

              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={navigateToAccount}>
                  <Avatar /> Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Add another account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </React.Fragment>
          </Box>
          
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

/*const Topbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${sizeConfigs.sidebar.width})`,
        ml: sizeConfigs.sidebar.width,
        boxShadow: "unset",
        backgroundColor: colorConfigs.topbar.bg,
        color: colorConfigs.topbar.color
      }}
    >
      <Toolbar>
        <Typography variant="h6">
        
        </Typography>
      </Toolbar> 
    </AppBar>
  );
};*/
