import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import SignupPage from "./pages/SignupPage";
import IsAnon from "./components/IsAnon";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/IsPrivate";
import ProfilePage from "./pages/ProfilePage";
import PaintingDetailsPage from "./pages/PaintingDetailsPage";
import EditPaintingPage from "./pages/EditPaintingPage";
import GalleryPage from "./pages/GalleryPage";
import AddPaintingPage from "./pages/AddPaintingPage";

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
              <GalleryPage />
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
        <Route path="/newPainting" element={<IsPrivate>{<AddPaintingPage/>}</IsPrivate>}/>
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
