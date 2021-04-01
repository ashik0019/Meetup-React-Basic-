import {useState,useEffect} from 'react'
import React from "react";
import MeetupList from "../components/meetups/MeetupList";


function AllMeetupsPage() {

  const [isLoading, setIsLoading] = useState(true) 
  const [loadedMeetup, setLoadedMeetup] = useState([]) 

  useEffect(() => {
    setIsLoading(true)
    fetch("https://meetups-fbe0e-default-rtdb.firebaseio.com/meetup.json").then(response => {
      return response.json()
     })
     .then(data => {
       const meetups = [];

      for (const key in data){
        const meetup = {
          id: key,
          ...data[key]
        }
        meetups.push(meetup)
      }

       setIsLoading(false)
       setLoadedMeetup(meetups)
   
     });

  }, [])


  

  if(isLoading){
    return<section>
      <h2 style={{color:'green',paddingTop: '50px'}}>Loading....</h2>
    </section>
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetup} />
    </section>
  );
}

export default AllMeetupsPage;
