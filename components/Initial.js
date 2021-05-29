import {Grid, Typography,Avatar,Tooltip, useTheme,Paper} from "@material-ui/core";
import React from "react";
import Image from "next/image";
import ReactTyped from "react-typed";
import {motion} from "framer-motion";


const Initial = ({ iconData, titles })=>{
    const theme = useTheme();
    return (
        <Grid container spacing={4} direction="row" justify='center'>
            <Grid item xs={12} spacing={4} sm={6} container alignItems='center'>
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
                        <Typography variant={ "h4"}>
                            <ReactTyped
                                strings={titles}
                                typeSpeed={40}
                                backSpeed={50}
                                loop
                            />
                        </Typography>
                    </motion.div>
                    </Grid>       
                    <Grid item xs={12} container direction="row" spacing={2}>
                        {iconData.map(({ alt, url, path, hex }, i) => {
                            return (
                                <Grid item key={i}>
                                     <motion.div
                                        initial={{ opacity: 0, scale: 1.2*i/2 }}
                                        animate={{ opacity: 1, scale: 1, transition: {delay: 0.2*i} }}
                                        whileHover={{ scale: 1.2 }}
                                        exit={{ opacity: 0, scale: 1.2*i/2 }}
                                        inherit={false}
                                    >
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
                                </motion.div>
                            </Grid>
                            )
                        })}
                 </Grid>                
            </Grid>
            <Grid item xs={12} md={6} container direction='column' alignItems='center'>
                <Grid item xs={12}>
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
                        <Avatar variant='circle' style={{ width: theme.spacing(35), height: theme.spacing(35),margin:10}}>
                            <Image src='/me.jpg' width={300} height={300} loading='eager'/>
                        </Avatar>
                    </motion.div>
                </Grid>
                <Grid item xs={12}>
                    <motion.div
                        initial={{ opacity: 0, x: "-50%",
                            transition: {
                            duration: 1.5,
                            ease: [0.43, 0.13, 0.23, 0.96]
                        }
                        }}
                        animate={{ opacity: 1, x: "0%", transition: {delay: 0.2, duration: 1}}}
                        whileHover={{
                            scale: 1.2,
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
                            My main areas of interest are full stack development,Data Structures and Algorithms,Deep Learning,Digital Designing,Cricket and Music.
                        </Typography>
                    </Paper>
                    </motion.div>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Initial;