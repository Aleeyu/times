import Home from "../pages/home/home";
import Info from "../pages/info/info";
import { RouteProps } from 'react-router-dom';

const routers: RouteProps[] = [
    {
        path:'/',
        component:Home,
        // children:[
        //     {
        //         path:'/demo1',
        //         component:Demo1
        //     }
        // ]
    },
    {
        path:'/info',
        component:Info,
    },
    {
        path:'/demo',
        render: () => '11'
    }
]
export default routers

