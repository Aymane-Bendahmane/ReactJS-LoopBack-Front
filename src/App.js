import { Route, Switch } from "react-router-dom";
import AllMeetUpsPage from "./pages/AllMeetUps";
import NewMeetUpsPage from "./pages/NewMeetIp";
import FavoriteMeetUpsPage from "./pages/Favorites";
import Layout from "./componants/layout/Layout";
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetUpsPage />
        </Route>
        <Route path="/favorite">
          <FavoriteMeetUpsPage />
        </Route>
        <Route path="/new">
          <NewMeetUpsPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
