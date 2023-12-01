"use client";
import React, { useState } from 'react';
import { StaticImageData } from 'next/image';
import Widget from "@/components/widget/widget";
import { Checkbox } from "@/components/ui/checkbox";

interface Task {
    id: number;
    text: string;
}

interface TodoWidgetProps {
    title: string;
    description: string;
    colSpan?: number | 1;
    image?: StaticImageData;
}

const TodoWidget: React.FC<TodoWidgetProps> = ({ title, description, colSpan, image }) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState('');

    const handleAddTask = (e: React.FormEvent) => {
        e.preventDefault();

        if(tasks.length > 7) return; //prevent overflow

        if (newTask.trim() !== '') {
            setTasks((prevTasks) => [
                ...prevTasks,
                {
                    id: Date.now(),
                    text: newTask.trim(),
                },
            ]);
            setNewTask('');
        }
    };

    const handleRemoveTask = (taskId: number) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    return (
        <Widget title={title} description={description} colSpan={colSpan} image={image}>
            <div className="w-full ml-4 relative">
                <ul className="p-0 mb-4 h-4/5 overflow-y-auto mt-4 z-10"> {/* Added z-10 for higher z-index */}
                    {tasks.map((task) => (
                        <li key={task.id} className="flex items-center mb-2">
                            <Checkbox id={task.id + ""} onClick={() => handleRemoveTask(task.id)} />
                            <label
                                htmlFor={task.id + ""}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-2"
                            >
                                {task.text}
                            </label>
                        </li>
                    ))}
                </ul>
                <form onSubmit={handleAddTask} className="w-full mt-auto bottom-0 absolute">
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        placeholder="Add a new task"
                        className="border p-2 mr-2 rounded-full w-9/12 mb-4"
                    />
                </form>
            </div>
        </Widget>
    );
};

export default TodoWidget;
