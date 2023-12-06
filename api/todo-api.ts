import axios, { AxiosResponse } from 'axios';

export interface Task {
    id: string;
    text: string;
}

const api = axios.create({
    baseURL: 'http://localhost:8080',
});

export async function getTasks(): Promise<Task[]> {
    try {
        const response: AxiosResponse<Task[]> = await api.get('/todos');
        return response.data;
    } catch (error) {
        console.error('Error getting tasks:', error);
        throw error;
    }
}

export async function addTask(task: Task): Promise<Task> {
    try {
        const response: AxiosResponse<Task> = await api.post('/todos', task);
        return response.data;
    } catch (error) {
        console.error('Error adding task:', error);
        throw error;
    }
}

export async function removeTask(id: string): Promise<void> {
    try {
        await api.delete(`/todos/${id}`);
    } catch (error) {
        console.error('Error removing task:', error);
        throw error;
    }
}