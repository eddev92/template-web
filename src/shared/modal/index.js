import React from 'react';
import { Modal, Button } from 'antd';
import { Progress } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import './../../styles/modal.css';

const { confirm } = Modal;

const ModalComponent = ({ uploadling = false, responseGetUrlFile = {}, result = null, handleCancelRegister = null, resultFileUploaded = {}, downloadFile = null, disabledUploadFileIsLoaded = false, responseGetUrlUploadFile = {}, handleCancelDownload = null, timeDownload = 0, filetoDownload = {}, responseUploadFile = {}, confirmLoadingIcon = false, visible = false, title = "", handleOk = null, handleCancel = null, fileUploaded = {}, type="", fileDownloaded = {}, uploadlingPercent = 0 }) => {
	const nowDate = new Date();
	const footerHidden = document.querySelectorAll(".ant-modal-footer");
	let inValid = false;
	if (filetoDownload !== {} && type === "download") {
		return (
			<Modal
			title="Descarga de reporte"
			visible={visible}
			onCancel={handleCancelRegister}
			cancelText="Cerrar"
			maskClosable={false}
			footer={null}
			>
					<div className="body-content">
					<p>Estas apunto de descargar el siguiente archivo:</p>
					<ul>
						<li>Nombre: {filetoDownload.name.value || ''}</li>
					</ul>
					<div>
					</div>
					{
						(responseGetUrlFile && responseGetUrlFile.data)
						?
						<div>
						<a href={responseGetUrlFile.data} target="_blank" download={filetoDownload.name.value} class="ant-btn ant-btn-primary">Descargar</a>
						<a onClick={handleCancelDownload} class="ant-btn">Cancelar</a>
							</div>
						:
						<div>
							Cargando...
							</div>
					}
				</div>
			</Modal>
		)
	}

	if (type === 'confirm-register') {
		return (
			<Modal
			title="Registro de comercio"
			visible={visible}
			onCancel={handleCancelRegister}
			cancelText="Cerrar"
			maskClosable={true}
			footer={null}
			>
				<div className="body-content">
					<p>Estado:</p>
					{
						result && result.success === 'true' ?
						<div>
							<b>Comercio registrado con exito</b>
						<b>Key: {result.merchantKey}</b>
						</div>
						:
						<b>No se pudo registrar el comercio, vuelve a intentar</b>
					}
					<div>
							<button onClick={handleCancelRegister}>Cerrar</button>
					</div>
				</div>
			</Modal>
		)
	}
	if (responseGetUrlUploadFile && responseGetUrlUploadFile.generate && responseGetUrlUploadFile.generate.success === false &&
		responseGetUrlUploadFile.generate.meta && responseGetUrlUploadFile.generate.meta.status && responseGetUrlUploadFile.generate.meta.status.code === '01'
		&& responseGetUrlUploadFile.generate.meta.status.message_ilgn && responseGetUrlUploadFile.generate.meta.status.message_ilgn.length > 0) {
			inValid = true
		}
		console.log(inValid)
		console.log(disabledUploadFileIsLoaded)
	return (
			<Modal
				title="Carga de archivo"
				visible={visible}
				maskClosable={false}
				confirmLoading={confirmLoadingIcon}
				onOk={(filetoDownload !== {} && type === "download") ? downloadFile : handleOk}
				onCancel={(filetoDownload !== {} && type === "download") ? handleCancelDownload : handleCancel}
				okText={uploadling ? 'Cargando...' : "Cargar"}
				cancelText={uploadlingPercent === 100 ? "Cerrar" : "Cancelar"}
				okButtonProps={{'disabled':(inValid === true) ? inValid : disabledUploadFileIsLoaded}}
				keyboard={false}
				cancelButtonProps={{'disabled': (resultFileUploaded && resultFileUploaded.status !== 204 && resultFileUploaded.url !== "") ? false : uploadlingPercent > 0 && uploadlingPercent < 100}}
			>
				{type === 'upload'
				&&
				(
					<div className="body-content">
					<p>Estas apunto de cargar el siguiente archivo:</p>
					<ul>
						<li>Nombre: {fileUploaded.file.name || ''}</li>
						<li>Extensión: {(fileUploaded && fileUploaded.file && fileUploaded.file.name) ? 'CSV' : ''}</li>
						<li>Tamaño: {fileUploaded.file.size || ''}</li>
						<li>Tipo: {fileUploaded.file.type || ''}</li>
						<li>Fecha de Carga: {(fileUploaded.file.lastModifiedDate) ? nowDate.toString() : ''}</li>
					</ul>
					<div>
					<Progress
						strokeColor={{
							from: '#108ee9',
							to: '#87d068',
						}}
						percent={(resultFileUploaded && resultFileUploaded.status === 204 && resultFileUploaded.url !== "") ? 100 : uploadlingPercent}
						status="active"
					/>
					{
						responseUploadFile && responseUploadFile.status === 200 && responseUploadFile.url !== ""
						&&
						<span className="msg-result-upload">El archivo se cargó con éxito!</span>
					}
					{
						responseUploadFile && responseUploadFile.status !== 200
						&&
						<span className="msg-result-dont-upload">No se pudo cargar el archivo, inténtalo nuevamente</span>
					}
						{
						responseGetUrlUploadFile && responseGetUrlUploadFile.generate && responseGetUrlUploadFile.generate.success === false &&
						responseGetUrlUploadFile.generate.meta && responseGetUrlUploadFile.generate.meta.status && responseGetUrlUploadFile.generate.meta.status.code === '01'
						&&
						responseGetUrlUploadFile.generate.meta.status.message_ilgn.map(element => {
								return <span className="msg-result-not-valid">{element.value}</span>
						})
					}
					</div>
				</div>
				)
				}
		</Modal>
		)
	}

export default ModalComponent;
