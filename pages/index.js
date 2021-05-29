import React from 'react';
import {Grid, MuiThemeProvider, Container, Tooltip,colors, Hidden, SwipeableDrawer, Backdrop} from "@material-ui/core";
import {AccountBox, Brightness4, Brightness7, Language, Laptop, ShowChart,Menu} from '@material-ui/icons';
import {useContext, useState} from "react";
import {ThemeContext} from "../components/theme";
import {projects,experience,data,titles,techStack} from "../all-data";
import Initial from '../components/Initial'
import simpleIcons from "simple-icons";
import {AnimatePresence} from "framer-motion";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Experience from "../components/Experience";

const drawerWidth = 80;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    overflowX: 'hidden',
},
drawerPaper: {
    width: drawerWidth,
    overflowX: 'hidden',
    paddingTop:20
},
backdrop: {
  zIndex: theme.zIndex.drawer + 1,
  color: '#fff',
},  
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));


const getIconData = (slug) => {
  let icon = simpleIcons.get(slug);
  return {
      path: icon.path,
      hex: icon.hex,
      title: icon.title
  }
}

export async function getStaticProps() {
  let iconData = data.map(({ alt, slug, url}) => {
    return {
        alt: alt,
        url: url,
        ...getIconData(slug)
    };
  });

  let obj = {};
    Object.keys(techStack).map((key, i) => {
        obj[key] = techStack[key].map(({alt, slug}, i) => {
            return {
                alt: alt,
                ...getIconData(slug)
            }
        })
    })

    projects.map(project => {
        let projectTechStack = {};
        Object.keys(project.techStack).map(key => {
            projectTechStack[key] = [];
            project.techStack[key].map(tool => {
                projectTechStack[key].push({alt: getIconData(tool).title, ...getIconData(tool)})
            })
        })
        project.techStack = projectTechStack;
    })

    return {
        props: {
            iconData: iconData,
            titles: titles,
            techStack: obj,
            delayPeriod: iconData.length,
            experience: experience,
            projects
        }
    }
}




const MainApp = (props) => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    const classes = useStyles();
    const [tabIndex, setTabIndex] = useState(0);
    const [open, setOpen] = React.useState(false);
  
    const objects = {
      'About':<AccountBox/>,
      'Skills' : <Language/>,
      'Projects':<Laptop/>,
      'Experience' : <ShowChart/>
    }

    let tabs = [
        {Component: Initial, name: 'About'},
        {Component: TechStack, name: 'Skills'},
        {Component: Projects, name: 'Projects'},
        {Component: Experience, name: 'Experience'},
    ]

    const drawer = ()=>(
      <Grid container direction="column" alignItems="center" spacing={3} justify="center" >
        {Object.keys(objects).map((key,i)=>(
          <Grid item xs={12} key={key}>
              <Tooltip title={key}>
                  <IconButton style={{ 
                    backgroundColor: i===tabIndex ? colors.blue[theme.palette.type==='dark'?500:700] 
                                    : colors.grey[theme.palette.type==='dark'?500:700], 
                    color: i===tabIndex ? theme.palette.getContrastText(
                      colors.blue[theme.palette.type==='dark'?500:700]
                      )
                          : theme.palette.getContrastText(
                            colors.grey[theme.palette.type==='dark'?500:700]
                      )}}
                    onClick={()=>setTabIndex(i)}>
                      {objects[key]}
                  </IconButton>
              </Tooltip>
          </Grid>
        ))}
      </Grid>
    )

    return (
         <React.Fragment>
            <AppBar style={{ boxShadow: 'none'}}  position='fixed' color='transparent' >
              <Toolbar style={{display:'flex',justifyContent:'space-between'}}>
                  <IconButton color='inherit' onClick={() => setOpen(!open)}>
                      <Menu fontSize='large'/>
                  </IconButton>
                  <IconButton color='inherit' onClick={toggleTheme} edge="end">
                      {theme.palette.type==='dark'?(<Brightness7 fontSize='large'/>):(<Brightness4 fontSize='large'/>)}
                  </IconButton>
              </Toolbar>
            </AppBar>
            <Hidden smUp>
                <Backdrop open={open} className={classes.backdrop} onClick={() => setOpen(false)}>
                    <SwipeableDrawer
                        anchor="left"
                        open={open}
                        onOpen={() => setOpen(true)}
                        onClose={() => setOpen(false)}
                        classes={{
                            paper: classes.drawerPaper
                        }}
                    >
                      {drawer()}
                    </SwipeableDrawer>
                </Backdrop>
            </Hidden>
            <Hidden smDown>
              <Drawer
                variant="permanent"
                className={classes.drawer}
                anchor="left"
                open={true}
                classes={{
                    paper: classes.drawerPaper
                }}
              >
                {drawer()}
              </Drawer>
            </Hidden>
            <Toolbar/>
            <Container style={{ overflow: "hidden" }}>
              <AnimatePresence exitBeforeEnter>
                  {tabs.map(({Component}, i) => tabIndex===i && (
                          <Component {...props} key={i} />
                      )
                  )}
              </AnimatePresence>
            </Container>
          </React.Fragment>
    )
}

export default function Home(props) {
    const {theme} = useContext(ThemeContext)

    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline/>
            <MainApp {...props}/>
        </MuiThemeProvider>
    )
}
