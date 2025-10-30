import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">FitCoach</h3>
            <p className="text-muted-foreground">
              Профессиональный тренер для достижения ваших фитнес-целей
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Услуги</a></li>
              <li><a href="#programs" className="text-muted-foreground hover:text-primary transition-colors">Программы</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Прайс</a></li>
              <li><a href="#blog" className="text-muted-foreground hover:text-primary transition-colors">Статьи</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                +7 (999) 123-45-67
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                trainer@fitpro.ru
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                Москва
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Социальные сети</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all group">
                <Icon name="Instagram" size={20} className="text-primary group-hover:text-primary-foreground" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all group">
                <Icon name="Facebook" size={20} className="text-primary group-hover:text-primary-foreground" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all group">
                <Icon name="Youtube" size={20} className="text-primary group-hover:text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 FitCoach. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;