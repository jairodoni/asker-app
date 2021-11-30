import { useEffect, useState } from 'react';
import { Field } from 'formik';
import { motion } from "framer-motion";
import styles from './styles.module.css';


interface OptionCardProps {
  id: string;
  submition: boolean;
  correctAnswer: string;
  selectedAlternative: string;
  setSelectedAlternative: (value: string) => void;
  content: string;
}

const item = {
  hidden: { x: 16, opacity: 0 },
  open: {
    x: 0,
    opacity: 1
  }
};

export function OptionCard({
  content,
  id,
  correctAnswer,
  selectedAlternative,
  submition,
  setSelectedAlternative,
}: OptionCardProps) {
  const [status, setStatus] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (submition) {
      if (content === correctAnswer) {
        setStatus(styles.correct);
      }
      if (
        selectedAlternative !== correctAnswer && selectedAlternative === content) {
        setStatus(styles.wrong);
      }
    } else {
      setStatus(undefined);
    }
  }, [selectedAlternative, submition]);

  return (
    <motion.a
      variants={item}
      initial="hidden"
      animate="open"
      className={`${styles.container} ${status !== undefined ? status : ''} item`}
      href="#"
    >
      <label className={styles.alternative}>
        <Field
          id={id}
          name="alternative"
          type="radio"
          value={content}
          onClick={() => setSelectedAlternative(content)}
          style={{ display: 'none' }}
        />
        {content}
      </label>
    </motion.a>
  );
}
