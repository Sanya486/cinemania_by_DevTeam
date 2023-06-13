

  function paginationFn ({totalItems, itemsPerPage}) {
    const refs = {
      tuiPaginationEl: document.querySelector('#pagination')
  }
  
  function formatPageNumber(pageNumber) {
      return pageNumber.toString().padStart(2, '0');
    }  
  
  
  const options = {
      totalItems,
      itemsPerPage,
      visiblePages: 3,
      page: 1,
      centerAlign: false,
      firstItemClassName: 'tui-first-child',
      lastItemClassName: 'tui-last-child',
      template: {
          page: function (data) {
              const currentPage = data.page; 
              const pageNumber = formatPageNumber(currentPage); 
              return `<span class="tui-page-btn btn">${pageNumber}</span>`;
            },
        currentPage: function (data) {
          const cuurentPage = data.page;
          const pageNumber = formatPageNumber(cuurentPage); 
          return `<strong class="tui-page-btn tui-is-selected btn">${pageNumber}</strong>`;
        },    
  
        moveButton:
          '<a href="#" class="tui-page-btn tui-{{type}}">' +
            '<span class="tui-ico-{{type}}">{{type}}</span>' +
          '</a>',
        disabledMoveButton:
          '<div class="tui-page-btn tui-is-disabled tui-{{type}}">' +
            '<div class="tui-ico-{{type}}">{{type}}</div>' +
          '</div>',
        moreButton:
          '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip btn">' +
            '<span class="tui-ico-ellip">...</span>' +
          '</a>'
      },
      lastPage: '<span class="tui-last-page-btn">Last (<%= totalPage %>)</span>',
      
    };
    
    const pagination = new Pagination('pagination', options);
  }

 
