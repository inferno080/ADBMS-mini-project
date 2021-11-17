import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height : 30px;
    background-color : #222;
    color : white;
    display : flex;
    align-items : center;
    justify-content : center;
    font-size : 14px;
`

const Announcements = () => {
    return (
        <Container>
            Free Shipping on all domestic and internatinal orders over ₹1000
        </Container>
    )
}

export default Announcements
