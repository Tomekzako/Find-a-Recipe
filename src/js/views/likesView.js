import { elements } from './base';
import { isContext } from 'vm';

export const toggleLikeBtn = isLiked => {

    const iconString = isLiked ? 'icon-heart' : 'icon-heart-outlined';
    document.querySelector('.recipe__love use').setAttribute('href', `img/icons.svg#${iconString}`);

};