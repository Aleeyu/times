import React from 'react'
import './Header.css';
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
                    name: 'child1',
                    uuid: 'xxnnxx',
                    type: 'item',
                    headImg: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
                    selected: true
                },
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

    renderContentTimeline() {

    }
    renderContentMy() {

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