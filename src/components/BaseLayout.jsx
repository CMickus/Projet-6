import React from 'react';
import { Header } from './header';
import { Footer } from './footer';
import { Outlet } from "react-router-dom";
import style from './Banner.module.css'

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