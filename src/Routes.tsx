import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import HomeSection from "./pages/tsx/HomeSection";
import Catalogo from "./pages/tsx/Catalogo"
import Cart from "./components/tsx/Cart";

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
            },
            {
                path: "cart",
                element: <Cart 
                  items={[]} 
                  onUpdateQuantity={() => {}}
                  onRemoveItem={() => {}}
                />
              },
        ]
    }
])

export function Routes() {
    return <RouterProvider router={router} />
}