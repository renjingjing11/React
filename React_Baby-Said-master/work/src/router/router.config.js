// 一级路由
import Home from "../views/home.js"

import SongDetail from "../views/Songdetail.js";
// 二级路由
import Watch from "../views/home/watch.js";
import Listen from "../views/home/listen.js";
import My from "../views/home/my.js";
// 三级路由
import Song from "../views/watch/song.js";
import Story from "../views/watch/story.js";
import Curtoon from "../views/watch/curtoon.js";

import Sing from "../views/listen/sing.js";
import Bstory from "../views/listen/bstory";
export const routes = [{
    path: "/Songdetail",
    component: SongDetail
}, {
    path: "/home",
    component: Home,
    children: [{
            path: '/home/watch',
            component: Watch,
            children: [
                { path: "/home/watch/song", component: Song },
                { path: "/home/watch/story", component: Story },
                { path: "/home/watch/curtoon", component: Curtoon },
                { path: "/", redirect: "/home/watch/song" }
            ]
        },
        {
            path: '/home/listen',
            component: Listen,
            children: [
                { path: "/home/listen/sing", component: Sing },
                { path: "/home/listen/bstory", component: Bstory },
                { path: "/", redirect: "/home/listen/sing" }
            ]
        },
        { path: '/home/my', component: My },
    ]
}, {
    path: "/",
    redirect: "/home/watch/song"
}]