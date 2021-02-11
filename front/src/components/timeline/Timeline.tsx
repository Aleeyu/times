import React from 'react'
import './Timeline.css';
import { Card, WhiteSpace ,WingBlank} from 'antd-mobile';
import Header from '../header/Header';
import { withRouter } from 'react-router-dom';
import $http from '../../libs/axios';
import config from '../../config';

type StateType = {
    selectedTab: string;
    hidden: boolean;
    name: string;
    list: Array<any>;
};
type PropsType = {
    tabClick: (p:string)=>void;
    history:any;
};
interface Timeline {
    state: StateType;
    props:PropsType
}
class Timeline extends React.Component<any, StateType> {
    constructor(props: any) {
        super(props);
        this.state = {
            selectedTab: 'timeline',
            hidden: false,
            name:'',
            list:[]
        };
    }
    componentDidMount(){
        this.getChildInfo();
        this.getChildInfoList();
    }
    getChildInfoList(){
        $http.get('/child/list',{params:{uuid:'85735e52-3887-4507-8ba7-87b4fc792122'}}).then((d) => {
            this.setState({
                list:d.data
            })
        }).catch((e)=>{
          
        })
    }
    getChildInfo(){
        $http.get('/child',{params:{uuid:'85735e52-3887-4507-8ba7-87b4fc792122'}}).then((d) => {
            this.setState({
                name:d.data.name
            })
        }).catch((e)=>{
          
        })
    }
    handleClick(){
        this.props.history.push('/child')
    }
    render() {
        var isiOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        console.log(isiOS)
        return (
            <div className="timeline">
                <Header></Header>
                <div className="timeline-head" onClick={this.handleClick.bind(this)}>
                    <div className="timeline-head-name">{this.state.name}</div>
                    <div>10个月</div>
                </div>
                {this.state.list.map((c)=>{
                    return (<WingBlank key={c.date} size="lg">
                    <WhiteSpace size="lg" />
                        <Card>
                            <Card.Header
                                title="9个月30天"
                                extra={<span>{c.date}</span>}
                            />
                            <Card.Body>
                                <div className="timeline-item">
                                    {c.url.map((f: string)=>{
                                        if(isiOS){
                                            return (f.split('.')[1]==='jpg'?<div key={f}><img src={config.host+'/images/children/'+c.childId+'/'+c.date+'/'+f} alt=""/></div>:<div key={f}><video poster={config.host+'/images/children/'+c.childId+'/'+c.date+'/'+f+'?x-oss-process=video/snapshot,t_50,f_jpg,w_400,h_350'} preload="auto" width="100%"><source src={config.host+'/images/children/'+c.childId+'/'+c.date+'/'+f} type="video/mp4"/></video></div>)
                                        }else {
                                            return (f.split('.')[1]==='jpg'?<div key={f}><img src={config.host+'/images/children/'+c.childId+'/'+c.date+'/'+f} alt=""/></div>:<div key={f}><video preload="auto" autoPlay={true} width="100%"><source src={config.host+'/images/children/'+c.childId+'/'+c.date+'/'+f} type="video/mp4"/></video></div>)
                                        }
                                        
                                    })
                                    }
                                    <div className="clear"></div>
                                </div>
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
export default withRouter(Timeline);