import React from 'react'
import './my.css';
import { List, ImagePicker,Button } from 'antd-mobile';
import $http from '../../libs/axios';
import { withRouter } from 'react-router-dom';
type StateType = {
    selectedTab: string;
    hidden: boolean;
    user: any;
    files: Array<any>;
    uploadpath: string;
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
            files: [],
            uploadpath: 'pic'
        };
    }
    componentDidMount() {
        $http.get('http://localhost:8001/users').then((d) => {
            this.setState({
                user: d
            })
        })
    }
    getinfo() {
        this.props.history.push('/info');
    }
    onChange(files: any) {
        console.log(files);
        this.setState({
            files:files
        });
    }
    logout(){
        $http.post('/logout').then((json) => {
            console.log(json);
            this.props.history.push('/');
        }).catch();
    }
    upload() {
        console.log(this.state.files)
        for (let i = 0; i < this.state.files.length; i++) {
            let formData = new FormData();
            let file = this.state.files[i].file;
            formData.append('images', file);
            formData.append('childId', 'xsadsasdassced')   // 这里根据自己项目后台实际情况定
            var url = 'http://localhost:8001/fileUpload';

            console.log('upload')
            $http.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((json) => {
                console.log(json);
            }).catch();
        }
    }
    render() {
        return (
            <div className="my">
                <ImagePicker
                    files={this.state.files}
                    onChange={this.onChange.bind(this)}
                    selectable={this.state.files.length < 3}  // 设置最大可上传图片数量为3 根据自己需求调整。
                    multiple={false}
                />
                <button onClick={() => { this.upload() }}>sadasdasdas</button>
                <List.Item arrow="horizontal" onClick={() => { this.getinfo() }}><div><p>{this.state.user.nickName}</p><p>{this.state.user.tel}</p></div></List.Item>
                <div className="login-btn">
                    <Button type="primary" onClick={() => { this.logout() }}>logout</Button>
                </div>
            </div>
        );
    }
}
export default withRouter(My);