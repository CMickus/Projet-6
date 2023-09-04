import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Outlet } from "react-router-dom";
import style from './BaseLayout.module.css'

export function BaseLayout() {
    return (
        <>
            <Header />
            <main className={style.visuel}>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default BaseLayout;
//<Card/>