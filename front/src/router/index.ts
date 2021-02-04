import Home from "../pages/home/home";
import Info from "../pages/info/info";
interface router {
    path:string,
    component:any,
    children?:Array<router>
}

const routers:Array<router> = [
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
    }
]
export default routers

