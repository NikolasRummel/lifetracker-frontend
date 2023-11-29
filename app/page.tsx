import Widget from "@/components/widget";
import UserWidget from "@/components/user-widget";
import Example from "@/components/charts/culinarium-chart";
import culinarium from "@/public/images/culinarium.png";

export default async function Home() {

    return (
        <section className="min-h-screen flex items-center justify-center px-20">
            <div className={"w-[1200px]"}>
                <div className={"flex flex-col items-center justify-center"}>
                    <h1 className={"text-4xl font-bold text-sky-900"}>Cubid lifetracker</h1>
                    <h2 className={"text-2xl font-semibold text-sky-900"}>Organice your life in a simple dashboard.</h2>
                </div>

                <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-40"}>
                    <UserWidget image={"https://nikolas-rummel.de/images/me.png"} name={"Nikolas"} email={"privat@nikolas-rummel.de"}/>
                    <Widget title={"Calendar"} description={"Mi. 29. Nov 2023"} colSpan={2}>
                        <p className={"py-20"}>no meetings for today</p>
                    </Widget>
                    <Widget title={"Culinarium"} description={"Current capacity"} colSpan={1} image={culinarium}>
                        <div className={"relative"}>
                            <Example/>
                        </div>
                    </Widget>
                </div>
            </div>
        </section>
    )
}