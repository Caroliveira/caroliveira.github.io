import Experiments from "../components/Experiments";

export const ROUTES = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export const PROJECTS = [
  {
    type: "Projects",
    description:
      "Some personal projects I worked on my own to improve my skills, showcase my work or just to take an idea of the paper",
    content:
      "Sorry, I don't have projects to show yet... Feel free to take a look on my experiments or at my work =Dorry, I don't have projects to show yet... Feel free to take a look on my experiments or at my work =D",
  },
  {
    type: "Experiments",
    description:
      "Here are some stuff I think is worth saving or just got curious and tried some small thing on CodePen",
    content: <Experiments />,
  },
  {
    type: "Work",
    description:
      "Quick overview over my work and achievements, something for you to know a bit more of my tragetory",
    content: "Test",
  },
];
