import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';
import settings from '../../../data/settings.js';
import {formatPrice} from '../../../utils/formatPrice.js';
import {calculateTotal} from '../../../utils/calculateTotal.js';

const sendOrder = (options, tripCost, tripName, countryCode) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));
  const tripId = window.location.href.replace('http://localhost:8080/trip/', '');

  const payload = {
    ...options,
    totalCost,
    tripName,
    tripId,
    countryCode,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  if (options.name && options.contact) {
    fetch(url, fetchOptions)
      .then(function(response){
        return response.json();
      }).then(function(parsedResponse){
        console.log('parsedResponse', parsedResponse);
      });
  } else {
    console.log('Name or Contact is empty!');
  }
};

const OrderForm = ({options, tripCost, setOrderOption, tripName, countryCode}) => (
  <div>
    <Row>
      {pricing.map((option) => (
        <Col key={option.id} md={4}>
          <OrderOption setOrderOption={setOrderOption} currentValue={options[option.id]} {...option}/>
        </Col>
      ))}
      <Col xs={12}>
        <OrderSummary options={options} tripCost={tripCost}/>
      </Col>
    </Row>
    <Button onClick={() => sendOrder(options, tripCost, tripName, countryCode)}>Order now!</Button>
  </div>
);

OrderForm.propTypes = {
  options: PropTypes.object,
  tripCost: PropTypes.string,
  setOrderOption: PropTypes.any,
  tripName: PropTypes.string,
  countryCode: PropTypes.string,
};



export default OrderForm;
