import Link from "next/link";
import LogoImg from '@/assets/logo.png'

import Image from "next/image";

import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

import styles from '@/styles/main-header/main-header.module.css'

export default function MainHeader(){


    return (
        <>
        <MainHeaderBackground />
        <header className={styles.header}>
            <Link className={styles.logo} href='/'>
                <Image src={LogoImg} alt='a plate of food' priority />
                Next Level Food
            </Link>

            <nav className={styles.nav}>
            <ul>
                <li>
                    <NavLink href={'/meals'}>
                        Browse Meals
                    </NavLink>
                </li>
                <li>
                    <NavLink href={'/community'}>
                        Foodies Community
                    </NavLink>
                </li>
            </ul>
        </nav>
        </header>
        </>

     
    )
}