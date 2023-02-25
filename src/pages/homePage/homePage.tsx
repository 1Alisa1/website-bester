import BenefitsSection from '../../components/benefitsSection/benefitsSection';
import CommentsSection from '../../components/commentsSection/commentsSection';
import IntroSection from '../../components/introSection/introSection';
import QuestionsSection from '../../components/questionsSection/questionsSection';
import ServicesSection from '../../components/servicesSection/servicesSection';
import StrategySection from '../../components/strategySection/strategySection';

const HomePage: React.FC = () => {
  return (
    <>
      <IntroSection />
      <BenefitsSection />
      <StrategySection />
      <ServicesSection />
      <QuestionsSection />
      <CommentsSection />
    </>
  );
};

export { HomePage };
