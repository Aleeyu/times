import React from 'react'
import './index.css';
import Footer from '../../components/footer/Footer';
import My from "../my/my";
import Timeline from '../../components/timeline/Timeline';
import $http from '../../libs/axios';
import { ImagePicker ,Modal,Button} from 'antd-mobile';
type StateType = {
    path: string;
    showModal: boolean;
    files: Array<any>;
    uploadpath: string;
};
type PropsType = {
    path: string;
};
interface Index {
    state: StateType;
    props: PropsType;
}
class Index extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            path: 'timeline',
            showModal: false,
            files: [],
            uploadpath: 'pic'
        };
    }
    componentDidMount() {
        $http.get('/users').then((d) => {
            this.setState({
                user: d
            })
        }).catch((e)=>{
          
        })
    }
    tabChange(x: string) {
        this.setState({
            path: x
        })
        
    }
    onChange(files: any) {
        console.log(files);
        this.setState({
            files:files
        });
    }
    upload() {
        for (let i = 0; i < this.state.files.length; i++) {
            let formData = new FormData();
            let file = this.state.files[i].file;
            formData.append('images', file);
            formData.append('childId', '85735e52-3887-4507-8ba7-87b4fc792122')   // 这里根据自己项目后台实际情况定
            var url = '/fileUpload';

            console.log('upload')
            $http.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((json) => {
                this.setState({
                    showModal:false
                })
            }).catch();
        }
    }
    showUpload(){
        console.log(1)
        this.setState({
            showModal:true
        });
    }
    onClose(){
        this.setState({
            showModal:false
        });
    }
    render() {
        let path=this.state.path;
        return (
            <div className="index">
                {path==='timeline'?<Timeline></Timeline>:<My></My>}
                <Footer tabClick={(x: string)=>this.tabChange(x)}></Footer>
                <i className="icon iconfont iconadd index-upload" onClick={() => { this.showUpload() }}></i>
                <Modal
                    popup
                    maskClosable={true}
                    visible={this.state.showModal}
                    onClose={()=>{this.onClose()}}
                    animationType="slide-up"
                    >
                        <div className="index-modal">
                            <ImagePicker
                            accept="*"
                                files={this.state.files}
                                onChange={this.onChange.bind(this)}
                                selectable={this.state.files.length < 3}  // 设置最大可上传图片数量为3 根据自己需求调整。
                                multiple={false}
                            />
                            <Button type="primary" onClick={() => { this.upload() }}>上传</Button>  
                        </div>
                    </Modal>
            </div>
        );
    }
}
export default Index;