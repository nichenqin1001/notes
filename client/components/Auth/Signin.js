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
      <div>
        <h1>登录</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            电子邮箱:
            <input type="email" name="email" />
          </label>
          <label>
            密码：
            <input type="password" name="password" />
          </label>
          <button type="submit">登录</button>
        </form>
        <Link to="/signup">注册新账号</Link>
      </div>
    );
  }
}

export default Signin;
