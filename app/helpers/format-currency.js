import { helper } from '@ember/component/helper';
import { typeOf } from '@ember/utils';

export function formatCurrency([value, ...rest], args) {
  if (Number.isInteger(Math.floor(value))){
    /*let euros = Math.floor(value);
    let cents = (value % 10)*100;*/

    let signe = ' '+args.symbol;
    let euros = value.toString().split('.')[0];
    if (Number.isInteger(value)){
      return `${euros},00${signe}`;
    }else{
      let centimes = (Math.round(value*100)/100).toString().split('.')[1];
      if (centimes.length === 1) { centimes = centimes + '0'; }
      return `${euros},${centimes}${signe}`;
    }
  }else{
    let val = value;
    return `${val}`;
  }

}

export default helper(formatCurrency);
