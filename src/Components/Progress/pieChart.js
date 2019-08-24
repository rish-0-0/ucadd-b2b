import React from 'react';
import { connect } from 'react-redux';
import { ResponsiveContainer,PieChart, Pie, Cell,Tooltip } from 'recharts';

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
function Circular(props) {
    return(
        <ResponsiveContainer>
            <PieChart>
                <Pie
                    data={props.pie}
                    label={renderCustomizedLabel}
                    labelLine={false}
                    dataKey="value"
                    //cx={300}
                    //cy={200}
                    outerRadius={80}                    
                >
                    {
                        props.pie.map((entry,index) => <Cell key={index} fill={COLORS[index%COLORS.length]} />)
                    }
                </Pie>
                <Tooltip/>
            </PieChart>
        </ResponsiveContainer>
    );
}
const mapStateToProps = (state) => {
    const { pie } = state.data;
    return {
        pie,
    };
};
export default connect(mapStateToProps)(Circular);