import React from "react";
import Badges from "../../components/badges/Badges";

import {
  Div, ListStyle, ActivityLinkButton, StyledImg, H3
} from './Activity.style'

export default function Activity({ activity, index, activities }) {
  if (!activity) {
    return <h2> Activity not loaded..</h2>;
  }

  return (
    <Div>
      <ListStyle>
        <H3> Activity #{index + 1} </H3>
        <li>{activity.fields.nameOfActivity}</li>
        <li>{activity.fields.daysAgo} days ago</li>
        <li>{activity.fields.durationHours} Hours</li>
        <li>
          <Badges selectedBadges={activity.fields.skills} data={activities} />
        </li>
        <li>
          {activity.fields["totalPoints (Activity points x duration)"]} points
      </li>

        {activity.fields.link ? (
          <li>
            <a href={activity.fields.link}>
              <ActivityLinkButton>
                View confirmation
            </ActivityLinkButton>
            </a>
          </li>
        ) : (
            ""
          )}
      </ListStyle>
    </Div>
  );
}
