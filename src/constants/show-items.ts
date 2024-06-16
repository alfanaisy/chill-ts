import { LabelType } from './labelType';
import Thumbnail1 from '../assets/watch-list/thumbnail-p-1.png';
import Thumbnail2 from '../assets/watch-list/thumbnail-p-2.png';
import Thumbnail3 from '../assets/watch-list/thumbnail-p-3.png';
import Thumbnail4 from '../assets/watch-list/thumbnail-p-4.png';
import Trending1 from '../assets/watch-list/thumbnail-p-tr-1.png';
import Trending2 from '../assets/watch-list/thumbnail-p-tr-2.png';
import Trending3 from '../assets/watch-list/thumbnail-p-tr-3.png';
import Trending4 from '../assets/watch-list/thumbnail-p-tr-4.png';
import Trending5 from '../assets/watch-list/thumbnail-p-tr-5.png';
import NewRelease1 from '../assets/watch-list/thumbnail-p-new-1.png';
import NewRelease2 from '../assets/watch-list/thumbnail-p-new-2.png';
import NewRelease3 from '../assets/watch-list/thumbnail-p-new-3.png';

export interface ItemListType {
  image: string;
  title: string;
  labels?: LabelType;
  isTop?: boolean;
}

export const topRated: ItemListType[] = [
  {
    image: Thumbnail1,
    title: 'Suzume',
    labels: 'Episode Baru',
    isTop: false,
  },
  {
    image: Thumbnail2,
    title: 'Jurassic World: Dominion',
    isTop: false,
  },
  {
    image: Thumbnail3,
    title: 'Sonic the Hedgehog 2',
    isTop: false,
  },
  {
    image: Thumbnail4,
    title: 'Big Hero 6',
    isTop: false,
  },
  {
    image: Thumbnail1,
    title: 'Suzume',
    isTop: false,
  },
  {
    image: Thumbnail2,
    title: 'Jurassic World: Dominion',
    isTop: false,
  },
];

export const trendingItems: ItemListType[] = [
  {
    image: Trending1,
    title: 'The Tomorrow War',
    isTop: true,
  },
  {
    image: Trending2,
    title: 'Ant-Man: Quantumania',
    isTop: true,
  },
  {
    image: Trending3,
    title: 'Guardians of the Galaxy Vol. 3',
    isTop: true,
  },
  {
    image: Trending4,
    title: 'A Man called Otto',
    isTop: true,
  },
  {
    image: Trending5,
    title: 'The Little Mermaid',
    isTop: true,
  },
  {
    image: Trending1,
    title: 'The Tomorrow War',
    isTop: true,
  },
  {
    image: Trending2,
    title: 'Ant-Man: Quantumania',
    isTop: true,
  },
];

export const newReleases: ItemListType[] = [
  {
    image: Trending5,
    title: 'The Little Mermaid',
    isTop: true,
  },
  {
    image: NewRelease1,
    title: 'Duty After School',
    labels: 'Episode Baru',
    isTop: false,
  },
  {
    image: Thumbnail4,
    title: 'Big Hero 6',
    isTop: false,
  },
  {
    image: NewRelease2,
    title: 'All of us are Dead',
    labels: 'Episode Baru',
    isTop: false,
  },
  {
    image: NewRelease3,
    title: 'Missing',
    isTop: false,
  },
  {
    image: Trending1,
    title: 'The Tomorrow War',
    isTop: false,
  },
  {
    image: Trending2,
    title: 'Ant-Man: Quantumania',
    isTop: false,
  },
];

export const myList: ItemListType[] = [
  {
    image: Thumbnail1,
    title: 'Suzume',
    labels: 'Episode Baru',
    isTop: false,
  },
  {
    image: Trending2,
    title: 'Ant-Man: Quantumania',
    isTop: true,
  },
  {
    image: NewRelease3,
    title: 'Missing',
    isTop: false,
  },
  {
    image: Trending3,
    title: 'Guardians of the Galaxy Vol. 3',
    isTop: true,
  },
  {
    image: Thumbnail4,
    title: 'Big Hero 6',
    isTop: false,
  },
  {
    image: Trending1,
    title: 'The Tomorrow War',
    labels: 'Premium',
    isTop: false,
  },
  {
    image: NewRelease2,
    title: 'All of us are Dead',
    labels: 'Episode Baru',
    isTop: false,
  },
  {
    image: Thumbnail3,
    title: 'Sonic the Hedgehog 2',
    isTop: false,
  },
  {
    image: NewRelease1,
    title: 'Duty After School',
    isTop: false,
  },
  {
    image: Trending5,
    title: 'The Little Mermaid',
    isTop: true,
  },
  {
    image: Thumbnail2,
    title: 'Jurassic World: Dominion',
    isTop: true,
  },
  {
    image: Trending4,
    title: 'A Man called Otto',
    isTop: true,
  },
];
