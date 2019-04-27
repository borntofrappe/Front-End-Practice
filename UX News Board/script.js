// array describing the news' categories
const categories = ['all', 'news', 'updates', 'maintenance', 'events', 'important'];
// array describing the colors matching the categories
const colors = ['#66d7ee', '#66a1ee', '#7166ee', '#a866ee', '#ee66aa', '#ee6d66'];

// array describing the navigation's items through the category and color
const navItems = categories.map((category, index) => ({
  category,
  color: colors[index],
}));


// date used to establish the age of the news items
const latestDate = new Date();
// filler text used fo the news
const fillerTitle = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, saepe';

// number of items for each news' category, sans the first one
const limit = 5;
// array describing every piece of news
// the idea is to have _limit_ number of news for each category, sans the first one
const data = [];

// for every navigation item sans the first one include _limit_ number of news in the data array
navItems.slice(1).forEach(({ category, color }) => {
  for (let i = 0; i < limit; i += 1) {
    // specify the category, color according to the navigation item
    // use the latest date to find an earlier date instance
    // use the filler text for the title
    const date = new Date(latestDate - (1000 * 60 * 60 * 24) * (Math.ceil(Math.random() * 100)));
    data.push({
      category,
      color,
      date,
      title: fillerTitle,
    });
  }
});
// console.log(data);

// ADD NAVIGATION ITEMS
const boardNav = document.querySelector('.board__nav');
// specify a showNews() function passing as argument the specific cateogry
// specify the background with a slightly transparent version of the chosen color
boardNav.innerHTML = navItems.map(({ category, color }) => `
  <button onclick="showNews('${category}')" class="nav--item ${category === 'all' && 'active'}" style="background: ${color}44">
    ${category}
  </button>
`).join('');

// function _adding_ the news in the .board__news element
// accepting as argument an array of news items
function addNews(news) {
  const boardNews = document.querySelector('.board__news');

  // include the first five items of the input array
  // ! include the theme color as a solid border
  boardNews.innerHTML = news.slice(0, 5).map(({ color, date, title }) => `
  <a class="news--item" href="#" style="border-left: 4px solid ${color}">
      <p class="date">
          ${date.toDateString()}
      </p>
      <p class="title">
          ${title}
      </p>
  </a>
  `).join('');
}
// sort the data
// ! this ultimately _mutates_ the data array, sorting the elements in place
// this is actually useful to always include the latest news no matter the category
const latestNews = data.sort(({ date: dateA }, { date: dateB }) => (dateA > dateB ? -1 : 1));
// immediately call the function with the most recent news items
addNews(latestNews);

// function called when clicking the button elements, with the selected category
function showNews(selectedCategory) {
  // if matching the first cateogry, display the latest news
  if (selectedCategory === 'all') {
    addNews(latestNews);
  } else {
    // else retrieve the news items matching the selected category
    const specificNews = data.filter(({ category }) => category === selectedCategory);
    // add the news through the appropriate function
    addNews(specificNews);
  }
}
