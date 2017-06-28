import * as React from "react";

type DescriptionProps = {
  children?: React.ReactNode,
}
const Description = ({ children }: DescriptionProps) =>
  <p style={{ margin: "0" }}>{children}</p>;

export type FlatDetailData = {
  label: string,
  description: JSX.Element,
}
export type FlatData = {
  name: string,
  details: FlatDetailData[],
  photos: {
    src: string,
    size: SizeType,
  }[]
}
const flatsData: FlatData[] = [
  {
    name: 'Nad potokiem',
    details: [
      {
        label: "Sypialnia połączona z salonem",
        description: <Description>podwójne łóżko, trzy pojedyncze łóżka, kanapa, stolik oraz dwa fotele.</Description>,
      },
      {
        label: "Kuchnia",
        description: <Description>kuchenka gazowa, zlewozmywak, lodówka, czajnik, sztućce i naczynia kuchenne</Description>,
      },
      {
        label: "Łazienka",
        description: <Description>prysznic, wc</Description>,
      },
      {
        label: 'Multimedia',
        description: <Description>Internet wifi</Description>,
      },
      {
        label: 'Ilość miejsc',
        description: <Description>od 2 do 5 osób</Description>,
      },
      {
        label: 'Cena',
        description:
        <Description>
          <b>30 zł/os/doba</b> przy pobytach trwających co najmniej 2 doby (poza sezonem 25 zł) <br />
          <b>35 zł/os/doba</b> przy pobycie trwającym jedną noc (poza sezonem 30zł)
          </Description>
      }
    ],
    photos: [
      { src: "photos/flat-front/flat-front-living-room-bed-room-2-x0.25.jpg", size: { width: 816, height: 460 } },
      { src: "photos/flat-front/flat-front-living-room-bed-room-1-x0.25.jpg", size: { width: 816, height: 460 } },
      { src: "photos/flat-front/flat-front-living-room-bed-room-3-x0.25.jpg", size: { width: 816, height: 460 } },
      { src: "photos/flat-front/flat-front-living-room-bed-room-4-x0.25.jpg", size: { width: 816, height: 460 } },
      { src: "photos/flat-front/flat-front-kitchen-1-x0.25.jpg", size: { width: 460, height: 816 } },
      { src: "photos/flat-front/flat-front-bathroom-1-x0.25.jpg", size: { width: 460, height: 816 } },
    ],
  },
  {
    name: 'Nad stawem',
    details: [
      {
        label: "Sypialnia",
        description: <Description>trzy pojedyncze łóżka</Description>,
      },
      {
        label: "Salon",
        description: <Description>rozkładana wersalka dwuosobowa, dwa fotele, stolik</Description>,
      },
      {
        label: "Zaplecze kuchenne",
        description: <Description>kuchenka gazowa, zlewozmywak, lodówka, czajnik, sztućce i naczynia kuchenne</Description>,
      },
      {
        label: "Łazienka",
        description: <Description>prysznic, wc</Description>,
      },
      {
        label: 'Multimedia',
        description: <Description>'Internet wifi'</Description>,
      },
      {
        label: 'Ilość miejsc',
        description: <Description>od 2 do 5 osób</Description>,
      },
      {
        label: 'Cena',
        description:
        <Description>
          <b>30 zł/os/doba</b> przy pobytach trwających co najmniej 2 doby (poza sezonem 25 zł) <br />
          <b>35 zł/os/doba</b> przy pobycie trwającym jedną noc (poza sezonem 30zł)
          </Description>,
      },
    ],
    photos: [
      { src: "photos/flat-back/flat-back-living-room-1-x0.25.jpg", size: { width: 816, height: 460 } },
      { src: "photos/flat-back/flat-back-living-room-2-x0.25.jpg", size: { width: 816, height: 460 } },
      { src: "photos/flat-back/flat-back-bedroom-1-x0.25.jpg", size: { width: 460, height: 816 } },
      { src: "photos/flat-back/flat-back-bedroom-2-x0.25.jpg", size: { width: 816, height: 460 } },
      { src: "photos/flat-back/flat-back-kitchen-1-x0.25.jpg", size: { width: 816, height: 460 } },
      { src: "photos/flat-back/flat-back-bathroom-1-x0.25.jpg", size: { width: 460, height: 816 } },
    ],
  },
  {
    name: 'Na górze lewe',
    details: [
      {
        label: "Sypialnia",
        description: <Description>podwójne łóżko, jedno pojedyncze łóżko</Description>,
      },
      {
        label: "Salon",
        description: <Description>rozkładana wersalka dwuosobowa, dwa fotele, stolik</Description>,
      },
      {
        label: "Zaplecze kuchenne",
        description: <Description>kuchenka gazowa, zlewozmywak, lodówka, czajnik, sztućce i naczynia kuchenne</Description>,
      },
      {
        label: "Łazienka",
        description: <Description>prysznic, wc</Description>,
      },
      {
        label: 'Multimedia',
        description: <Description>Internet wifi</Description>,
      },
      {
        label: 'Ilość miejsc',
        description: <Description>od 2 do 4 osób</Description>,
      },
      {
        label: 'Cena',
        description:
        <Description>
          <b>30 zł/os/doba</b> przy pobytach trwających co najmniej 2 doby (poza sezonem 25 zł) <br />
          <b>35 zł/os/doba</b> przy pobycie trwającym jedną noc (poza sezonem 30zł)
          </Description>,
      },
    ],
    photos: [
      { src: "photos/flat-top-left/flat-top-left-living-room-2-x0.25.jpg", size: { width: 816, height: 460 } },
      { src: "photos/flat-top-left/flat-top-left-living-room-1-x0.25.jpg", size: { width: 816, height: 460 } },
      { src: "photos/flat-top-left/flat-top-left-bedroom-1-x0.25.jpg", size: { width: 816, height: 460 } },
      { src: "photos/flat-top-left/flat-top-left-bedroom-2-x0.25.jpg", size: { width: 816, height: 460 } },
      { src: "photos/flat-top-left/flat-top-left-bedroom-3-x0.25.jpg", size: { width: 816, height: 460 } },
      { src: "photos/flat-top-left/flat-top-left-kitchen-1-x0.25.jpg", size: { width: 460, height: 816 } },
      { src: "photos/flat-top-left/flat-top-left-bathroom-1-x0.25.jpg", size: { width: 460, height: 816 } },
    ]
  },
  {
    name: 'Na górze prawe',
    details: [
      {
        label: "Sypialnia",
        description: <Description>podwójne łóżko, jedno pojedyncze łóżko</Description>,
      },
      {
        label: "Salon",
        description: <Description>rozkładana wersalka dwuosobowa, dwa fotele, stolik</Description>,
      },
      {
        label: "Zaplecze kuchenne",
        description: <Description>kuchenka gazowa z piekarnikiem, zlewozmywak, lodówka, czajnik, sztućce i naczynia kuchenne</Description>,
      },
      {
        label: "Łazienka",
        description: <Description>prysznic, wc</Description>,
      },
      {
        label: 'Multimedia',
        description: <Description>'Internet wifi'</Description>,
      },
      {
        label: 'Ilość miejsc',
        description: <Description>od 2 do 4 osób</Description>,
      },
      {
        label: 'Cena',
        description:
        <Description>
          <b>30 zł/os/doba</b> przy pobytach trwających co najmniej 2 doby (poza sezonem 25 zł) <br />
          <b>35 zł/os/doba</b> przy pobycie trwającym jedną noc (poza sezonem 30zł)
          </Description>,
      },
    ],
    photos: [
      { src: "photos/flat-top-right/flat-top-right-living-room-1-x0.25.jpg", size: { width: 816, height: 460 } },
      { src: "photos/flat-top-right/flat-top-right-living-room-2-x0.25.jpg", size: { width: 460, height: 816 } },
      { src: "photos/flat-top-right/flat-top-right-bedroom-1-x0.25.jpg", size: { width: 816, height: 460 } },
      { src: "photos/flat-top-right/flat-top-right-bedroom-2-x0.25.jpg", size: { width: 816, height: 460 } },
      { src: "photos/flat-top-right/flat-top-right-kitchen-1-x0.25.jpg", size: { width: 460, height: 816 } },
      { src: "photos/flat-top-right/flat-top-right-bathroom-1-x0.25.jpg", size: { width: 460, height: 816 } },
      { src: "photos/flat-top-right/flat-top-right-bathroom-2-x0.25.jpg", size: { width: 460, height: 816 } },
      { src: "photos/flat-top-right/flat-top-right-hallway-1-x0.25.jpg", size: { width: 460, height: 816 } },
    ],
  },
]

export default flatsData;