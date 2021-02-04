import React from 'react'
import './home.css';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Timeline from '../../components/timeline/Timeline';
import My from '../../components/my/my';
type StateType = {
    showTable: string;
};
type PropsType = {
    showTable: string;
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
                    : <My></My>
                }
               <Footer tabClick={(x)=>{return this.tabChange(x);}}></Footer>
            </div>
        );
    }
}
export default Home;