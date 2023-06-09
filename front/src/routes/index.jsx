import { PublicRoutes } from "./publicRoutes";
import React from 'react';
import StoreProvider from "../Store/provider";

import { BrowserRouter, Routes as RoutesReact } from 'react-router-dom';

export const Routes = () => (
    <StoreProvider>
        <BrowserRouter>
            <RoutesReact>
                {PublicRoutes()}
            </RoutesReact>
        </BrowserRouter>
    </StoreProvider>
)


