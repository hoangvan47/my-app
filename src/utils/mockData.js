import { DiGoogleDrive } from "react-icons/di";
import { DiUbuntu } from "react-icons/di";
import { DiPhotoshop } from "react-icons/di";
import { RxAvatar } from "react-icons/rx";
import { SiGravatar } from "react-icons/si";
import { TbBrandGravatar } from "react-icons/tb";

export const trello = [
  {
    id: 1,
    columnIds: [1, 2, 3],
    title: "Learn Drag and Drop",
    columns: [
      {
        id: 1,
        title: "Todo",
        cardIds: [1, 2, 3],
        boardId: 1,
        cards: [
          {
            id: 1,
            title: "Learn React",
            description: "React is a popular library",
            columnId: 1,
          },
          {
            id: 2,
            title: "Learn Next.js",
            description: "Next.js is a popular library",
            columnId: 1,
          },
          {
            id: 3,
            title: "Learn GraphQL",
            description: "GraphQL is a popular library",
            columnId: 1,
          },
        ],
      },
      {
        id: 2,
        title: "Doing",
        cardIds: [4, 5, 6],
        boardId: 1,
        cards: [
          {
            id: 4,
            title: "Learn NodeJS",
            description: "React is a popular library",
            columnId: 2,
          },
          {
            id: 5,
            title: "Learn ExpressJS",
            description: "Next.js is a popular library",
            columnId: 2,
          },
          {
            id: 6,
            title: "Learn MongDB",
            description: "GraphQL is a popular library",
            columnId: 2,
          },
        ],
      },
    ],
  },
];

export const hero = [
  {
    id: 1,
    imageURL: <DiGoogleDrive />,
    title: "20 Courses",
    description: "UI/UX Design",
  },
  {
    id: 2,
    imageURL: <DiUbuntu />,
    title: "20 Courses",
    description: "Development",
  },
  {
    id: 3,
    imageURL: <DiPhotoshop />,
    title: "30 Courses",
    description: "Marketing",
  },
];

export const courseData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1707845696801-4d4b89e510fa?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Basic web design",
    subTitle:
      "Get the best course, gain knowledge and shine for your future career.",
    price: "$120.75",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1707845696801-4d4b89e510fa?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "UI/UX design",
    subTitle:
      "Get the best course, gain knowledge and shine for your future career.",
    price: "$120.75",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1707845696801-4d4b89e510fa?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Web App design",
    subTitle:
      "Get the best course, gain knowledge and shine for your future career.",
    price: "$120.75",
  },
];

export const learner = [
  {
    id: 1,
    imageURL1:
      "https://images.unsplash.com/photo-1708834269879-e7bd99d7e77c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageURL2:
      "https://images.unsplash.com/photo-1708793699440-67fa853abd4d?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const quote = [
  {
    id: 1,
    icon: <RxAvatar />,
  },
  {
    id: 2,
    icon: <SiGravatar />,
  },
  {
    id: 3,
    icon: <TbBrandGravatar />,
  },
];

export const infouser = {
  id: 1,
  avatar:
    "https://images.unsplash.com/photo-1707310042819-5d00accd7d81?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  name: "Peter Moor",
  description: "Student of Web Design",
  text: "Not only does my resume look impressive—filled with the names and logos of world-class institutions—but these certificates also bring me closer to my career goals by validating the skills I've learned.",
};
