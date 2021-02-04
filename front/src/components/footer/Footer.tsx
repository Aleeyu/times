import React from 'react'
import './Footer.css';
import { TabBar } from 'antd-mobile';
type StateType = {
    selectedTab: string;
    hidden: boolean;
};
type PropsType = {
    tabClick: (p:string)=>void;
};
interface Footer {
    state: StateType;
    props: PropsType;
}
class Footer extends React.Component {
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
            <div className="footer">
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        title="时光轴"
                        key="timeline"
                        selected={this.state.selectedTab === 'timeline'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'timeline',
                            });
                            this.props.tabClick('timeline');
                        }}
                        data-seed="logId1"
                    >
                       
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                        selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                        title="我的"
                        key="my"
                        selected={this.state.selectedTab === 'my'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'my',
                            });
                            this.props.tabClick('my');
                        }}
                    >
              
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}
export default Footer;