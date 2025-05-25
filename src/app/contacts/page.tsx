
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
            <main className="project">
                <h1>Contacts</h1>
                <hr />
                <p><strong>Discord username:</strong> @kyorasawa</p>
                <p><strong>Telegram username:</strong> @kyorasawa</p>
                <p><strong>Mail:</strong> kyora@nnko.uk</p>
            </main>
        </div>
    );
}

