import styled from "styled-components";

const LandingBody = styled.body`
  background: #109cf157;
  height: 100vh;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme.mainFontColor};
`;

const Image = styled.img`
  margin: 2rem 0;
`;

const CircleSelection = styled.div`
/* display: ${pageState => (pageState === "start" ? "block" : "hidden")}; */
display: flex;
flex-direction: row;
align-items: center;
`;
const Circle = styled.svg`
  margin: 0 0.5rem;
  width: 15px;
`;

const ImageDescription = styled.h2`
  font-size: ${props => props.theme.h3FontSize};
`;

const SignUpButton = styled.button`
  border-radius: 0.5rem;
  width: 6rem;
  height: 2rem;
  font-size: 1rem;
  text-align: center;
  margin: 3rem 0.5rem;
  margin-left: auto;
  margin-right: auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const InfoSection = styled.div`
  display: ${props => (props.pageState === "" ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
`;

const FormSection = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 50%;
  margin: 0 auto 10%;
  padding: 5%;
  padding-top: 1%;
  padding-bottom: 1%
  text-align: center;
  
  background-color: #109cf1;
}

`;
export {
  Div,
  ImageDescription,
  Image,
  CircleSelection,
  Circle,
  SignUpButton,
  ButtonContainer,
  InfoSection,
  FormSection,
  LandingBody
};
