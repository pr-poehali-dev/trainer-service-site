import Icon from '@/components/ui/icon';

const Programs = () => {
  const programs = [
    {
      title: 'Снижение веса',
      duration: '12 недель',
      features: [
        'Кардио и силовые тренировки',
        'Индивидуальный план питания',
        'Еженедельный контроль прогресса',
        'Поддержка 24/7',
      ],
      icon: 'TrendingDown',
      color: 'bg-primary',
    },
    {
      title: 'Набор мышечной массы',
      duration: '16 недель',
      features: [
        'Программа силовых тренировок',
        'План питания для роста',
        'Работа с большими весами',
        'Спортивные добавки',
      ],
      icon: 'Zap',
      color: 'bg-secondary',
    },
    {
      title: 'Подготовка к соревнованиям',
      duration: '20 недель',
      features: [
        'Интенсивный тренинг',
        'Специализированное питание',
        'Позинг и презентация',
        'Психологическая подготовка',
      ],
      icon: 'Trophy',
      color: 'bg-accent',
    },
  ];

  return (
    <section id="programs" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Программы тренировок</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Выбери программу под свою цель
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border border-border hover:border-primary transition-all hover:shadow-xl group overflow-hidden"
            >
              <div className={`${program.color} p-8 text-white`}>
                <Icon name={program.icon} size={48} className="mb-4" />
                <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                <p className="text-white/90 flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  {program.duration}
                </p>
              </div>
              <div className="p-8">
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="block w-full bg-primary text-primary-foreground text-center px-6 py-3 rounded-md hover:bg-primary/90 transition-all font-semibold"
                >
                  Выбрать программу
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
