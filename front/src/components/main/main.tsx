import React from 'react'
import './main.css';
type StateType = {
    selectedTab: string;
    hidden: boolean;
};
interface Main {
    state: StateType;
}
class Main extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            selectedTab: 'timeline',
            hidden: false,
        };
    }

    renderContentTimeline() {
      
    }
    renderContentMy() {
   
    }
    render() {
        return (
            <div className="main">
               main
            </div>
        );
    }
}
export default Main;