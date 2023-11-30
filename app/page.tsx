import Widget from "@/components/widget/widget";
import UserWidget from "@/components/widget/user-widget";
import Example from "@/components/charts/culinarium-chart";
import culinarium from "@/public/images/culinarium.png";
import WeatherWidget from "@/components/widget/weather-widget";
import SevenSegmentClock from "@/components/widget/clock-widget";

export default async function Home() {
    return (
        <section className="min-h-screen flex items-center justify-center px-20">
            <div className={"w-[1200px]"}>
                <div className={"flex flex-col"}>
                    <h1 className={"text-4xl font-semibold"}>Cubid lifetracker</h1>
                    <h2 className={"text-2xl "}>Organice your life in a simple dashboard.</h2>
                </div>

                <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-10"}>
                    <UserWidget image={"https://nikolas-rummel.de/images/me.png"} name={"Nikolas"}
                                email={"privat@nikolas-rummel.de"}/>
                    <div className={"h-full col-span-2"}>
                        <Widget title={"Calendar"} description={"Mi. 29. Nov 2023"} colSpan={2}>
                            <p className={"my-32"}>no meetings for today</p>
                        </Widget>
                    </div>
                    <Widget title={"Culinarium"} description={"Current capacity"} colSpan={1} image={culinarium}>
                        <div className={"relative"}>
                            <Example/>
                        </div>
                    </Widget>
                    <WeatherWidget/>
                    <SevenSegmentClock/>
                </div>
            </div>
        </section>
    )
}