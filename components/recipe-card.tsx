import React from 'react';
import Image from 'next/image';
import defaultRecipeImage from '@/public/images/food.png';

interface RecipeCardProps {
    recipe: {
        id: number;
        name: string;
        description: string;
        imageUrl?: string; // Optional image URL for the recipe
    };
}

const RecipeCard: React.FC<RecipeCardProps> = ({recipe}) => {
    return (
        <div className="shadow-xl hover:shadow-2xl hover:scale-[1.02] duration-300 rounded-b-3xl col-span-1 relative">
            <div className="rounded-3xl bg-sky-100 dark:bg-neutral-900 w-full overflow-hidden">
                <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-t from-transparent to-black/70 text-white text-xl font-bold rounded-t-2xl">
                    {recipe.name}
                </div>
                <Image
                    src={recipe.imageUrl ? recipe.imageUrl : defaultRecipeImage}
                    alt={recipe.name}
                    className="rounded-b-2xl w-full h-[200px] object-cover block"
                />
            </div>
        </div>

    );
};

export default RecipeCard;
