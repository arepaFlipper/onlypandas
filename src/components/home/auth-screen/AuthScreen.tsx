import ModeToggle from '@/components/ModeToggle';
import HeroSection from './HeroSection';
import UnderlinedText from '@/components/decorators/UnderlinedText';

const AuthScreen = () => {
  return (
    <div className="text-primary font-bold text-2xl">
      <HeroSection />

      <div className="mb-20 mt-12">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-3xl md:text-5xl tracking-tight mt-4 mb-8 font-semibold text-center">
            Today&apos;s {" "}
            <UnderlinedText className="no-underline font-bold text-[#00b0f0]">Highlight</UnderlinedText>
            <span className="text-2xl md:text-4xl ml-1">👇</span>
          </p>

          {/* <Highlight /> */}
        </div>
      </div>
    </div>
  )
}

export default AuthScreen;
