import React, { Component } from 'react';
import './introduce.css'

class  Introduce extends  React.Component{

    render(){
        return (
            <div className="introduce">
                <h3 className="introduce-header">留言必读</h3>
                <p>
                    1、本平台按照独立、保密、直接、有效的原则，开展信息收集和管理工作，
                    使内、外部客户以及威高广大员工与集团董事会及管理层保持通畅的信息传递。
                </p>
                <p>
                    2、为了使所提建议或相关信息能够得以快捷整改与处理，并对其情况进行有效的沟通或结果的反馈，
                    同时也为了方便集团董事会审计与风险管控委员会对已被采纳的合理化建议人员的表彰与奖励，
                    以及对有效问题反映人员的奖励，请用户尽量“署名”并留下“联系方式”。
                </p>
                <p>
                    3.点击上方的<b>发起留言</b>进行提报。
                </p>
                <p>
                    4.留言后可通过上方的<b>快速查询</b>来查看过往记录
                </p>
            </div>
        );


    }
}

export  default  Introduce;