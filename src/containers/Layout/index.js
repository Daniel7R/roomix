import React from "react";
import { Section } from "./styles";

export const Layout= (props)=> {
    return(
        <Section>
            {
                props.children
            }
        </Section>
    )
}