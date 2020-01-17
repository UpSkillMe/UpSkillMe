import React from "react";
import Activity from "../activity/Activity";
import {
    H2, H3
} from "./Activities.style"
import {ButtonDiv} from "../filter-opportunity-button/FilterOpportunityButton.style";
import FilterActivitiesButton from "../filter-activities-button/FilterActivitiesButton";

export default function Activities({
                                       activities,
                                       filterProject,
                                       setFilterProject,
                                       isFormDisplayed,
                                       setFormDisplayed,
                                       activityButtonDisplay,
                                       setActivityButtonDisplay,
                                       closeButtonDisplay,
                                       setCloseButtonDisplay,
                                       activityName,
                                       setActivityName,
                                       activityType,
                                       setActivityType,
                                       badgeValues,
                                       setBadgeValues,
                                       setCopyActivity,
                                       Project,
                                       setProject
                                   }) {
    if (!activities) {
        return <h3> Activities not loaded...</h3>;
    }

    if (filterProject === '') {
        return (
            <div>
                <H2>Activity log</H2>
                <H3>
                    Displaying {activities.length} of {activities.length}
                </H3>
                <ButtonDiv>

                    <FilterActivitiesButton
                        key={'FALSE'}
                        filterProject={'FALSE'}
                        setFilterProject={setFilterProject}
                    >
                    </FilterActivitiesButton>

                    <FilterActivitiesButton
                        key={'TRUE'}
                        filterProject={'TRUE'}
                        setFilterProject={setFilterProject}
                    >
                    </FilterActivitiesButton>

                </ButtonDiv>

                {activities.map((activity, index) => {
                    return (
                        <Activity
                            key={activity.id}
                            activity={activity}
                            index={index}
                            activities={activities}
                            isFormDisplayed={isFormDisplayed}
                            setFormDisplayed={setFormDisplayed}
                            activityButtonDisplay={activityButtonDisplay}
                            setActivityButtonDisplay={setActivityButtonDisplay}
                            closeButtonDisplay={closeButtonDisplay}
                            setCloseButtonDisplay={setCloseButtonDisplay}
                            activityName={activityName}
                            setActivityName={setActivityName}
                            activityType={activityType}
                            setActivityType={setActivityType}
                            badgeValues={badgeValues}
                            setBadgeValues={setBadgeValues}
                            setCopyActivity={setCopyActivity}
                            Project={Project}
                            setProject={setProject}
                        />
                    );
                })}
            </div>
        );
    } else {
        return (
            <div>
                <H2>Activity log</H2>
                <H3>
                    Displaying {activities.filter((x) => x.fields.Project === filterProject).length} of {activities.length}
                </H3>
                <ButtonDiv>

                    <FilterActivitiesButton
                        key={'FALSE'}
                        filterProject={'FALSE'}
                        setFilterProject={setFilterProject}
                    >
                    </FilterActivitiesButton>

                    <FilterActivitiesButton
                        key={'TRUE'}
                        filterProject={'TRUE'}
                        setFilterProject={setFilterProject}
                    >
                    </FilterActivitiesButton>

                </ButtonDiv>

                {activities
                    .filter((x) => x.fields.Project === filterProject)
                    .map((activity, index) => {
                        return (
                            <Activity
                                key={activity.id}
                                activity={activity}
                                index={index}
                                activities={activities}
                                isFormDisplayed={isFormDisplayed}
                                setFormDisplayed={setFormDisplayed}
                                activityButtonDisplay={activityButtonDisplay}
                                setActivityButtonDisplay={setActivityButtonDisplay}
                                closeButtonDisplay={closeButtonDisplay}
                                setCloseButtonDisplay={setCloseButtonDisplay}
                                activityName={activityName}
                                setActivityName={setActivityName}
                                activityType={activityType}
                                setActivityType={setActivityType}
                                badgeValues={badgeValues}
                                setBadgeValues={setBadgeValues}
                                setCopyActivity={setCopyActivity}
                                Project={Project}
                                setProject={setProject}
                            />
                        );
                    })}
            </div>
        );
    }
}
