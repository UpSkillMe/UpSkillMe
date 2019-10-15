import React from "react";
import { Redirect, Route } from "react-router-dom";
import styled from "styled-components";

const H2 = styled.h2` 
text-align: center;
`;

const Input = styled.input`
  border-radius: 0.5rem;
width: 5rem;
height: 2rem;
font-size: 1rem;
text-align: center;
margin: 3rem  0.5rem;
`

const EmailInput = styled.input`
  border: 1px black solid;
`



export default function SignUpForm({ emailInput, setEmailInput }) {
  const [currSubmittedEmail, setCurrSubmittedEmail] = React.useState("");
  const [newUser, setNewUser] = React.useState(false);

  const handleSignUpSubmit = e => {
    e.preventDefault();
    setNewUser(true);
    setEmailInput(currSubmittedEmail);
  };

  React.useEffect(() => {
    if (emailInput && newUser) {
      const today = new Date();
      const submittedData = JSON.stringify({
        records: [
          {
            fields: {
              nameOfActivity: "My first activity",
              activityType: ["recbt3yRDLY9GjPc2"],
              // fix this - not sure why it's a month behind!
              date: `${(today.getMonth() + 1) %
                12}-${today.getDate()}-${today.getFullYear()}`,
              durationHours: 0,
              link: "",
              schoolEmail: emailInput,
              skills: ["rec1aXpu34QFpVnDc"]
            }
          }
        ]
      });
      fetch(
        `http://localhost:9000/CreateUserActivity?activityData=${submittedData}`
      )
        .then(res => res.json())
        .then(res => {
          setNewUser(false);
        });
    }
    // return () => window.removeEventListener("submit", handleSignUpSubmit);
  }, [emailInput, newUser]);

  if (emailInput) {
    return (
      <Route>
        <Redirect to={{ pathname: "/profile" }} />
      </Route>
    );
  }

  return (
    <section >
      <H2> Sign Up</H2>
      <form onSubmit={handleSignUpSubmit}>
        <label>
          {" "}
          Enter email:
          <EmailInput
            required
            type="email"
            value={currSubmittedEmail}
            onChange={e => setCurrSubmittedEmail(e.target.value)}
          />
        </label>

        <Input type="submit" />
      </form>
    </section>
  );
}
