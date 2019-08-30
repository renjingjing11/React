// 一级路由
import Home from "../views/Home.js";
import Detail from "../components/detail.js";
import List from "../components/list.js";
import Redact from "../components/redact.js";
// 二级路由
import Page from "../views/home/page.js";
import Market from "../views/home/market.js";
import Optional from "../views/home/optional.js";
import Deal from "../views/home/deal.js";
import Consult from "../views/home/consult.js";


const routes = [{
    path: "/redact",
    component: Redact
}, {
    path: "/detail",
    component: Detail
}, {
    path: "/list",
    component: List
}, {
    path: "/home",
    component: Home,
    children: [
        { path: "/home/page", component: Page },
        { path: "/home/market", component: Market },
        { path: "/home/optional", component: Optional },
        { path: "/home/deal", component: Deal },
        { path: "/home/consult", component: Consult },
        { path: "/home/optional", redirect: "/home/optional" }
    ]
}, {
    path: "/",
    redirect: "/home/optional"
}]

export default routes;