"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import defaultRecipeImage from '@/public/images/food.png';
import {Button} from "@/components/ui/button";
import {Recipe} from "@/api/recipe-api";

interface RecipeCardProps {
   recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
    const [isHovered, setHovered] = useState(false);

    return (
        <div
            className="shadow-xl hover:shadow-2xl hover:scale-[1.02] duration-300 rounded-b-3xl col-span-1 relative"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="rounded-3xl bg-sky-100 dark:bg-neutral-900 w-full overflow-hidden relative">
                {isHovered && (
                    <div className={`absolute top-0 left-0 right-0 bottom-0 bg-black/70`}></div>
                )}
                <div className="absolute top-0 left-0 right-0 p-4 text-white text-xl font-bold rounded-t-2xl bg-gradient-to-t from-transparent to-black/70">
                    {recipe.name}
                </div>
                <Image
                    src={defaultRecipeImage}
                    alt={recipe.name}
                    className="rounded-b-2xl w-full h-[200px] object-cover block"
                />
                {isHovered && (
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                        <Button
                            className="px-4 py-2 mx-2 rounded-md"
                            variant={'default'}
                            onClick={() => console.log('See the recipe')}
                        >
                            See Recipe
                        </Button>
                        <Button
                            className="px-4 py-2 mx-2 rounded-md"
                            variant={'ghost'}
                            onClick={() => console.log('Add to Shopping List')}
                        >
                            Add to Shopping List
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RecipeCard;
