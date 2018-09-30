import { Page } from "./organisms/Spread";

// FIXME: investigate why we can't assign a type have extra props.
const demoManga: ReadonlyArray<any> = [
  {
    src:
      "https://leth-app.s3.amazonaws.com/uploads/async_image/image/4/resize_a1.jpg",
    w: 1358,
    h: 1890,
    title: "1 / 38<br/> <p>[第1話] エクリチュールの起源</p>"
  },
  {
    src:
      "https://leth-app.s3.amazonaws.com/uploads/async_image/image/5/resize_a2.jpg",
    w: 1358,
    h: 1890,
    title: "2 / 38<br/> <p>[第1話] エクリチュールの起源</p>"
  },
  {
    src:
      "https://leth-app.s3.amazonaws.com/uploads/async_image/image/6/resize_a3-0.jpg",
    w: 1358,
    h: 1890,
    title: "3 / 38<br/> <p>[第1話] エクリチュールの起源</p>"
  },

  {
    src:
      "https://leth-app.s3.amazonaws.com/uploads/async_image/image/7/resize_a3-1.jpg",
    w: 1492,
    h: 2110,
    title: "4 / 38<br/> <p>[第1話] エクリチュールの起源</p>"
  },
  {
    src:
      "https://leth-app.s3.amazonaws.com/uploads/async_image/image/8/resize_a4.jpg",
    w: 1358,
    h: 1890,
    title: "5 / 38<br/> <p>[第1話] エクリチュールの起源</p>"
  },
  {
    src:
      "https://leth-app.s3.amazonaws.com/uploads/async_image/image/9/resize_a6.jpg",
    w: 1358,
    h: 1890,
    title: "6 / 38<br/> <p>[第1話] エクリチュールの起源</p>"
  },
  {
    src:
      "https://leth-app.s3.amazonaws.com/uploads/async_image/image/10/resize_a7.jpg",
    w: 1358,
    h: 1890,
    title: "7 / 38<br/> <p>[第1話] エクリチュールの起源</p>"
  },
  {
    src:
      "https://leth-app.s3.amazonaws.com/uploads/async_image/image/11/resize_a8.jpg",
    w: 1358,
    h: 1890,
    title: "8 / 38<br/> <p>[第1話] エクリチュールの起源</p>"
  },
  {
    src:
      "https://leth-app.s3.amazonaws.com/uploads/async_image/image/12/resize_a9.jpg",
    w: 1358,
    h: 1890,
    title: "9 / 38<br/> <p>[第1話] エクリチュールの起源</p>"
  },
  {
    src:
      "https://leth-app.s3.amazonaws.com/uploads/async_image/image/13/resize_b1.jpg",
    w: 1358,
    h: 1890,
    title: "10 / 38<br/> <p>[第1話] エクリチュールの起源</p>"
  },
  {
    src:
      "https://leth-app.s3.amazonaws.com/uploads/async_image/image/14/resize_b2.jpg",
    w: 1358,
    h: 1890,
    title: "11 / 38<br/> <p>[第1話] エクリチュールの起源</p>"
  },
  {
    src:
      "https://leth-app.s3.amazonaws.com/uploads/async_image/image/86/resize_b3.jpg",
    w: 1358,
    h: 1890,
    title: "12 / 38<br/> <p>[第1話] エクリチュールの起源</p>"
  },
  {
    src:
      "https://leth-app.s3.amazonaws.com/uploads/async_image/image/16/resize_b4.jpg",
    w: 1358,
    h: 1890,
    title: "13 / 38<br/> <p>[第1話] エクリチュールの起源</p>"
  },
  {
    src:
      "https://leth-app.s3.amazonaws.com/uploads/async_image/image/17/resize_b5.jpg",
    w: 1358,
    h: 1890,
    title: "14 / 38<br/> <p>[第1話] エクリチュールの起源</p>"
  },
  {
    src:
      "https://leth-app.s3.amazonaws.com/uploads/async_image/image/18/resize_b6.jpg",
    w: 1358,
    h: 1890,
    title: "15 / 38<br/> <p>[第1話] エクリチュールの起源</p>"
  },
  {
    src:
      "https://leth-app.s3.amazonaws.com/uploads/async_image/image/19/resize_b7.jpg",
    w: 1358,
    h: 1890,
    title: "16 / 38<br/> <p>[第1話] エクリチュールの起源</p>"
  },
  {
    src:
      "https://leth-app.s3.amazonaws.com/uploads/async_image/image/20/resize_b8.jpg",
    w: 1358,
    h: 1890,
    title: "17 / 38<br/> <p>[第1話] エクリチュールの起源</p>"
  },
  {
    src:
      "https://leth-app.s3.amazonaws.com/uploads/async_image/image/21/resize_b9.jpg",
    w: 1358,
    h: 1890,
    title: "18 / 38<br/> <p>[第1話] エクリチュールの起源</p>"
  },
  {
    src:
      "https://leth-app.s3.amazonaws.com/uploads/async_image/image/22/resize_c1.jpg",
    w: 1358,
    h: 1890,
    title: "19 / 38<br/> <p>[第1話] エクリチュールの起源</p>"
  },
  {
    src:
      "https://leth-app.s3.amazonaws.com/uploads/async_image/image/23/resize_c2.jpg",
    w: 1358,
    h: 1890,
    title: "20 / 38<br/> <p>[第1話] エクリチュールの起源</p>"
  },

  {
    src:
      "https://leth-app.s3.amazonaws.com/uploads/async_image/image/24/resize_c3.jpg",
    w: 1358,
    h: 1890,
    title: "21 / 38<br/> <p>[第1話] エクリチュールの起源</p>"
  },
  {
    src:
      "https://leth-app.s3.amazonaws.com/uploads/async_image/image/25/resize_c4.jpg",
    w: 1358,
    h: 1890,
    title: "22 / 38<br/> <p>[第1話] エクリチュールの起源</p>"
  },
  {
    src:
      "https://leth-app.s3.amazonaws.com/uploads/async_image/image/26/resize_c5.jpg",
    w: 1358,
    h: 1890,
    title: "23 / 38<br/> <p>[第1話] エクリチュールの起源</p>"
  },
  {
    src:
      "https://leth-app.s3.amazonaws.com/uploads/async_image/image/27/resize_c6.jpg",
    w: 1358,
    h: 1890,
    title: "24 / 38<br/> <p>[第1話] エクリチュールの起源</p>"
  },
  {
    src:
      "https://leth-app.s3.amazonaws.com/uploads/async_image/image/28/resize_c7.jpg",
    w: 1358,
    h: 1890,
    title: "25 / 38<br/> <p>[第1話] エクリチュールの起源</p>"
  },
  {
    src:
      "https://leth-app.s3.amazonaws.com/uploads/async_image/image/29/resize_c8.jpg",
    w: 1358,
    h: 1890,
    title: "26 / 38<br/> <p>[第1話] エクリチュールの起源</p>"
  },

  {
    src:
      "https://leth-app.s3.amazonaws.com/uploads/async_image/image/30/resize_c9.jpg",
    w: 1358,
    h: 1890,
    title: "27 / 38<br/> <p>[第1話] エクリチュールの起源</p>"
  },
  {
    src:
      "https://leth-app.s3.amazonaws.com/uploads/async_image/image/31/resize_d1.jpg",
    w: 1358,
    h: 1890,
    title: "28 / 38<br/> <p>[第1話] エクリチュールの起源</p>"
  },
  {
    src:
      "https://leth-app.s3.amazonaws.com/uploads/async_image/image/32/resize_d2.jpg",
    w: 1358,
    h: 1890,
    title: "29 / 38<br/> <p>[第1話] エクリチュールの起源</p>"
  },
  {
    src:
      "https://leth-app.s3.amazonaws.com/uploads/async_image/image/33/resize_d3.jpg",
    w: 1358,
    h: 1890,
    title: "30 / 38<br/> <p>[第1話] エクリチュールの起源</p>"
  },
  {
    src:
      "https://leth-app.s3.amazonaws.com/uploads/async_image/image/34/resize_d4.jpg",
    w: 1358,
    h: 1890,
    title: "31 / 38<br/> <p>[第1話] エクリチュールの起源</p>"
  },
  {
    src:
      "https://leth-app.s3.amazonaws.com/uploads/async_image/image/35/resize_d5.jpg",
    w: 1358,
    h: 1890,
    title: "32 / 38<br/> <p>[第1話] エクリチュールの起源</p>"
  },
  {
    src:
      "https://leth-app.s3.amazonaws.com/uploads/async_image/image/36/resize_d6.jpg",
    w: 1358,
    h: 1890,
    title: "33 / 38<br/> <p>[第1話] エクリチュールの起源</p>"
  },

  {
    src:
      "https://leth-app.s3.amazonaws.com/uploads/async_image/image/37/resize_d7.jpg",
    w: 1358,
    h: 1890,
    title: "34 / 38<br/> <p>[第1話] エクリチュールの起源</p>"
  },
  {
    src:
      "https://leth-app.s3.amazonaws.com/uploads/async_image/image/38/resize_d8.jpg",
    w: 1358,
    h: 1890,
    title: "35 / 38<br/> <p>[第1話] エクリチュールの起源</p>"
  },
  {
    src:
      "https://leth-app.s3.amazonaws.com/uploads/async_image/image/39/resize_d9.jpg",
    w: 1358,
    h: 1890,
    title: "36 / 38<br/> <p>[第1話] エクリチュールの起源</p>"
  },
  {
    src:
      "https://leth-app.s3.amazonaws.com/uploads/async_image/image/40/resize_e1.jpg",
    w: 1358,
    h: 1890,
    title: "37 / 38<br/> <p>[第1話] エクリチュールの起源</p>"
  },
  {
    src:
      "https://leth-app.s3.amazonaws.com/uploads/async_image/image/41/resize_e2.jpg",
    w: 1358,
    h: 1890,
    title: "38 / 38<br/> <p>[第1話] エクリチュールの起源</p>"
  }
];
export default demoManga as ReadonlyArray<Page>;
