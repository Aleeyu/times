import './App.css';
import { BrowserRouter,Route, Switch } from "react-router-dom";
import routers from "./router/index";
import 'antd-mobile/dist/antd-mobile.css';
function App() {
  return (
    <BrowserRouter>
      <Switch>
      {
        routers.map(router=>{
            return (
                <Route
                    exact
                    key={router.path}
                    path={router.path}
                    component = { router.component }
                    render={router.render}
                ></Route>
            )
        })
    }
      </Switch>
    
</BrowserRouter>
  );
}

export default App;
