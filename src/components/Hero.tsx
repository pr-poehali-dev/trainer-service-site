import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-primary overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full animate-scale-in">
              <Icon name="Trophy" size={64} className="text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Преврати своё тело в <span className="text-yellow-300">шедевр</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Персональные тренировки с опытным тренером. Программы питания и тренировок для достижения твоих целей
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 font-semibold"
            >
              <Icon name="Zap" size={20} className="mr-2" />
              Начать тренировки
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById('services');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 font-semibold"
            >
              Узнать больше
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 animate-slide-in-right">
              <Icon name="Users" size={40} className="mx-auto mb-3 text-yellow-300" />
              <div className="text-3xl font-bold mb-1">500+</div>
              <div className="text-sm text-white/80">Довольных клиентов</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 animate-slide-in-right delay-100">
              <Icon name="Award" size={40} className="mx-auto mb-3 text-yellow-300" />
              <div className="text-3xl font-bold mb-1">10+</div>
              <div className="text-sm text-white/80">Лет опыта</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 animate-slide-in-right delay-200">
              <Icon name="TrendingUp" size={40} className="mx-auto mb-3 text-yellow-300" />
              <div className="text-3xl font-bold mb-1">95%</div>
              <div className="text-sm text-white/80">Достигли целей</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={40} className="text-white/60" />
      </div>
    </section>
  );
};

export default Hero;
