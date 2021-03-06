import React from 'react';
import styled from 'styled-components';
import { useData } from '../contexts/dataContext';
import { Container } from '../styles/globalStyles';
import { Slider } from '../components/slider/Slider';
import { Introduce } from '../components/introduce/Introduce';

//Cst[component name] => custom components
const CstContainer = styled(Container)`
    grid-template-columns: repeat(3, 1fr);

    h1{
       grid-column: 1/span3;
       grid-row:1;
    }
`;

const ProductWrapper = styled.div`
        grid-column: 1/span3;
        grid-row: ${props => props.row ? props.row : '3'};
        border: 0.1rem solid red;
        width: 100%;
        display:flex;
        align-self: flex-end;
        ${props => {
        if (props.middle) {
            return `border:none;`
        } else {
            return `
            border-left:none;
            border-right:none;
        `
        }
    }}
`;

export const BestSellers = () => {
    //custom useContext
    const { data } = useData();
    const sectionIntroduce = data.bestSellersIntroduce.text;

    //get data from the context
    const products = data.bestSellers;
    const productsSpice = data.bestSellersSpice;
    const productsFruit = data.bestSellersFruit;

    return (
        <section id='bestSellers'>
            <CstContainer>
                <h1>
                    Best Sellers
                </h1>
                <Introduce colNum={'1/span3'}>{sectionIntroduce}</Introduce>
                <ProductWrapper>
                    <Slider products={products} />
                </ProductWrapper>
                <ProductWrapper row={'4'} middle column={'1/span3'}>
                    <Slider right products={productsFruit} />
                </ProductWrapper>
                <ProductWrapper row={'5'}>
                    <Slider products={productsSpice} />
                </ProductWrapper>
            </CstContainer>
        </section>
    )
}
