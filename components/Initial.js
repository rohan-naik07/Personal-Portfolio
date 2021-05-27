import {Grid, Typography, makeStyles, Avatar, Zoom, Tooltip, useTheme,Paper, Divider, Box} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import ReactTyped from "react-typed";
import {motion} from "framer-motion";
import { AccountCircle } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    cont: {
        minHeight: `calc(100vh - ${theme.spacing(4)}px)`,
        paddingBottom: theme.spacing(10)
    },
    subtitle: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(5)
    },
    avatar: {
        height: theme.spacing(8),
        width: theme.spacing(8),
        padding: theme.spacing(2)
    }
}))

const Initial = ({ iconData, titles })=>{
    const theme = useTheme();
    const classes = useStyles();
    

    return (
        <Grid container spacing={4}>
            <Grid item xs={12} md={6} container>
                <motion.div
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
                    <Typography variant='h1'>
                        Hi, I am Rohan!
                    </Typography>
                    <Typography variant={ "h4"}>
                        <ReactTyped
                            strings={titles}
                            typeSpeed={40}
                            backSpeed={50}
                            loop
                        />
                    </Typography>
                    <Grid container direction="row" spacing={2}>
                        {iconData.map(({alt, url, path, hex, title }, i) => {
                            return (
                            <Grid item key={i}>
                                <a href={url} target='_blank' rel='noopener noreferrer'>
                                    <Tooltip title={alt}>
                                        <Avatar variant='rounded' style={{ backgroundColor: `#${hex}`, height: theme.spacing(8), width: theme.spacing(8), padding: theme.spacing(2)}}>
                                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <title>{alt}</title>
                                                <path d={path} fill="white"/>
                                            </svg>
                                        </Avatar>
                                    </Tooltip>
                                </a>
                            </Grid>
                            )
                        })}
                    </Grid>
                </motion.div>                    
            </Grid>
            <Grid item xs={12} md={6} container >
                <motion.div
                    style={{alignItems:'center',justifyContent:'center'}}
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
                    <Avatar variant='circle' style={{ width: theme.spacing(35), height: theme.spacing(35),margin:10}}>
                        <Image src='/me.jpg' width={300} height={300} loading='eager'/>
                    </Avatar>
                    <Paper elevation={3} style={{padding:10,borderRadius:20}}>
                        <Box style={{display:'flex',alignItems:'center'}}>
                            <AccountCircle fontSize='large'/>
                            <Typography variant='h4' style={{marginLeft:10}}>
                                About me
                            </Typography>
                        </Box>
                        <Typography variant='body2' gutterBottom style={{margin:10}}>
                            I am a Computer Science student and a passionate programmer who loves to explore cutting edge technologies 
                            and find solutions to real-life problems. My core interests are Mobile App Development,Backend Development 
                            and Deep Learning. Other interests include Digital Designing , Cricket and Music.
                        </Typography>
                    </Paper>
                </motion.div>
            </Grid>
        </Grid>
    )
}

export default Initial;