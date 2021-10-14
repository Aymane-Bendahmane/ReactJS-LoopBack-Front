import NewMeetupForm from "../componants/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom";
function NewMeetUpsPage() {
  const history = useHistory();
  function addMeetupHandler(meetupData) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(meetupData);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3000/myform", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        alert("Form Submitted 😂😂😂😂 :3 ");
        history.replace("/");
      })
      .catch((error) => console.log("error", error));
  }
  return (
    <section>
      <h1>New Meet up page</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
export default NewMeetUpsPage;
