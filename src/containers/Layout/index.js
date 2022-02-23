import React from "react";
import { Header } from "../../components/Header";
import { MenuMobile } from "../../components/MenuMobile";

export const Layout= (props)=> {
    return(
        <>
            <Header />
            <MenuMobile />
            {
                props.children
            }
        </>
    )
}