import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Services = () => {
  const services = [
    {
      icon: 'Dumbbell',
      title: 'Персональные тренировки',
      description: 'Индивидуальный подход с учетом твоих целей, уровня подготовки и особенностей организма',
      features: ['Разработка программы', 'Контроль техники', 'Мотивация и поддержка']
    },
    {
      icon: 'Apple',
      title: 'План питания',
      description: 'Сбалансированное меню для набора массы, похудения или поддержания формы',
      features: ['Индивидуальный расчет КБЖУ', 'Рецепты и списки продуктов', 'Корректировка плана']
    },
    {
      icon: 'Users',
      title: 'Групповые тренировки',
      description: 'Энергичные занятия в малых группах до 8 человек с персональным вниманием',
      features: ['Мотивация команды', 'Доступная цена', 'Гибкий график']
    },
    {
      icon: 'MessageSquare',
      title: 'Онлайн-сопровождение',
      description: 'Полная поддержка и консультации удаленно для занятий в любом месте',
      features: ['Программа тренировок', 'Видео-разборы', 'Чат с тренером 24/7']
    },
    {
      icon: 'ClipboardCheck',
      title: 'Оценка прогресса',
      description: 'Регулярные замеры и тестирования для отслеживания твоих результатов',
      features: ['Замеры тела', 'Фото прогресса', 'Силовые тесты']
    },
    {
      icon: 'Heart',
      title: 'Реабилитация',
      description: 'Восстановление после травм и работа с проблемными зонами',
      features: ['ЛФК программы', 'Укрепление суставов', 'Профилактика травм']
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Мои <span className="text-primary">услуги</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Комплексный подход к трансформации твоего тела и здоровья
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary"
            >
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={service.icon as any} size={32} className="text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
