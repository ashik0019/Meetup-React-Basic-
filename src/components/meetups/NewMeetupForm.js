import {useRef} from 'react'
import React from 'react'
import Card from '../ui/Card'
import classes from './NewMeetupForm.module.css'

function NewMeetupForm(props) {
    const titleInputRef = useRef()
    const imageInputRef = useRef()
    const addressInputRef = useRef()
    const descriptionInputRef = useRef()
    
    const submitHandler = (event) => {
        event.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enterdImage = imageInputRef.current.value;
        const enterdAddress = addressInputRef.current.value;
        const enterdDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enterdImage,
            address: enterdAddress,
            description: enterdDescription
        }
        props.onAddMeetup(meetupData);
        //console.log(meetupData)

    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" required id="title" ref={titleInputRef}/>  
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" required id="image" ref={imageInputRef} />  
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input type="text" required id="address" ref={addressInputRef} />  
                </div>
                <div className={classes.control}>
                    <label htmlFor="desctiption">Description</label>
                   <textarea  id="desctiption" required  rows="5" ref={descriptionInputRef}></textarea>  
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm
