import './App.css';
import { BrowserRouter,Route } from "react-router-dom";
import routers from "./router/index";
function App() {
  return (
    <BrowserRouter>
    {
        routers.map(router=>{
            return (
                <Route
                    key={router.path}
                    path={router.path}
                    component = { router.component }
                ></Route>
            )
        })
    }
</BrowserRouter>
  );
}

export default App;
