import React from 'react'
import './home.css';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Main from '../../components/main/main';
type StateType = {
    selectedTab: string;
    hidden: boolean;
};
interface Home {
    state: StateType;
}
class Home extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            selectedTab: 'timeline',
            hidden: false,
        };
    }

    renderContentTimeline() {
        return (
            <div>
           line
            </div>
        );
    }
    renderContentMy() {
        return (
            <div>
           my
            </div>
        );
    }
    render() {
        return (
            <div className="home">
                <Header></Header>
                <Main></Main>
               <Footer></Footer>
            </div>
        );
    }
}
export default Home;