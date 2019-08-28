import React from 'react';
import { ResponsiveContainer,PieChart, Pie, Cell,Tooltip,Legend } from 'recharts';

const COLORS = [
    '#0088FE', //blue
    '#FFBB28', //yellow
    '#FF8042',//orange
];
const RADIAN = Math.PI/180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x  = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy  + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};
export default function Circular(props) {
    return(
        <ResponsiveContainer>
            <PieChart>
                <Pie
                    data={props.data}
                    label={renderCustomizedLabel}
                    labelLine={false}
                    dataKey="value"
                    //cx={300}
                    //cy={200}
                    outerRadius={80}                    
                >
                    {
                        props.data.map((entry,index) => <Cell key={index} fill={COLORS[index%COLORS.length]} />)
                    }
                </Pie>
                <Tooltip/>
                <Legend/>
            </PieChart>
        </ResponsiveContainer>
    );
}
