import axios from 'axios';


async function getResults(query) {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const key = '9c3f86dfc83f56098463f1cf38883b40';
    const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${query}`);
    const recipes = res.data.recipes;
    console.log(recipes);
}
getResults('pizza');