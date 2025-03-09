import ModeToggle from '@/components/ModeToggle';
import HeroSection from './HeroSection';

const AuthScreen = () => {
  return (
    <div className="text-primary font-bold text-2xl">
      <ModeToggle />
      <HeroSection />
    </div>
  )
}

export default AuthScreen;
