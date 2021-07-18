import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';

// import styles from './OrderForm.scss';

const OrderForm = ({options, tripCost, setOrderOption}) => (
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
  </div>
);

OrderForm.propTypes = {
  options: PropTypes.object,
  tripCost: PropTypes.string,
  setOrderOption: PropTypes.any,
};



export default OrderForm;
