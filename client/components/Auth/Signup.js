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
      if (error) { this.setState({ error: error.reason }); }
    }
    );
  }
  render() {
    return (
      <div className="box">
        <div className="box__box">
          <h1 className="box__header">注册账号</h1>
          <form
            className="box__form"
            onSubmit={this.handleSubmit.bind(this)}
            noValidate>
            <input type="email" name="email" placeholder="电子邮件" />
            <input type="password" name="password" placeholder="密码" />
            <button className="button">创建账号</button>
          </form>
          <Link to="/">已经有账号了？点击登陆</Link> </div> </div>);
  }
}

export default Signup;
