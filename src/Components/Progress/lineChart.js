import React from 'react';
import { ResponsiveContainer,LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function LineGraph(props) {
    return(
        <React.Fragment>
            <ResponsiveContainer>
                <LineChart
                data={props.data}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="physics" stroke="#8884d8" />
                    <Line type="monotone" dataKey="math" stroke="#F50057" />
                    <Line type="monotone" dataKey="chemistry" stroke="#00ff00" />
                </LineChart>
            </ResponsiveContainer>
        </React.Fragment>
    );
}
