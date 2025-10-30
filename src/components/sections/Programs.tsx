import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Programs = () => {
  const programs = [
    {
      title: 'Сжигание жира',
      duration: '8-12 недель',
      level: 'Все уровни',
      icon: 'Flame',
      color: 'primary',
      description: 'Эффективная программа для избавления от лишнего веса',
      features: [
        'HIIT тренировки 4-5 раз в неделю',
        'Кардио сессии',
        'План питания с дефицитом калорий',
        'Контроль прогресса еженедельно'
      ]
    },
    {
      title: 'Набор массы',
      duration: '12-16 недель',
      level: 'Средний/Продвинутый',
      icon: 'TrendingUp',
      color: 'accent',
      description: 'Наращивай мышечную массу правильно и эффективно',
      features: [
        'Силовые тренировки 4-6 раз в неделю',
        'Прогрессивная перегрузка',
        'Высококалорийное питание',
        'Оптимизация восстановления'
      ]
    },
    {
      title: 'Рельеф и сушка',
      duration: '6-10 недель',
      level: 'Продвинутый',
      icon: 'Layers',
      color: 'secondary',
      description: 'Прорисуй мышцы и добейся идеального рельефа',
      features: [
        'Высокоинтенсивный тренинг',
        'Точная настройка питания',
        'Кардио на голодный желудок',
        'Еженедельные корректировки'
      ]
    },
    {
      title: 'Функциональный фитнес',
      duration: '8 недель',
      level: 'Все уровни',
      icon: 'Activity',
      color: 'primary',
      description: 'Развивай силу, выносливость и координацию',
      features: [
        'Разнообразные функциональные упражнения',
        'Работа с собственным весом',
        'Кроссфит элементы',
        'Улучшение общей физической формы'
      ]
    },
    {
      title: 'Реабилитация',
      duration: 'Индивидуально',
      level: 'Начальный',
      icon: 'Heart',
      color: 'accent',
      description: 'Восстанови форму после травм или перерыва',
      features: [
        'Мягкий вход в тренировки',
        'Укрепление проблемных зон',
        'ЛФК упражнения',
        'Постепенное увеличение нагрузки'
      ]
    },
    {
      title: 'Подготовка к соревнованиям',
      duration: '16-20 недель',
      level: 'Профессионал',
      icon: 'Trophy',
      color: 'secondary',
      description: 'Выведи себя на пик формы к соревнованиям',
      features: [
        'Пиковая программа тренировок',
        'Периодизация нагрузки',
        'Строгий план питания',
        'Позирование и подводка'
      ]
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-1 w-8 bg-primary rounded-full"></div>
            <span className="text-primary font-semibold uppercase tracking-wider">Программы</span>
            <div className="h-1 w-8 bg-primary rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Тренировочные программы
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выбери программу под свою цель или получи персональную разработку
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl group overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`h-2 bg-${program.color}`}></div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <Icon name={program.icon as any} size={28} className="text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      {program.level}
                    </div>
                    <div className="text-sm font-semibold text-primary">
                      {program.duration}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-secondary mb-3">
                  {program.title}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  {program.description}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Icon name="Check" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Начать программу
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
