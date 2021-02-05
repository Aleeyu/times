import React from 'react'
import './childInfo.css';
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
interface ChildInfo {
    state: StateType;
    props: PropsType;
}
class ChildInfo extends React.Component {
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
    getChildInfo(){

    }
    getUserChildInfo(){
        $http.get('http://localhost:8001/users').then((d) => {
            this.setState({
                user:d
            })
        })
    }
    componentDidMount(){
        this.getUserChildInfo();
    }
    back(){
        this.props.history.go(-1)
    }
    render() {
        return (
            <div className="ChildInfo">
                <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => this.back()}
                >编辑信息</NavBar>
                <List.Item arrow="horizontal" onClick={()=>{this.getChildInfo()}}><div className="ChildInfo-item"><p>头像</p><p><img className="ChildInfo-img" src="https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png" alt=""/></p></div></List.Item>
                <List.Item arrow="horizontal" onClick={()=>{this.getChildInfo()}}><div className="ChildInfo-item"><p>姓名</p><p>{this.state.user.name}</p></div></List.Item>
                <List.Item arrow="horizontal" onClick={()=>{this.getChildInfo()}}><div className="ChildInfo-item"><p>出生日期</p><p>{this.state.user.birth}</p></div></List.Item>
                <List.Item arrow="horizontal" onClick={()=>{this.getChildInfo()}}><div className="ChildInfo-item"><p>性别</p><p>{this.state.user.sex}</p></div></List.Item>
            </div>
        );
    }
}
export default ChildInfo;