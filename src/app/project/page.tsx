
import React from 'react';
import Link from 'next/link';
import "./style.css";



export default function Page() {
    return (
        <div>
            <header>
                <div className="centre">
                    <nav>
                        <ul className="nav-list">
                            <li><Link href="/" className="tui-link">./home</Link></li>
                            <li><Link href="/project" className="tui-link">./projects</Link></li>
                            <li><Link href="/blog" className="tui-link">./blog</Link></li>
                            <li><Link href="/contacts" className="tui-link">./contacts</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className="project">
                <h1>Projects</h1>
                <h1>========</h1>
                <div>
                    <h1 className="noproject">No current projects.</h1>
                </div>
            </div>
        </div>
    );
}
