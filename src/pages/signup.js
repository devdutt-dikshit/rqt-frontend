import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import FacebookLogin from "react-facebook-login";
import CounterComp from "../components/counterComp";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
        overflow: "hidden",
    },
    image: {
        width: "80%",
        margin: "0 auto",
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        color: "#000",
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },

    welcomeScreen: {
        background: "#5712aa",
        color: "#fff",
        textAlign: "center",
    },
}));

export default function SignInSide() {
    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item sm={7} className={classes.welcomeScreen}>
                <div className={classes.image}>
                    <img
                        src="/image/Login-bro.svg"
                        style={{ width: "70%" }}
                        alt="img"
                    ></img>
                    <Typography variant="h4" style={{ marginTop: "15px" }}>
                        WELCOME TO RQT
                    </Typography>
                    <Typography variant="body2">
                        A REACT &amp; QUART CHAT APPLICATION
                    </Typography>
                </div>
            </Grid>

            <Grid
                container
                item
                xs={12}
                sm={5}
                direction="column"
                justify="center"
                alignItems="center"
                spacing={2}
            >
                <Grid item>
                    <CounterComp/>
                    <LockOutlinedIcon color="primary" fontSize="large" />
                </Grid>
                <Grid item>
                    <FacebookLogin
                        textButton="signin with facebook"
                        size="small"
                        appId="322328726286325"
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={() => console.log("fb login clicked")}
                        icon="fa-facebook"
                    />
                </Grid>
            </Grid>
        </Grid>
    );
}
