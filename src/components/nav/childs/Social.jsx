import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components'
import { motion } from 'framer-motion';

const SocialIcon = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    border-radius: 50%;
    width:3rem;
    height:3rem;
    background-color: rgb(211, 211, 211);
    font-size: 1.5rem;

    i{
        color: white;
        display: flex;
        letter-spacing:normal;
    }

    :hover{
        i{
          color:black;
        }
    }
    
    @media screen and (max-width: 1024px){
                font-size: 2rem;
                width:4rem;
                height:4rem;
    }
`;

const Div = styled.div`
    grid-column:3;
    grid-row:1;
    width: 8rem;
    padding-right: 1rem;
    align-self: center;
    justify-self:end;
    justify-content: space-between;
    display: flex;
     @media screen and (max-width: 1024px){
                width:10rem;
    }
`;

export const Social = props => {
    const { socialNetwork } = props;

    return (
        <Div>
            {
                Object.entries(socialNetwork).map((value) => (
                    <SocialIcon
                        whileTap={{ scale: .9 }}
                        whileHover={{
                            scale: 1.2,
                            backgroundColor: 'rgb(173, 216, 230)',
                            transition: { duration: .3 },
                        }}
                        key={uuidv4()}
                    >
                        <a href={value[1]}>
                            <i className={`fab fa-${value[0]}`} />
                        </a>
                    </SocialIcon>
                ))
            }
        </Div>
    )
}
