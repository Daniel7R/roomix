import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import {ImgWrapper, Image, Article, Button} from './styles'
import { RiHeart2Line, RiHeartFill } from 'react-icons/ri';

export const PhotoCard= ({id, src}) => {


    const [likes, setLikes]= useState(Math.floor(1, 20));
    const [liked, setLiked]= useState(false);
    const Icon= liked? RiHeartFill: RiHeart2Line;

    const onClick= () => {
        setLiked(!liked);

        if(!liked ) {
            setLikes(likes+1);
        } else {
            setLikes(likes-1);
        }
    }

    return(
        <Article className='card'>
            <NavLink to={`/detail/${id}`}>
                <ImgWrapper>
                    <Image src={src} />
                </ImgWrapper>
            </NavLink>
            <div className='likes' style={{marginLeft: "5%",paddingBottom: "20px", display: "flex", alignItems:"center"}}>
                <Button onClick={onClick}>
                    <Icon size='32px' /> 
                </Button>
                <span style={{fontSize: "2rem"}}>{likes} Likes!</span>
            </div>
        </Article>
    );
}