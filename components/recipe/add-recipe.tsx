"use client";

import {Dialog, Transition} from '@headlessui/react';
import {Fragment, useState} from 'react';
import {Button} from "@/components/ui/button";
import {createRecipe, Recipe} from "@/api/recipe-api";

export default function AddRecipeModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [recipeName, setRecipeName] = useState('');
    const [ingredients, setIngredients] = useState<string[]>([]);

    function closeModal() {
        setIsOpen(false);
        // Clear the form fields
        setRecipeName('');
        setIngredients([]);
    }

    function openModal() {
        setIsOpen(true);
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const newRecipe: Recipe = {
            name: recipeName,
            ingredients: ingredients.map((ingredientName) => ({
                name: ingredientName,
            })),
        };

        await createRecipe(newRecipe);

        closeModal();
    };

    const handleIngredientChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const inputValue = event.target.value;
        const lines = inputValue.split('\n');
        setIngredients(lines);
    };

    return (
        <>
            <Button onClick={openModal}>Add Recipe</Button>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25"/>
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel
                                    className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-neutral-800 p-6 text-left align-middle shadow-xl transition-all"
                                >
                                    <Dialog.Title
                                        as="h3"
                                        className="text-2xl font-medium leading-6 text-gray-900 dark:text-white"
                                    >
                                        Create a new recipe
                                    </Dialog.Title>

                                    <div className="mt-2.5">
                                        <p className="text-sm text-gray-500 dark:text-neutral-50 mb-6">
                                            Get started by filling in the information below to create your new recipe.
                                        </p>

                                        <form onSubmit={handleSubmit}>
                                            <div>
                                                <label htmlFor="name" className="font-bold">
                                                    Name
                                                </label>
                                                <input
                                                    id="name"
                                                    type="text"
                                                    className="w-full border-gray-300 rounded p-2 mb-2"
                                                    placeholder="Recipe Name"
                                                    value={recipeName}
                                                    onChange={(e) => setRecipeName(e.target.value)}
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="ingredients" className="font-bold">
                                                    Ingredients
                                                </label>
                                                <textarea
                                                    id="ingredients"
                                                    className="w-full border-gray-300 rounded p-2"
                                                    placeholder="Enter ingredients, one per line"
                                                    value={ingredients.join('\n')}
                                                    onChange={handleIngredientChange}
                                                    style={{height: '200px'}}
                                                />
                                            </div>

                                            <div className={"inline-flex space-x-2"}>
                                                <div className="mt-4">
                                                    <button
                                                        type="submit"
                                                        className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                                                    >
                                                        Create Recipe
                                                    </button>
                                                </div>

                                                <div className="mt-4">
                                                    <button
                                                        type="button"
                                                        className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                                                        onClick={closeModal}
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}