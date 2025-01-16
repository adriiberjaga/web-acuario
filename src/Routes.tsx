import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import HomeSection from "./pages/tsx/HomeSection";
import Catalogo from "./pages/tsx/Catalogo"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <HomeSection/>
            },
            {
                path: "catalogo",
                element: <Catalogo/>
            }
        ]
    }
])

export function Routes() {
    return <RouterProvider router={router} />
}