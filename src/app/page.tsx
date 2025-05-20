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
                <ul className="profile">
                    <li>
                        <img
                            src="http://github.com/kyorasawa.png"
                            alt="GitHub Avatar"
                            className="rounded-img"
                        />
                    </li>
                    <li>
                        <strong>#Kyora(Kyorasawa)</strong><br/>
                        🔧 Passionate about full-stack web development and open source.<br/>
                        🌱 Growing every day — learning, experimenting, evolving.<br/>
                        💡 I value clean, readable code and simple yet useful ideas.<br/>
                        🐧 A Linux enthusiast diving deep into the world of free software.
                    </li>
                </ul>
                <div className="socials">
                    <br/>
                    <h3 className="about">Socials</h3>
                    <ul className="nav-list">
                        <li>
                            <Link href="https://github.com/Kyorasawa" className="tui-link2">./github</Link>
                        </li>
                        <li>
                            <Link href="https://t.me/kyorasawa" className="tui-link2">./telegram</Link>
                        </li>
                    </ul>
                    <br/>
                    <h3 className="about"> GitHub Stats</h3>
                    <br/>
                    <ul className="nav-list">
                        <li>
                            <img
                                src="https://github-readme-stats.vercel.app/api?username=kyorasawa&show_icons=true&theme=github_dark"
                                alt="GitHub Stats"/>
                        </li>
                        <li>
                            <img
                                src="https://github-readme-stats.vercel.app/api/top-langs/?username=kyorasawa&layout=compact&theme=github_dark"
                                alt="Top Languages"/>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
}
