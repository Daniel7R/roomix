import React, {useEffect, useContext} from 'react';
import { Context } from '../../context/Context';
import { useParams } from 'react-router-dom';
import { Article, NavLink, ImgWrapper, Image } from '../PhotoCard/styles';

export const CardQuery= () => {

    let dataPhoto;
    const {id}= useParams();
    const {data}= useContext(Context);

        console.log(id);
    useEffect(() => {
        
        

    }, [])


    return (
        <Article className='card'>
            {
                data.map(d => {
                    if (d.id == id) {
                        return (
                            <>
                                <ImgWrapper style={{width: "450px"}}>
                                    <Image src={d.src} />
                                </ImgWrapper>
                                <div className='likes' style={{ marginLeft: "5%", paddingBottom: "20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <div style={{ display: "flex", alignItems: "center" }}>

                                    </div>
                                    <div>
                                        <p style={{ fontSize: "2rem", marginLeft: "10px", color: "rgb(149, 210, 213)" }}>${d.price}</p>
                                        <p style={{ fontSize: "2rem", marginLeft: "10px", color: "#69c77e" }}>{d.contact}</p>
                                    </div>
                                </div>
                            </>
                        )
                    }
                })
            }
        </Article>
    );
}