
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getMeal } from '@/lib/meals'

import styles from '@/styles/meals/slug.module.css'
import MealsIngredients from '@/components/meals/meal-ingredients'

export async function generateMetadata ({ params}) {
    const meal = getMeal(params.slug)

    if(!meal){
        notFound()
    }
    
    return {
        title: meal.title,
        description: meal.summary
    }
}



export default  function MealDetailPage({ params }){

    const meal = getMeal(params.slug)

    if(!meal){
        notFound()
    }


    meal.instructions = meal.instructions.replace(/\n/g, '<br/>')
    meal.ingredients = meal.ingredients.split(',')

    

    return (
        <>
            <header className={styles.header}>
                <div className={styles.image}>
                    <Image 
                        src={`https://jeffrey-food-image.s3.us-west-2.amazonaws.com/${meal.image}`}
                        alt={meal.title} 
                        fill
                    />
                </div>
                <div className={styles.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={styles.creator}>
                        by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                    </p>
                    <p className={styles.summary}>{meal.summary}</p>
                    <MealsIngredients 
                       ingredients={meal.ingredients}
                    />

                </div>
            </header>
            <main>
                <p className={styles.instructions} dangerouslySetInnerHTML={{
                    __html: meal.instructions
                }}></p>
            </main>
        </>

    )
}