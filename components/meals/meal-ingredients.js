import styles from '@/styles/meals/meals-ingredients.module.css'

export default function MealsIngredients({ ingredients }){
    return (
        <>
           <div className={styles.ingredients}>
               {
                ingredients.map((ing, index)=><div className={styles.ingredient} key={index}>
                    {ing}
                </div>)
               }

           </div>
        </>
    )
}