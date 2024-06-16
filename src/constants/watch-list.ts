import Thumbnail1 from '../assets/watch-list/thumbnail-l-1.png';
import Thumbnail2 from '../assets/watch-list/thumbnail-l-2.png';
import Thumbnail3 from '../assets/watch-list/thumbnail-l-3.png';
import Thumbnail4 from '../assets/watch-list/thumbnail-l-4.png';
import Thumbnail5 from '../assets/watch-list/thumbnail-l-5.png';
import { LabelType } from './labelType';

export const watchList: {
  image: string;
  title: string;
  rating: number;
  labels?: LabelType;
}[] = [
  {
    image: Thumbnail1,
    title: "Don't Look Up",
    rating: 4.5,
    labels: 'Episode Baru',
  },
  {
    image: Thumbnail2,
    title: 'Shazam! Fury of the Gods',
    rating: 4,
  },
  {
    image: Thumbnail3,
    title: 'Blue Lock',
    rating: 4.3,
  },
  {
    image: Thumbnail4,
    title: 'A Man Called Otto',
    rating: 4.4,
  },
  {
    image: Thumbnail5,
    title: 'All of us are Dead',
    rating: 4.3,
  },
];
