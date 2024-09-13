function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        if(timeoutId){
            clearTimeout(timeoutId);
        }
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }

  // Simulate an API call
  function search(query) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.textContent = `Searching for: ${query}`;
    
  }

  // Debounce the search function
  const debouncedSearch = debounce(search, 300); 

  // Attach the debounced function to the input field
  window.onload = function () {
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', function () {
      debouncedSearch(this.value);
    });
  };