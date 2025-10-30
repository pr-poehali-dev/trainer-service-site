import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Results = () => {
  const results = [
    {
      name: 'Алексей М.',
      age: 32,
      program: 'Сжигание жира',
      duration: '12 недель',
      achievements: [
        'Вес: 95 кг → 78 кг (-17 кг)',
        'Талия: 102 см → 84 см',
        'Жир: 28% → 15%'
      ],
      quote: 'Я не верил, что смогу так измениться. Юра не просто тренер — это человек, который вдохновляет и поддерживает на каждом шагу!'
    },
    {
      name: 'Мария К.',
      age: 28,
      program: 'Рельеф и сушка',
      duration: '8 недель',
      achievements: [
        'Вес: 68 кг → 62 кг (-6 кг)',
        'Жир: 22% → 14%',
        'Появился рельеф пресса'
      ],
      quote: 'Всегда мечтала о плоском животе. Программа жёсткая, но результат того стоит. Спасибо за мотивацию!'
    },
    {
      name: 'Дмитрий В.',
      age: 35,
      program: 'Набор массы',
      duration: '16 недель',
      achievements: [
        'Вес: 72 кг → 84 кг (+12 кг)',
        'Грудь: 96 см → 108 см',
        'Бицепс: 34 см → 40 см'
      ],
      quote: 'Был худым всю жизнь. За 4 месяца набрал качественную массу. Теперь не узнаю себя в зеркале!'
    },
    {
      name: 'Елена С.',
      age: 41,
      program: 'Функциональный фитнес',
      duration: '10 недель',
      achievements: [
        'Улучшилась выносливость',
        'Ушли боли в спине',
        'Подтянулась фигура'
      ],
      quote: 'После 40 думала, что всё — время упущено. Но Юра показал, что возраст это не приговор. Чувствую себя на 25!'
    },
    {
      name: 'Игорь П.',
      age: 29,
      program: 'Подготовка к соревнованиям',
      duration: '20 недель',
      achievements: [
        'Жир: 12% → 6%',
        'Победа в категории до 85 кг',
        '1-е место на региональных'
      ],
      quote: 'Профессиональная подготовка на высшем уровне. Юра знает все нюансы предсоревновательной подводки!'
    },
    {
      name: 'Анна Д.',
      age: 26,
      program: 'Реабилитация',
      duration: '14 недель',
      achievements: [
        'Восстановление после травмы колена',
        'Вернулась к полноценным тренировкам',
        'Стала сильнее, чем до травмы'
      ],
      quote: 'После травмы боялась, что не смогу тренироваться. Юра помог восстановиться и вернуться в спорт!'
    }
  ];

  return (
    <section id="results" className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-1 w-8 bg-primary rounded-full"></div>
            <span className="text-primary font-semibold uppercase tracking-wider">Результаты</span>
            <div className="h-1 w-8 bg-primary rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Трансформации клиентов
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Реальные люди, реальные результаты. Следующим можешь быть ты!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary">{result.name}</h3>
                    <p className="text-sm text-muted-foreground">{result.age} лет</p>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Программа:</span>
                    <span className="font-semibold text-secondary">{result.program}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-1">
                    <span className="text-muted-foreground">Срок:</span>
                    <span className="font-semibold text-primary">{result.duration}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="TrendingUp" size={18} className="text-primary" />
                    <span className="font-semibold text-secondary">Достижения:</span>
                  </div>
                  {result.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <Icon name="Check" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-4">
                  <div className="flex gap-2 mb-2">
                    <Icon name="Quote" size={20} className="text-primary flex-shrink-0" />
                  </div>
                  <p className="text-sm italic text-muted-foreground">
                    "{result.quote}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl shadow-xl p-8 max-w-4xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">-15</div>
                <div className="text-sm text-muted-foreground">Средняя потеря кг</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Достигли целей</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">7</div>
                <div className="text-sm text-muted-foreground">Лет опыта</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
