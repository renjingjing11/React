import Login from "../pages/login";
import Registor from "../pages/Registor";

const routes = [{
    path: "/login",
    component: Login
}, {
    path: "/Registor",
    component: Registor
}, {
    path: "/",
    redirect: "/login"
}, ]
export default routes;