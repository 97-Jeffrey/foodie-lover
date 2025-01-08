import Link from "next/link";
import LogoImg from '@/assets/logo.png'

export default function MainHeader(){
    return (
        <header>
            <Link href=''>
               <img src={LogoImg.src} alt='a plate of food' />
            </Link>

            <nav>
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

     
    )
}