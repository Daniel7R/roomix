import React from "react";
import { Header } from "../../components/Header";
import { MenuMobile } from "../../components/MenuMobile";
import { Section } from "./styles";

export const Layout= (props)=> {
    return(
        <Section>
            <Header />
            <MenuMobile />
            {
                props.children
            }
        </Section>
    )
}