export type GalleryPhoto = {
  src: string
  width: number
  height: number
} 
export type GalleryData = {
  id: string,
  name: string
  photos: GalleryPhoto[]
}


const aroundHouse = {
  id: "wokoldomu",
  name: "Wokół domu",
  photos: [
    {
      src: '/photos/after-renovation/IMG_20170528_103157374-x0.15.jpg',
      width: 624,
      height: 468
    },
    { 
      src: '/photos/after-renovation/IMG_20170528_103224692-x0.15.jpg',
      width: 624,
      height: 468 
    },
    {
      src: '/photos/after-renovation/IMG_20170528_103421649-x0.15.jpg',
      width: 624,
      height: 468
    },
    { 
      src: '/photos/after-renovation/IMG_20170528_110910900-x0.15.jpg',
      width: 624,
      height: 468
    },
    { 
      src: '/photos/after-renovation/IMG_20170528_111149292-x0.15.jpg',
      width: 624,
      height: 468 
    },
    { 
      src: '/photos/after-renovation/IMG_20170528_112001922-x0.15.jpg',
      width: 624,
      height: 468 
    },
    { 
      src: '/photos/after-renovation/IMG_20170528_112410108_HDR-x0.15.jpg',
      width: 624,
      height: 468
    },
    { 
      src: '/photos/after-renovation/IMG_20170528_112535582-x0.15.jpg',
      width: 624,
      height: 468
    },
    { 
      src: '/photos/after-renovation/IMG_20170528_112702189_HDR-x0.15.jpg',
      width: 624,
      height: 468 
    },
    { 
      src: '/photos/after-renovation/IMG_20170818_081657059-x0.15.jpg',
      width: 624,
      height: 468
    },
    { 
      src: '/photos/after-renovation/IMG_20170818_081724226-x0.15.jpg',
      width: 624,
      height: 468 
    },
    {  
      src: '/photos/after-renovation/IMG_20170818_081746427-x0.15.jpg',
      width: 624,
      height: 468 
    },
    { 
      src: '/photos/after-renovation/IMG_20170818_162536009_HDR-x0.15.jpg',
      width: 624,
      height: 468 
    },
    { 
      src: '/photos/after-renovation/IMG_20170818_162722683-x0.15.jpg',
      width: 624,
      height: 468 
    },
    { 
      src: '/photos/after-renovation/IMG_20170818_162927284-x0.15.jpg',
      width: 468,
      height: 624 
    },
    { 
      src: '/photos/after-renovation/IMG_20170821_140937381-x0.15.jpg',
      width: 624,
      height: 468 
    },
    {
      src: "/photos/summer/yard-4-x0.25.jpg",
      width: 536,
      height: 402,
    },
    {
      src: "/photos/summer/yard-8-x0.25.jpg",
      width: 768,
      height: 576,
    },
    {
      src: "/photos/summer/yard-9-x0.25.jpg",
      width: 768,
      height: 576,
    },
    {
      src: "/photos/summer/backyard-1-x0.25.jpg",
      width: 536,
      height: 402,
    },
    {
      src: "/photos/summer/backyard-2-x0.25.jpg",
      width: 536,
      height: 402,
    },
    {
      src: "/photos/summer/backyard-3-x0.25.jpg",
      width: 536,
      height: 402,
    },
    {
      src: "/photos/summer/backyard-4-x0.25.jpg",
      width: 460,
      height: 816,
    },
    {
      src: "/photos/summer/backyard-5-x0.25.jpg",
      width: 816,
      height: 460,
    },
    {
      src: "/photos/summer/backyard-6-x0.25.jpg",
      width: 816,
      height: 460,
    },
  ],
}

