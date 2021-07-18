import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../common/Icon/Icon';
import {formatPrice} from '../../../utils/formatPrice';
import styles from './OrderOption.scss';

const OrderOptionIcons = ({values, required, setOptionValue, currentValue}) => (
  <div className={styles.icons}>
    {required ? '' : (
      <div key='null' onClick={ (id='') => setOptionValue(id)}>
        <Icon name='times-circle' /> none
      </div>
    )}
    {values.map( (value) => (
      <div className={(value.id === currentValue ? styles.iconActive : styles.icon)} key={value.id}
        onClick={() => setOptionValue(value.id)}>
        <Icon name={value.icon} /> {value.name} ({formatPrice(value.price)})
      </div>
    ))}
  </div>

);

OrderOptionIcons.propTypes = {
  values: PropTypes.any,
  required: PropTypes.any,
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.any,
};

export default OrderOptionIcons;
