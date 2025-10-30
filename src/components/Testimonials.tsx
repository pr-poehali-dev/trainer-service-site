import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Testimonials = () => {
  const reviews = [
    { name: "Мария К.", text: "Лучший тренер! За 4 месяца достигла результата, о котором мечтала годами. Профессиональный подход и постоянная поддержка.", rating: 5 },
    { name: "Алексей П.", text: "Индивидуальная программа дала невероятные результаты. Рекомендую всем, кто серьезно относится к своему здоровью!", rating: 5 },
    { name: "Виктория Л.", text: "Спасибо за мотивацию и веру в меня! Не только похудела, но и полюбила тренировки. Это навсегда!", rating: 5 },
    { name: "Игорь С.", text: "Профессионал своего дела. Помог набрать массу и при этом остаться в форме. Программа питания просто огонь!", rating: 5 }
  ];

  return (
    <section id="reviews" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">ОТЗЫВЫ КЛИЕНТОВ</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, i) => (
            <Card key={i} className="p-8 hover:shadow-xl transition-all">
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>
              <p className="text-lg mb-4 italic">"{review.text}"</p>
              <p className="font-bold">{review.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
