import React from 'react'
import './home.css';
import Header from '../../components/header/Header';
import Timeline from '../../components/timeline/Timeline';
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
       
    }
    tabChange(x: string){
        this.setState({
            showTable: x
        })
    }
    render() {
        return (
            <div className="home">
                <Header></Header>
                <Timeline></Timeline>
            </div>
        );
    }
}
export default Home;