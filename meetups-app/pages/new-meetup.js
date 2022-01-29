import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetup() {
    function addMeetupHandler(enteredMeetupData) {};

    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    );
};

export default NewMeetup;