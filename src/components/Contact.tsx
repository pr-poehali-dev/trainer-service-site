import { useState } from 'react';
import Icon from '@/components/ui/icon';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Я свяжусь с вами в ближайшее время.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contacts = [
    { icon: 'Phone', text: '+7 (999) 123-45-67', href: 'tel:+79991234567' },
    { icon: 'Mail', text: 'trainer@fitpro.ru', href: 'mailto:trainer@fitpro.ru' },
    { icon: 'MapPin', text: 'Москва, ул. Спортивная, 15', href: '#' },
    { icon: 'Instagram', text: '@fitpro_trainer', href: 'https://instagram.com' },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Свяжитесь со мной для записи на тренировку
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6">Запишитесь на тренировку</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-border bg-background focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Ваше имя"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-border bg-background focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-border bg-background focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Расскажите о ваших целях"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground px-6 py-4 rounded-md hover:bg-primary/90 transition-all font-semibold text-lg"
              >
                Отправить заявку
              </button>
            </form>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
            <div className="space-y-6">
              {contacts.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                    <Icon name={contact.icon} size={20} className="text-primary group-hover:text-primary-foreground" />
                  </div>
                  <span className="text-lg">{contact.text}</span>
                </a>
              ))}
            </div>
            <div className="mt-8 p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
              <h4 className="font-bold text-lg mb-2">Первая тренировка бесплатно!</h4>
              <p className="text-muted-foreground">
                Запишитесь на пробное занятие и убедитесь в эффективности тренировок
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
