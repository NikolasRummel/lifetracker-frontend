import Widget from "@/components/widget/widget";
import UserWidget from "@/components/widget/user-widget";
import Example from "@/components/charts/culinarium-chart";
import culinarium from "@/public/images/culinarium.png";
import WeatherWidget from "@/components/widget/weather-widget";
import SevenSegmentClock from "@/components/widget/clock-widget";
import TodoWidget from "@/components/widget/todo-widget";

export default async function Home() {
    return (
        <section className="min-h-screen flex items-center justify-center px-20">
            <div className={"w-[1200px]"}>
                <div className="inline-flex items-center justify-center space-x-80 mr-2">
                    <div className="flex flex-col">
                        <h1 className="text-4xl font-semibold">Cubid lifetracker</h1>
                        <h2 className="text-2xl">Organize your life in a simple dashboard.</h2>
                    </div>
                    <SevenSegmentClock/>
                </div>
                <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-10"}>
                    <UserWidget image={"https://nikolas-rummel.de/images/me.png"} name={"Nikolas"}
                                email={"privat@nikolas-rummel.de"}/>
                    <div className={"col-span-2"}>
                        <WeatherWidget/>
                    </div>

                    <Widget title={"Culinarium"} description={"Current capacity"} colSpan={1} image={culinarium}>
                        <div className={"relative"}>
                            <Example/>
                        </div>
                    </Widget>
                    <TodoWidget title={"Todo"} description={"Your tasks for today"} colSpan={2}/>

                    <div className={"col-span-2"}>
                        <Widget title={"Calendar"} description={"Mi. 29. Nov 2023"} colSpan={2}>
                            <div></div>
                        </Widget>
                    </div>
                </div>
            </div>
        </section>
    )
}