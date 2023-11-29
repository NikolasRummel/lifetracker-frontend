"use client";
import React, {PureComponent} from 'react';
import {PieChart, Pie, Cell} from 'recharts';
import getCurrentCapacity from "@/api/dm-api";

export default class Example extends PureComponent {
    state = {
        data: [],
    };

    async componentDidMount() {
        try {
            const capacityData = await getCurrentCapacity();
            const newData = [
                { name: 'Available seats', value: capacityData.limit - capacityData.current },
                { name: 'Current seats used', value: capacityData.current },
            ];
            this.setState({ data: newData });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    render() {
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

        return (
            <PieChart width={400} height={300}>
                <Pie
                    data={this.state.data}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={125}
                    fill="#0000000"
                    dataKey="value"
                >
                    {this.state.data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>)}
                </Pie>
            </PieChart>
        );
    }
}