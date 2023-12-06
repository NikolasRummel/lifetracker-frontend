"use client";
import React, { useState, useEffect } from 'react';
import { StaticImageData } from 'next/image';
import Widget from "@/components/widget/widget";
import { Checkbox } from "@/components/ui/checkbox";
import { addTask, getTasks, removeTask, Task } from "@/api/todo-api";
import { v4 as uuidv4 } from 'uuid';

interface TodoWidgetProps {
    title: string;
    description: string;
    colSpan?: number | 1;
    image?: StaticImageData;
}

const TodoWidget: React.FC<TodoWidgetProps> = ({ title, description, colSpan, image }) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        console.log('useEffect is running');
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const fetchedTasks = await getTasks();
            setTasks(fetchedTasks);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    const handleAddTask = async (e: React.FormEvent) => {
        e.preventDefault();

        if (tasks.length > 7) return; // Prevent overflow

        if (newTask.trim() !== '') {
            try {
                const addedTask = await addTask({
                    id: uuidv4(),
                    text: newTask.trim(),
                });
                setTasks((prevTasks) => [...prevTasks, addedTask]);
                setNewTask('');
            } catch (error) {
                console.error('Error adding task:', error);
            }
        }
    };

    const handleRemoveTask = async (taskId: string) => {
        try {
            await removeTask(taskId);
            setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
        } catch (error) {
            console.error('Error removing task:', error);
        }
    };

    return (
        <Widget title={title} description={description} colSpan={colSpan} image={image}>
            <div className="w-full ml-4 relative">
                <ul className="p-0 mb-4 h-4/5 overflow-y-auto mt-4 z-10">
                    {tasks.map((task) => (
                        <li key={task.id} className="flex items-center mb-2">
                            <Checkbox id={task.id} onClick={() => handleRemoveTask(task.id)} />
                            <label
                                htmlFor={task.id}
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
