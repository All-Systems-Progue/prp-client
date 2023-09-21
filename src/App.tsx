import { Spotlight } from "@components/Spotlight";
import { NotFoundPage } from "@views/404";
import { CreateReview, EditReview, MergeReviews, SearchReviews } from "@views/reviews";
import { CreateUser, UserLogin } from "@views/users";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <Spotlight>
      <Router>
        <Routes>
          <Route path="/" element={<UserLogin />} />
          <Route path="review">
            <Route path="create" element={<CreateReview />} />
            <Route path="edit">
              <Route index element={<EditReview />} />
              <Route path=":id" element={<CreateReview />} />
            </Route>
            <Route path="search" element={<SearchReviews />} />
            <Route path="merge" element={<MergeReviews />} />
          </Route>
          <Route path="user">
            <Route path="login" element={<UserLogin />} />
            <Route path="create" element={<CreateUser />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </Spotlight>
  );
};
