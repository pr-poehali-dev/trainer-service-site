const Results = () => {
  const results = [
    {
      name: 'Анна, 32 года',
      result: '-18 кг за 3 месяца',
      image: 'https://cdn.poehali.dev/projects/2ea79b15-bc4f-41c7-80c3-156cac0fddc9/files/9d4cc26a-0022-4190-af38-4d6c92644714.jpg',
    },
    {
      name: 'Дмитрий, 28 лет',
      result: '+12 кг мышц за 4 месяца',
      image: 'https://cdn.poehali.dev/projects/2ea79b15-bc4f-41c7-80c3-156cac0fddc9/files/9d4cc26a-0022-4190-af38-4d6c92644714.jpg',
    },
    {
      name: 'Елена, 45 лет',
      result: '-22 кг за 5 месяцев',
      image: 'https://cdn.poehali.dev/projects/2ea79b15-bc4f-41c7-80c3-156cac0fddc9/files/9d4cc26a-0022-4190-af38-4d6c92644714.jpg',
    },
    {
      name: 'Сергей, 35 лет',
      result: '1 место на соревнованиях',
      image: 'https://cdn.poehali.dev/projects/2ea79b15-bc4f-41c7-80c3-156cac0fddc9/files/9d4cc26a-0022-4190-af38-4d6c92644714.jpg',
    },
  ];

  return (
    <section id="results" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Результаты клиентов</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Реальные истории успеха наших клиентов
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {results.map((result, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all"
            >
              <img
                src={result.image}
                alt={result.name}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{result.name}</h3>
                <p className="text-primary font-semibold text-lg">{result.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
