import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeService, setActiveService] = useState("personal");

  const services = [
    {
      id: "personal",
      title: "Персональные тренировки",
      description: "Индивидуальный подход к достижению ваших целей",
      price: "от 3000 ₽",
      icon: "User",
      features: ["Персональная программа", "Контроль техники", "Гибкий график"]
    },
    {
      id: "group",
      title: "Групповые занятия",
      description: "Энергия команды для максимальных результатов",
      price: "от 1500 ₽",
      icon: "Users",
      features: ["До 8 человек", "3 раза в неделю", "Мотивация группы"]
    },
    {
      id: "online",
      title: "Онлайн-коучинг",
      description: "Тренируйтесь где угодно с поддержкой 24/7",
      price: "от 5000 ₽",
      icon: "MonitorSmartphone",
      features: ["Видео-тренировки", "План питания", "Чат с тренером"]
    }
  ];

  const programs = [
    { name: "Набор мышечной массы", duration: "12 недель", level: "Средний", icon: "Dumbbell" },
    { name: "Сжигание жира", duration: "8 недель", level: "Любой", icon: "Flame" },
    { name: "Функциональный тренинг", duration: "10 недель", level: "Продвинутый", icon: "Zap" },
    { name: "Подготовка к марафону", duration: "16 недель", level: "Продвинутый", icon: "Activity" }
  ];

  const results = [
    { name: "Алексей М.", result: "-15 кг за 3 месяца", description: "Снизил вес и улучшил выносливость" },
    { name: "Мария С.", result: "+8 кг мышц", description: "Набрала качественную массу и силу" },
    { name: "Дмитрий К.", result: "-20% жира", description: "Трансформация тела за 4 месяца" }
  ];

  const testimonials = [
    { name: "Елена П.", text: "Лучший тренер! За полгода изменила не только тело, но и отношение к спорту. Рекомендую всем!", rating: 5 },
    { name: "Иван Р.", text: "Профессиональный подход, всегда на связи, мотивирует и поддерживает. Результат превзошел ожидания!", rating: 5 },
    { name: "Ольга Т.", text: "Индивидуальная программа тренировок и питания дала результаты уже через месяц. Спасибо!", rating: 5 }
  ];

  const articles = [
    {
      title: "5 главных ошибок в питании начинающих",
      category: "Питание",
      date: "15 октября 2024",
      image: "https://cdn.poehali.dev/projects/2ea79b15-bc4f-41c7-80c3-156cac0fddc9/files/1d0b29ac-01cd-4827-a792-3e3a12b95d08.jpg"
    },
    {
      title: "Как правильно восстанавливаться после тренировок",
      category: "Тренировки",
      date: "10 октября 2024",
      image: "https://cdn.poehali.dev/projects/2ea79b15-bc4f-41c7-80c3-156cac0fddc9/files/e48b512e-5cbd-4faf-a848-86dc81894480.jpg"
    },
    {
      title: "Протеин: мифы и реальность",
      category: "Питание",
      date: "5 октября 2024",
      image: "https://cdn.poehali.dev/projects/2ea79b15-bc4f-41c7-80c3-156cac0fddc9/files/1d0b29ac-01cd-4827-a792-3e3a12b95d08.jpg"
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">FitPro</h1>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О тренере</button>
            <button onClick={() => scrollToSection('programs')} className="hover:text-primary transition-colors">Программы</button>
            <button onClick={() => scrollToSection('results')} className="hover:text-primary transition-colors">Результаты</button>
            <button onClick={() => scrollToSection('testimonials')} className="hover:text-primary transition-colors">Отзывы</button>
            <button onClick={() => scrollToSection('blog')} className="hover:text-primary transition-colors">Блог</button>
            <button onClick={() => scrollToSection('pricing')} className="hover:text-primary transition-colors">Цены</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Контакты</button>
          </div>
          <Button onClick={() => scrollToSection('contact')}>Записаться</Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 animate-fade-in" variant="secondary">Сертифицированный тренер</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-in-right">
            Трансформируй своё тело
            <span className="block text-primary mt-2">с профессионалом</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Индивидуальные программы тренировок и питания для достижения ваших целей. Более 500 довольных клиентов за 7 лет работы.
          </p>
          <div className="flex gap-4 justify-center flex-wrap animate-scale-in">
            <Button size="lg" className="text-lg px-8" onClick={() => scrollToSection('contact')}>
              <Icon name="Rocket" className="mr-2" size={20} />
              Начать тренировки
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => scrollToSection('services')}>
              Узнать больше
            </Button>
          </div>
          <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto animate-fade-in">
            <img 
              src="https://cdn.poehali.dev/projects/2ea79b15-bc4f-41c7-80c3-156cac0fddc9/files/e48b512e-5cbd-4faf-a848-86dc81894480.jpg"
              alt="Тренер в действии"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Услуги</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Выбери свой путь к успеху</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Разные форматы тренировок для разных целей и возможностей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service) => (
              <Card 
                key={service.id}
                className={`cursor-pointer transition-all hover:shadow-xl hover:-translate-y-2 ${
                  activeService === service.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setActiveService(service.id)}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary mb-4">{service.price}</div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Icon name="Check" className="text-primary" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" onClick={() => scrollToSection('contact')}>
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">О тренере</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Александр Петров</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Сертифицированный персональный тренер с 7-летним опытом. Специализируюсь на функциональном тренинге, 
                силовых тренировках и коррекции фигуры.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Award" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg">Международная сертификация</h3>
                    <p className="text-muted-foreground">NASM, ACE, FPA</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Users" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg">500+ клиентов</h3>
                    <p className="text-muted-foreground">Помог достичь целей сотням людей</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Trophy" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg">Призёр соревнований</h3>
                    <p className="text-muted-foreground">Мастер спорта по пауэрлифтингу</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://cdn.poehali.dev/projects/2ea79b15-bc4f-41c7-80c3-156cac0fddc9/files/e48b512e-5cbd-4faf-a848-86dc81894480.jpg"
                alt="Тренер Александр"
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Программы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Тренировочные программы</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Структурированные программы для различных целей и уровней подготовки
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((program, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                        <Icon name={program.icon} className="text-secondary" size={24} />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">{program.name}</CardTitle>
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Icon name="Clock" size={16} />
                            {program.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="BarChart" size={16} />
                            {program.level}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Результаты</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Истории успеха</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Реальные результаты реальных людей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {results.map((result, idx) => (
              <Card key={idx} className="text-center hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="TrendingUp" className="text-white" size={40} />
                  </div>
                  <CardTitle className="text-xl mb-2">{result.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary mb-2">{result.result}</div>
                  <CardDescription className="text-base">{result.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto">
            <img 
              src="https://cdn.poehali.dev/projects/2ea79b15-bc4f-41c7-80c3-156cac0fddc9/files/6b40b705-ea02-4bd0-8686-b8c1ad764d24.jpg"
              alt="Результаты клиентов"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Отзывы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что говорят клиенты</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={20} />
                    ))}
                  </div>
                  <CardDescription className="text-base italic">"{testimonial.text}"</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="font-semibold">{testimonial.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Блог</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Полезные статьи</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Советы по тренировкам и питанию от профессионала
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
                <div className="overflow-hidden">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <Badge className="w-fit mb-2" variant="secondary">{article.category}</Badge>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{article.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Icon name="Calendar" size={16} />
                    {article.date}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              <Icon name="BookOpen" className="mr-2" size={20} />
              Все статьи
            </Button>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Прайс-лист</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Стоимость услуг</h2>
          </div>

          <Tabs defaultValue="single" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="single">Разовые</TabsTrigger>
              <TabsTrigger value="monthly">Абонементы</TabsTrigger>
              <TabsTrigger value="online">Онлайн</TabsTrigger>
            </TabsList>
            
            <TabsContent value="single" className="space-y-4 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Персональная тренировка</CardTitle>
                  <div className="text-3xl font-bold text-primary">3500 ₽</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2"><Icon name="Check" className="text-primary" size={20} />60 минут индивидуальной работы</li>
                    <li className="flex items-center gap-2"><Icon name="Check" className="text-primary" size={20} />Разработка программы</li>
                    <li className="flex items-center gap-2"><Icon name="Check" className="text-primary" size={20} />Контроль техники</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Групповая тренировка</CardTitle>
                  <div className="text-3xl font-bold text-primary">1500 ₽</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2"><Icon name="Check" className="text-primary" size={20} />60 минут групповой работы</li>
                    <li className="flex items-center gap-2"><Icon name="Check" className="text-primary" size={20} />До 8 человек в группе</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="monthly" className="space-y-4 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>8 тренировок</CardTitle>
                  <div className="text-3xl font-bold text-primary">24 000 ₽</div>
                  <Badge variant="secondary">Экономия 4000 ₽</Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2"><Icon name="Check" className="text-primary" size={20} />2 раза в неделю</li>
                    <li className="flex items-center gap-2"><Icon name="Check" className="text-primary" size={20} />План питания включен</li>
                    <li className="flex items-center gap-2"><Icon name="Check" className="text-primary" size={20} />Поддержка в чате</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>12 тренировок</CardTitle>
                  <div className="text-3xl font-bold text-primary">33 000 ₽</div>
                  <Badge variant="secondary">Экономия 9000 ₽</Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2"><Icon name="Check" className="text-primary" size={20} />3 раза в неделю</li>
                    <li className="flex items-center gap-2"><Icon name="Check" className="text-primary" size={20} />Индивидуальный план питания</li>
                    <li className="flex items-center gap-2"><Icon name="Check" className="text-primary" size={20} />Поддержка 24/7</li>
                    <li className="flex items-center gap-2"><Icon name="Check" className="text-primary" size={20} />Замеры и фото прогресса</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="online" className="space-y-4 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Онлайн-консультация</CardTitle>
                  <div className="text-3xl font-bold text-primary">2500 ₽</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2"><Icon name="Check" className="text-primary" size={20} />60 минут видео-консультации</li>
                    <li className="flex items-center gap-2"><Icon name="Check" className="text-primary" size={20} />Разбор техники</li>
                    <li className="flex items-center gap-2"><Icon name="Check" className="text-primary" size={20} />Рекомендации</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Онлайн-сопровождение</CardTitle>
                  <div className="text-3xl font-bold text-primary">15 000 ₽/мес</div>
                  <Badge variant="secondary">Популярно</Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2"><Icon name="Check" className="text-primary" size={20} />Программа тренировок</li>
                    <li className="flex items-center gap-2"><Icon name="Check" className="text-primary" size={20} />План питания</li>
                    <li className="flex items-center gap-2"><Icon name="Check" className="text-primary" size={20} />Еженедельные созвоны</li>
                    <li className="flex items-center gap-2"><Icon name="Check" className="text-primary" size={20} />Чат 24/7</li>
                    <li className="flex items-center gap-2"><Icon name="Check" className="text-primary" size={20} />Корректировка программы</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Готов начать?</h2>
          <p className="text-xl mb-12 opacity-90">
            Запишись на первую консультацию и получи индивидуальный план тренировок бесплатно!
          </p>

          <Card className="text-left">
            <CardHeader>
              <CardTitle className="text-2xl">Свяжитесь со мной</CardTitle>
              <CardDescription>Выберите удобный способ связи</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <Icon name="Phone" className="text-primary" size={24} />
                <div>
                  <div className="font-semibold">Телефон</div>
                  <a href="tel:+79991234567" className="text-primary hover:underline">+7 (999) 123-45-67</a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <Icon name="Mail" className="text-primary" size={24} />
                <div>
                  <div className="font-semibold">Email</div>
                  <a href="mailto:coach@fitpro.ru" className="text-primary hover:underline">coach@fitpro.ru</a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <Icon name="MessageCircle" className="text-primary" size={24} />
                <div>
                  <div className="font-semibold">Telegram</div>
                  <a href="https://t.me/fitpro_coach" className="text-primary hover:underline">@fitpro_coach</a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <Icon name="Instagram" className="text-primary" size={24} />
                <div>
                  <div className="font-semibold">Instagram</div>
                  <a href="https://instagram.com/fitpro_coach" className="text-primary hover:underline">@fitpro_coach</a>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-sm opacity-75">
            <p>Работаю ежедневно с 7:00 до 22:00</p>
            <p className="mt-2">г. Москва, ул. Спортивная, 15</p>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">FitPro</h2>
          <p className="text-white/70 mb-6">Твой путь к идеальной форме</p>
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="hover:text-primary transition-colors"><Icon name="Instagram" size={24} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Icon name="Facebook" size={24} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Icon name="Youtube" size={24} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Icon name="Send" size={24} /></a>
          </div>
          <div className="border-t border-white/20 pt-6">
            <p className="text-white/60 text-sm">© 2024 FitPro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
