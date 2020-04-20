import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api/index";
import { Bar, Line } from "react-chartjs-2";
import styles from "./chart.module.css";

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        };
        console.log(dailyData);
        fetchAPI();
    }, []);

    const lineChart = dailyData.length ? (
        <Line
            data={{
                labels: dailyData.map(({ date }) => date),
                datasets: [
                    {
                        label: "Infected",
                        data: dailyData.map(({ confirmed }) => confirmed),
                        borderColor: "#3333ff",
                        backgroundColor: "rgba(0, 0, 255, 0.2)",
                        fill: true,
                    },
                    {
                        label: "Deaths",
                        data: dailyData.map(({ deaths }) => deaths),
                        borderColor: "red",
                        backgroundColor: "rgba(255, 0, 0, 0.8)",
                        fill: true,
                    },
                ],
            }}
        />
    ) : null;

    const barChart = confirmed ? (
        <Bar
            data={{
                labels: ["Infected", "Recovered", "Deaths"],
                datasets: [
                    {
                        label: "people",
                        backgroundColor: [
                            "rgba(0, 0, 255, 0.5)",
                            "rgba(255, 0, 0, 0.5)",
                            "rgba(0, 255, 0, 0.5)",
                        ],
                        data: [confirmed.value, recovered.value, deaths.value],
                    },
                ],
            }}
            options={{
                legend: { display: false },
                title: {
                    display: true,
                    title: { display: true, text: `Current state in ${country}` },
                },
            }}
        />
    ) : null;

    return <div className={styles.container}>{country ? barChart : lineChart}</div>;
};
export default Chart;
