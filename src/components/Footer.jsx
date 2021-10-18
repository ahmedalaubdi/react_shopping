import {
  Instagram,
  LinkedIn,
  MailOutlined,
  Phone,
  Room,
  Twitter,
  YouTube,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column", background: "#f3f3f3" })}
`;
const Left = styled.div`
  flex: 1;
  flex-direction: column;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;
const Right = styled.div`
  flex: 1;

  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #ffffff;
  background: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>AUBDI</Logo>
        <Desc>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          dolores commodi quam nobis. Error quod harum veritatis? Unde
          reprehenderit nihil fuga nulla culpa illum, aperiam minus, consectetur
          modi molestias odio.
        </Desc>
        <SocialContainer>
          <SocialIcon color="385999">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="E60023">
            <YouTube />
          </SocialIcon>

          <SocialIcon color="55ACEE">
            <LinkedIn />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fasion</ListItem>
          <ListItem>Women Fasion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Get in touch</Title>
        <ContactItem>
          {" "}
          <Room style={{ marginRight: "10px" }} /> torino - canada | forest area
        </ContactItem>
        <ContactItem>
          {" "}
          <Phone style={{ marginRight: "10px" }} /> +1 645 22 34
        </ContactItem>
        <ContactItem>
          {" "}
          <MailOutlined style={{ marginRight: "10px" }} /> aubdio@demo.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
