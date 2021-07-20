import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import styles from './OrderOption.scss';

const OrderOptionDate = ({setOptionValue}) => {
  const [startDate] = useState(new Date());

  return (
    <DatePicker className={styles.input} selected={startDate} onChange={value => setOptionValue(value)} showTimeSelect />
  );
};

OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.any,
};

export default OrderOptionDate;
