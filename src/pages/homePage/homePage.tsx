import IntroSection from '../../components/introSection/introSection';
import QuestionsSection from '../../components/questionsSection/questionsSection';
import StrategySection from '../../components/strategySection/strategySection';

const HomePage: React.FC = () => {
  return (
    <>
      <IntroSection />
      <StrategySection />
      <QuestionsSection />
    </>
  );
};

export { HomePage };
