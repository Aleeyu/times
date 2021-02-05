import React from 'react'
import './child.css';
import { List,NavBar, Icon,WhiteSpace} from 'antd-mobile';
import $http from '../../libs/axios';
type StateType = {
    showTable: string;
    user:any;
};
type PropsType = {
    showTable: string;
    history: any;
};
interface Child {
    state: StateType;
    props: PropsType;
}
class Child extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            showTable: 'timeline',
            user:{}
        };
    }
    tabChange(x: string){
        this.setState({
            showTable: x
        })
    }
    getChild(){
        this.props.history.push('childinfo')
    }
    getUserChild(){
        $http.get('http://localhost:8001/users').then((d) => {
            this.setState({
                user:d
            })
        })
    }
    componentDidMount(){
        this.getUserChild();
    }
    back(){
        this.props.history.go(-1)
    }
    render() {
        return (
            <div className="Child">
                <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => this.back()}
                ></NavBar>
                <List.Item arrow="horizontal" onClick={()=>{this.getChild()}}><div className="Child-item"><p><img className="Child-img" src="https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png" alt=""/></p><p className="Child-name">小小李<br/><span>10个月1天</span></p></div></List.Item>
                <WhiteSpace/>
                <List.Item arrow="horizontal" onClick={()=>{this.getChild()}}><div className="Child-item"><p>爸爸</p><p className="Child-role">管理员</p></div></List.Item>
                <List.Item arrow="horizontal" onClick={()=>{this.getChild()}}><div className="Child-item"><p>外公</p><p className="Child-role">仅查看</p></div></List.Item>
            </div>
        );
    }
}
export default Child;