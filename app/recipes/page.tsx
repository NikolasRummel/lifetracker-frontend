"use client";

import RecipeCard from "@/components/recipe-card";
import {Button} from "@/components/ui/button";

const Recipes = () => {
    const recipes = [
        {
            id: 1,
            name: 'Salmon Bowl',
            description: 'A nice dish.',
        },
        {
            id: 2,
            name: 'Salmon Bowl',
            description: 'A nice dish.',
        },
        {
            id: 3,
            name: 'Salmon Bowl',
            description: 'A nice dish.',
        },
        {
            id: 4,
            name: 'Salmon Bowl',
            description: 'A nice dish.',
        },
        {
            id: 5,
            name: 'Salmon Bowl',
            description: 'A nice dish.',
        },
        {
            id: 6,
            name: 'Salmon Bowl',
            description: 'A nice dish.',
        }
    ];

    return (
        <div className="min-h-screen p-20">
            <div className="flex justify-between">
                <h1 className="block">Recipes</h1>
                <Button onClick={() => console.log("awd")} className="">
                    Add Recipe
                </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12">
                {recipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
};

export default Recipes;
