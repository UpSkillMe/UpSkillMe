import React from "react";


export default function Profile({ name, avatar, data }){
    const [totalScore, setTotalScore] = React.useState(10);
    const [email, setEmail] = React.useState('tbd');

    React.useEffect(()=>{
        if (data) {
    let tempTotalPoints = 0
    data.forEach(activity=>{
        tempTotalPoints+=activity.fields['totalPoints (Activity points x duration)']
    }) 
    setTotalScore(tempTotalPoints)
    if (data[0]) {
        setEmail(data[0].fields.schoolEmail)}
}

    },[data])
    if (!data) {
        return (<p>Loading</p>)}
    return(
        <div>
        <h1>{email}</h1>
        <img src={avatar} alt="this is our avatar pic" width="200px"/>
        <h2>{totalScore}</h2>
        </div>
    )
}

