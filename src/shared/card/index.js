import React from 'react';
import { Card, Checkbox, Input, Icon } from 'antd';
import './../../styles/card.css';
import InputComponent from '../input';
import { PAYMENTS_METHODS } from '../../constants/constants'

const CardComponent = ({ allBrands = [], element = {}, index = 0, classString = '', handleChange = null, handleObjFieldsBrand = null, currencies = [], handleChangeCurrency = null }) => {
  console.log(allBrands)
  const brandImg = PAYMENTS_METHODS.find(pay => pay.type === element.code)
  element.position = index;
  console.log(element)
  console.log(currencies)
  const inputCommerceCode = document.querySelectorAll(".code_commerce-VISA");
  const inputCommerceCodeMSC = document.querySelectorAll(".code_commerce-MSCD");
  const inputCommerceCodeDINC = document.querySelectorAll(".code_commerce-DINC");
  const inputCommerceCodeAMEX = document.querySelectorAll(".code_commerce-AMEX");
  if (inputCommerceCode && inputCommerceCode[0]) {
    console.log(inputCommerceCode[0])
    inputCommerceCode[0].addEventListener("keypress", (evt) => {
    console.log(evt.which)
    if (evt.which !== 8 && evt.which !== 0 && evt.which < 48 || evt.which > 57) {
        evt.preventDefault();
        }
    });
  }
    if (inputCommerceCodeMSC && inputCommerceCodeMSC[0]) {
      console.log(inputCommerceCodeMSC[0])
      inputCommerceCodeMSC[0].addEventListener("keypress", (evt) => {
      console.log(evt.which)
      if (evt.which !== 8 && evt.which !== 0 && evt.which < 48 || evt.which > 57) {
          evt.preventDefault();
          }
      });
    }
    if (inputCommerceCodeAMEX && inputCommerceCodeAMEX[0]) {
      console.log(inputCommerceCodeAMEX[0])
      inputCommerceCodeAMEX[0].addEventListener("keypress", (evt) => {
      console.log(evt.which)
      if (evt.which !== 8 && evt.which !== 0 && evt.which < 48 || evt.which > 57) {
          evt.preventDefault();
          }
      });
    }
    if (inputCommerceCodeDINC && inputCommerceCodeDINC[0]) {
      console.log(inputCommerceCodeDINC[0])
      inputCommerceCodeDINC[0].addEventListener("keypress", (evt) => {
      console.log(evt.which)
      if (evt.which !== 8 && evt.which !== 0 && evt.which < 48 || evt.which > 57) {
          evt.preventDefault();
          }
      });
    }
  if (currencies && element && element.currencies && element.currencies.length > currencies.length) {
    console.log(element.currencies)
  }
  console.log(element)
  return (
      <div className={`${classString} col-sm-6 col-md-3 card-element element-${element.position}`} >
        <Card bordered={false} style={{ width: 'auto' }}>
            <Checkbox className="chkbx-card chkbx-brand" checked={element.enabled} value={`brand-${element.position}`} onChange={handleChange.bind(this, element)}>Habilitar</Checkbox>
          <div className="body-card">
            {
                brandImg.name
              ?
                element.enabled ?
                <img src={require(`./../../assets/images/icons/${brandImg.urlImg.toLowerCase()}.png`)}/>
                :
                <img src={require(`./../../assets/images/icons/${brandImg.urlImg.toLowerCase()}-gray.png`)}/>
              : null
            }
            <div className="merchant-code">
              <label>Codigo de comercio</label>
                <InputComponent type="number" id="code_commerce"
                 handleChange={handleObjFieldsBrand.bind(this, element)}
                 value={element.code_commerce}
                 disabled={!element.enabled}
                 classString={`code_commerce-${element.code}`}
                 />
              </div>
              <table>
                <thead>
                  <tr>
                    <td style={{'textAlign': 'left'}}>Moneda</td>
                    <td style={{'textAlign': 'left'}}>Codigo ISO</td>
                  </tr>
                </thead>
                <tbody>
                  {
                    element.currencies &&
                    element.currencies.map(currency => {
                      return (
                        <tr>
                          <td style={{'textAlign': 'left'}}>
                            <Checkbox className="chkbx-card" checked={currency.enabled} disabled={!element.enabled} onChange={handleChangeCurrency.bind(this, currency, index, element)}>
                              {
                                ((currency && currency.iso_code === 'USD') || (currency && currency.iso_code === 'DOL')) ? 'Dolares' : 'Soles'
                              }
                            </Checkbox>
                          </td>
                          <td style={{'textAlign': 'left'}}>{currency.numeric_code}</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
          </div>
        </Card>
      </div>
    )
}

export default CardComponent;
