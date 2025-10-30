import Icon from '@/components/ui/icon';

const Blog = () => {
  const articles = [
    {
      title: 'Топ-5 продуктов для набора мышечной массы',
      excerpt: 'Узнайте, какие продукты помогут вам быстрее достичь результата в наборе массы',
      image: 'https://cdn.poehali.dev/projects/2ea79b15-bc4f-41c7-80c3-156cac0fddc9/files/bcae54d2-fa75-4aa6-b4cc-01f8a5cbda9f.jpg',
      category: 'Питание',
      date: '15 октября 2024',
      readTime: '5 мин',
    },
    {
      title: 'Как правильно восстанавливаться после тренировки',
      excerpt: 'Восстановление — ключ к прогрессу. Разбираем основные правила',
      image: 'https://cdn.poehali.dev/projects/2ea79b15-bc4f-41c7-80c3-156cac0fddc9/files/2e53c6a5-8bbd-4e78-9394-c6d8580b675f.jpg',
      category: 'Тренировки',
      date: '10 октября 2024',
      readTime: '7 мин',
    },
    {
      title: 'Кардио: до или после силовой тренировки?',
      excerpt: 'Развеиваем мифы о кардио и рассказываем, когда его лучше выполнять',
      image: 'https://cdn.poehali.dev/projects/2ea79b15-bc4f-41c7-80c3-156cac0fddc9/files/5658f150-50f3-48ab-bdd3-985fc67b1507.jpg',
      category: 'Тренировки',
      date: '5 октября 2024',
      readTime: '6 мин',
    },
  ];

  return (
    <section id="blog" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Блог</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Полезные статьи о тренировках и питании
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-all hover:shadow-xl group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-semibold">
                  {article.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Icon name="Calendar" size={16} />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="Clock" size={16} />
                    {article.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                <button className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Читать далее
                  <Icon name="ArrowRight" size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;