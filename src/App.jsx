import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import CourseInfo from "./components/CourseInfo/CourseInfo";
import CourseForm from "./components/CourseForm/CourseForm";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";

function Layout() {
  const { pathname } = useLocation();
  const hideHeader = ["/login", "/registration"].includes(pathname);

  return (
    <>
      {!hideHeader && <Header />}

      <Routes>
        <Route
          path="/"
          element={
            <Navigate
              to={localStorage.getItem("token") ? "/courses" : "/login"}
              replace
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/add" element={<CourseForm />} />
        <Route path="/courses/:courseId" element={<CourseInfo />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  );
}

export default function App() {
  return <Layout />;
}
