'use client'

import { useRef, useState } from 'react'
import styles from './image-picker.module.css'
import Image from 'next/image'

export default function ImagePicker({ name, label }){

    const [pickedImage, setPickedImage] = useState()
    const imageInput = useRef()

    function handleClick (){
       imageInput.current.click()
    }

    function handleImageChange(event){
       const file  = event.target.files[0];

       if(!file){
          setPickedImage(null)
          return;
       }
       
       const fileReader = new FileReader()

       fileReader.onload = () =>{
         setPickedImage(fileReader.result)
       }

       fileReader.readAsDataURL(file)



    }

    return <div className={styles.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={styles.controls}>
            <div className={styles.preview}>
                {pickedImage?
                    <Image 
                        src={pickedImage} 
                        alt='Image selected by user'
                        fill
                    />: 
                    <p>No image yet</p>
                }
            </div>
            <input
                className={styles.input}
                type='file'
                id={name}
                accept={'image/png, image/jpeg'}
                name={name}
                ref={imageInput}
                onChange={handleImageChange}
                required
            />
            <button 
                className={styles.button} 
                type='button'
                onClick={handleClick}
            >
                Pick An Image
            </button>

        </div>

    </div>
}