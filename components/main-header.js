import Link from "next/link";
import LogoImg from '@/assets/logo.png'
import styles from './main-header.module.css'
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";

export default function MainHeader(){
    return (
        <>
        <MainHeaderBackground />
        <header className={styles.header}>
            <Link className={styles.logo} href=''>
                <Image src={LogoImg} alt='a plate of food' priority />
                Next Level Food
            </Link>

            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href='/meals'>Browse Meals</Link>
                    </li>
                    <li>
                        <Link href='/community'>Foodies Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
        </>

     
    )
}