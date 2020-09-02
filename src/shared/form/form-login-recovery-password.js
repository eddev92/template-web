import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'antd';
import './../../../styles/login.css'
import ButtonComponent from '../button';
import InputComponent from '../input';

const RecoveryPasswordFormComponent = ({ getFieldDecorator, handleChange, handleRecovery }) => {
    return (
          <Form className="main-login-form col-md-6">
            <h1>Reestablecer contraseña</h1>
						<p>Escribe tu dirección de correo registrado para reestablecer contraseña</p>
            <Form.Item>
              {
              getFieldDecorator('email', {
                rules: [{ required: true, message: 'Please input your email!' }],
              })(
								<InputComponent 
									placeholder="Correo"
									type="text"
									id="code"
									handleChange={handleChange}
									width="405px"
                  height="50px"
                  classString="input-code"
                  textAlign="left"
									/>
                )
              }
            </Form.Item>
            <Form.Item>
							<ButtonComponent handleClick={handleRecovery} title="Enviar" shape="round" width="405px" height="52px" fontSize='18px'/>
            </Form.Item>
            <a className="go-home" ><Link to="/login/mail">Regresar al inicio de sesión</Link></a>
          </Form>
    )
}

export default RecoveryPasswordFormComponent;
