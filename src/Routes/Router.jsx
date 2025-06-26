import { createBrowserRouter } from "react-router";
import mainLayout from "../layout/mainLayout.jsx";
import App from "../App";
import Register from "../pages/Register.jsx";
import Login from "../pages/Login.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import Home from "../pages/Home.jsx";
import AddRecipe from "../pages/AddRecipe.jsx";
import MyRecipe from "../pages/MyRecipe.jsx";
import PrivateRoute from "../provider/PrivateRoute.jsx";
import AllRecipe from "../pages/AllRecipe.jsx";
import PrivacyPolicy from "../pages/PrivacyPolicy.jsx";
import RecipeDetails from "../pages/RecipeDetails.jsx";
import BlogDetails from "../pages/BlogDetails.jsx";
import ForgetPass from "../pages/ForgetPass.jsx";
import DashboardLayout from "../layout/DashboardLayout.jsx";
import Overview from "../components/Overview.jsx";
import DashboardAllItems from "../components/DashboardAllItems.jsx";
import About from "../pages/About.jsx";
import ContactUs from "../pages/ContactUs.jsx";


export const Router = createBrowserRouter([
    {
        path: '/',
        Component: mainLayout,
        children: [
            {
                index: true,
                path: '/',
                Component: Home
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/allrecipe',
                Component: AllRecipe
            },

            {
                path: '/recipe/:id',
                element: <PrivateRoute>
                    <RecipeDetails></RecipeDetails>
                </PrivateRoute>
            },
            {
                path: '/privacypolicy',
                Component: PrivacyPolicy
            },
            {
                path: '/blog/:id',
                Component: BlogDetails,
                loader: () => fetch('/blog.json')
            },
            {
                path: '/forgetpass',
                Component: ForgetPass
            },
            {
                path:'/about',
                Component:About
            },
            {
                path:'/contact',
                Component:ContactUs
            }


        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute>
            <DashboardLayout></DashboardLayout>
        </PrivateRoute>,
        children: [
            {
                index: true,
                element:<Overview></Overview>
            },
            {
                path: 'myrecipe',
                Component:MyRecipe

            },
             {
                path: 'addrecipe',
                element: <AddRecipe></AddRecipe>
                
            },
            {
                path:'allitems',
                Component: DashboardAllItems
            }
            
        ]
    },
    {
        path: '/*',
        element: <ErrorPage></ErrorPage>
    }
])