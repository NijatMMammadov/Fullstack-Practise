import Detail from "../pages/Details";
import Home from "../pages/Home";
import Root from "../pages/Root";
import Wishlist from "../pages/Wishlist";

const ROUTER = [
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/detail/:id",
                element: <Detail />
            },
            {
                path:"/wishlist",
                element:<Wishlist/>
            }
        ]
    }
]

export default ROUTER