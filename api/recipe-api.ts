import axios, { AxiosInstance } from 'axios';

export interface Ingredient {
    id?: number;
    name: string;
}

export interface Recipe {
    id?: number;
    name: string;
    ingredients: Ingredient[];
}

export interface ShoppingList {
    ingredients: Ingredient[];
}

const api: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080', // Replace with your actual base URL
});

export const getAllRecipes = async (): Promise<Recipe[]> => {
    const response = await api.get<Recipe[]>('/api/recipes');
    return response.data;
};

export const getRecipeById = async (id: number): Promise<Recipe | null> => {
    try {
        const response = await api.get<Recipe>(`/api/recipes/${id}`);
        return response.data;
    } catch (error) {
        return null;
    }
};

export const createRecipe = async (recipe: Recipe): Promise<Recipe | null> => {
    try {
        const response = await api.post<Recipe>('/api/recipes', recipe);
        return response.data;
    } catch (error) {
        return null;
    }
};

export const updateRecipe = async (id: number, updatedRecipe: Recipe): Promise<Recipe | null> => {
    try {
        const response = await api.put<Recipe>(`/api/recipes/${id}`, updatedRecipe);
        return response.data;
    } catch (error) {
        return null;
    }
};

export const deleteRecipe = async (id: number): Promise<void> => {
    await api.delete(`/api/recipes/${id}`);
};

export const addRecipeToShoppingList = async (recipeId: number, shoppingListId: number): Promise<Recipe | null> => {
    try {
        const response = await api.post<Recipe>(`/api/recipes/${recipeId}/addToShoppingList/${shoppingListId}`);
        return response.data;
    } catch (error) {
        return null;
    }
};
