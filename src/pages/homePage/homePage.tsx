import IntroSection from '../../components/introSection/introSection';
import QuestionsSection from '../../components/questionsSection/questionsSection';
import ServicesSection from '../../components/servicesSection/servicesSection';
import StrategySection from '../../components/strategySection/strategySection';

const HomePage: React.FC = () => {
  return (
    <>
      <IntroSection />
      <StrategySection />
      <ServicesSection />
      <QuestionsSection />
    </>
  );
};

export { HomePage };
