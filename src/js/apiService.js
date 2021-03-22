import refs from './refs.js';
import newsService from './service';
import updateImgsMarkup from './updateImg';


refs.searchForm.addEventListener('submit', event => {
    event.preventDefault();

    const form = event.currentTarget;
    newsService.query = form.elements.query.value;

    refs.galleryContainer.innerHTML = '';
    form.reset();    

    newsService.resetPage();
    newsService.fetchImg().then(hits => {
        updateImgsMarkup(hits)
    })
}, 1000)

refs.btnLoadMore.addEventListener('click', async () => {
    const hits = await newsService.fetchImg('hits')
    updateImgsMarkup(hits)

    window.scrollTo({ top: refs.galleryContainer.clientHeight, behavior: 'smooth' });
} )