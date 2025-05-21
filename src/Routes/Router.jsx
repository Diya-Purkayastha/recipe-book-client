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


export const Router = createBrowserRouter([
    {
        path:'/',
        Component:mainLayout,
        children:[
            {
            index:true,
            path:'/',
            Component:Home
            },
            {
                path:'/login',
                Component:Login
            },
            {
                path:'/register',
                Component:Register
            },
            {
                path:'/allrecipe',
                Component: AllRecipe
            },
            {
                path:'/addrecipe',
                element: <PrivateRoute>
                    <AddRecipe></AddRecipe>
                </PrivateRoute>
            },
            {
                path:'/myrecipe',
               element: <PrivateRoute>
                 <MyRecipe></MyRecipe>
               </PrivateRoute>
            },
            {
                path:'/recipe/:id',
                element:<PrivateRoute>
                    <RecipeDetails></RecipeDetails>
                </PrivateRoute>
            },
            {
                path:'/privacypolicy',
                Component:PrivacyPolicy
            }
    
    
    ]
    },
    {
        path:'/*',
        element:<ErrorPage></ErrorPage>
    }
])