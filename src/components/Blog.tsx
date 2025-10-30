import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Blog = () => {
  const articles = [
    { 
      title: "Топ-5 упражнений для пресса", 
      category: "Тренировки", 
      date: "15 октября 2024",
      excerpt: "Эффективные упражнения для создания рельефного пресса",
      image: "https://cdn.poehali.dev/projects/2ea79b15-bc4f-41c7-80c3-156cac0fddc9/files/ecf5686b-6e6d-42d3-ba7e-a1834f8c0116.jpg"
    },
    { 
      title: "Правильное питание для набора массы", 
      category: "Питание", 
      date: "12 октября 2024",
      excerpt: "Как составить рацион для эффективного роста мышц",
      image: "https://cdn.poehali.dev/projects/2ea79b15-bc4f-41c7-80c3-156cac0fddc9/files/90cbe1cb-c86b-4883-bee7-cbbae08da563.jpg"
    },
    { 
      title: "5 мифов о кардио тренировках", 
      category: "Тренировки", 
      date: "8 октября 2024",
      excerpt: "Развенчиваем популярные заблуждения о кардио",
      image: "https://cdn.poehali.dev/projects/2ea79b15-bc4f-41c7-80c3-156cac0fddc9/files/1ac09e7c-55ea-4cfe-8bcc-b2504c7d1466.jpg"
    },
    { 
      title: "Белки, жиры, углеводы: баланс для похудения", 
      category: "Питание", 
      date: "5 октября 2024",
      excerpt: "Оптимальное соотношение макронутриентов для жиросжигания",
      image: "https://cdn.poehali.dev/projects/2ea79b15-bc4f-41c7-80c3-156cac0fddc9/files/90cbe1cb-c86b-4883-bee7-cbbae08da563.jpg"
    },
    { 
      title: "Растяжка: почему это важно", 
      category: "Тренировки", 
      date: "1 октября 2024",
      excerpt: "Роль гибкости в достижении спортивных результатов",
      image: "https://cdn.poehali.dev/projects/2ea79b15-bc4f-41c7-80c3-156cac0fddc9/files/ecf5686b-6e6d-42d3-ba7e-a1834f8c0116.jpg"
    },
    { 
      title: "Спортивное питание: что действительно работает", 
      category: "Питание", 
      date: "28 сентября 2024",
      excerpt: "Обзор эффективных добавок для тренировок",
      image: "https://cdn.poehali.dev/projects/2ea79b15-bc4f-41c7-80c3-156cac0fddc9/files/90cbe1cb-c86b-4883-bee7-cbbae08da563.jpg"
    }
  ];

  return (
    <section id="blog" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">БЛОГ</h2>
        <p className="text-center text-muted-foreground mb-12">Полезные статьи о тренировках и питании</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <Card key={i} className="overflow-hidden hover:shadow-xl transition-all group cursor-pointer">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-sm text-muted-foreground">{article.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                <Button variant="link" className="px-0">
                  Читать далее <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
