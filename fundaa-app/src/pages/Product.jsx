import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 70%;
  height: 100vh;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;


const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Announcements />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={"https://images-na.ssl-images-amazon.com/images/I/51QhY2qsGEL._SX323_BO1,204,203,200_.jpg"} />
        </ImgContainer>
        <InfoContainer>
          <Title>The Analects of Confucius</Title>
          <Desc>
          he Analects (Chinese: 論語; meaning "Selected Sayings"[1]), also known as the Analects of Confucius, 
          the Sayings of Confucius, or the Lun Yu, is an ancient Chinese book composed of a large collection of 
          sayings and ideas attributed to the Chinese philosopher Confucius and his contemporaries, traditionally\
           believed to have been compiled and written by Confucius's followers. It is believed to have been written 
           during the Warring States period (475–221 BC), and it achieved its final form during the mid-Han
            dynasty (206 BC–220 AD). By the early Han dynasty the Analects was considered merely a "commentary" on
             the Five Classics, but the status of the Analects grew to be one of the central texts of Confucianism
              by the end of that dynasty.
          </Desc>
          <br/>
          <Price>₹ 350 </Price>
          <br/>
          <AddContainer  style={{paddingTop: 30}}>
            <AmountContainer>
              <Remove style={{ cursor : "pointer"}} />
              <Amount>1</Amount>
              <Add style={{ cursor : "pointer"}} />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Product;