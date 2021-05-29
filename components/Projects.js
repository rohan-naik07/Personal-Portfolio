import {makeStyles, Grid, CardActions, Typography, Avatar, useTheme, Card, Paper, Box, useMediaQuery} from "@material-ui/core";
import {motion} from "framer-motion";
import React from "react";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

const useStyles = makeStyles((theme) => ({
    card: {
        margin: '1rem',
        flexBasis: '45%',
        padding: '1.5rem',
        textAlign: 'left',
        textDecoration: 'none',
        border: '1px solid #eaeaea',
        borderRadius: '5%',
        transition: 'color 0.15s ease, border-color 0.15s ease',
        '&:hover, &:active, &:focus': {
            color: theme.palette.type === 'light'?'#0070f3': '#00c0ff',
            borderColor: theme.palette.type === 'light'?'#0070f3': '#00c0ff'
        },
        '& p': {
            margin: 0,
            fontSize: '1.25rem',
            lineHeight: '1.5'
        },
    },
    title: {
        margin: '2%',
        lineHeight: '1.15',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            fontSize: '4.5rem',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '6.5rem'
        },
    }
}))

const Projects = ({ projects }) => {
    const classes = useStyles();
    const theme = useTheme();
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));

    const list = ()=>(
        <React.Fragment>
            {projects.map((project, i) =>(
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: i/2!==0?"50%":"-50%",
                        transition: {
                            duration: 1.5,
                            ease: [0.43, 0.13, 0.23, 0.96]
                        }
                    }}
                    animate={{ opacity: 1, x: "0%", transition: {delay: 0.3*(i+1), duration: 1}}}
                    exit={{ opacity: 0, x: i/2!==0?"50%":"-50%",
                        transition: {
                            delay: 0.2*(i+1),
                            duration: 1,
                            ease: [0.43, 0.13, 0.23, 0.96]
                        }
                    }}
                    inherit={false}
                >
                <a href={project.project_link} target='_blank' rel='noopener noreferrer' style={{ textDecoration: "none"}}>
                    <Card className={classes.card} component={Paper} elevation={5}>
                        <Typography variant='h6' component='h3' style={{ margin: '0 0 1rem 0', fontSize: '1.5rem'}}>
                            {project.name}
                        </Typography>
                        <Typography variant='subtitle2' gutterBottom component='h3'>
                            {project.startDate} - 
                            {project.endDate}
                        </Typography>
                        <Typography variant= {mdDown ? 'subtitle2' : 'subtitle1'} component='p'>
                            {project.description}
                        </Typography>
                        <CardActions>
                            <Grid container direction="row" justify="center" spacing={1}>
                                {Object.keys(project.techStack).map(key =>
                                    {return project.techStack[key].map(({alt, hex, path, title}, j) => (
                                        <Grid item key={j}>
                                            <motion.div
                                                initial={{ opacity: 0,
                                                    transition: {
                                                        duration: 1.5,
                                                        ease: [0.43, 0.13, 0.23, 0.96]
                                                    }
                                                }}
                                                animate={{ opacity: 1, transition: {delay: 0.4*(j+1), duration: 1.5}}}
                                                exit={{ opacity: 0,
                                                    transition: {
                                                        duration: 0.5*i,
                                                        ease: [0.43, 0.13, 0.23, 0.96]
                                                    }
                                                }}
                                                inherit={false}
                                            >
                                                <Avatar variant='circular' style={{ backgroundColor: `#${hex}`, height: theme.spacing(8), width: theme.spacing(8), padding: theme.spacing(2)}}>
                                                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <title>{alt}</title>
                                                        <path d={path} fill="white" />
                                                    </svg>
                                                </Avatar>
                                            </motion.div>
                                        </Grid>
                                    ))}
                                )}
                            </Grid>
                        </CardActions>                                    
                    </Card>
                </a>
            </motion.div>                
            ))}
        </React.Fragment>
    )

    return (
        <Grid container>
            <Grid item xs={12} md={3}>
                <motion.h3
                    className={classes.title}
                    initial={{ opacity: 0, y: "50%",
                        transition: {
                            duration: 1.5,
                            ease: [0.43, 0.13, 0.23, 0.96]
                        }
                    }}
                    animate={{ opacity: 1, y: "0%", transition: {delay: 0.3, duration: 1}}}
                    exit={{ opacity: 0, y: "-50%",
                        transition: {
                            duration: 1.5,
                            ease: [0.43, 0.13, 0.23, 0.96]
                        }
                    }}
                    inherit={false}
                >
                    Projects
                </motion.h3>
            </Grid>
            <Grid item container xs={12} md={9}>
               {mdDown ? (
                   <React.Fragment>
                       {list()}
                   </React.Fragment>
               ): (
                    <Timeline align= {mdDown ? 'right' : "alternate"} >
                    {projects.map((project, i) => {
                    return (
                        <TimelineItem  key={i}>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                            <motion.div
                                initial={{ opacity: 0, x: i/2!==0?"50%":"-50%",
                                    transition: {
                                        duration: 1.5,
                                        ease: [0.43, 0.13, 0.23, 0.96]
                                    }
                                }}
                                animate={{ opacity: 1, x: "0%", transition: {delay: 0.3*(i+1), duration: 1}}}
                                exit={{ opacity: 0, x: i/2!==0?"50%":"-50%",
                                    transition: {
                                        delay: 0.2*(i+1),
                                        duration: 1,
                                        ease: [0.43, 0.13, 0.23, 0.96]
                                    }
                                }}
                                inherit={false}
                            >
                                <a href={project.project_link} target='_blank' rel='noopener noreferrer' style={{ textDecoration: "none"}}>
                                    <Card className={classes.card} component={Paper} elevation={5}>
                                        <Typography variant='h6' component='h3' style={{ margin: '0 0 1rem 0', fontSize: '1.5rem'}}>
                                            {project.name}
                                        </Typography>
                                        <Typography variant='subtitle2' gutterBottom component='h3'>
                                            {project.startDate} - 
                                            {project.endDate}
                                        </Typography>
                                        <Typography variant= {mdDown ? 'subtitle2' : 'subtitle1'} component='p'>
                                            {project.description}
                                        </Typography>
                                        <CardActions>
                                            <Grid container direction="row" justify="center" spacing={1}>
                                                {Object.keys(project.techStack).map(key =>
                                                    {return project.techStack[key].map(({alt, hex, path, title}, j) => (
                                                        <Grid item key={j}>
                                                            <motion.div
                                                                initial={{ opacity: 0,
                                                                    transition: {
                                                                        duration: 1.5,
                                                                        ease: [0.43, 0.13, 0.23, 0.96]
                                                                    }
                                                                }}
                                                                animate={{ opacity: 1, transition: {delay: 0.4*(j+1), duration: 1.5}}}
                                                                exit={{ opacity: 0,
                                                                    transition: {
                                                                        duration: 0.5*i,
                                                                        ease: [0.43, 0.13, 0.23, 0.96]
                                                                    }
                                                                }}
                                                                inherit={false}
                                                            >
                                                                <Avatar variant='circular' style={{ backgroundColor: `#${hex}`, height: theme.spacing(8), width: theme.spacing(8), padding: theme.spacing(2)}}>
                                                                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                        <title>{alt}</title>
                                                                        <path d={path} fill="white" />
                                                                    </svg>
                                                                </Avatar>
                                                            </motion.div>
                                                        </Grid>
                                                    ))}
                                                )}
                                            </Grid>
                                        </CardActions>                                    
                                    </Card>
                                </a>
                            </motion.div>
                            </TimelineContent>
                        </TimelineItem>    
                    )
                })}
                </Timeline>
               )}
            </Grid> 
        </Grid>
    )
}

export default Projects;