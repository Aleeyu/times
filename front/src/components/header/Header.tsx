import React from 'react'
import './Header.css';
import { Tabs } from 'antd-mobile';
const tabs = [
    { title: 'First Tab' },
    { title: 'second tab' }
  ];
type StateType = {
    selectedTab: string;
    hidden: boolean;
};
interface Header {
    state: StateType;
}
class Header extends React.Component {
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
            <div className="header">
                <Tabs tabs={tabs}
                    initialPage={1}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                </Tabs>
            </div>
        );
    }
}
export default Header;