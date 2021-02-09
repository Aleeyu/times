import React from 'react'
import './my.css';
import { List,Button } from 'antd-mobile';
import $http from '../../libs/axios';
import { withRouter } from 'react-router-dom';
type StateType = {
    selectedTab: string;
    hidden: boolean;
    user: any;
};
interface My {
    state: StateType;
}

class My extends React.Component<any, StateType> {
    constructor(props: any) {
        super(props);
        this.state = {
            selectedTab: 'timeline',
            hidden: false,
            user: {
                nickName: '',
                tel: ''
            },
        };
    }
    componentDidMount() {
        $http.get('/users').then((d) => {
            this.setState({
                user: d
            })
        })
    }
    getinfo() {
        this.props.history.push('/info');
    }

    logout(){
        $http.post('/logout').then((json) => {
            console.log(json);
            this.props.history.push('/');
        }).catch();
    }
    render() {
        return (
            <div className="my">
                <List.Item arrow="horizontal" onClick={() => { this.getinfo() }}><div><p>{this.state.user.nickName}</p><p>{this.state.user.tel}</p></div></List.Item>
                <div className="login-btn">
                    <Button type="primary" onClick={() => { this.logout() }}>logout</Button>
                </div>
            </div>
        );
    }
}
export default withRouter(My);