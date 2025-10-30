import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Services = () => {
  const services = [
    {
      icon: 'Dumbbell',
      title: 'Персональные тренировки',
      description: 'Индивидуальный подход к каждому клиенту. Разработка программы с учётом твоих целей, уровня подготовки и особенностей здоровья.',
      features: ['Анализ текущей формы', 'Цели и мотивация', 'Контроль техники', 'Прогресс-трекинг']
    },
    {
      icon: 'Apple',
      title: 'План питания',
      description: 'Сбалансированное меню, составленное специально для тебя. Учитываем вкусовые предпочтения и образ жизни.',
      features: ['Калорийность и БЖУ', 'Готовые рецепты', 'Список покупок', 'Корректировки плана']
    },
    {
      icon: 'Users',
      title: 'Групповые занятия',
      description: 'Энергичные тренировки в мини-группах до 6 человек. Мотивация от команды и профессиональный контроль тренера.',
      features: ['Функциональный тренинг', 'HIIT тренировки', 'Силовые занятия', 'Атмосфера команды']
    },
    {
      icon: 'MessageCircle',
      title: 'Онлайн-сопровождение',
      description: 'Поддержка 24/7 в мессенджерах. Ответы на вопросы, корректировка программы, мотивация и контроль выполнения.',
      features: ['Чат-поддержка', 'Видео-разборы', 'Еженедельные отчёты', 'Корректировка программ']
    },
    {
      icon: 'Target',
      title: 'Трансформация тела',
      description: 'Комплексная программа для кардинального изменения фигуры за 12 недель. Всё включено: тренировки, питание, добавки.',
      features: ['12-недельная программа', 'Питание и тренинг', 'Замеры и фото', 'Гарантия результата']
    },
    {
      icon: 'LineChart',
      title: 'Консультации',
      description: 'Разовые консультации по тренировкам, питанию или спортивным добавкам. Получи экспертное мнение по любому вопросу.',
      features: ['Анализ текущей программы', 'Рекомендации по питанию', 'Подбор добавок', 'План развития']
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-1 w-8 bg-primary rounded-full"></div>
            <span className="text-primary font-semibold uppercase tracking-wider">Услуги</span>
            <div className="h-1 w-8 bg-primary rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Что я предлагаю
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Полный спектр услуг для достижения твоих фитнес-целей
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl group animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <Icon name={service.icon as any} size={32} className="text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="text-2xl font-bold text-secondary mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                      <span>{feature}</span>
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
