import React from 'react'
import './index.css';
import Footer from '../../components/footer/Footer';
import My from "../my/my";
import Timeline from '../../components/timeline/Timeline';
import $http from '../../libs/axios';
type StateType = {
    path: string;
};
type PropsType = {
    path: string;
};
interface Index {
    state: StateType;
    props: PropsType;
}
class Index extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            path: 'timeline'
        };
    }
    componentDidMount() {
        $http.get('/users').then((d) => {
            this.setState({
                user: d
            })
        }).catch((e)=>{
          
        })
    }
    tabChange(x: string) {
        this.setState({
            path: x
        })
        
    }
    render() {
        let path=this.state.path;
        return (
            <div className="index">
                {path==='timeline'?<Timeline></Timeline>:<My></My>}
                <Footer tabClick={(x: string)=>this.tabChange(x)}></Footer>
            </div>
        );
    }
}
export default Index;