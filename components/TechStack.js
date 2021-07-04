import {Avatar, Grid, makeStyles, Tooltip, Typography, useTheme, Chip,Box,Paper} from "@material-ui/core";
import {motion} from "framer-motion";
import React from "react";

const useStyles = makeStyles(theme => ({
    container: {
        padding: '1%',
        textAlign: 'center',
    },
    title: {
        margin: '2%',
        lineHeight: '1.0',
        [theme.breakpoints.down('md')]: {
            fontSize: '3.5rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '6.5rem'
        },
    }
}));

const TechStack = ({techStack, delayPeriod}) => {
    const classes = useStyles();
    const theme = useTheme();

    const otherSkills = [
        "Full Stack Development",
        "Data Structures and Algorithms",
        "Object Oriented Programming",
        "Deep Learning",
        "Database Management Systems",
        "Operating Systems",
        "MS Office",
        "Adobe Photoshop"
    ]


    return (
        <Grid item container direction="row" alignItems="center" justify="center" spacing={2} xs={12} style={{margin:10}}>
            <Grid item xs={12} md={6} container>
            <Grid item xs={12}>
                <motion.h1
                    className={classes.title}
                    initial={{ opacity: 0, x: "50%" }}
                    animate={{ opacity: 1, x: "0%",
                        transition: {
                            duration: 1.5,
                            ease: [0.43, 0.13, 0.23, 0.96]
                        }}
                    }
                    exit={{ opacity: 0, x: "50%",
                        transition: {
                            duration: 1.5,
                            ease: [0.43, 0.13, 0.23, 0.96]
                        }
                    }}
                >My Skill Set</motion.h1>
            </Grid>
            <Grid item xs={12}>
                <motion.h1
                    initial={{ opacity: 0, x: "50%" }}
                    animate={{ opacity: 1, x: "0%",
                        transition: {
                            duration: 1.5,
                            ease: [0.43, 0.13, 0.23, 0.96]
                        }}
                    }
                    exit={{ opacity: 0, x: "50%",
                        transition: {
                            duration: 1.5,
                            ease: [0.43, 0.13, 0.23, 0.96]
                        }
                    }}
                >
                    <Box>   
                        <Typography variant='h6'>Notable Skills</Typography>
                        {otherSkills.map((skill,i)=>(
                            <Chip avatar={<Avatar>{i+1}</Avatar>} label={skill} key={i}/>
                        ))}
                    </Box>
                </motion.h1>
            </Grid>
            
        </Grid>
        <Grid item container direction="column" alignItems="center" justify="center" spacing={2} xs={12} md={6}>
            {Object.keys(techStack).map((key,i)=>(
                <Grid item xs={12}>
                    <Paper key={key} elevation={2} style={{borderRadius:20,border: '1px solid #eaeaea'}}>
                        <Typography variant='h6' style={{textAlign : 'center',fontSize: '1.0rem',}}>{key}</Typography>
                        <Grid item container direction="row" xs={12} alignItems="center" justify="center" style={{padding:10}}>
                            {techStack[key].map(({alt, path, hex, title }, j) => (
                                <motion.div
                                    key={title}
                                    initial={{ opacity: 0, scale: 1.2*j/2+i}}
                                    animate={{ opacity: 1, scale: 1, transition: {delay: 0.2*j} }}
                                    whileHover={{ scale: 1.2 }}
                                    exit={{ opacity: 0, x: "50%",
                                        transition: {
                                            duration: 1.5,
                                            ease: [0.43, 0.13, 0.23, 0.96]
                                        }
                                    }}
                                    inherit={false}
                                >
                                    <Tooltip title={alt} >
                                        <Avatar variant='circle' style={{ backgroundColor: `#${alt==='React Native' ? '000000' : hex }`, height: theme.spacing(8), width: theme.spacing(8), margin : 5,padding: theme.spacing(2)}}>
                                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <title>{alt}</title>
                                                <path d={path} fill="white"/>
                                            </svg>
                                        </Avatar>
                                    </Tooltip>
                                </motion.div>
                            ))}
                        </Grid>
                    </Paper>
                </Grid>
            ))}
        </Grid>                            
    </Grid>     
    )
}

export default TechStack;
