import React from 'react'
import './info.css';
import { List,NavBar, Icon} from 'antd-mobile';
type StateType = {
    showTable: string;
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
            showTable: 'timeline'
        };
    }
    tabChange(x: string){
        this.setState({
            showTable: x
        })
    }
    getinfo(){}
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
                <List.Item arrow="horizontal" onClick={()=>{this.getinfo()}}><div className="info-item"><p>姓名</p><p>老王</p></div></List.Item>
                <List.Item arrow="horizontal" onClick={()=>{this.getinfo()}}><div className="info-item"><p>出生日期</p><p>1991-01-02</p></div></List.Item>
                <List.Item arrow="horizontal" onClick={()=>{this.getinfo()}}><div className="info-item"><p>性别</p><p>男</p></div></List.Item>
            </div>
        );
    }
}
export default Info;