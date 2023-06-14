const addYears = () => {
    const currYear = new Date().getFullYear();
    let yearArr = [];
    for (let i = currYear; i >= 1896; --i) {
          yearArr.push(i);
          continue
      }
      const yearList = yearArr.map(elem => {
          return `<option value="${elem}">${elem}</option>`
      }).join('');
      return yearList;
  };
  addYears();
  export {addYears};