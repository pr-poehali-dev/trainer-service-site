import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Pricing = () => {
  const plans = [
    { 
      name: "Старт", 
      price: "2500", 
      sessions: "4 тренировки", 
      features: ["Персональная программа", "Консультация по питанию", "Поддержка в чате"] 
    },
    { 
      name: "Оптимум", 
      price: "4500", 
      sessions: "8 тренировок", 
      features: ["Персональная программа", "План питания", "Круглосуточная поддержка", "Замеры тела"], 
      popular: true 
    },
    { 
      name: "Максимум", 
      price: "8000", 
      sessions: "16 тренировок", 
      features: ["Полное сопровождение", "Индивидуальный план питания", "24/7 поддержка", "Замеры и фото прогресса", "Доступ к онлайн материалам"] 
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">ПРАЙС-ЛИСТ</h2>
        <p className="text-center text-muted-foreground mb-12">Выбери удобный для себя тариф</p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <Card 
              key={i} 
              className={`p-8 ${plan.popular ? 'border-4 border-primary shadow-2xl scale-105' : 'border-2'} hover:shadow-xl transition-all relative`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                  ПОПУЛЯРНЫЙ
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-primary">{plan.price}</span>
                <span className="text-muted-foreground"> ₽</span>
              </div>
              <p className="text-lg font-semibold mb-6">{plan.sessions}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                Выбрать
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