const winter =   {
  id: "zima",
  name: "Zima",
  photos: [
    {
      src: "/photos/winter/winter-building-from-front-1-x0.15.jpg",
      width: 624,
      height: 351,
    },
    {
      src: "/photos/winter/winter-building-from-front-2-x0.15.jpg",
      width: 624,
      height: 468,
    },
    {
      src: "/photos/winter/winter-building-from-lake-1-x0.15.jpg",
      width: 624,
      height: 468,
    },
    {
      src: "/photos/winter/winter-building-from-lake-2-x0.15.jpg",
      width: 624,
      height: 351,
    },
    {
      src: "/photos/winter/winter-building-from-road-1-x0.15.jpg",
      width: 624,
      height: 468,
    },
    {
      src: "/photos/winter/winter-building-from-road-2-x0.15.jpg",
      width: 624,
      height: 351,
    },
    {
      src: "/photos/winter/winter-building-from-road-3-x0.15.jpg",
      width: 624,
      height: 351,
    },
    {
      src: "/photos/winter/winter-building-from-road-4-x0.15.jpg",
      width: 624,
      height: 351,
    },
    {
      src: "/photos/winter/winter-building-from-side-1-x0.15.jpg",
      width: 624,
      height: 468,
    },
    {
      src: "/photos/winter/winter-building-from-side-2-x0.15.jpg",
      width: 624,
      height: 351,
    },
    {
      src: "/photos/winter/winter-forest-1-x0.15.jpg",
      width: 624,
      height: 351,
    },
  ],
}

