import {
  AiOutlineMail,
  AiOutlineCodepen,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";

export const contact = [
  {
    id: "1",
    text: "irenealcainealvarez@gmail.com",
    href: "mailto:irenealcainealvarez@gmail.com?Subject=Charlemos",
    icon: <AiOutlineMail />,
    color: "red"
  },
  {
    id: "2",
    text: "629882129",
    href: "https://api.whatsapp.com/send?phone=629882129&text=Hola",
    icon: <AiOutlineWhatsApp />,
    color: "green"
  },
  {
    id: "3",
    text: "github.com/irenealcaine",
    href: "https://github.com/irenealcaine",
    icon: <FiGithub />,
    color: "yellow"
  },
  {
    id: "4",
    text: "linkedin.com/in/irenealcaine/",
    href: "https://www.linkedin.com/in/irenealcaine/",
    icon: <SlSocialLinkedin />,
    color: "lightBlue"
  },
  {
    id: "5",
    text: "codepen.io/ialcaine",
    href: "https://codepen.io/ialcaine",
    icon: <AiOutlineCodepen />,
    color: "purple"
  },
];
