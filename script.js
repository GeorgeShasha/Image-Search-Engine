const accessKey = 'accessKey';

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResults = document.getElementById("search-results");
const showMoreButton = document.getElementById("show-more-button");

let keyword = '';
let page = 1;

async function searchImage() {

    keyword = searchBox.value;
    const url = 'url';
    const response = await fetch(url);
    const data = await response.json();

    if(page === 1) {
        searchResults.innerHTML = '';
    }

    const results = data.results

    results.map((result) => {
        const image = document.createElement('img');
        image.src = result.urls.small;
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = '_blank';

        imageLink.appendChild(image);
        searchResults.appendChild(imageLink);
    });

    showMoreButton.style.display = 'block';

    console.log(data);
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    page = 1;
    searchImage();
});

showMoreButton.addEventListener('click', () => {
    page++;
    searchImage();
});