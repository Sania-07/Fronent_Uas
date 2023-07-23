export default [
  {
    name: "Master",
    path: "/",
    component: () => import('./../pages/layout/master'), // Use a function to reference the component
    redirect: '/dashboard',
    children: [
      {
        name: 'dashboard',
        path: '/dashboard',
        component: () => import('./../pages/dashboard'), // Use a function to reference the component
      },
      {
        name: 'user',
        path: '/user',
        component: () => import('./../pages/user'), // Use a function to reference the component
      },
      {
        name: 'product',
        path: '/product',
        component: () => import('./../pages/product'), // Use a function to reference the component
      }
      // Add more child routes here
    ]
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('./../pages/login'), // Use a function to reference the component 
  },
]

