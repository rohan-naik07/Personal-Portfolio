import {Avatar, Grid, makeStyles, Tooltip, Typography, useTheme, Chip, colors, Box, useMediaQuery} from "@material-ui/core";
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
        textAlign: 'center',
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
        "Operating Systems",
        "MS Office",
        "Adobe Photoshop"
    ]

    return (
        <Grid item container direction="column" alignItems="center" justify="center">
            <Grid item xs={12} style={{padding:5}}>
                <Typography variant='caption'>Languages Used</Typography>
            </Grid>
            <Grid item container direction="row" justify="center" alignItems="center" spacing={2} xs={12}>
                {techStack["Languages"].map(({alt, path, hex, title }, j) => (
                    <Grid item key={title}>
                        <motion.div
                            initial={{ opacity: 0, scale: 1.2*j/2}}
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
                            <Tooltip title={alt}>
                                <Avatar variant='rounded' style={{ backgroundColor: `#${hex}`, height: theme.spacing(8), width: theme.spacing(8), padding: theme.spacing(2)}}>
                                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <title>{alt}</title>
                                        <path d={path} fill="white"/>
                                    </svg>
                                </Avatar>
                            </Tooltip>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
            <Grid item container direction="row" alignItems="center" justify="center" spacing={2} xs={12} style={{margin:20}}>
                <Grid item container direction= {useMediaQuery(theme.breakpoints.down('sm')) ? "row" : "column"} alignItems="center" justify="center" spacing={2} xs={12} md={3}>
                    <Grid item xs={12} style={{textAlign:'center'}}>
                        <Typography variant='caption'>Frontend</Typography>
                    </Grid>  
                    {techStack["Frontend Technologies"].map(({alt, path, hex, title }, j) => (
                        <Grid item key={title}>
                            <motion.div
                                initial={{ opacity: 0, scale: 1.2*j/2}}
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
                                <Tooltip title={alt}>
                                    <Avatar variant='rounded' style={{ backgroundColor: `#${hex}`, height: theme.spacing(8), width: theme.spacing(8), padding: theme.spacing(2)}}>
                                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <title>{alt}</title>
                                            <path d={path} fill="white"/>
                                        </svg>
                                    </Avatar>
                                </Tooltip>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
                <Grid item xs={12} container direction="row" md={6} alignItems="center" justify="center" spacing={4}>
                    <Grid item xs={12} sm={6}>
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
                    <Grid item xs={12} sm={6}>
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
                                    <Chip avatar={<Avatar>{i+1}</Avatar>} label={skill} color={colors.blue[500]}/>
                                ))}
                            </Box>
                        </motion.h1>
                    </Grid> 
            </Grid>
                <Grid item container direction={useMediaQuery(theme.breakpoints.down('sm')) ? "row" : "column"} alignItems="center" justify="center" spacing={2} xs={12} md={3}>
                    <Grid item xs={12} style={{textAlign:'center'}}>
                        <Typography variant='caption'>Backend</Typography>
                    </Grid>  
                    {techStack["Backend Technologies"].map(({alt, path, hex, title }, j) => (
                        <Grid item key={title} justifyContent="flex-start">
                            <motion.div
                                initial={{ opacity: 0, scale: 1.2*j/2}}
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
                                <Tooltip title={alt}>
                                    <Avatar variant='rounded' style={{ backgroundColor: `#${hex}`, height: theme.spacing(8), width: theme.spacing(8), padding: theme.spacing(2)}}>
                                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <title>{alt}</title>
                                            <path d={path} fill="white"/>
                                        </svg>
                                    </Avatar>
                                </Tooltip>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>                            
            </Grid>
            <Grid item container direction="row" alignItems="center" justify="center" spacing={2} xs={12}>
                {techStack["Other Technologies"].map(({alt, path, hex, title }, j) => (
                    <Grid item key={title}>
                        <motion.div
                            initial={{ opacity: 0, scale: 1.2*j/2}}
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
                            <Tooltip title={alt}>
                                <Avatar variant='rounded' style={{ backgroundColor: `#${hex}`, height: theme.spacing(8), width: theme.spacing(8), padding: theme.spacing(2)}}>
                                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <title>{alt}</title>
                                        <path d={path} fill="white"/>
                                    </svg>
                                </Avatar>
                            </Tooltip>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
            <Grid item xs={12} style={{padding:5}}>
                <Typography variant='caption'>Other Technologies</Typography>
            </Grid>            
        </Grid>
    )
}

export default TechStack;
