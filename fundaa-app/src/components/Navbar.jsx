import React from 'react'
import Search from '@material-ui/icons/Search'
import Badge from '@material-ui/core/Badge'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'

const Container = styled.div`
    height : 60px;
`;
const Wrapper = styled.div`
    padding : 10px 20px;
    display : flex;
    align-items : center;
    justify-content: space-between;
`;
const Left = styled.div`
    flex : 1;
    display : flex;
    align-items : center;
`;
const Language = styled.span`
    font-size : 14px;
    cursor : pointer;
`;
const SearchContainer = styled.div`
    border : 0.5px solid lightgrey;
    display : flex;
    margin-left : 25px;
    padding : 5px;
    align-items : center;
`;
const Input = styled.input`
    border : none;
`;
const Centre = styled.div`
    flex : 1;
    text-align : center;
`;
const Logo = styled.h1`
    font-weight: bold;
`
const Right = styled.div`
    flex : 1;
    display : flex;
    align-items : center;
    justify-content : flex-end;
`;
const MenuItem = styled.div`
    font-size : 14px;
    margin-left : 25px;
    cursor : pointer;
`;



const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Search style={{color: "gray", fontSize:16}}/>
                        <Input></Input>
                    </SearchContainer>
                </Left>
                <Centre>
                    <Logo>
                        BIBLIOTHECA
                    </Logo>
                </Centre>
                <Right>
                    <MenuItem>Sign In / Sign Up</MenuItem>
                    <MenuItem>
                        <Badge badgeContent = {4} color ="primary"><ShoppingCartOutlinedIcon/></Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
