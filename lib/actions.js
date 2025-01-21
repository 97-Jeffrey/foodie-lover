'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

const applicationId = process.env.EDAMAN_APPLICATION_ID
const applicationKey = process.env.EDAMAN_APPLICATION_KEY

function isInValidText(text){
    return !text || text.trim() === ''
}


export async function shareMeal( preState, formData ){

    const meal ={
       title: formData.get('title'),
       summary: formData.get('summary'),
       ingredients: formData.get('ingredients'),
       instructions: formData.get('instructions'),
       image: formData.get('image'),
       creator: formData.get('name'),
       creator_email: formData.get('email')
    }

    if( isInValidText(meal.title) ||
        isInValidText(meal.summary) ||
        isInValidText(meal.ingredients) ||
        isInValidText(meal.instructions) ||
        isInValidText(meal.creator) ||
        isInValidText(meal.creator_email) ||
        !meal.creator_email.includes('@') ||
        !meal.image || meal.image.size ===0
    ){
        return {
            message: 'Invalid input'
        }
    }

    await saveMeal(meal)
    revalidatePath('/meals')
    redirect('/meals')


}


export async function getNutrition (ingredients){
    
}