import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import styles from './OrderOption.scss';

const OrderOptionDate = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker className={styles.input} selected={startDate} onChange={(date) => setStartDate(date) } showTimeSelect/>
  );
};

export default OrderOptionDate;
