import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Hashalom_interchange.jpg/2880px-Hashalom_interchange.jpg',
        address: 'Ben Gurion 000, TLV',
        description: 'This is the first Meetup'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Hashalom_interchange.jpg/2880px-Hashalom_interchange.jpg',
        address: 'Ben Gurion 000, TLV',
        description: 'This is the second Meetup'
    },
];

function HomePage(props) {
    return (
        <MeetupList meetups={props.meetups}/>
    );
};

export async function getStaticProps() {
    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    };
};

export default HomePage;