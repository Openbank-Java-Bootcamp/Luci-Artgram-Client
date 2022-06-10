import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WelcomePage from "./pages/WelcomePage";
import SignupPage from "./pages/SignupPage";
import IsAnon from "./components/IsAnon";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/IsPrivate";
import ProfilePage from "./pages/ProfilePage";
import NewPaintingPage from "./pages/NewPaintingPage";
import PaintingDetailsPage from "./pages/PaintingDetailsPage";
import EditPaintingPage from "./pages/EditPaintingPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route
          path="/paintings"
          element={
            <IsPrivate>
              <HomePage />
            </IsPrivate>
          }
        />
        <Route
          path="/paintings/:paintingId"
          element={
            <IsPrivate>
              <PaintingDetailsPage />
            </IsPrivate>
          }
        />
         <Route
          path="/paintings/edit/:paintingId"
          element={
            <IsPrivate>
              <EditPaintingPage />
            </IsPrivate>
          }
        />

        <Route path="/profile" element={<IsAnon>{<ProfilePage />}</IsAnon>} />
        <Route path="/newPainting" element={<IsPrivate>{<NewPaintingPage/>}</IsPrivate>}/>
        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
