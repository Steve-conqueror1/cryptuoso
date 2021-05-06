import Link from 'next/link';
import navStyles from '../../styles/Nav.module.scss';


const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href="/">Home Page</Link>
                </li>
                <li>
                    <Link href="/robots">Robots List</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
