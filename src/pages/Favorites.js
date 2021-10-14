import { useContext } from "react";
import FavoritesContext from "../store/favorite-context";
import MeetupList from "../componants/meetups/MeetupList";
function FavoriteMeetUpsPage() {
  const favoritesCtx = useContext(FavoritesContext);
  let content;
  if (favoritesCtx.totalFAvorites === 0) {
    content = <p>You got no favorites yet. Start adding some ?</p>;
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }
  return (
    <section>
      <h1>Favorite Meetups: </h1>
      {content}
    </section>
  );
}
export default FavoriteMeetUpsPage;
