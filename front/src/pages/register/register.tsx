import React from 'react'
import './register.css';
import { List, InputItem, Toast, Button, WhiteSpace } from 'antd-mobile';
import $http from '../../libs/axios';
import { withRouter } from 'react-router-dom';
type StateType = {
    hasErrorPhone: boolean;
    hasErrorPs: boolean;
    ps: string;
    phone: string;
};
interface Register {
    state: StateType;
}

class Register extends React.Component<any, StateType> {
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
    register() {
        let userinfo = {
            tel:this.state.phone,
            pwd:this.state.ps
        }
        console.log(userinfo)
        var url = 'http://localhost:8001/users/register';
        $http.post(url, {userinfo:userinfo}).then((json) => {
            this.props.history.push('/login');
        }).catch();
    }
    render() {
        return (
            <div className="register">
                <List renderHeader={() => '注册'}>
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
                <div className="register-btn">
                    <Button type="primary" onClick={() => { this.register() }}>Register</Button>
                </div>
            </div>
        );
    }
}
export default withRouter(Register);