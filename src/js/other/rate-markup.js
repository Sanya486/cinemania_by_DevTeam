import starFull from '../../images/icons/stars/star-full.svg';
import starHalf from '../../images/icons/stars/star-half.svg';
import starEmpty from '../../images/icons/stars/star-empty.svg';

/* Function expects film's rate and returns finished markup of film's star rating */

const valueChoose = {
    full: starFull,
    half: starHalf,
    empty: starEmpty,
  }

const rateArray = (rate) => {

    let array = ['', '', '', '', ''];

  const newArray = array.map(() => {
    if (rate !== 0) {
      if (rate >= 2) {
        rate -= 2;
        return valueChoose.full;
      } else if (rate === 1) {
        rate -= 1;
        return valueChoose.half;
      }
    } else {
      return valueChoose.empty;
    }
  });


return newArray;
}

export {rateArray};