import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary';

// import styles from './OrderForm.scss';



const OrderForm = ({options, tripCost}) => (
  <div>
    <Row>
      <Col xs={12}>
        <OrderSummary options={options} tripCost={tripCost} />
      </Col>
    </Row>
  </div>
);

OrderForm.propTypes = {
  options: PropTypes.object,
  tripCost: PropTypes.string,
};



export default OrderForm;
