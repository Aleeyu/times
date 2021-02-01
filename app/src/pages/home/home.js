import React from 'react'
import './home.css';
import { v4 as uuidv4 } from 'uuid';
class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        list: []
    }
    componentDidMount() {
        this.getdata()
    }
    soket = () => {
        var ws = new WebSocket("ws://localhost:8002");
        ws.onopen = function (e) {
            console.log('客户端（client）：与服务器的连接已打开')
            ws.send('发送了信息')
        }
        ws.onmessage = function (e) {
            console.log(e.data)
        }
    }
    getdata = () => {
        this.$http.get('http://localhost:8001/users').then((d) => {

            this.setState({
                list: d
            });
            
        })
    }
    setdata = () => {
        let d = {
            id: uuidv4(),
            LastName: 'asdasdasdasdasdasd',
            FirstName: 'sadasd',
            Address: 'asdasd',
            City: 'asdas'
        }
        this.$http.post('http://localhost:8001/users', d).then((d) => {
            this.getdata()
        })
    }
    del=(id)=>{
        let d={
            id:id
        }
        this.$http.post('http://localhost:8001/users/del', d).then((d) => {
            console.log(d)
            this.getdata()
        })
    }
    render() {
        return (
            <div className='home'>
                <button onClick={this.setdata}>
                    添加数据
                </button>
                <button onClick={this.getdata}>
                    查询数据
                </button>
                <ul>
                    {this.state.list.map((item) => {
                        return <li key={item.PersonID}>{item.PersonID}/{item.FirstName}/{item.LastName}<button onClick={() => this.del(item.PersonID)}>删除</button></li>
                    })
                    }
                </ul>

            </div>
        )
    }
}

export default Home;