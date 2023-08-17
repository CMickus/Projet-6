import React from 'react';
import ReactDOM from 'react-dom/client';
import {Link} from 'react-router-dom';
import '../index.css';

export function Header(){
    return (
        <header>
            <img src="..."/>
            <div>
                <Link to="/">Acceuil</Link>
                <Link to="/A-propos">À propos</Link>
            </div>
        </header>
    )
}

export default {Header}