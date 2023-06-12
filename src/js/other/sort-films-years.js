const addYears = () => {
    const currYear = new Date().getFullYear();
  //   console.log(currYear);
    let yearArr = [];
    for (let i = currYear; i >= 1896; --i) {
          yearArr.push(i);
          // console.log(yearArr);
          continue
      }
    //   console.log(`this is - ${yearArr}`);
    //   console.log(typeof(yearArr));
      const omg = yearArr.map(elem => {
          return `<option value="${elem}">${elem}</option>`
      }).join('');
    //   console.log(omg);
    //   console.log(typeof(omg));
      return omg;
  };
  addYears();
  export {addYears};