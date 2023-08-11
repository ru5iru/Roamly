import Login from "./pages/login/Login";
// import NavBar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Signup from "./pages/signup/Signup";
import "./style.scss";
import {
   createBrowserRouter,
   RouterProvider,
   Outlet,
   Navigate,
} from "react-router-dom";
import { useContext } from "react";
import axios from "axios";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

axios.defaults.baseURL = "http://localhost:8000/server/";
axios.defaults.withCredentials = true;
function App() {
   const { currentUser } = useContext(AuthContext);

   const { darkMode } = useContext(DarkModeContext);

   const queryClient = new QueryClient();

   const Layout = () => {
      return (
         <QueryClientProvider client={queryClient}>
            <div className={`theme-${darkMode ? "dark" : "light"}`}>
               {/* <NavBar /> */}
               <div >
                  <div >
                     <Outlet />
                  </div>
               </div>
            </div>
         </QueryClientProvider>
      );
   };

   const ProtectedRoute = ({ children }) => {
      if (!currentUser) {
         return <Navigate to="/login" />;
      }

      return children;
   };

   const router = createBrowserRouter([
      {
         path: "/",
         element: (
            <ProtectedRoute>
               <Layout />
            </ProtectedRoute>
         ),
         children: [
            {
               path: "/",
               element: <Home />,
            },
            {
               path: "/profile/:id",
               element: <Profile />,
            },
         ],
      },
      {
         path: "/login",
         element: <Login />,
      },
      {
         path: "/signup",
         element: <Signup />,
      },
   ]);

   return (
      <div>
         <RouterProvider router={router} />
      </div>
   );
}

export default App;
