import { createRouter, createWebHashHistory } from "vue-router";

import Index from "~/pages/index.vue";
import Login from "~/pages/login.vue";
import NotFound from "~/pages/404.vue";
import Test from "~/pages/test.vue";
import About from "~/components/about.vue";
import Center from "~/components/center.vue";
import Video from "~/components/video.vue";
import Me from "~/pages/me.vue";
import Timeline from "~/components/timeline.vue";
import Photo from "~/components/photo.vue";
import Readme from '~/components/readme.vue'


const routes = [


  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },

  //Vue核心页面的center组成
  {
    path: "/",
    name: "Index",
    component: Index, //这里是核心： center作为容器组件，包含左右菜单和右侧的router-view，所以下面的子组件实际是显示在router-view
    redirect: { name: "me" }, //输入路由center会重定向到a页面
    children: [

      {
        path: "/readme",
        name: "Readme",
        component: Readme,
        meta: {
          title: "readme",
        },
      },
      {
        path: "/me",
        name: "me",
        component: Me,
        meta: {
          title: "me",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
