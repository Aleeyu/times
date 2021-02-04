import React from 'react'
import './Timeline.css';
import { Card, WhiteSpace ,WingBlank} from 'antd-mobile';
type StateType = {
    selectedTab: string;
    hidden: boolean;
};
interface Timeline {
    state: StateType;
}
class Timeline extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            selectedTab: 'timeline',
            hidden: false,
        };
    }
    render() {
        const arr = [1,2,3,4,5];
        return (
            <div className="timeline">
                <div className="timeline-head">
                    <div className="timeline-head-name">刘德华</div>
                    <div>10个月</div>
                </div>
                {arr.map((c)=>{
                    return (<WingBlank size="lg">
                    <WhiteSpace size="lg" />
                        <Card>
                            <Card.Header
                                title="9个月30天"
                                extra={<span>2021年2月31</span>}
                            />
                            <Card.Body>
                                <div><img src="https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png" alt=""/></div>
                            </Card.Body>
                            <Card.Footer content="爷爷" extra={<div className="card-item-footer"><div className="card-item-footer-dianzan"><i className="icon iconfont icondianzan"></i><span>1</span></div><div className="card-item-footer-message"><i className="icon iconfont iconxiaoxi"></i><span>3</span></div></div>} />
                        </Card>
                        <WhiteSpace size="lg" />
                    </WingBlank>)
                })}
            </div>
        );
    }
}
export default Timeline;