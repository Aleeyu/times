import Home from "../pages/home/home";
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
    }
]
export default routers

