import React, {useState, useContext} from 'react'
import { NavLink } from 'react-router-dom';
import {ImgWrapper, Image, Article, Button} from './styles'
import { RiHeart2Line, RiHeartFill } from 'react-icons/ri';
import { Context } from '../../context/Context';

export const PhotoCard= ({id, src, price, contact}) => {


    const [likes, setLikes]= useState(Math.floor(1, 20));
    const [liked, setLiked]= useState(false);
    const Icon= liked? RiHeartFill: RiHeart2Line;
    const {data}= useContext(Context)

    const onClick= () => {
        setLiked(!liked);

        if(!liked ) {
            setLikes(likes+1);
        } else {
            setLikes(likes-1);
        }
        data[id].liked= !liked


        // console.log("liked", id);
    }

    return(
        <Article className='card'>
            <NavLink to={`/detail/${id}`}>
                <ImgWrapper>
                    <Image src={src} />
                </ImgWrapper>
            </NavLink>
            <div className='likes' style={{marginLeft: "5%",paddingBottom: "20px", display: "flex", alignItems:"center", justifyContent: "space-between"}}>
                <div style={{display: "flex", alignItems: "center"}}>
                <Button onClick={onClick}>
                    <Icon size='32px' /> 
                </Button>
                <span style={{fontSize: "2rem"}}>{likes} Likes!</span>

                </div>
                <div>
                <p style={{fontSize: "2rem", marginLeft: "10px", color: "rgb(149, 210, 213)"}}>${price}</p>
                <p style={{fontSize: "2rem", marginLeft: "10px", color: "#69c77e"}}>{contact}</p>
                </div>
            </div>
        </Article>
    );
}