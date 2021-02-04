import React from 'react'
import './home.css';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Timeline from '../../components/timeline/Timeline';
import My from '../../components/my/my';
import { Route } from 'react-router-dom';
import $http from '../../libs/axios';
import { v4 as uuidv4 } from 'uuid';
type StateType = {
    showTable: string;
};
type PropsType = {
    showTable: string;
    history: any;
};
interface Home {
    state: StateType;
    props: PropsType;
}
class Home extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            showTable: 'timeline'
        };
    }
    componentDidMount(){
        $http.get('http://localhost:8001/articles').then((d) => {
            console.log(d)
        })
    }
    tabChange(x: string){
        this.setState({
            showTable: x
        })
    }
    render() {
        const showTable = this.state.showTable;
        
        return (
            <div className="home">
                <Header></Header>
                {showTable==='timeline'
                    ? <Timeline></Timeline>
                    : <Route component={My} />
                }
               <Footer tabClick={(x)=>{return this.tabChange(x);}}></Footer>
            </div>
        );
    }
}
export default Home;