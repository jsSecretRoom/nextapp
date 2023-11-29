import Link from "next/link";
import './Header.scss';
const Header = () => {
    return(
        <header>
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/autorization">Autorization</Link>
        </header>
    )
}

export {Header};