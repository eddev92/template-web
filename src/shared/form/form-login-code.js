import React from 'react';
import { connect } from '../../main/home/views/option/node_modules/react-redux'
import { Form } from 'antd';
import './../../../styles/login.css'
import ButtonComponent from '../button';
import InputComponent from '../input';
import { Link } from 'react-router-dom';
import history from '../../../utils/history';
import { getLoginByCodeUser } from '../../../redux/actions/auth';

class LoginByCodeFormComponent extends React.Component {

  componentDidMount() {
    const token = localStorage.getItem("token");

    if (!token) {
      history.push('/login/mail');
      return window.location.reload()
    }

    //call get /auth
    this.props.getLoginByCodeUser(token);

  }

  validationsByCode = () => {
    // call service put /auth
  }

  render() {
    const { getFieldDecorator, handleChange, userResponseByCode } = this.props;
    console.log(userResponseByCode)

    return (
      <Form className="main-login-form col-md-6">
        <h4>INICIAR SESION</h4>
        <p>Se ha enviado un código de acceso a su correo:<br/>adquiriente@alignet.com</p>
        <Form.Item>
          {
          getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <InputComponent 
              placeholder="Codigo"
              type="text"
              id="code"
              handleChange={handleChange}
              width="405px"
              height="50px"
              classString="input-code"
              textAlign="center"
              />
            )
          }
        </Form.Item>
        <b>Reenviar codigo</b>
        <p>
        El código solo es válido por 5 minutos, sino deberá generar el código nuevamente
        </p>
        <Form.Item>
          <ButtonComponent handleClick={this.validationsByCode} title="Acceder" shape="round" width="405px" height="52px" />
        </Form.Item>
        <a className="go-home" ><Link to="/login/mail">Regresar al inicio de sesión</Link></a>
      </Form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userResponseByCode: state.auth.userResponseByCode
  } 
}

const mapDispatchToProps = (dispatch) => {
  return {
    getLoginByCodeUser: (token) => { dispatch(getLoginByCodeUser(token)) },
  }
}

export default LoginByCodeFormComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginByCodeFormComponent);
