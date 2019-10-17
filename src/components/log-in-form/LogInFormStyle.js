import styled from "styled-components";

const H2 = styled.h2`
  text-align: center;
  font-size: ${props => props.theme.h1FontSize};
  color: white;
`;

const Input = styled.input`
border-radius: 0.5rem;
width: 7rem;
height: 3rem;
// font-size: ${props => props.theme.h3FontSize};
font-size: 1.5rem;
text-align: center;
margin: 1rem 0.5rem;
background-color: ${props => props.theme.secondaryGreyColor};
`;

const EmailInput = styled.input`
  border: 1px black solid;
  font-size: 1.2rem;
  border-radius: 1rem;
  padding: 1rem;
  width: 80%
`;
const SimpleForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export { Input, H2, EmailInput, SimpleForm };
