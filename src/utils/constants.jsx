import Experiments from "../components/Experiments";
import Projects from "../components/Projects";
import Achievements from "../components/Achievements";

export const ROUTES = [
  { name: "Home", path: "/" },
  { name: "Developments", path: "/developments" },
  { name: "Contact", path: "/contact" },
];

export const DEVELOPMENTS = [
  {
    type: "Projects",
    description:
      "Some personal projects I worked on my own to improve my skills, showcase my work or just to take an idea of the paper",
    content: <Projects />,
  },
  {
    type: "Experiments",
    description:
      "Here are some stuff I think is worth saving or just got curious and tried some small thing on CodePen",
    content: <Experiments />,
  },
  {
    type: "Achievements",
    description:
      "Check out my highlights to see how I've grown and stayed dedicated to doing great work.",
    content: <Achievements />,
  },
];
