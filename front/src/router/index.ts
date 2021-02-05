import Info from "../pages/info/info";
import { RouteProps } from 'react-router-dom';
import Index from "../pages/index/index";
const routers: RouteProps[] = [
    {
        path:'/',
        component:Index,
        exact:true
    },
    {
        path:'/info',
        component:Info,
        exact:false
    }
]
export default routers

