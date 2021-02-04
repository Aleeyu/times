import React from 'react'
import './my.css';
import { List} from 'antd-mobile';
type StateType = {
    selectedTab: string;
    hidden: boolean;
    a: number;
};
interface My {
    state: StateType;
}

class My extends React.Component<any, StateType> {
    constructor(props: any) {
        super(props);
        this.state = {
            selectedTab: 'timeline',
            hidden: false,
            a: 1,
        };
    }
    getinfo(){
        console.log(this.props)
       this.props.history.push('/info');
    }
    render() {
        return (
            <div className="my">
               <List.Item arrow="horizontal" onClick={()=>{this.getinfo()}}><div><p>昵称</p><p>1898002xxxx</p></div></List.Item>
            </div>
        );
    }
}
export default My;