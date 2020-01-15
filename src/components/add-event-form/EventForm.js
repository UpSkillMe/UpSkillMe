import React from "react";
import skillsConverter from "../../utils/skillsConverter";
import activityConverter from "../../utils/activityConverter";
import styled from "styled-components";
import ActivityButton from "../add-activity-button/ActivityButton";
import CloseButton from "../close-button/CloseButton";

//Styled components
const FormStyle = styled.form`
  display: ${props => props.formDisplay};
  max-width: 90%;
  margin: 10px;
  position: relative;
  background: #ffffff;
  margin: 0 auto 1%;
  padding: 3%;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
`;

const Label = styled.label`
  display: block;
  font-size: 1.2rem;
  margin-bottom: 2.5%;
`;

const Input = styled.input`
  display: block;
  width: 90%;

  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 2.5%;
  padding: 1.5%;
  box-sizing: border-box;
  font-size: 1.2rem;
`;

const TextArea = styled.textarea`
  display: block;
  width: 90%;

  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 2.5%;
  padding: 1.5%;
  box-sizing: border-box;
  font-size: 1.2rem;
`;

// font-family: "Nunito", sans-serif;

const Select = styled.select`
  display: block;
  width: 95%;
`;

const Submit = styled.input`
  font-family: "Nunito", sans-serif;
  font-size: 1.5rem;
  background-color: rgb(16,156,241);
  color: white;
  border-radius: 5px;
  height: 50px;
  width: 140px;
  text-align: center;
  text-decoration: none;
  padding: 1%;
  border-radius: 5px;
  display: block;
  transition: all 0.4s ease 0s;
  cursor: pointer;

  box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);

  :hover {
    background: #434343;
    letter-spacing: 1px;
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.4s ease 0s;
  }
`;

const hexColourNameMap = {
    '#37d67a': 'Green',
    '#2ccce4': 'Blue',
    '#555555': 'Black',
    '#dce775': 'Yellow',
    '#ff8a65': 'Orange',
    '#ba68c8': 'Pink'
};

