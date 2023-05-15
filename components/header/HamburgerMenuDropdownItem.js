import classes from "./HamburgerMenu.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
function HamburgerMenuDropdownItem(props) {
  const animateFrom = { opacity: 0, y: -15 };
  const animateTo = { opacity: 1, y: 0 };
  return (
    <motion.li initial={animateFrom} animate={animateTo}>
      <Link className={classes.linkTitle} href={props.link}>
        {props.linkName}
      </Link>
    </motion.li>
  );
}

export default HamburgerMenuDropdownItem;
