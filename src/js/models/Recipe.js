import axios from 'axios';

export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = '9c3f86dfc83f56098463f1cf38883b40';
        try {
            const res = await axios(`${proxy}http://food2fork.com/api/get?key=${key}&rId=${this.id}`);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
}