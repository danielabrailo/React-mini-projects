import MeetupDetail from "../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image=""
      title="First meetup"
      address="Ben Gurion 000"
      description="This is the first meetup"
    />
  );
}

export function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Hashalom_interchange.jpg/2880px-Hashalom_interchange.jpg",
        id: "m1",
        title: "First meetup",
        address: "Ben Gurion 000",
        description: "This is the first meetup",
      },
    },
  };
}

export default MeetupDetails;
