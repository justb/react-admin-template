import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import { Form, Input, Button, message } from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import styles from './index.module.css';

class Login extends Component{
    onSubmit(e){
        localStorage.setItem('currentUser', "123");
        this.props.history.push('/');
        // message.error('登录失败!');
        return false;
    }
    render(){
        return (
            <div className={styles.loginWrap}>
                <div className={styles.msLogin}>
                    <div className={styles.msTitle}>后台管理系统</div>
                    <Form onFinish={this.onSubmit.bind(this)} className={styles.msContent}>
                        <Form.Item name={'username'} rules={ [{ required: true, message: '请输入用户名' }]} initialValue={'admin'}>
                                    <Input addonBefore={<UserOutlined></UserOutlined>} />
                        </Form.Item>
                        <Form.Item name={'password'} rules={ [{ required: true, message: '请输入密码' }]} initialValue={'admin'}>
                                    <Input type="password" addonBefore={<LockOutlined />} />
                        </Form.Item>
                        <div className={styles.loginBtn}>
                            <Button type="primary" type="primary" htmlType="submit">登录</Button>
                        </div>
                        <p className={styles.loginTips}>Tips : 用户名和密码随便填。</p>
                    </Form>
                </div>
            </div>
        )
    }
}

export default withRouter((Login));