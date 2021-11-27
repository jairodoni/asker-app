import { Link, Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';
import { Field } from 'formik';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import styles from './styles.module.css';

interface OptionCardProps {
  id: string;
  submition: boolean;
  correctAnswer: string;
  selectedAlternative: string;
  setSelectedAlternative: (value: string) => void;
  content: string;
}
export function OptionCard({
  content,
  id,
  correctAnswer,
  selectedAlternative,
  submition,
  setSelectedAlternative,
}: OptionCardProps) {
  const [status, setStatus] = useState<string | undefined>(undefined);
  const { askId } = useParams();

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
  }, [selectedAlternative, submition, askId]);

  return (
    <a
      href="#"
      className={`${styles.container} ${status !== undefined ? status : ''}`}
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
    </a>
  );
}
