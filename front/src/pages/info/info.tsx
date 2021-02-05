import React from 'react'
import './info.css';
import { List,NavBar, Icon} from 'antd-mobile';
import $http from '../../libs/axios';
type StateType = {
    showTable: string;
    user:any;
};
type PropsType = {
    showTable: string;
    history: any;
};
interface Info {
    state: StateType;
    props: PropsType;
}
class Info extends React.Component {
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
    getinfo(){

    }
    getUserInfo(){
        $http.get('http://localhost:8001/users').then((d) => {
            this.setState({
                user:d
            })
        })
    }
    componentDidMount(){
        this.getUserInfo();
    }
    back(){
        this.props.history.go(-1)
    }
    render() {
        return (
            <div className="info">
                <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => this.back()}
                >我的信息</NavBar>
                <List.Item arrow="horizontal" onClick={()=>{this.getinfo()}}><div className="info-item"><p>我的头像</p><p><img className="info-img" src="https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png" alt=""/></p></div></List.Item>
                <List.Item arrow="horizontal" onClick={()=>{this.getinfo()}}><div className="info-item"><p>姓名</p><p>{this.state.user.name}</p></div></List.Item>
                <List.Item arrow="horizontal" onClick={()=>{this.getinfo()}}><div className="info-item"><p>昵称</p><p>{this.state.user.nickName}</p></div></List.Item>
                <List.Item arrow="horizontal" onClick={()=>{this.getinfo()}}><div className="info-item"><p>电话</p><p>{this.state.user.tel}</p></div></List.Item>
                <List.Item arrow="horizontal" onClick={()=>{this.getinfo()}}><div className="info-item"><p>出生日期</p><p>{this.state.user.birth}</p></div></List.Item>
                <List.Item arrow="horizontal" onClick={()=>{this.getinfo()}}><div className="info-item"><p>性别</p><p>{this.state.user.sex}</p></div></List.Item>
            </div>
        );
    }
}
export default Info;