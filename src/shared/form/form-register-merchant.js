import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Card } from 'antd';
import CardComponent from '../card';
import '../../../styles/home.css'
import SelectComponent from '../select';
import { COUNTRIES, VERSIONS_PROTOCOL, SCHEMA_SECURITY, PAYMENTS_METHODS } from '../../../constants/constants';

class FormRegisterComponent extends React.Component {

	render() {
		const list = PAYMENTS_METHODS.map((payment, index) => {
			return <CardComponent element={payment} index={index} />;
		})
		return (
					<Form className="login-form-transc">
						<h4>REGISTRO DE COMERCIO</h4>
						<div className="row">
							<Form.Item className="col-6">
									<label>Nombre de comercio</label>
										<Input
											prefix={<Icon type="text" style={{ color: 'rgba(0,0,0,.25)' }} />}
										/>
							</Form.Item>
							<Form.Item className="col-6">
									<label>MCC</label>
									<Input
										prefix={<Icon type="text" style={{ color: 'rgba(0,0,0,.25)' }} />}
										type="text"
									/>
							</Form.Item>
						</div>							
						<div className="row">
							<Form.Item className="col-6">
									<label>Pais</label>
									<SelectComponent classString="col-12" options={COUNTRIES} />
							</Form.Item>
							<Form.Item className="col-6">
									<label>NotificationURL</label>
									<Input
										prefix={<Icon type="text" style={{ color: 'rgba(0,0,0,.25)' }} />}
										type="text"
									/>
							</Form.Item>
						</div>				
						<div className="row">
							<Form.Item className="col-6">
									<label>Versión de protocolo 3-D Secure</label>
										<SelectComponent classString="col-12" options={VERSIONS_PROTOCOL} />
							</Form.Item>
							<Form.Item className="col-6">
									<label>Esquema de seguridad</label>
									<SelectComponent classString="col-12" options={SCHEMA_SECURITY} />
							</Form.Item>
						</div>
						<div className="row">
							{list}
						</div>		
						<Form.Item>
							<Button type="primary" className="login-form-button">
								Registrar
							</Button>
						</Form.Item>
					</Form>   
	);
	}    
}

export default Form.create()(FormRegisterComponent)