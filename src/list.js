import React, { Component } from 'react';
import { List, message, Avatar, Spin } from 'antd';
import reqwest from 'reqwest';
import FetchDetailform from './fetchform'
import InfiniteScroll from 'react-infinite-scroller';
import './list.css'

const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

class list extends React.Component{
    state = {
        data: [],
        loading: false,
        hasMore: true,
        showDet:false,
    }
    getData = (callback) => {
        reqwest({
            url: fakeDataUrl,
            type: 'json',
            method: 'get',
            contentType: 'application/json',
            success: (res) => {
                callback(res);
            },
        });
    }
    componentDidMount(){
        //这里通过ajax获取相关列表信息
        this.getData((res) => {
            this.setState({
                data: res.results,
            });
        });
    }
    handleClick =(e)=>{
        console.log('click ', e);
        this.setState({
            showDet:true,
        })
    }

    handleInfiniteOnLoad = () => {
        let data = this.state.data;
        this.setState({
            loading: true,
        });
        //限制最大条数
        if (data.length > 14) {
            message.warning('全部加载完毕');
            this.setState({
                hasMore: false,
                loading: false,
            });
            return;
        }
        this.getData((res) => {
            data = data.concat(res.results);
            this.setState({
                data,
                loading: false,
            });
        });
    }
    render(){
        return (
           <div>
               {(!this.state.showDet)&&
               <div className="demo-infinite-container">
                   <InfiniteScroll
                       initialLoad={false}
                       pageStart={0}
                       loadMore={this.handleInfiniteOnLoad}
                       hasMore={!this.state.loading && this.state.hasMore}
                       useWindow={false}
                   >
                       <List
                           onClick={this.handleClick}
                           dataSource={this.state.data}
                           renderItem={item => (
                               <List.Item key={item.id}>
                                   <List.Item.Meta
                                       avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                       title={<a href="#">{item.name.last}</a>}
                                       description={item.email}
                                   />
                                   <div>Content</div>
                               </List.Item>
                           )}
                       >
                           {this.state.loading && this.state.hasMore && (
                               <div className="demo-loading-container">
                                   <Spin />
                               </div>
                           )}
                       </List>
                   </InfiniteScroll>
               </div>
               }
               {
                   (this.state.showDet)&&<FetchDetailform />
               }

          </div>
        );
    }
}
export  default  list;