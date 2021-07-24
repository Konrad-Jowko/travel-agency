import React from 'react';
import styles from './PhoneNumber.scss';
import Icon from '../Icon/Icon';

let shift;

const shifts = {
  Amanda: 'Amanda, 678.243.8455',
  Tobias: 'Tobias, 278.443.6443',
  Helena: 'Helena, 167.280.3970',
  Night: 'The office opens at 8:00 UTC',
};



class PhoneNumber extends React.Component {
  constructor(){
    super();

    setInterval(() => this.forceUpdate(), 1000);
  }

  getCountdownTime(){
    const currentTime = new Date();
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));

    if(currentTime.getUTCHours() >= 12){
      nextNoon.setUTCDate(currentTime.getUTCDate()+1);
    }
    return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
  }

  render() {
    const countdown = this.getCountdownTime();

    if (countdown >= 0 && countdown < 14400) {
      shift = shifts.Amanda;
    } else if (countdown >= 72000 && countdown < 86399) {
      shift = shifts.Tobias;
    } else if (countdown >= 50400 && countdown < 72000) {
      shift = shifts.Helena;
    } else if (countdown >= 14400 && countdown < 50400) {
      shift = shifts.Night;
    }

    return (
      <div className={styles.contact}>
        <Icon name='phone' /><span>{shift}</span>
      </div>
    );
  }

}



export default PhoneNumber;
