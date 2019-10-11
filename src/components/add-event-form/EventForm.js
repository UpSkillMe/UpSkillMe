import React from "react";
import skillsConverter from "../../utils/skillsConverter";
import activityConverter from "../../utils/activityConverter";

export default function EventForm({ setDataRefresh, emailInput }) {
  const [activityName, setActivityName] = React.useState("");
  const [date, setDate] = React.useState("");
  const [badgeValues, setBadgeValues] = React.useState([]);
  const badgeOptions = [
    "Communication",
    "Creativity",
    "Innovation",
    "Leadership",
    "Media",
    "Problem Solving",
    "Teamwork",
    "Technology"
  ];

  const [activityType, setActivityType] = React.useState("");
  const activityOptions = [
    "After school club",
    "Careers workshop",
    "Competition ",
    "Employer event",
    "Mentoring",
    "Online course ",
    "School project ",
    "Skills workshop",
    "Sports club",
    "Summer school ",
    "University event ",
    "Volunteering ",
    "Work experience ",
    "Other"
  ];

  const [duration, setDuration] = React.useState(0);
  const durationOptions = [1, 2, 3, 4, 5, 6, 7, 14, 21, 28, 35, 70, 105, 140];
  const [supportingLink, setSupportingLink] = React.useState("");

  const updateBadges = e => {
    const value = Array.from(e.target.selectedOptions, option => option.value);
    const newValue = skillsConverter(value);
    setBadgeValues(newValue);
  };

  const updateActivityType = e => {
    const convertedActivity = activityConverter(e.target.value);
    setActivityType(convertedActivity);
  };

  const updateDuration = e => {
    setDuration(parseInt(e.target.value));
  };

  const handleSubmit = e => {
    const submittedData = JSON.stringify({
      records: [
        {
          fields: {
            nameOfActivity: activityName,
            activityType: activityType,
            date: date,
            durationHours: duration,
            link: supportingLink,
            skills: badgeValues,
            schoolEmail: emailInput
          }
        }
      ]
    });
    fetch(
      `http://localhost:9000/CreateUserActivity?activityData=${submittedData}`
    )
      .then(res => res.json())
      .then(res => {
        console.log("came into refresh");
        setDataRefresh(true);
      });

    alert("This form was submitted");
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name of Activity:
        <input
          type="text"
          value={activityName}
          onChange={e => setActivityName(e.target.value)}
        />
      </label>

      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
      </label>

      <label>
        Activity type:
        <select
          name="activityType"
          value={activityType}
          onChange={updateActivityType}
        >
          {activityOptions.map(opt => {
            return <option value={opt}>{opt}</option>;
          })}
        </select>
      </label>

      <label>
        Duration:
        <select name="duration" value={duration} onChange={updateDuration}>
          {durationOptions.map(opt => {
            return <option value={opt}>{opt}</option>;
          })}
        </select>
      </label>

      <label>
        Select Skills
        <select
          name="badgeValues"
          multiple={true}
          value={badgeValues}
          onChange={updateBadges}
        >
          {badgeOptions.map(opt => {
            return <option value={opt}>{opt}</option>;
          })}
        </select>
      </label>

      <label>
        Link to supporting info:
        <input
          type="url"
          value={supportingLink}
          onChange={e => setSupportingLink(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
