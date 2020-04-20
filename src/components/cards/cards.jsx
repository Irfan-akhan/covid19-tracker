import React from "react";
import { Card, Typography, Grid, CardContent } from "@material-ui/core";
import cx from "classnames";
import CountUp from "react-countup";
import styles from "./cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) return "loading...!";
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid
                    item
                    component={Card}
                    xs={12}
                    md={3}
                    className={cx(styles.card, styles.infected)}
                >
                    <CardContent>
                        <Typography className={styles.textBlue} gutterBottom>
                            INFECTED
                        </Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={1.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toLocaleTimeString()}{" "}
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Number of active cases of covid-19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid
                    item
                    component={Card}
                    xs={12}
                    md={3}
                    className={cx(styles.card, styles.recovered)}
                >
                    <CardContent>
                        <Typography className={styles.textGreen} gutterBottom>
                            RECOVERED
                        </Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={recovered.value}
                                duration={1.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toLocaleTimeString()}{" "}
                            {new Date(lastUpdate).toDateString()}
                        </Typography>{" "}
                        <Typography variant="body2">
                            Number of RECOVERIES from Covid-19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid
                    item
                    component={Card}
                    xs={12}
                    md={3}
                    className={cx(styles.card, styles.deaths)}
                >
                    <CardContent>
                        <Typography className={styles.textRed} gutterBottom>
                            DEATHS
                        </Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={deaths.value}
                                duration={1.5}
                                separator=","
                            />
                        </Typography>{" "}
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toLocaleTimeString()}{" "}
                            {new Date(lastUpdate).toDateString()}
                        </Typography>{" "}
                        <Typography variant="body2">
                            Number of DEATHS from covid-19
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
};

export default Cards;
