import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <>
      <section id="contacts" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4">КОНТАКТЫ</h2>
          <p className="text-center text-muted-foreground mb-12">Свяжись со мной для бесплатной консультации</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Свяжитесь со мной</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" className="text-primary" />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" className="text-primary" />
                  <span>trainer@fitpro.ru</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" className="text-primary" />
                  <span>Москва, ул. Спортивная, 15</span>
                </div>
                <div className="flex gap-4 pt-4">
                  <Button size="icon" variant="outline">
                    <Icon name="Instagram" />
                  </Button>
                  <Button size="icon" variant="outline">
                    <Icon name="Send" />
                  </Button>
                  <Button size="icon" variant="outline">
                    <Icon name="Youtube" />
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Записаться на консультацию</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Телефон"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Ваши цели"
                    rows={4}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <Button className="w-full" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Dumbbell" size={32} />
            <span className="text-2xl font-bold">FITPRO</span>
          </div>
          <p className="text-background/70 mb-4">
            Персональные тренировки для достижения твоих целей
          </p>
          <p className="text-background/50 text-sm">
            © 2024 FITPRO. Все права защищены.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Contact;
