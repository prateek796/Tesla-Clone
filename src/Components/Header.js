import React , {useState}from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {selectCars} from '../features/Car/CarSlice'
import {useSelector } from 'react-redux'



function Header() {

    const [BurgerStatus , setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars)
    return (
        <Container>
            <a href="google.com">
                <img src="/images/logo.svg" alt=""></img>
            </a>
            <Menu>
                <a href="#">Model S</a>

                <a href="#">Model Y</a>

                <a href="#">Model 3</a>

                <a href="#">Model X</a>

            </Menu>
            <RightMenu>
                <a href="#">Shop</a>

                <a href="#">Account</a>

                <CustomMenu onClick={()=> setBurgerStatus(true)  }/>
                <BurgerNav show ={BurgerStatus}>
                    <CloseWrapper>
                        <CustomClose  onClick={()=> setBurgerStatus(false)  } />
                    </CloseWrapper>
                    <li><a href="#">Existing Inventory</a></li>
                    <li><a href="#">Used Inventory</a></li>
                    <li><a href="#">Test Drive</a></li>
                    <li><a href="#">Roadster</a></li>
                    <li><a href="#">Semi</a></li>
                    <li><a href="#">Charging</a></li>
                    <li><a href="#">Power Wall</a></li>
                    <li><a href="#">Commercial Energy</a></li>
                    <li><a href="#">Utilities</a></li>
                    <li><a href="#">Find Us</a></li>
                    <li><a href="#">Support</a></li>
                </BurgerNav>

            </RightMenu>
        </Container>
    )
}

const Container = styled.div`
    min-height : 60px;
    position : fixed;
    display : flex;
    align-items : center;
    justify-content : space-between;
    padding : 0 20px;
    top : 0;
    left : 0;
    right : 0;
    z-index : 1;
`
const Menu = styled.div`
    display : flex;
    align-items : center;
    justify-content : center;
    flex : 1;

    a{
        font-weight : 600;
        text-transform : uppercase;
        padding : 0 10px;
    }

    @media (max-width : 768px){
        display : none;
    }


`
const RightMenu = styled.div`
    display : flex;
    align-items : center;
    justify-content : center;

a{
    font-weight : 600;
    text-transform : uppercase;
    padding : 0 10px;
    margin-right : 10px;
}
`

const CustomMenu = styled(MenuIcon)`
    cursor : pointer;
`

const BurgerNav = styled.div`
    position : fixed;
    background : white;
    z-index : 2;
    width : 300px;
    top : 0;
    bottom: 0;
    right : 0;
    list-style: none;
    padding : 20px;
    display : flex;
    flex-direction : column;
    text-align : start;
    justify-content : space-evenly;
    transform : ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition : transform 0.2s ease-in;

    li{
        padding : 15px 0;
        border-bottom : 1px solid black;
        a{
            font-weight:600;
        }
    }
`

const CloseWrapper =styled.div`
    display : flex;
    justify-content : flex-end;
`

const CustomClose = styled(CloseIcon)`
    cursor : pointer;
`

export default Header
