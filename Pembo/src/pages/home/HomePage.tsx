import { BottomNavigation, BottomNavigationAction, Box, Button, CssBaseline, Grid, List, ListItem, ListItemText, Paper, styled } from "@mui/material";
import React from "react";
import iconly from "../../assets/images/iconly.svg";
import iconly2 from "../../assets/images/iconly-glass-info.svg";
import iconly3 from "../../assets/images/iconly-glass-paper.svg";
import person from "../../assets/images/person-standing.png";
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';

import nextI from "../../assets/images/next-tip.svg";
import EastIcon from "@mui/icons-material/East";
import SettingsIcon from '@mui/icons-material/Settings';
import "../../css/Page.css";

type Props = {};
function refreshMessages(): MessageExample[] {
  const getRandomInt = (max: number) => Math.floor(Math.random() * Math.floor(max));

  return Array.from(new Array(1)).map(
    () => messageExamples[getRandomInt(messageExamples.length)],
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

      <Box sx={{ flexGrow: 1, marginTop: "3%"}}>
        <Grid container spacing={-1} >
          <Grid xs >
            <Item sx={{background:'rgb(246, 254, 249)'}}>
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
                  <Button variant="contained">  <SettingsIcon/> Open App settings</Button>

                </div>
              </div>
            </Item>
          </Grid>
          <Grid xs={5}>
            <Item><div> <img src={nextI} />
            </div>
            
            <div>  <Box sx={{ pb: 1 }} ref={ref}>
      <CssBaseline />
      <List>
        {messages.map(({ primary, secondary, person }, index) => (
          <ListItem button key={index + person}>
           
            <ListItemText primary={primary} secondary={secondary} />
          </ListItem>
        ))}
      </List>
      <Paper sx={{ position: 'static', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
    
    </div></Item>
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
    primary: 'Brunch this week?',
    secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
    person: '/static/images/avatar/5.jpg',
  },
  {
    primary: 'Birthday Gift',
    secondary: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
    person: '/static/images/avatar/1.jpg',
  },
  {
    primary: 'Recipe to try',
    secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
    person: '/static/images/avatar/2.jpg',
  },
  {
    primary: 'Yes!',
    secondary: 'I have the tickets to the ReactConf for this year.',
    person: '/static/images/avatar/3.jpg',
  },
  {
    primary: "Doctor's Appointment",
    secondary: 'My appointment for the doctor was rescheduled for next Saturday.',
    person: '/static/images/avatar/4.jpg',
  },
  {
    primary: 'Discussion',
    secondary: `Menus that are generated by the bottom app bar (such as a bottom
      navigation drawer or overflow menu) open as bottom sheets at a higher elevation
      than the bar.`,
    person: '/static/images/avatar/5.jpg',
  },
  {
    primary: 'Summer BBQ',
    secondary: `Who wants to have a cookout this weekend? I just got some furniture
      for my backyard and would love to fire up the grill.`,
    person: '/static/images/avatar/1.jpg',
  },
];

export default HomePage;
