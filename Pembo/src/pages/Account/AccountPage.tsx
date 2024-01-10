import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import avartaricon from "../../assets/images/person-standing.png";
import "../../css/AccountPage.css";
import {
  Grid,
  Button,
  CssBaseline,
  List,
  ListItem,
  ListItemText,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  styled,
  Avatar,
  Stack,
  IconButton,
  TextField,
} from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <div className="title">
        <p>Account</p>
      </div>
      <>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="General" {...a11yProps(0)} />
              <Tab label="Billing" {...a11yProps(1)} />
              <Tab label="Team" {...a11yProps(2)} />
              <Tab label="Notifications" {...a11yProps(3)} />
              <Tab label="Security" {...a11yProps(4)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Box sx={{ flexGrow: 1, marginTop: "3%" }}>
              <Grid container spacing={-1}>
                <Grid xs>
                  <Item sx={{ background: "white" }}>
                    <div className="Container">
                      <div className="panel1">
                        <p>Basic details</p>
                      </div>
                      <div className="panel2">
                        <div className="avatar">
                          <Stack direction="row" spacing={1}>
                            <IconButton
                              aria-label="fingerprint"
                              color="secondary"
                            >
                              <Avatar
                                src={avartaricon}
                                sx={{
                                  width: 100,
                                  height: 100,
                                  background: "rgb(41, 112, 255)",
                                }}
                              />
                              <VisuallyHiddenInput type="file" />
                            </IconButton>
                          </Stack>
                          <Button>Change</Button>
                        </div>
                        <div className="TextField">
                          <div className="TextField1"></div>
                          <div>
                            <TextField
                              fullWidth
                              label="fullWidth"
                              id="fullWidth"
                            />
                           
                          </div> 
                          <Button >save</Button>
                          <div className="TextField2">
                            <Box
                              sx={{
                                width: 500,
                                maxWidth: "100%",
                              }}
                            >
                              <TextField
                                disabled
                                id="filled-disabled"
                                label="Disabled"
                                defaultValue="Hello World"
                                variant="filled"
                                fullWidth
                              />
                            
                            </Box>  <Button>edit</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Item>
                </Grid>
              </Grid>
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Item Two
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Item Three
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            Item four
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
            Item five
          </CustomTabPanel>
        </Box>
      </>
    </>
  );
}
