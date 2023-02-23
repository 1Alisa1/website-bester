import styles from './question.module.scss';
import { useState } from 'react';

interface QuestionProps {
  question: string;
  answer: string;
  isAlwaysOpen?: boolean;
}

const Question: React.FC<QuestionProps> = ({ question, answer, isAlwaysOpen }) => {
  const [showAnswer, setShowAnswer] = useState(isAlwaysOpen);

  const handleClick = () => {
    if (isAlwaysOpen) {
      return;
    } else {
      setShowAnswer(!showAnswer);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.question}>
        <div>
          <p>{question}</p>
          <button className={showAnswer ? `${styles.button} ${styles.open}`: styles.button} onClick={handleClick}></button>
        </div>
        <div className={styles.border}></div>
      </div>
      <div className={showAnswer ? `${styles.answer} ${styles.show}` : styles.answer }>
         <p>{answer}</p> 
      </div>
    </div>
  );
};

export default Question;
