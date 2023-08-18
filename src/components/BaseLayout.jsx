import React from 'react';
import { Header } from './header';
import { Footer } from './footer';
import { Outlet } from "react-router-dom";
export function BaseLayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default BaseLayout;
//<Card/>