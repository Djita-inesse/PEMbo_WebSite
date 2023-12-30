import {
  Avatar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  CssBaseline,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Tab,
  Tabs,
  Typography,
  styled,
} from "@mui/material";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import React from "react";
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import iconly from "../../assets/images/iconly.svg";
import iconly2 from "../../assets/images/iconly-glass-info.svg";
import iconly3 from "../../assets/images/iconly-glass-paper.svg";
import person from "../../assets/images/person-standing.png";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import ReplayIcon from "@mui/icons-material/Replay";
import nextI from "../../assets/images/next-tip.svg";
import EastIcon from "@mui/icons-material/East";
import Badge from "@mui/material/Badge";
import SettingsIcon from "@mui/icons-material/Settings";
import "../../css/Page.css";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));
type Props = {};
function refreshMessages(): MessageExample[] {
  const getRandomInt = (max: number) =>
    Math.floor(Math.random() * Math.floor(max));

  return Array.from(new Array(1)).map(
    () => messageExamples[getRandomInt(messageExamples.length)]
  );
}
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const HomePage = (props: Props) => {
  const [value1, setValue1] = React.useState("one");

  const handleChange1 = (event: React.SyntheticEvent, newValue1: string) => {
    setValue1(newValue1);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const [messages, setMessages] = React.useState(() => refreshMessages());

  React.useEffect(() => {
    (ref.current as HTMLDivElement).ownerDocument.body.scrollTop = 0;
    setMessages(refreshMessages());
  }, [value, setMessages]);
  return (
    <div className="Containerpage">
      <div className="title">
        {" "}
        <p>Overview</p>
        <div>
          {" "}
          <Button variant="contained">+ New Dashboard</Button>
        </div>{" "}
      </div>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Item>
              <div className="Container">
                <div>
                  {" "}
                  <img src={iconly} />
                </div>
                <div className="data">
                  <p>Done Tasks</p>
                  <h4>34</h4>
                </div>
              </div>

              <hr />
              <div className="btnDiv">
                {" "}
                <Button variant="text">
                  see all tasks <EastIcon sx={{ fontSize: "18px" }} />{" "}
                </Button>
              </div>
            </Item>
          </Grid>
          <Grid item xs>
            <Item>
              <div className="Container">
                <div>
                  {" "}
                  <img src={iconly2} />
                </div>
                <div className="data">
                  <p>Done Tasks</p>
                  <h4>34</h4>
                </div>
              </div>
              <hr />
              <div className="btnDiv">
                {" "}
                <Button variant="text">
                  see all tasks <EastIcon sx={{ fontSize: "18px" }} />{" "}
                </Button>
              </div>
            </Item>
          </Grid>
          <Grid item xs>
            <Item>
              <div className="Container">
                <div>
                  {" "}
                  <img src={iconly3} />
                </div>
                <div className="data">
                  <p>Done Tasks</p>
                  <h4>34</h4>
                </div>
              </div>
              <hr />
              <div className="btnDiv">
                {" "}
                <Button variant="text">
                  see all tasks <EastIcon sx={{ fontSize: "18px" }} />{" "}
                </Button>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1, marginTop: "3%" }}>
        <Grid container spacing={-1}>
          <Grid xs>
            <Item sx={{ background: "rgb(246, 254, 249)" }}>
              <div className="panelData">
                <div className="panel1">
                  {" "}
                  <img src={person} />{" "}
                </div>

                <div className="panelDataData">
                  <span>New update</span>
                  <h6>New update available!v</h6>
                  <p>
                    Your favorite template has a new trendy look, more
                    customization options, screens & more.
                  </p>
                  <Button variant="contained">
                    {" "}
                    <SettingsIcon /> Open App settings
                  </Button>
                </div>
              </div>
            </Item>
          </Grid>
          <Grid xs={5}>
            <Item sx={{ height: "100%" }}>
              <div>
                {" "}
                <img src={nextI} />
              </div>

              <div>
                {" "}
                <Box sx={{ pb: 1 }} ref={ref}>
                  <CssBaseline />
                  <List sx={{ height: "140px" }}>
                    {messages.map(({ primary, secondary, person }, index) => (
                      <ListItem button key={index + person}>
                        <ListItemText primary={primary} secondary={secondary} />
                      </ListItem>
                    ))}
                  </List>
                  <Paper
                    sx={{ position: "static", bottom: -10, left: 0, right: 0 }}
                    elevation={0}
                  >
                    <BottomNavigation
                      showLabels
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    >
                      <BottomNavigationAction icon={<RestoreIcon />} />
                      <BottomNavigationAction icon={<FavoriteIcon />} />
                      <BottomNavigationAction icon={<ArchiveIcon />} />
                    </BottomNavigation>
                  </Paper>
                </Box>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1, marginTop: "3%" }}>
        <Grid container spacing={-1}>
          <Grid xs>
            <Item sx={{ background: "rgb(246, 254, 249)" }}>
              <div className="Chart_Item">
                <div className="sub_title">
                  <p>Subscription Usage</p>
                  <h6>Based on the selected period</h6>
                </div>
                <div className="Tabs">
                  <Box sx={{ width: "100%" }}>
                    <Tabs
                      value={value1}
                      onChange={handleChange1}
                      textColor="primary"
                      font-size="14px"
                      font-weight="500"
                      line-height="1.71"
                      indicatorColor="primary"
                    >
                      <Tab value="one" label="Year" />
                      <Tab value="two" label="Month" />
                      <Tab value="three" label="Week" />
                    </Tabs>
                  </Box>
                </div>

                <div></div>
              </div>

              <div></div>
            </Item>
          </Grid>
          <Grid xs={5}>
            <Item>
              <div className="Chart_Item2">
                <div className="sub_title2">
                  <p
                    style={{
                      fontSize: "16.6px",
                      fontWeight: "900",
                      color: "black",
                    }}
                  >
                    Inbox
                  </p>

                  <IconButton aria-label="undo">
                    <ReplayIcon />
                  </IconButton>
                </div>

                <div>
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      bgcolor: "background.paper",
                    }}
                  >
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar
                          alt="Remy Sharp"
                          src="/static/images/avatar/1.jpg"
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary="Brunch this weekend?"
                        secondary={
                          <React.Fragment>
                            <Typography
                              sx={{ display: "inline" }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              Ali Connors
                            </Typography>
                            {
                              " — I'll be in your neighborhood doing errands this…"
                            }
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />

                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <StyledBadge
                          overlap="circular"
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                          }}
                          variant="dot"
                        >
                          <Avatar
                            alt="Travis Howard"
                            src="/static/images/avatar/2.jpg"
                          />
                        </StyledBadge>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Summer BBQ"
                        secondary={
                          <React.Fragment>
                            <Typography
                              sx={{ display: "inline" }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              to Scott, Alex, Jennifer
                            </Typography>
                            {" — Wish I could come, but I'm out of town this…"}
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <StyledBadge
                          overlap="circular"
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                          }}
                          variant="dot"
                        >
                          <Avatar
                            alt="Cindy Baker"
                            src="/static/images/avatar/3.jpg"
                          />
                        </StyledBadge>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Oui Oui"
                        secondary={
                          <React.Fragment>
                            <Typography
                              sx={{ display: "inline" }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              Sandra Adams
                            </Typography>
                            {
                              " — Do you have Paris recommendations? Have you ever…"
                            }
                          </React.Fragment>
                        }
                      />
                    </ListItem>

                    <Divider variant="inset" component="li" />

                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <StyledBadge
                          overlap="circular"
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                          }}
                          variant="dot"
                        >
                          <Avatar
                            alt="Travis Howard"
                            src="/static/images/avatar/2.jpg"
                          />
                        </StyledBadge>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Summer BBQ"
                        secondary={
                          <React.Fragment>
                            <Typography
                              sx={{ display: "inline" }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              to Scott, Alex, Jennifer
                            </Typography>
                            {" — Wish I could come, but I'm out of town this…"}
                          </React.Fragment>
                        }
                      />
                    </ListItem>

                    <Divider variant="inset" component="li" />

                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar
                          alt="Travis Howard"
                          src="/static/images/avatar/2.jpg"
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary="Sam PPL"
                        secondary={
                          <React.Fragment>
                            <Typography
                              sx={{ display: "inline" }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              to Scott, Alex, Jennifer
                            </Typography>
                            {" — Wish I could come, but I'm out of town this…"}
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  </List>
                  <div className="btnDiv">
                    {" "}
                    <Button variant="text">
                      Go to chat <EastIcon sx={{ fontSize: "18px" }} />{" "}
                    </Button>
                  </div>
                </div>
              </div>

              <div></div>
            </Item>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1, marginTop: "3%" }}>
        <Grid container spacing={-1}>
          <Grid xs>
            <Item >
              <div className="panelData2">

                <div className="panelDataData_Last">
                  <WorkOutlineIcon  sx={{ color:"rgb(41, 112, 255)" }} /> <span> job</span>
                  <h6>Find your dream job</h6>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <div className="btnDiv">
                {" "}
                {" "}
                    <Button variant="text">
                    Search jobs <EastIcon sx={{ fontSize: "18px" }} />{" "}
                    </Button>
              </div>
                </div>
              </div>
            </Item>
          </Grid>
          <Grid xs={6}>
            <Item sx={{ height: "100%"}}>
            <div className="panelData2">

<div className="panelDataData_Last">
  <InfoOutlinedIcon sx={{color:"rgb(41, 112, 255)"}} /> <span> Help Center</span>
  <h6>Need help figuring things out?</h6>
  <p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>
  <div className="btnDiv">
{" "}
{" "}
    <Button variant="text">
    Help Center<InsertLinkOutlinedIcon sx={{ fontSize: "18px" }} />{" "}
    </Button>
</div>
</div>
</div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

interface MessageExample {
  primary: string;
  secondary: string;
  person: string;
}

const messageExamples: readonly MessageExample[] = [
  {
    primary: "Brunch this week?",
    secondary:
      "I'll be in the neighbourhood this week. Let's grab a bite to eat",
    person: "/static/images/avatar/5.jpg",
  },
  {
    primary: "Birthday Gift",
    secondary: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
    person: "/static/images/avatar/1.jpg",
  },
  {
    primary: "Recipe to try",
    secondary:
      "I am try out this new BBQ recipe, I think this might be amazing",
    person: "/static/images/avatar/2.jpg",
  },
  {
    primary: "Yes!",
    secondary: "I have the tickets to the ReactConf for this year.",
    person: "/static/images/avatar/3.jpg",
  },
  {
    primary: "Doctor's Appointment",
    secondary:
      "My appointment for the doctor was rescheduled for next Saturday.",
    person: "/static/images/avatar/4.jpg",
  },
  {
    primary: "Discussion",
    secondary: `Menus that are generated by the bottom app bar (such as a bottom
      navigation drawer or overflow menu) open as bottom sheets at a higher elevation
      than the bar.`,
    person: "/static/images/avatar/5.jpg",
  },
  {
    primary: "Summer BBQ",
    secondary: `Who wants to have a cookout this weekend? I just got some furniture
      for my backyard and would love to fire up the grill.`,
    person: "/static/images/avatar/1.jpg",
  },
];

export default HomePage;
