"use client";

import React, { PureComponent } from 'react';
import {PieChart, Pie, Cell} from 'recharts';

const data = [
    { name: 'Current seats used', value: 400 },
    { name: 'Available seats', value: 300 },
];

const COLORS = ['#fadcbb', '#fb8500'];
const RADIAN = Math.PI / 180;

// @ts-ignore
const renderCustomizedLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
        <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

export default class Example extends PureComponent {
    render() {
        return (
            <PieChart width={400} height={300}>
                <Pie
                    data={data}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={125}
                    fill="#0000000"
                    dataKey="value"
                >
                    {data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                </Pie>
            </PieChart>
        );
    }
}