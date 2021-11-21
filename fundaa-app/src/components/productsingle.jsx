import React from 'react'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;


const productsingle = () => {
    return (
        <div>
           <Container>
            {popularProducts.map((item) => (
                <Product item={item} key={item.id} info={item.info} price={item.price} />
            ))}
            </Container>    
        </div>
    )
}

export default productsingle
