import { ProtectedRoute } from "@domain/ProtectedRoute";
import { NotFoundPage } from "@views/404";
import { CreateReview, EditReview, MergeReviews, SearchReviews } from "@views/reviews";
import { CreateUser, UserLogin } from "@views/users";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/login" element={<UserLogin />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <CreateReview />
            </ProtectedRoute>
          }
        />
        {/* Review */}
        <Route path="review">
          {/* Create Review */}
          <Route
            path="create"
            element={
              <ProtectedRoute>
                <CreateReview />
              </ProtectedRoute>
            }
          />
          {/* Edit Review */}
          <Route path="edit">
            <Route
              index
              element={
                <ProtectedRoute>
                  <EditReview />
                </ProtectedRoute>
              }
            />
            <Route
              path=":id"
              element={
                <ProtectedRoute>
                  <CreateReview />
                </ProtectedRoute>
              }
            />
          </Route>
          {/* Search Reviews */}
          <Route
            path="search"
            element={
              <ProtectedRoute>
                <SearchReviews />
              </ProtectedRoute>
            }
          />
          {/* Merge Reviews */}
          <Route
            path="merge"
            element={
              <ProtectedRoute>
                <MergeReviews />
              </ProtectedRoute>
            }
          />
        </Route>
        {/* User */}
        <Route path="user">
          {/* User Login */}
          <Route path="login" element={<UserLogin />} />
          {/* Create User */}
          <Route
            path="create"
            element={
              <ProtectedRoute>
                <CreateUser />
              </ProtectedRoute>
            }
          />
        </Route>
        {/* Not Found */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};
