import RecipeCard from "@/components/recipe-card";
import {getAllRecipes} from "@/api/recipe-api";
import AddRecipeModal from "@/components/recipe/add-recipe";

export default async function RecipePage() {

    const recipes = await getAllRecipes();

    return (
        <div className="min-h-screen p-20">
            <div className="flex justify-between">
                <h1 className="block">Recipes</h1>
                <AddRecipeModal/>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 mt-12">
                {recipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
};

