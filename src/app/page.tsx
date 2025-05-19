import styles from './Header.module.css';
import Link from 'next/link';
import './style.css';

export default function Home() {
    return (
        <div>
            <header>
                <div className="centre">
                    <nav>
                        <ul className="nav-list">
                            <li><Link href="/" className="tui-link">./home</Link></li>
                            <li><Link href="/" className="tui-link">./project</Link></li>
                            <li><Link href="/" className="tui-link">./blog</Link></li>
                            <li><Link href="/" className="tui-link">./contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <div>
                <div><span className="about">About</span></div>
                <div><span className="about">=====</span></div>
            </div>

            <div>
                <img src="http://github.com/kyorasawa.png" alt="GitHub Avatar" />
            </div>
        </div>
    );
}