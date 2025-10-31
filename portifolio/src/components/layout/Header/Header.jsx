import { useState } from 'react';
import './Header.module.css';


export default function Header() {
    const [activeSection, setActiveSection] = useState('hero');

    const scrollToSectionID = (id) => {
        setActiveSection(id);
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    }

    const navItems = [
        { id: 'hero', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' },
        { id: 'skills', label: 'Skills' }
    ]

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">José Adriano</div>
                <nav className="navigation">
                    {navItems.map(item => (
                        <button
                            key={item.id}
                            className={activeSection === item.id ? 'nav-link active' : 'nav-link'}
                            onClick={() => scrollToSection(item.id)}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>
            </div>
        </header>
    );


}