const API_KEY = '20799559-c9685ab0b6001e1a4eb2b3732';
const BASE_URL = 'https://pixabay.com/api/';

export default {
    namberPage: 1,
    searchQuery: '',
    
    fetchImg() {    
    const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.namberPage}&per_page=12&key=${API_KEY}`
  
    return fetch(url)
        .then(res => res.json())
        .then(({ hits }) => {
            this.incrementPage();

            return hits;
        })
        .catch(console.log);
    },
    
    resetPage() {
    this.namberPage = 1;
    },
    
    incrementPage() {      
    this.namberPage += 1;
    },

    get query() {
    return this.searchQuery;
    },

    set query(value) {
    this.searchQuery = value;
    },
}