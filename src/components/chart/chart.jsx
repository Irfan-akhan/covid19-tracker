import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api/index";
import { Bar, Line } from "react-chartjs-2";
import styles from "./chart.module.css";

const Chart = () => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        };
        console.log(dailyData[0]);
        fetchAPI();
    });

    const lineChart = dailyData.length ? (
        <Line
            data={{
                labels: dailyData.map(({ date }) => date),
                datasets: [
                    {
                        label: "Infected",
                        data: dailyData.map(({ confirmed }) => confirmed),
                        borderColor: "#3333ff",
                        fill: true,
                    },
                    {
                        label: "Infected",
                        data: dailyData.map(({ deaths }) => deaths),
                        borderColor: "red",
                        backgroundColor: "rgba(255, 0, 0, 0.5)",

                        fill: true,
                    },
                ],
            }}
        />
    ) : null;

    return <div className={styles.container}>{lineChart}</div>;
};
export default Chart;
