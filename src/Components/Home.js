import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Online For Touchless Delivery"
                leftBtnTxt="Custom Order"
                rightBtnTxt="Existing Inventory"
                backgroundImg="model-s.jpg" />
            <Section
                title="Model Y"
                description="Order Online For Touchless Delivery"
                leftBtnTxt="Custom Order"
                rightBtnTxt="Existing Inventory"
                backgroundImg="model-y.jpg"
            />
            <Section
                title="Model 3"
                description="Order Online For Touchless Delivery"
                leftBtnTxt="Custom Order"
                rightBtnTxt="Existing Inventory"
                backgroundImg="model-3.jpg"
            />
            <Section
                title="Model X"
                description="Order Online For Touchless Delivery"
                leftBtnTxt="Custom Order"
                rightBtnTxt="Existing Inventory"
                backgroundImg="model-x.jpg" />
            <Section
                title="Solar Panels"
                description="Lowest Cost Solar Panels in America"
                leftBtnTxt="Order Now"
                rightBtnTxt="Learn More"
                backgroundImg="solar-panel.jpg" />
            <Section
                title="Solar Roof"
                description="Produce Clean Energy From Your Roof"
                leftBtnTxt="Order Now"
                rightBtnTxt="Learn More"
                backgroundImg="solar-roof.jpg" />
            <Section
                title="Accessories"
                leftBtnTxt="Shop Now"
                backgroundImg="accessories.jpg" />
        </Container>
    )
}

const Container = styled.div`
    height : 100vh;
`
export default Home