export default function EventForm({
                                      setDataRefresh,
                                      emailInput,
                                      colour,
                                      isFormDisplayed,
                                      setFormDisplayed,
                                      activityButtonDisplay,
                                      setActivityButtonDisplay,
                                      closeButtonDisplay,
                                      setCloseButtonDisplay,
                                      passwordInput,
                                      activityName,
                                      setActivityName,
                                      date,
                                      setDate,
                                      duration,
                                      setDuration,
                                      supportingInfo,
                                      setSupportingInfo,
                                      activityType,
                                      setActivityType,
                                      badgeValues,
                                      setBadgeValues,
                                      copyActivity
                                  }) {

    const [formDisplay, setFormDisplay] = React.useState(isFormDisplayed);

    const badgeOptions = [
        "Communication",
        "Creativity",
        "Innovation",
        "Leadership",
        "Media",
        "Problem solving",
        "Teamwork",
        "Technology"
    ];

    const skills = {
        Communication: "rec1aXpu34QFpVnDc",
        Creativity: "recilXHxEAlJqZFeu",
        Innovation: "recQtkW5IWh0z3tH5",
        Leadership: "reczDCLXfOC5iHLiQ",
        Media: "recSIsNHGiRbV8CR7",
        "Problem solving": "recOt8tI1ZLivhoZV",
        Teamwork: "recTHKDy3NJghbCrJ",
        Technology: "recVncOYn99qVNwir"
    };

    // const emptyBadgeOptions = React.useState(badgeOptions);
    // if(badgeOptions !== null && badgeOptions.length === 3) {

    // }

    //Initialising activity type with the an array containing
    //the id of after school club. Default value is legitimate value.

    const activityOptions = [
        "After school club",
        "Careers workshop",
        "Competition",
        "Employer event",
        "Mentoring",
        "Online course",
        "School project",
        "Skills workshop",
        "Sports club",
        "Summer school",
        "University event",
        "Volunteering",
        "Work experience",
        "Other"
    ];

    const activityDictionary = {
        "After school club": "recbt3yRDLY9GjPc2",
        "Careers workshop": "rec7lzaalxuMGOc1z",
        Competition: "recX0DSvfI0EkTWzP",
        "Employer event": "recO6WjBempBCwXPW",
        Mentoring: "recINqvhi14OEQ16V",
        "Online course": "recan6J6O1yDNNaum",
        "School project": "recKUogjAsEuiz7LZ",
        "Skills workshop": "recWvSVTJnacRMxGi",
        "Summer school": "recKKc2X7Rx40sy7T",
        "University event": "rec7KmKGVf7Bj2IrE",
        Volunteering: "recv1xg4hehyyybA4",
        "Work experience": "recFP2EcUV54UQiDB",
        "Sports club": "recUe5uzB4CJoT6Xk",
        Other: "reczhkJJNz2JsLvxW"
    };
    const durationOptions = [1, 2, 3, 4, 5, 6, 7, 14, 21, 28, 35, 70, 105, 140];

    const updateBadges = e => {
        let value = Array.from(e.target.selectedOptions, option => option.value);
        value = value.slice(-3);
        setBadgeValues(value);
    };

    const updateActivityType = e => {
        const convertedActivity = activityConverter(e.target.value);
        setActivityType(convertedActivity);
    };

    const updateDuration = e => {
        setDuration(parseInt(e.target.value));
    };

    const handleSubmit = e => {

        // Drop submission if duration is longer than eight hours.
        if (duration <= 50) {
            let submittedData;
            if (copyActivity === false) {

                submittedData = JSON.stringify({
                    records: [
                        {
                            fields: {
                                nameOfActivity: activityName,
                                activityType: activityType,
                                date: date,
                                durationHours: duration,
                                supportingInfo: supportingInfo,
                                schoolEmail: emailInput,
                                skills: skillsConverter(badgeValues),
                                pass: passwordInput,
                                colour: colour
                            }
                        }
                    ]
                });
            } else {
                submittedData = JSON.stringify({
                    records: [
                        {
                            fields: {
                                nameOfActivity: activityName,
                                activityType: [activityDictionary[activityType]],
                                date: date,
                                durationHours: duration,
                                supportingInfo: supportingInfo,
                                schoolEmail: emailInput,
                                skills: skillsConverter(badgeValues),
                                pass: passwordInput,
                                colour: colour
                            }
                        }
                    ]
                });
            }
            console.log('submittedData', submittedData);
            fetch(
                `/.netlify/functions/CreateUserActivity?activityData=${submittedData}`
            )
                .then(res => res.json())
                .then(res => {
                    setDataRefresh(true);
                });
        }

        // Reset fields.
        setActivityName("");
        setActivityType(["recbt3yRDLY9GjPc2"]);
        setDate("");
        setDuration(1);
        setSupportingInfo("");
        setBadgeValues([]);


        alert("Well done, you've added your skill block!");
        e.preventDefault();
    };

    React.useEffect(() => {
        setFormDisplay(isFormDisplayed);
    }, [isFormDisplayed]);
    if (copyActivity === false) {
        return (
            <FormStyle formDisplay={formDisplay} onSubmit={handleSubmit}>
                <CloseButton
                    closeButtonDisplay={closeButtonDisplay}
                    setCloseButtonDisplay={setCloseButtonDisplay}
                    setFormDisplayed={setFormDisplayed}
                    isFormDisplayed={isFormDisplayed}
                    activityButtonDisplay={activityButtonDisplay}
                    setActivityButtonDisplay={setActivityButtonDisplay}
                />
                <h2> Add new activity</h2>
                <Label>
                    Name of Activity:
                    <Input
                        required
                        type="text"
                        value={activityName}
                        onChange={e => setActivityName(e.target.value)}
                    />
                </Label>

                <Label>
                    Date:
                    <Input
                        required
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                    />
                </Label>

                <Label>
                    Activity type:
                    <Select
                        required
                        name="activityType"
                        value={activityDictionary[activityType]}
                        onChange={updateActivityType}
                    >
                        {activityOptions.map(opt => {
                            return (
                                <option key={opt} value={opt}>
                                    {opt}
                                </option>
                            );
                        })}
                    </Select>
                </Label>

                <Label>
                    Duration (Hours):
                    <Select
                        required
                        name="duration"
                        value={duration}
                        onChange={updateDuration}
                    >
                        {durationOptions.map(opt => {
                            return (
                                <option key={opt} value={opt}>
                                    {opt}
                                </option>
                            );
                        })}
                    </Select>
                </Label>

                <Label>
                    Select Skills (Max 3)
                    <Select
                        required
                        name="badgeValues"
                        multiple={true}
                        value={badgeValues}
                        onChange={updateBadges}
                    >
                        {badgeOptions.map(opt => {
                            return (
                                <option key={opt} value={opt}>
                                    {opt}
                                </option>
                            );
                        })}
                    </Select>
                </Label>

                <Label>
                    What did you learn?
                    <TextArea
                        maxlength="480"
                        rows="5"
                        value={supportingInfo}
                        onChange={e => setSupportingInfo(e.target.value)}
                    />
                </Label>
                <Submit type="submit" value="Submit"/>
            </FormStyle>
        );
    } else {
        return (
            <FormStyle formDisplay={formDisplay} onSubmit={handleSubmit}>
                <CloseButton
                    closeButtonDisplay={closeButtonDisplay}
                    setCloseButtonDisplay={setCloseButtonDisplay}
                    setFormDisplayed={setFormDisplayed}
                    isFormDisplayed={isFormDisplayed}
                    activityButtonDisplay={activityButtonDisplay}
                    setActivityButtonDisplay={setActivityButtonDisplay}
                />
                <h2> Repeat activity</h2>
                <Label>
                    Name of Activity:
                    <Input
                        required
                        type="text"
                        value={activityName}
                        onChange={e => setActivityName(e.target.value)}
                    />
                </Label>

                <Label>
                    Date:
                    <Input
                        required
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                    />
                </Label>

                <Label>
                    Duration (Hours):
                    <Select
                        required
                        name="duration"
                        value={duration}
                        onChange={updateDuration}
                    >
                        {durationOptions.map(opt => {
                            return (
                                <option key={opt} value={opt}>
                                    {opt}
                                </option>
                            );
                        })}
                    </Select>
                </Label>

                <Label>
                    What did you learn in this session?
                    <TextArea
                        maxlength="480"
                        rows="5"
                        value={supportingInfo}
                        onChange={e => setSupportingInfo(e.target.value)}
                    />
                </Label>
                <Submit type="submit" value="Submit"/>
            </FormStyle>
        );
    }

}
