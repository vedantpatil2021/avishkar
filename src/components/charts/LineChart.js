import React from 'react'
import { Box } from '@chakra-ui/react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
    {
        name: " PieChartComponent",
        totalGrievance: 4000,
        solvedCrievance: 2400,
        amt: 2400,
    },
    {
        name: "Non-Payment",
        totalGrievance: 3000,
        solvedCrievance: 1398,
        amt: 2210,
    },
    {
        name: "Less Wages Payment",
        totalGrievance: 2000,
        solvedCrievance: 9800,
        amt: 2290,
    },
    {
        name: "Recruitment",
        totalGrievance: 2780,
        solvedCrievance: 3908,
        amt: 2000,
    },
    {
        name: "Vigilance Related",
        totalGrievance: 1890,
        solvedCrievance: 4800,
        amt: 2181,
    },
    {
        name: "Service Matters",
        totalGrievance: 2390,
        solvedCrievance: 3800,
        amt: 2500,
    },
];

function LineGraphChart() {
    return (
        <div>
            <Box>
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="totalGrievance" stroke="#8884d8" strokeWidth={3} />
                    <Line type="monotone" dataKey="solvedCrievance" stroke="#82ca9d" strokeWidth={3} />
                </LineChart>
            </Box>
        </div>
    )
}

export default LineGraphChart
