import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PSI from "../ui/page/PSI";
import PSU from "../ui/page/PSU";
import PU1 from "../ui/page/PU1";
import PU2 from "../ui/page/PU2";
import PU3 from "../ui/page/PU3";
import PU4 from "../ui/page/PU4";
import PA1 from "../ui/page/PA1";
import PA2 from "../ui/page/PA2";
import PA3 from "../ui/page/PA3";
import PA4 from "../ui/page/PA4";
import PA5 from "../ui/page/PA5";

const Router = () => {
    const isAuth = "admin";

    const userRoutes = [
        {p : '/pu1', e: <PU1/>},
        {p : '/pu2', e: <PU2/>},
        {p : '/pu3', e: <PU3/>},
        {p : '/pu4', e: <PU4/>},
    ];

    const adminRoutes = [
        {p : '/pa1', e: <PA1/>},
        {p : '/pa2', e: <PA2/>},
        {p : '/pa3', e: <PA3/>},
        {p : '/pa4', e: <PA4/>},
        {p : '/pa5', e: <PA5/>},
    ];

    const commonRoutes = [
        {p : '/psi', e: <PSI/>},
        {p : '/psu', e: <PSU/>},
    ];

    const routes = isAuth === "user" ? [...userRoutes, ...commonRoutes] :
        isAuth === "admin" ? [...adminRoutes, ...commonRoutes] :
            commonRoutes;


    return (
        <BrowserRouter>
            <Routes>
                {routes.map(route =>
                    <Route
                        element= {route.e}
                        path={route.p}
                    />
                )}
                <Route path={"/*"} element={<PSI/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;