import { ReactNode } from 'react';
import { Paper } from '@material-ui/core';
import { Box } from '@material-ui/system';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
}
const container = {
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

export function Card({ children }: CardProps) {
  return (
    <Box display="flex" justifyContent="center" p="10px">
      <motion.div
        variants={container}
        initial="hidden"
        animate={'visible'}
        style={{
          maxWidth: '380px',
          width: '100%',
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: '100%',
            borderRadius: '24px',
            marginBottom: 2,
            boxShadow: '0 6px 16px rgba(0,0,0,0.7)',
          }}
        >
          {children}
        </Paper>
      </motion.div>
    </Box>
  );
}
