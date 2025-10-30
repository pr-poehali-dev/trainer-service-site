import Icon from '@/components/ui/icon';

const About = () => {
  const achievements = [
    { icon: 'Award', text: 'Мастер спорта по бодибилдингу' },
    { icon: 'GraduationCap', text: 'Сертифицированный фитнес-тренер' },
    { icon: 'BookOpen', text: 'Диетолог-нутрициолог' },
    { icon: 'TrendingUp', text: 'Эксперт по функциональному тренингу' },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-secondary to-primary rounded-lg blur-2xl opacity-20"></div>
            <img
              src="https://cdn.poehali.dev/projects/2ea79b15-bc4f-41c7-80c3-156cac0fddc9/files/fde5efdf-d757-41bc-a978-1e01486335fe.jpg"
              alt="Обо мне"
              className="relative rounded-lg shadow-xl w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Обо мне</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Привет! Я Максим Петров, профессиональный тренер с 8-летним опытом работы. Моя миссия — помочь вам достичь тела вашей мечты безопасно и эффективно.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              За годы работы я помог более 500 клиентам трансформировать свои тела и изменить образ жизни. Я верю в индивидуальный подход и научный метод тренировок.
            </p>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name={achievement.icon} size={20} className="text-primary" />
                  </div>
                  <span className="text-lg font-medium">{achievement.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
