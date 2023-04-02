import React from "react";
import { Outlet } from 'react-router-dom';
import MpHeader from "./MpHeader";
import MpFooter from "./MpFooter";

function MpLayout() {
    return (
        <>
            <h1 className="blind">Mjae's Portfolio</h1>
            <MpHeader />
            <main className="mp-main">
                <Outlet />
            </main>
            <MpFooter />
        </>
    );
}

export default MpLayout;