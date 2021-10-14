import MeetupList from "../componants/meetups/MeetupList";
import { useState, useEffect } from "react";

function AllMeetUpsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3000/myform")
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setLoadedMeetups(data);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading ......</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All meet up data</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}
export default AllMeetUpsPage;
