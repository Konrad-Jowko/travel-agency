import React from 'react';
import PropTypes from 'prop-types';
import {formatPrice} from '../../../utils/formatPrice';
import styles from './OrderOption.scss';

const OrderOptionNumber = ({currentValue, limits, setOptionValue, price}) => (

  <div className={styles.number}>
    <input
      type="number"
      className={styles.inputSmall}
      value={currentValue}
      min={limits.min}
      max={limits.max}
      onChange={event => setOptionValue(event.currentTarget.value)} />
    {formatPrice(price)}

  </div>

);

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.any,
  limits: PropTypes.any,
  setOptionValue: PropTypes.any,
  price:PropTypes.any,
};

export default OrderOptionNumber;
