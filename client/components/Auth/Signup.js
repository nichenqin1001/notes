import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = { error: '' };
  }

  handleSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    Accounts.createUser({ email, password }, error => {
      if (error) {
        this.setState({ error: error.reason });
      }
    });
  }

  render() {
    return (
      <div>
        <h1>注册</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            电子邮箱：
            <input type="email" name="email" />
          </label>
          <label>
            密码：
            <input type="password" name="password" />
          </label>
          <button type="submit">注册</button>
        </form>
        <Link to="/">已经有账号了？</Link>
      </div>
    );
  }
}

export default Signup;
