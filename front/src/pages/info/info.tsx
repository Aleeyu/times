import React from 'react'
import './info.css';
type StateType = {
    showTable: string;
};
type PropsType = {
    showTable: string;
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
    render() {
        return (
            <div className="info">
                info
            </div>
        );
    }
}
export default Info;