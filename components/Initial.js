import {Grid, Typography,Avatar,Tooltip, useTheme,Paper,withStyles,makeStyles,useMediaQuery} from "@material-ui/core";
import React from "react";
import Image from "next/image";
import ReactTyped from "react-typed";
import {motion} from "framer-motion";

const WhiteTextTypography = withStyles({
    root: {
      color: "grey"
    }
})(Typography);

const useStyles = makeStyles(theme => ({
    circle: {
        [theme.breakpoints.down('md')]: {
            position : 'absolute',
            left : 100,
            top : 100
        },
        [theme.breakpoints.up('md')]: {
            position : 'absolute',
            left : 210,
            top : 200
        },
    }
}));

const Initial = ({ iconData, titles })=>{
    const theme = useTheme();
    const classes = useStyles();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const setupCircle = ()=>{
        var mainHeight = matches===true ? 400 : 300;
        var radius = mainHeight/2;
        var divList = []
        var theta = [0, 
            (2 * (Math.PI / 15)), 
            (4 * (Math.PI / 15)), 
            (2 * (Math.PI / 5)), 
            (8 * (Math.PI / 15)), 
            (2 * (Math.PI / 3)), 
            (4 * (Math.PI / 5)), 
            (14 * (Math.PI / 15)), 
            (16 * (Math.PI / 15)), 
            (6 * (Math.PI / 5)), 
            (4 * (Math.PI / 3)), 
            (22 * (Math.PI / 15)), 
            (8 * (Math.PI / 5)), 
            (26 * (Math.PI / 15)), 
            (28 * (Math.PI / 15))
        ];
        var circleArray = [];
        let indexes = {
            0 : true,
            3 : true,
            6 : true,
            9 : true,
            12 : true
        }
        let count=0;
        for (var i = 0; i < 15; i++) {
            var circle = {}
            circleArray.push(circle);
            circleArray[i].posx = Math.round(radius * (Math.cos(theta[i]))) + 'px';
            circleArray[i].posy = Math.round(radius * (Math.sin(theta[i]))) + 'px';
            if(indexes[i-1]!==undefined){
                divList.push(
                    <motion.div
                        style={
                            {
                                position : 'absolute',
                                backgroundColor :  'transparent',
                                overflow: 'visible',
                                top : ((mainHeight / 2) - parseInt(circleArray[i].posy.slice(0, -2))-15) + 'px',
                                left : ((mainHeight / 2) + parseInt(circleArray[i].posx.slice(0, -2))-15) + 'px',
                                height: theme.spacing(6), 
                                width: theme.spacing(6), 
                                borderRadius: '50%'
                            }
                        }
                        initial={{ opacity: 0, scale: 1.2*i/2 }}
                        animate={{ opacity: 1, scale: 1, transition: {delay: 0.2*i} }}
                        whileHover={{ scale: 1.2 }}
                        exit={{ opacity: 0, scale: 1.2*i/2 }}
                        inherit={false}>
                        <a href={iconData[count].url} target='_blank' rel='noopener noreferrer'>
                            <Tooltip title={iconData[count].alt}>
                                <Avatar variant='rounded' style={{ 
                                    backgroundColor: `#${iconData[count].hex}`,
                                    position : 'relative',
                                    overflow: 'visible',
                                    height: theme.spacing(6), 
                                    width: theme.spacing(6), 
                                    padding: theme.spacing(1)
                                }}>
                                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <title>{iconData[count].alt}</title>
                                        <path d={iconData[count].path} fill="white"/>
                                    </svg>
                                </Avatar>
                            </Tooltip>
                        </a>
                    </motion.div>
                )
            } else {
                divList.push(
                    <motion.div
                        style={
                            {
                                position : 'absolute',
                                backgroundColor :  theme.palette.type==='dark' ? 'white' : 'grey',
                                top : ((mainHeight / 2) - parseInt(circleArray[i].posy.slice(0, -2))) + 'px',
                                left : ((mainHeight / 2) + parseInt(circleArray[i].posx.slice(0, -2))) + 'px',
                                height: theme.spacing(1), 
                                width: theme.spacing(1), 
                                borderRadius: '50%'
                            }
                        }
                        initial={{ opacity: 0, scale: 1.2*i/2 }}
                        animate={{ opacity: 1, scale: 1, transition: {delay: 0.2*i} }}
                        whileHover={{ scale: 1.2 }}
                        exit={{ opacity: 0, scale: 1.2*i/2 }}
                        inherit={false}>
                    </motion.div>
                )
            }

            if(indexes[i-1]!==undefined){
                count+=1;
            }
          }
        return <Grid item xs={12} style={{
            position: 'absolute',
            width: matches===true ? 400 : 300,
            height: matches===true ? 400 : 300
        }}>{divList.map(element=>
            <React.Fragment>
                {element}
            </React.Fragment>
        )}</Grid>
    }

    return (
        <Grid container spacing={4} direction="row" justify='center'>
                <Grid item xs={12} sm={6} alignItems='center' justify='center' container style={{
                    position : 'relative',
                    height : matches===true ? 600 : 400
                }}>
                    <Grid item xs={12} alignItems='center' justify='center' className={classes.circle}>
                       <motion.div
                            initial={{ opacity: 0, x: "-50%",
                                transition: {
                                duration: 1.5,
                                ease: [0.43, 0.13, 0.23, 0.96]
                            }
                            }}
                            animate={{ opacity: 1, x: "0%", transition: {delay: 0.2, duration: 1}}}
                            exit={{ opacity: 0, x: "-50%",
                                transition: {
                                    duration: 1.5,
                                    ease: [0.43, 0.13, 0.23, 0.96]
                                }
                            }}
                            inherit={false}
                        >
                        <Avatar variant='circle' style={{ width: theme.spacing(25), height: theme.spacing(25),margin:10}}>
                            <Image src='/me.jpg' width={200} height={200} loading='eager'/>
                        </Avatar>
                    </motion.div>
                    </Grid>
                    {setupCircle()}
                </Grid>                    
            <Grid item xs={12} md={6} container direction='row'>
            <Grid item xs={12}>
                    <motion.div
                        initial={{ opacity: 0, x: "50%",
                            transition: {
                            duration: 1.5,
                            ease: [0.43, 0.13, 0.23, 0.96]
                        }
                        }}
                        animate={{ opacity: 1, x: "0%", transition: {delay: 0.2, duration: 1}}}
                        exit={{ opacity: 0, x: "50%",
                            transition: {
                                duration: 1.5,
                                ease: [0.43, 0.13, 0.23, 0.96]
                            }
                        }}
                        inherit={false}
                >
                        <Typography variant='h1'>
                            Hi, I am Rohan!
                        </Typography>
                    </motion.div>
                </Grid>
                <Grid item xs={12}>
                    <motion.div
                        initial={{ opacity: 0, x: "50%",
                            transition: {
                                duration: 1.5,
                                ease: [0.43, 0.13, 0.23, 0.96]
                            }
                        }}
                        animate={{ opacity: 1, x: "0%", transition: {delay: 0.2, duration: 1}}}
                        exit={{ opacity: 0, x: "50%",
                            transition: {
                                duration: 1.5,
                                ease: [0.43, 0.13, 0.23, 0.96]
                            }
                        }}
                        inherit={false}
                    >
                        <WhiteTextTypography variant={ "h4"} color='grey'>
                            <ReactTyped
                                strings={titles}
                                typeSpeed={40}
                                backSpeed={50}
                                loop
                            />
                        </WhiteTextTypography>
                    </motion.div>
                </Grid> 
                <Grid item xs={12} style={{marginTop:15,marginBottom:15}}>
                    <motion.div
                        initial={{ opacity: 0, x: "-50%",
                            transition: {
                            duration: 1.5,
                            ease: [0.43, 0.13, 0.23, 0.96]
                        }
                        }}
                        animate={{ opacity: 1, x: "0%", transition: {delay: 0.2, duration: 1}}}
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 1 },
                        }}
                        exit={{ opacity: 0, x: "-50%",
                            transition: {
                                duration: 1.5,
                                ease: [0.43, 0.13, 0.23, 0.96]
                            }
                        }}
                        inherit={false}
                    >
                    <Paper elevation={3} style={{padding:10,borderRadius:20}}>
                        <Typography variant='h4' style={{marginLeft:10}}>
                            About me
                        </Typography>
                        <Typography variant='body2' gutterBottom style={{margin:10}}>
                            I am self driven passionate programmer who loves to translate solutions to real world problems into code. 
                            I am currently pursueing bachelor's degree in Computer Engineering from Pune Institute of Computer Technology. 
                            My main areas of interest are Full Stack Development,Artificial Intelligence,Cycling and History.
                        </Typography>
                    </Paper>
                    </motion.div>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Initial;