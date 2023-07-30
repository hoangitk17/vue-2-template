export default [
  {
    path: "",
    name: "UserLayout",
    component: () => import("@/layouts/UserLayout.vue"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("@/pages/home/index.vue"),
      },
    ]
  },
  {
    path: "",
    name: "EmptyLayout",
    component: () => import("@/layouts/EmptyLayout.vue"),
    children: [
      {
        path: "/login",
        name: "login",
        component: () => import("@/pages/login/index.vue"),
      }
    ],
  },
  {
    // will match everything
    path: "*",
    name: "404",
    component: () => import("@/pages/error/404/index.vue"),
  },
];
