import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
      <div className="box">
        <div className="box__box">
          <h1 className="box__header">登录</h1>
          <form className="box__form" onSubmit={this.handleSubmit.bind(this)} noValidate>
            <input type="email" name="email" placeholder="电子邮件" />
            <input type="password" name="password" placeholder="密码" />
            <button className="button">点击登录</button>
          </form>
          <Link to="/signup">还没有账号？点击注册</Link>
        </div>
      </div>
    );
  }
}

export default Signin;
