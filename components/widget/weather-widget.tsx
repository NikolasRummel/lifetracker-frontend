"use client";
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Image from "next/image";
import {Skeleton} from "@/components/ui/skeleton";

interface WeatherData {
    temperature: number;
    feelsLike: number;
    minTemperature: number;
    maxTemperature: number;
    pressure: number;
    humidity: number;
    seaLevel: number;
    groundLevel: number;
    description: string;
    icon: string;
}

const WeatherWidget: React.FC = () => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const apiKey = 'c32e24e5d312eeb2aab775e644be9f1a';
                const city = 'Karlsruhe';
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
                );

                const data = response.data;

                const temperatureInCelsius = data.main.temp - 273.15;
                const feelsLikeInCelsius = data.main.feels_like - 273.15;
                const minTemperatureInCelsius = data.main.temp_min - 273.15;
                const maxTemperatureInCelsius = data.main.temp_max - 273.15;

                const newWeatherData: WeatherData = {
                    temperature: temperatureInCelsius,
                    feelsLike: feelsLikeInCelsius,
                    minTemperature: minTemperatureInCelsius,
                    maxTemperature: maxTemperatureInCelsius,
                    pressure: data.main.pressure,
                    humidity: data.main.humidity,
                    seaLevel: data.main.sea_level,
                    groundLevel: data.main.grnd_level,
                    description: data.weather[0].description,
                    icon: data.weather[0].icon,
                };

                setWeatherData(newWeatherData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeatherData();
    }, []);

    return (
        <div>
            {loading ? (
                <div
                    className="p-12 bg-gradient-to-t from-sky-600 to-blue-700 dark:from-sky-950 dark:to-blue-950 shadow-xl hover:shadow-2xl hover:scale-[1.02] duration-300 rounded-3xl col-span h-[350px]">
                    <Skeleton className="w-[100px] h-[40px] rounded-full dark:bg-neutral-200" />
                    <Skeleton className="w-[300px] h-[40px] rounded-full dark:bg-neutral-200 mt-10" />
                    <Skeleton className="w-[150px] h-[40px] rounded-full dark:bg-neutral-200 mt-1" />
                    <Skeleton className="w-[200px] h-[40px] rounded-full dark:bg-neutral-200 mt-12" />
                </div>
            ) : (
                <div
                    className="p-12 bg-gradient-to-t from-sky-600 to-blue-700 dark:from-sky-950 dark:to-blue-950 shadow-xl hover:shadow-2xl hover:scale-[1.02] duration-300 rounded-3xl col-span h-[350px]">
                    <div className={"mb-4"}>
                        <span className="block text-3xl ">Karlsruhe</span>
                        <div className="flex items-center">
                            <span
                                className="block text-5xl font-medium mr-3">{weatherData?.temperature.toFixed(0)}°C</span>
                            <Image src={`https://openweathermap.org/img/wn/${weatherData?.icon}@2x.png`} alt="icon"
                                   width={70} height={70}/>
                        </div>
                    </div>
                    <span className="block text-xl">{weatherData?.description}</span>
                    <span className="block text-xl mt-10">Feels Like: {weatherData?.feelsLike.toFixed(0)}°C</span>
                    <span className="block text-xl">H: {weatherData?.maxTemperature.toFixed(0)}°C M:{weatherData?.minTemperature.toFixed(0)}°C</span>
                </div>
            )}
        </div>
    );
};

export default WeatherWidget;
