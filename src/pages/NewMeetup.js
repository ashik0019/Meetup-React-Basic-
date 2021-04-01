import {useHistory} from 'react-router-dom'
import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
const NewMeetupPage = () => {
    const history = useHistory();
  const addMeeHandler = (meetupData) => {
    fetch("https://meetups-fbe0e-default-rtdb.firebaseio.com/meetup.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
        history.replace('/')
    });
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeeHandler} />
    </section>
  );
};

export default NewMeetupPage;
