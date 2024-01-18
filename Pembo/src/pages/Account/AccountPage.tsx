import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Box from "@mui/material/Box";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import avartaricon from "../../assets/images/person-standing.png";
import "../../css/AccountPage.css";
import {
  Grid,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  styled,
  Avatar,
  Stack,
  IconButton,
  TextField,
  Switch,
  Divider,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  Table,
  TableHead,
  InputAdornment,
} from "@mui/material";



interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function createData(date: string, total: number, link: string) {
  return { date, total, link };
}

const rows = [
  createData("11 Dec 2023", 4.99, "View Invoice"),
  createData("11 Nov 2023", 4.99, "View Invoice"),
  createData("11 Oct 2023", 4.99, "View Invoice"),
];
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
  const [showPassword, setShowPassword] = React.useState(false);

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

  const [spacing, setSpacing] = React.useState(2);


  return (
    <>
      <div className="title">
        <p>Account</p>
      </div>
      <>
        <Box sx={{ width: "100%", padding: "0px" }}>
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
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                      <div className="Container1">
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
                                    border: "1px solid white",
                                    borderWidth: "3px",
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
                            <div>
                              <TextField
                                label="fullWidth"
                                sx={{ width: "87%" }}
                              />

                              <Button>save</Button>
                            </div>

                            <div>
                              <TextField
                                disabled
                                sx={{ width: "87%" }}
                                label="Disabled"
                                defaultValue="Hello World"
                                variant="filled"
                              />

                              <Button>edit</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Box>

                    <Box
                      sx={{
                        borderBottom: 1,
                        borderColor: "divider",
                        marginTop: "3%",
                      }}
                    >
                      <div className="Container1">
                        <div className="panel1">
                          <p>Public profile</p>
                        </div>
                        <div className="panel2">
                          <div className="note">
                            <div className="note1">
                              <h5>Make Contact Info Public</h5>
                              <h6>
                                Means that anyone viewing your profile will be
                                able to see your contacts details.
                              </h6>
                            </div>
                            <div>
                              <Switch defaultChecked color="secondary" />
                            </div>
                          </div>
                          <div className="note">
                            <div>
                              <h5>Make Contact Info Public</h5>
                              <h6>
                                Means that anyone viewing your profile will be
                                able to see your contacts details.
                              </h6>
                            </div>
                            <div>
                              <Switch defaultChecked color="secondary" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Box>
                    <Box
                      sx={{
                        borderBottom: 1,
                        borderColor: "divider",
                        marginTop: "3%",
                      }}
                    >
                      <div className="Container1">
                        <div className="panel1">
                          <p>Delete Account</p>
                        </div>
                        <div className="panel2">
                          <div className="delete">
                            <div>
                              <h6>
                                Delete your account and all of your source data.
                                This is irreversible..
                              </h6>
                            </div>
                            <div>
                              <Button variant="outlined" color="error">
                                Delete Account
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Box>
                  </Item>
                </Grid>
              </Grid>
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <div className="Container2">
                <div className="panel3">
                  <p>Change Plan</p>
                  <h6>You can upgrade and downgrade whenever you want </h6>
                </div>

                <div>
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={3}>
                      <Grid item xs>
                        <Item
                          className="item1"
                          sx={{
                            borderRadius: "20px",
                            transition:
                              "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                            border: "2px solid transparent",
                            overflow: "hidden",
                            margin: "-1px",
                          }}
                        >
                          <div>
                            <svg
                              fill="none"
                              height="33"
                              viewBox="0 0 24 33"
                              width="24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.7898 0.492981L23.0191 5.55771C23.2324 5.67468 23.4097 5.84498 23.5332 6.05102C23.6567 6.25713 23.7218 6.49154 23.7218 6.73031C23.7218 6.96907 23.6567 7.20348 23.5332 7.4096C23.4097 7.61564 23.2324 7.78594 23.0191 7.9029L13.7899 12.9679C13.2008 13.2911 12.5366 13.4609 11.861 13.4609C11.1852 13.4609 10.521 13.2911 9.93202 12.9679L0.702682 7.9029C0.489532 7.78594 0.312084 7.61564 0.188587 7.4096C0.0650921 7.20348 -9.53674e-06 6.96907 -9.53674e-06 6.73031C-9.53674e-06 6.49154 0.0650921 6.25713 0.188587 6.05102C0.312084 5.84498 0.489532 5.67468 0.702682 5.55771L9.93202 0.492981C10.521 0.169739 11.1852 -5.72205e-06 11.861 -5.72205e-06C12.5366 -5.72205e-06 13.2008 0.169739 13.7898 0.492981Z"
                                fill="#2970FF"
                              ></path>
                            </svg>
                            <p>
                              $0.00 <span>/mo</span>{" "}
                            </p>
                            <h6>STARTUP</h6>{" "}
                          </div>
                        </Item>
                      </Grid>
                      <Grid item xs>
                        <Item
                          className="item1"
                          sx={{
                            borderRadius: "20px",
                            transition:
                              "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                            border: "2px solid transparent",
                            overflow: "hidden",
                            margin: "-1px",
                          }}
                        >
                          <div>
                            <svg
                              fill="none"
                              height="33"
                              viewBox="0 0 33 33"
                              width="33"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M18.4946 0.492981L27.7239 5.55771C27.9372 5.67468 28.1145 5.84498 28.238 6.05102C28.3615 6.25713 28.4266 6.49154 28.4266 6.73031C28.4266 6.96907 28.3615 7.20348 28.238 7.4096C28.1145 7.61564 27.9372 7.78594 27.7239 7.9029L18.4947 12.9679C17.9056 13.2911 17.2414 13.4609 16.5658 13.4609C15.89 13.4609 15.2258 13.2911 14.6368 12.9679L5.40749 7.9029C5.19434 7.78594 5.01689 7.61564 4.89339 7.4096C4.7699 7.20348 4.70479 6.96907 4.70479 6.73031C4.70479 6.49154 4.7699 6.25713 4.89339 6.05102C5.01689 5.84498 5.19434 5.67468 5.40749 5.55771L14.6368 0.492981C15.2258 0.169739 15.89 -5.72205e-06 16.5658 -5.72205e-06C17.2414 -5.72205e-06 17.9056 0.169739 18.4946 0.492981Z"
                                fill="#2970FF"
                              ></path>
                              <path
                                d="M18.4448 5.2478L31.6626 12.5013C31.8758 12.6183 32.0532 12.7886 32.1767 12.9946C32.3002 13.2007 32.3653 13.4351 32.3653 13.6739C32.3653 13.9127 32.3002 14.1471 32.1767 14.3532C32.0532 14.5593 31.8758 14.7295 31.6626 14.8466L18.4448 22.1C17.8558 22.4231 17.1916 22.593 16.516 22.593C15.8403 22.593 15.1761 22.4231 14.5871 22.1L1.3693 14.8466C1.15615 14.7295 0.978699 14.5593 0.855202 14.3532C0.731705 14.1471 0.666607 13.9127 0.666607 13.6739C0.666607 13.4351 0.731705 13.2007 0.855202 12.9946C0.978699 12.7886 1.15615 12.6183 1.3693 12.5013L14.5871 5.2478C15.1761 4.92464 15.8403 4.75489 16.516 4.75489C17.1916 4.75489 17.8558 4.92464 18.4448 5.2478Z"
                                fill="#2970FF"
                                opacity="0.7"
                              ></path>
                            </svg>
                            <p>
                              $4.99 <span>/mo</span>{" "}
                            </p>
                            <h6>STANDARD</h6>{" "}
                          </div>
                        </Item>
                      </Grid>
                      <Grid item xs>
                        <Item
                          className="item1"
                          sx={{
                            borderRadius: "20px",
                            transition:
                              "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                            border: "2px solid transparent",
                            overflow: "hidden",
                            margin: "-1px",
                          }}
                        >
                          <div>
                            <svg
                              fill="none"
                              height="33"
                              viewBox="0 0 43 33"
                              width="43"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M23.0075 0.49292L32.2369 5.55765C32.4501 5.67462 32.6275 5.84492 32.751 6.05096C32.8745 6.25707 32.9396 6.49148 32.9396 6.73025C32.9396 6.96901 32.8745 7.20342 32.751 7.40954C32.6275 7.61558 32.4501 7.78587 32.2369 7.90284L23.0076 12.9678C22.4186 13.2911 21.7543 13.4609 21.0787 13.4609C20.403 13.4609 19.7387 13.2911 19.1498 12.9678L9.92043 7.90284C9.70728 7.78587 9.52983 7.61558 9.40633 7.40954C9.28284 7.20342 9.21773 6.96901 9.21773 6.73025C9.21773 6.49148 9.28284 6.25707 9.40633 6.05096C9.52983 5.84492 9.70728 5.67462 9.92043 5.55765L19.1498 0.49292C19.7387 0.169678 20.403 -6.67572e-05 21.0787 -6.67572e-05C21.7543 -6.67572e-05 22.4186 0.169678 23.0075 0.49292Z"
                                fill="#2970FF"
                              ></path>
                              <path
                                d="M22.9577 5.24774L36.1755 12.5012C36.3886 12.6182 36.5661 12.7885 36.6896 12.9945C36.8131 13.2007 36.8782 13.4351 36.8782 13.6738C36.8782 13.9126 36.8131 14.1471 36.6896 14.3531C36.5661 14.5592 36.3886 14.7295 36.1755 14.8465L22.9577 22.0999C22.3687 22.4231 21.7045 22.5929 21.0288 22.5929C20.3532 22.5929 19.6889 22.4231 19.1 22.0999L5.88218 14.8465C5.66903 14.7295 5.49158 14.5592 5.36808 14.3531C5.24458 14.1471 5.17949 13.9126 5.17949 13.6738C5.17949 13.4351 5.24458 13.2007 5.36808 12.9945C5.49158 12.7885 5.66903 12.6182 5.88218 12.5012L19.1 5.24774C19.6889 4.92458 20.3532 4.75483 21.0288 4.75483C21.7045 4.75483 22.3687 4.92458 22.9577 5.24774Z"
                                fill="#2970FF"
                                opacity="0.7"
                              ></path>
                              <path
                                d="M23.259 10.0018L41.6317 20.0843C41.8445 20.2012 42.0217 20.3711 42.145 20.5769C42.2683 20.7826 42.3333 21.0167 42.3333 21.2551C42.3333 21.4935 42.2683 21.7275 42.145 21.9333C42.0217 22.139 41.8445 22.309 41.6317 22.4258L23.2589 32.5081C22.6709 32.8307 22.0078 33.0002 21.3332 33.0002C20.6587 33.0002 19.9955 32.8307 19.4075 32.5081L1.03479 22.4258C0.821995 22.309 0.644833 22.139 0.521538 21.9333C0.398247 21.7275 0.333252 21.4935 0.333252 21.2551C0.333252 21.0167 0.398247 20.7826 0.521538 20.5769C0.644833 20.3711 0.821995 20.2012 1.03479 20.0843L19.4075 10.0018C19.9955 9.67921 20.6587 9.50966 21.3332 9.50966C22.0078 9.50966 22.6709 9.67921 23.259 10.0018Z"
                                fill="#2970FF"
                                opacity="0.4"
                              ></path>
                            </svg>
                            <p>
                              $29.99
                              <span>/mo</span>{" "}
                            </p>
                            <h6>BUSINESS</h6>{" "}
                          </div>
                        </Item>
                      </Grid>
                    </Grid>
                  </Box>
                </div>
                <div>
                  <div className="panel4">
                    <p> Billing details</p>
                    <Button size="small" startIcon={<EditOutlinedIcon />}>
                      Edit
                    </Button>
                  </div>
                  <List sx={{ maxWidth: "100%" }}>
                    <div className="listItem">
                      <ListItem>
                        <ListItemText primary="Billing name" />
                        <input type="text" placeholder="John Doe" disabled />
                      </ListItem>

                      <Divider component="li" sx={{ maxWidth: "100%" }} />
                      <ListItem>
                        <ListItemText primary="Card number" />
                        <input type="text" placeholder="**** 1111" disabled />
                      </ListItem>
                      <Divider
                        variant="middle"
                        component="li"
                        sx={{ maxWidth: "100%" }}
                      />
                      <ListItem>
                        <ListItemText primary="Country" />
                        <input type="text" placeholder="Germany" disabled />
                      </ListItem>
                      <Divider
                        variant="middle"
                        component="li"
                        sx={{ maxWidth: "100%" }}
                      />
                      <ListItem>
                        <ListItemText primary="Zip / Postal code" />{" "}
                        <input type="text" placeholder="667123" disabled />
                      </ListItem>
                    </div>
                  </List>
                  <div className="link">
                    <h6>
                      We cannot refund once you purchased a subscription, but
                      you can always <a>cancel</a>
                    </h6>
                    <Button
                      variant="contained"
                      disableElevation
                      sx={{
                        background: "rgb(41, 112, 255)",
                        fontFamily:
                          "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
                        fontSize: "0.875rem",
                        lineHeight: 1.75,
                        minWidth: "64px",
                        borderRadius: "12px",
                      }}
                    >
                      Upgrade Plan
                    </Button>
                  </div>

                  <div>
                    <div className="Invoice_history">
                      <div className="panel3">
                        <p>Invoice history</p>
                        <h6>
                          You can view and download all your previous invoices
                          here. If you’ve just made a payment, it may take a few
                          hours for it to appear in the table below.{" "}
                        </h6>
                      </div>
                      <TableContainer component={Paper}>
                        <Table
                          sx={{ minWidth: 650, color: "#111927" }}
                          aria-label="simple table"
                        >
                          <TableHead>
                            <TableRow
                              sx={{
                                color: "#111927",
                                background: "rgb(248, 249, 250)",
                              }}
                            >
                              <TableCell>DATE</TableCell>
                              <TableCell align="left">
                                TOTAL (INCL. TAX)
                              </TableCell>
                              <TableCell align="right"> </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {rows.map((row) => (
                              <TableRow
                                key={row.date}
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
                              >
                                <TableCell component="th" scope="row">
                                  {row.date}
                                </TableCell>
                                <TableCell align="left">{row.total}</TableCell>
                                <TableCell align="right">
                                  {" "}
                                  <a href="#">{row.link}</a>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </div>
                  </div>
                </div>
              </div>
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <div className="Invite_members">
              <div className="panel3">
                <p>Invite members</p>
                <h6>You currently pay for 2 Editor Seats.</h6>
              </div>

              <div className="element">
                <TextField
                  id="outlined-basic"
                  label="Email Adress"
                  sx={{ maxWidth: "75%", width: "75%" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                />

                <Button
                  variant="contained"
                  disableElevation
                  sx={{
                    background: "rgb(41, 112, 255)",

                    minWidth: "64px",
                    height: "40px",
                    borderRadius: "12px",
                  }}
                >
                  Send Invite
                </Button>
              </div>
            </div>
            <div></div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <div className="Container1">
              <div className="panel1">
                <p>Email</p>
              </div>
              <div className="panel2">
                <div className="note">
                  <div className="note1">
                    <h5>Product updates</h5>
                    <h6>News, announcements, and product updates.</h6>
                  </div>
                  <div>
                    <Switch defaultChecked color="secondary" />
                  </div>
                </div>
                <div className="note">
                  <div>
                    <h5>Security updates</h5>
                    <h6>
                      Important notifications about your account security.
                    </h6>
                  </div>
                  <div>
                    <Switch defaultChecked color="secondary" />
                  </div>
                </div>
              </div>
            </div>

            <div className="Container1">
              <div className="panel1">
                <p>Phone notifications</p>
              </div>
              <div className="panel2">
                <div className="note">
                  <div className="note1">
                    <h5>Security updates</h5>
                    <h6>
                      Important notifications about your account security.
                    </h6>
                  </div>
                  <div>
                    <Switch defaultChecked disabled color="secondary" />
                  </div>
                </div>
              </div>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
            <div className="Container1">
              <div className="panel1">
                <p>Change password</p>
              </div>
              <div className="panel2"></div>
            </div>
          </CustomTabPanel>
        </Box>
      </>
    </>
  );
}