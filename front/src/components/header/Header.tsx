import React from 'react'
import './Header.css';
import $http from '../../libs/axios';
type StateType = {
    childList: Array<any>;
};
interface Header {
    state: StateType;
}
class Header extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            childList: [
                {
                    name: '添加',
                    uuid: 'dfcvf',
                    type: 'add',
                    headImg: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
                    selected: false
                },
                {
                    name: '管理',
                    uuid: 'dadswd',
                    headImg: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
                    type: 'manage',
                    selected: false
                }
            ],
        };
    }
    componentDidMount(){
        this.getChildInfo();
    }
    getChildInfo(){
        
        $http.get('/child',{params:{uuid:'85735e52-3887-4507-8ba7-87b4fc792122'}}).then((d) => {
            let arr = [...this.state.childList];
            arr.unshift({
                name: d.data.name,
                uuid: d.data.uuid,
                type: 'item',
                headImg: d.data.headImg,
                selected: true
            })
            this.setState({
                childList:arr
            })
        }).catch((e)=>{
          
        })
    }
    render() {
        return (
            <div className="header">
                {this.state.childList.map((i) => {
                    return (<div className="clild-item" key={i.uuid}>
                        <div className="clild-item-img">
                            <img src={i.headImg} alt="" />
                        </div>
                        <div className="clild-item-name">{i.name}</div>
                    </div>)
                })}
            </div>
        );
    }
}
export default Header;