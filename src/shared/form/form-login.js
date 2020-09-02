import React from 'react';
import { Form } from 'antd';
import './../../../styles/login.css'
import ButtonComponent from '../button';
import InputComponent from '../input';

const LoginFormComponent = ({ getFieldDecorator, handleChange, login }) => {
    return (
          <Form className="main-login-form col-md-6">
            <h4>INICIAR SESION</h4>
            <Form.Item>
              {
              getFieldDecorator('email', {
                rules: [{ required: true, message: 'Please input your email!' }],
              })(
								<InputComponent 
									placeholder="Correo"
									type="email"
									id="email"
									handleChange={handleChange}
									width="405px"
									height="50px"
									/>
                )
              }
            </Form.Item>
            <Form.Item>          
								<InputComponent 
								placeholder="Contraseña"
								type="password"
								id="password"
								handleChange={handleChange}
								width="405px"
								height="50px"
								/>
            </Form.Item>
            <Form.Item>
							<ButtonComponent handleClick={login} title="Acceder" shape="round" width="405px" height="52px" />
            </Form.Item>
          </Form>
    )
}

export default LoginFormComponent;