export const galleryData: GalleryData[] = [
  aroundHouse,
  winter,
  {
    id: "staw",
    name: "Staw",
    photos: [
      {
        src: "/photos/summer/lake-1-x0.25.jpg",
        width: 536,
        height: 402,
      },
      {
        src: "/photos/summer/lake-2-x0.25.jpg",
        width: 536,
        height: 402,
      },
      {
        src: "/photos/summer/lake-3-x0.25.jpg",
        width: 536,
        height: 402,
      },
      {
        src: "/photos/summer/lake-4-x0.25.jpg",
        width: 536,
        height: 402,
      },
      {
        src: "/photos/summer/lake-5-x0.25.jpg",
        width: 536,
        height: 402,
      },
      {
        src: "/photos/summer/lake-6-x0.25.jpg",
        width: 148,
        height: 83,
      },
      {
        src: "/photos/summer/lake-7-x0.25.jpg",
        width: 536,
        height: 402,
      },
      {
        src: "/photos/summer/lake-8-x0.25.jpg",
        width: 816,
        height: 460,
      },
    ],
  },
  {
    id: "pasieka",
    name: "Pasieka",
    photos: [
      {
        src: "/photos/summer/beeyard-1-x0.25.jpg",
        width: 536,
        height: 402,
      },
      {
        src: "/photos/summer/beeyard-2-x0.25.jpg",
        width: 536,
        height: 402,
      },
      {
        src: "/photos/summer/beeyard-3-x0.25.jpg",
        width: 536,
        height: 402,
      },
      {
        src: "/photos/summer/beeyard-4-x0.25.jpg",
        width: 536,
        height: 402,
      },
      {
        src: "/photos/summer/beeyard-5-x0.25.jpg",
        width: 536,
        height: 402,
      },
    ],
  },
  {
    id: "dzikaprzyroda",
    name: "Dzika przyroda",
    photos: [
      {
        src: "/photos/summer/beaver-1-x0.25.jpg",
        width: 402,
        height: 536,
      },
      {
        src: "/photos/summer/beaver-2-x0.25.jpg",
        width: 536,
        height: 402,
      },
      {
        src: "/photos/summer/beaver-3-x0.25.jpg",
        width: 536,
        height: 402,
      },
      {
        src: "/photos/summer/beaver-4-x0.25.jpg",
        width: 536,
        height: 402,
      },
      {
        src: "/photos/summer/henhouse-1-x0.25.jpg",
        width: 536,
        height: 402,
      },
      {
        src: "/photos/summer/henhouse-2-x0.25.jpg",
        width: 536,
        height: 402,
      },
      {
        src: "/photos/summer/henhouse-3-x0.25.jpg",
        width: 536,
        height: 402,
      },
      {
        src: "/photos/summer/stork-1-x0.25.jpg",
        width: 536,
        height: 402,
      },
      {
        src: "/photos/summer/stork-2-x0.25.jpg",
        width: 536,
        height: 402,
      },
      {
        src: "/photos/summer/stork-3-x0.25.jpg",
        width: 536,
        height: 402,
      },
      {
        src: "/photos/summer/winery-1-x0.25.jpg",
        width: 536,
        height: 402,
      },
      {
        src: "/photos/summer/winery-2-x0.25.jpg",
        width: 536,
        height: 402,
      },
      {
        src: "/photos/summer/winery-3-x0.25.jpg",
        width: 536,
        height: 402,
      },
    ],
  },
  {
    id: "mieszkania",
    name: "Mieszkania",
    photos: [
      {
        src: "/photos/flat-front/flat-front-living-room-bed-room-2-x0.25.jpg",
        width: 816,
        height: 460,
      },
      {
        src: "/photos/flat-front/flat-front-kitchen-1-x0.25.jpg",
        width: 460,
        height: 816,
      },
      {
        src: "/photos/flat-front/flat-front-living-room-bed-room-1-x0.25.jpg",
        width: 816,
        height: 460,
      },
      {
        src: "/photos/flat-front/flat-front-living-room-bed-room-3-x0.25.jpg",
        width: 816,
        height: 460,
      },
      {
        src: "/photos/flat-front/flat-front-living-room-bed-room-4-x0.25.jpg",
        width: 816,
        height: 460,
      },
      {
        src: "/photos/flat-front/flat-front-bathroom-1-x0.25.jpg",
        width: 460,
        height: 816,
      },
      {
        src: "/photos/flat-back/flat-back-living-room-2-x0.25.jpg",
        width: 816,
        height: 460,
      },
      {
        src: "/photos/flat-back/flat-back-living-room-1-x0.25.jpg",
        width: 816,
        height: 460,
      },
      {
        src: "/photos/flat-back/flat-back-bedroom-1-x0.25.jpg",
        width: 460,
        height: 816,
      },
      {
        src: "/photos/flat-back/flat-back-bathroom-1-x0.25.jpg",
        width: 460,
        height: 816,
      },
      {
        src: "/photos/flat-back/flat-back-kitchen-1-x0.25.jpg",
        width: 816,
        height: 460,
      },
      {
        src: "/photos/flat-back/flat-back-bedroom-2-x0.25.jpg",
        width: 816,
        height: 460,
      },
      {
        src: "/photos/flat-top-left/flat-top-left-living-room-2-x0.25.jpg",
        width: 816,
        height: 460,
      },
      {
        src: "/photos/flat-top-left/flat-top-left-living-room-1-x0.25.jpg",
        width: 816,
        height: 460,
      },
      {
        src: "/photos/flat-top-left/flat-top-left-bedroom-1-x0.25.jpg",
        width: 816,
        height: 460,
      },
      {
        src: "/photos/flat-top-left/flat-top-left-bedroom-2-x0.25.jpg",
        width: 816,
        height: 460,
      },
      {
        src: "/photos/flat-top-left/flat-top-left-kitchen-1-x0.25.jpg",
        width: 460,
        height: 816,
      },
      {
        src: "/photos/flat-top-left/flat-top-left-bedroom-3-x0.25.jpg",
        width: 816,
        height: 460,
      },
      {
        src: "/photos/flat-top-left/flat-top-left-bathroom-1-x0.25.jpg",
        width: 460,
        height: 816,
      },
      {
        src: "/photos/flat-top-right/flat-top-right-living-room-1-x0.25.jpg",
        width: 816,
        height: 460,
      },
      {
        src: "/photos/flat-top-right/flat-top-right-living-room-2-x0.25.jpg",
        width: 460,
        height: 816,
      },
      {
        src: "/photos/flat-top-right/flat-top-right-bedroom-1-x0.25.jpg",
        width: 816,
        height: 460,
      },
      {
        src: "/photos/flat-top-right/flat-top-right-bathroom-2-x0.25.jpg",
        width: 460,
        height: 816,
      },
      {
        src: "/photos/flat-top-right/flat-top-right-kitchen-1-x0.25.jpg",
        width: 460,
        height: 816,
      },
      {
        src: "/photos/flat-top-right/flat-top-right-bedroom-2-x0.25.jpg",
        width: 816,
        height: 460,
      },
      {
        src: "/photos/flat-top-right/flat-top-right-bathroom-1-x0.25.jpg",
        width: 460,
        height: 816,
      },
      {
        src: "/photos/flat-top-right/flat-top-right-hallway-1-x0.25.jpg",
        width: 460,
        height: 816,
      },
    ],
  },
];