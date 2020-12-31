import React from 'react'

import { Table, Tag, Space } from 'antd';
import request from '../../utils/request.js'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  
  
  {
    title: 'Client',
    dataIndex: 'client',
    key: 'client',
  },
  {
    title: 'Env',
    dataIndex: 'env',
    key: 'env',
  },
  {
    title: 'ClientVersion',
    dataIndex: 'clientVersion',
    key: 'clientVersion',
    render: (text, record) => (
        record.clientVersionMin+ "~" + record.clientVersionMax
      ),
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
//   {
//     title: 'Tags',
//     key: 'tags',
//     dataIndex: 'tags',
//     render: tags => (
//       <>
//         {tags.map(tag => {
//           let color = tag.length > 5 ? 'geekblue' : 'green';
//           if (tag === 'loser') {
//             color = 'volcano';
//           }
//           return (
//             <Tag color={color} key={tag}>
//               {tag.toUpperCase()}
//             </Tag>
//           );
//         })}
//       </>
//     ),
//   },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <div size="large">
        <a>查看 </a>
        <a>回滚</a>
      </div>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default class extends React.Component{
    state = {
        data: []
    }
    componentDidMount(){
        request('/queryList').then(res=>{
            this.setState({data: res})
        })
    }
    render(){
        const {data}=  this.state
        return <Table columns={columns} dataSource={data} />
    }
}