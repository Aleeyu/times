import React from 'react'
import './login.css';
import { List, InputItem, Toast, Button, WhiteSpace } from 'antd-mobile';
import $http from '../../libs/axios';
import { withRouter } from 'react-router-dom';
type StateType = {
    hasErrorPhone: boolean;
    hasErrorPs: boolean;
    ps: string;
    phone: string;
};
interface Login {
    state: StateType;
}

class Login extends React.Component<any, StateType> {
    constructor(props: any) {
        super(props);
        this.state = {
            hasErrorPhone: false,
            hasErrorPs: false,
            ps: '',
            phone: '',
        };
    }
    componentDidMount() {
        $http.get('http://localhost:8001/users').then((d) => {

        })
        $http.get('http://localhost:8001').then((d) => {
            // this.setState({
            //     user:d
            // })
        })
    }
    getinfo() {
        this.props.history.push('/info');
    }
    onChangePhone(phone: any) {
        this.setState({
            phone
        })

    }
    onChangePs(ps: any) {
        this.setState({
            ps
        })
    }
    onErrorClickPhone() {
        if (this.state.hasErrorPhone) {
            Toast.info('Please enter 11 digits');
        }
    }
    onErrorClickPs() {
        if (this.state.hasErrorPs) {
            Toast.info('Please enter 11 digits');
        }
    }
    login() {
        let userinfo = {
            tel:this.state.phone,
            pwd:this.state.ps
        }
        console.log(userinfo)
        var url = 'http://localhost:8001/users/login';
        $http.post(url, {userinfo:userinfo}, {
            // headers: {
            //     'Content-Type': 'multipart/form-data'
            // }
        }).then((json) => {
            console.log(json);
            this.props.history.push('/');
        }).catch();
    }
    register(){
        this.props.history.push('/register');
    }
    render() {
        return (
            <div className="login">
                <List renderHeader={() => '登录'}>
                    <InputItem
                        type="phone"
                        placeholder="input your phone"
                        error={this.state.hasErrorPhone}
                        onErrorClick={this.onErrorClickPhone.bind(this)}
                        onChange={(d) => { this.onChangePhone(d) }}
                        value={this.state.phone}
                    >手机号码</InputItem>
                    <InputItem
                        type="password"
                        placeholder="input your password"
                        error={this.state.hasErrorPs}
                        onErrorClick={this.onErrorClickPs.bind(this)}
                        onChange={(d) => { this.onChangePs(d) }}
                        value={this.state.ps}
                    >密码</InputItem>
                </List>
                <WhiteSpace />
                <div className="login-btn">
                    <Button type="primary" onClick={() => { this.login() }}>Login</Button>
                </div>
                <div className="login-btn">
                    <Button type="primary" onClick={() => { this.register() }}>Register</Button>
                </div>
            </div>
        );
    }
}
export default withRouter(Login);