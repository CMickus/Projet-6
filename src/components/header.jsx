import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';

export function Header(){
    return (
        <header>
            <img src="..."/>
            <div>
                <a href="/">Acceuil</a>
                <a href="/A-propos">À propos</a>
            </div>
        </header>
    )
}

export default {Header}