import { Typography } from '@material-ui/core';
import { motion } from 'framer-motion';

const animation = {
  hidden: { opacity: 0, scale: 1 },
  visible: {
    opacity: 1,
    x: 0,

    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.05,
      ease: "easeIn"
    }
  },
  closed: { opacity: 0, x: "100%" },
};

export function Header() {
  return (

    <motion.div
      variants={animation}
      initial="hidden"
      animate={'visible'}
      style={{
        width: "100%",
        height: "200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Typography
        variant="h2"
        fontWeight={700}
        fontSize="4.2rem"
        className="logo"
      >
        Quiz App
      </Typography>
    </motion.div>
  );
}
