import Hero from '../components/Hero';
import WorkoutProgram from '../components/WorkoutProgram';
import BestPractices from '../components/BestPractices';

const Home = () => {
  return (
    <>
      <main className="main-content">
        <Hero />
        <WorkoutProgram />
        <BestPractices />
      </main>
      
      <footer className="footer">
        <p>Built for Sachi. Consistency is key. 🍑</p>
      </footer>
    </>
  );
};

export default Home;
