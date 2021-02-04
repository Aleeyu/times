import React from 'react'
import './my.css';
import { List} from 'antd-mobile';
type StateType = {
    selectedTab: string;
    hidden: boolean;
};
interface My {
    state: StateType;
}

class My extends React.Component {
    constructor(props:{}) {
        super(props);
        this.state = {
            selectedTab: 'timeline',
            hidden: false,
        };
    }
    getinfo(){
        this.props.history.push('/info');
    }
    render() {
        return (
            <div className="main">
               <List.Item arrow="horizontal" onClick={()=>{this.getinfo()}}><div><p>昵称</p><p>1898002xxxx</p></div></List.Item>
            </div>
        );
    }
}
export default My;