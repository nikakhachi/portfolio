import styles from "./styles.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DescriptionIcon from "@mui/icons-material/Description";
import Tooltip from "@mui/material/Tooltip";

const icons = [
  {
    title: "LinkedIn",
    component: <LinkedInIcon fontSize="large" />,
    url: "https://www.linkedin.com/in/nika-khachiashvili/",
  },
  {
    title: "Github",
    component: <GitHubIcon fontSize="large" />,
    url: "https://github.com/xnick7x",
  },
  {
    title: "Email",
    component: <MailOutlineIcon fontSize="large" />,
    url: "mailto:n.khachiashvili1@gmail.com",
  },
  {
    title: "CV",
    component: <DescriptionIcon fontSize="large" />,
    url: "./CV_Nika_Khachiashvili.pdf",
  },
];

const SocialList = () => {
  return (
    <ul className={styles.socialList}>
      {icons.map((item, index) => (
        <Tooltip key={index} title={item.title}>
          <li className={styles.socialListItem}>
            <a href={item.url} target="_blank" rel="noreferrer">
              {item.component}
            </a>
          </li>
        </Tooltip>
      ))}
    </ul>
  );
};
export default SocialList;
