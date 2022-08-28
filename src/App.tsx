import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Spotlight from "./components/Spotlight";

import NotFoundPage from "./views/404/NotFound";
import ReviewCreate from "./views/Review/Create";
import ReviewMerge from "./views/Review/Merge";
import ReviewSearch from "./views/Review/Search";
import ReviewEdit from "./views/Review/Edit";

import UserCreate from "./views/User/Create";
import UserLogin from "./views/User/Login";

function App() {
  return (
    <Spotlight>
      <Router>
        <Routes>
          <Route path="/" element={<UserLogin />} />]
          <Route path="review">
            <Route path="create" element={<ReviewCreate />} />
            <Route path="edit">
              <Route index element={<ReviewEdit />} />
              <Route path=":id" element={<ReviewCreate />} />
            </Route>
            <Route path="search" element={<ReviewSearch />} />
            <Route path="merge" element={<ReviewMerge />} />
          </Route>
          <Route path="user">
            <Route path="login" element={<UserLogin />} />
            <Route path="create" element={<UserCreate />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </Spotlight>
  );
}

export default App;
