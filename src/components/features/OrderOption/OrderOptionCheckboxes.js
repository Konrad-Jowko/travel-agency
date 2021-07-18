import React from 'react';
import PropTypes from 'prop-types';
//import Icon from '../../common/Icon/Icon';
import {formatPrice} from '../../../utils/formatPrice';
import styles from './OrderOption.scss';

const newValueSet = (currentValue, id, checked) => {
  if(checked){
    return [
      ...currentValue,
      id,
    ];
  } else {
    return currentValue.filter(value => value != id);
  }
};

const OrderOptionCheckboxes = ({values, setOptionValue, currentValue}) => (
  <div className={styles.checkboxes}>
    {values.map( (value) => (
      <label className={styles.icon} key={value.id}>
        <input type="checkbox"
          value={value.id}
          checked={(currentValue.includes(value.id)) ? true : false}
          onChange={event => setOptionValue(newValueSet(currentValue, value.id, event.currentTarget.checked))}
        />
        {value.name}
        ({formatPrice(value.price)})
      </label>
    ))}
  </div>

);

OrderOptionCheckboxes.propTypes = {
  values: PropTypes.any,
  required: PropTypes.any,
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.any,
};

export default OrderOptionCheckboxes;
