import { useContext } from "react";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import FirstView from "./pages/firstView/FirstView";
import Header from "./components/header/Header";
// import Places from "./pages/places/Places";
import SignupSP from "./pages/signupSP/SignupSP";
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "./context/authContext";
import { QueryClient, QueryClientProvider} from "react-query";

// api.js (or any other file to store API constants)



function App() {
    const {currentUser} = useContext(AuthContext);

    const queryClient = new QueryClient();

    const ProtectedRoute = ({ children }) => {
      if (!currentUser) {
        return <Navigate to="/login" />;
      }
    }

    const router = createBrowserRouter([
      {
        path: "/",
        element: <FirstView />,

      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/signupSP",
        element: <SignupSP />,
      }
    ])
    return (
      <div>
        <RouterProvider router={router} />
      </div>
    );
}

export default App;
