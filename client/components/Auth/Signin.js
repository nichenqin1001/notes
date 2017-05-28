import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AuthHeader from '../Header/AuthHeader';

class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = { error: '' };
  }

  handleSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    Meteor.loginWithPassword({ email }, password, error => {
      if (error) {
        this.setState({ error: error.reason });
      }
    });
  }

  render() {
    return (
      <div className="main">
        <AuthHeader />
        <div className="box">
          <h2 className="box__header">登录</h2>
          <div className="box__box">
            <form
              className="box__form"
              onSubmit={this.handleSubmit.bind(this)} noValidate>
              <input className="form__control" type="email" name="email" placeholder="电子邮件" />
              <input className="form__control" type="password" name="password" placeholder="密码" />
              <button className="button form__control">点击登录</button>
            </form>
            <Link to="/signup">还没有账号？点击注册</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
