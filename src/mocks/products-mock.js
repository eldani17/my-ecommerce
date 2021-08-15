const DELAY = 2000;
const productsMocks = [
  {
    id: 1,
    title: "title 1",
    price: 1000,
    pictureUrl: "https://via.placeholder.com/650",
  },
  {
    id: 2,
    title: "title 2",
    price: 2000,
    pictureUrl: "https://via.placeholder.com/650",
  },
  {
    id: 3,
    title: "title 3",
    price: 3000,
    pictureUrl: "https://via.placeholder.com/650",
  },
  {
    id: 4,
    title: "title 4",
    price: 4000,
    pictureUrl: "https://via.placeholder.com/650",
  },
  {
    id: 5,
    title: "title 5",
    price: 5000,
    pictureUrl: "https://via.placeholder.com/650",
  },
  {
    id: 6,
    title: "title 6",
    price: 6000,
    pictureUrl: "https://via.placeholder.com/650",
  },
  {
    id: 7,
    title: "title 7",
    price: 7000,
    pictureUrl: "https://via.placeholder.com/650",
  },
  {
    id: 8,
    title: "title 8",
    price: 8000,
    pictureUrl: "https://via.placeholder.com/650",
  },
  {
    id: 9,
    title: "title 9",
    price: 9000,
    pictureUrl: "https://via.placeholder.com/650",
  },
];

export const getProductsMocks = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productsMocks);
    }, DELAY);
  });
};
