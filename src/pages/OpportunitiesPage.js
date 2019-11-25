import React from "react";
import OpportunitiesList from "../components/opportunitiesList/OpportunitiesList";
import { Redirect, Route } from "react-router-dom";
import LogOutButton from "../components/log-out-button/log-out-button";
import activityConverter from "../utils/activityConverter";
import { Navbar } from '../components/common/common';
import BackButton from '../components/back-button/BackButton';
import {useTracker} from "../utils/customHooks";
export default function OpportunitiesPage({
  opportunities,
  setOpportunities,
  setEmailInput,
  setColour
}) {
  const [loggedOut, setLoggedOut] = React.useState(false);

  useTracker('/opportunities')

  React.useEffect(() => {
    fetch(`/.netlify/functions/GetOpportunitiesData`)
      // fetch(`http://localhost:9000/GetOpportunitiesData`)
      .then(res => res.json())
      .then(res => {
        if (res.records) {
          res.records.forEach(e => {
            e.fields.activityType = activityConverter(e.fields.activityType[0]);
          });
          setOpportunities(res.records);
        }
      });
  }, []);

  if (loggedOut) {
    return (
      <Route>
        <Redirect to={{ pathname: "/" }} />
      </Route>
    );
  }

  return (
    <div>
      <Navbar>
        <LogOutButton setLoggedOut={setLoggedOut} setEmailInput={setEmailInput} setColour={setColour} />
        <BackButton></BackButton>
      </Navbar>
      <OpportunitiesList opportunities={opportunities} />
    </div>
  );
}
