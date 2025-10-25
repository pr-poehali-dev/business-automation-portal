import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const services = [
    {
      icon: 'Calculator',
      title: 'Бухгалтерский учет',
      description: 'Полный спектр бухгалтерских услуг для вашего бизнеса',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: 'Code',
      title: 'ИТ-решения',
      description: 'Разработка и внедрение информационных систем',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: 'Building2',
      title: 'Строительство',
      description: 'Проектирование и строительство объектов',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: 'PartyPopper',
      title: 'Организация мероприятий',
      description: 'Проведение корпоративных и деловых мероприятий',
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  const businessMetrics = [
    { stage: 'Новая сделка', amount: 100000, type: 'income', icon: 'TrendingUp' },
    { stage: 'Поступила предоплата от клиента за заказ', amount: 6000, type: 'income', icon: 'ArrowDownToLine' },
    { stage: 'ЛПР', amount: 100, type: 'neutral', icon: 'Users' },
    { stage: 'Отправлено КП', amount: 100, type: 'neutral', icon: 'Send' },
    { stage: 'Согласовано КП', amount: 10, type: 'neutral', icon: 'FileCheck' },
    { stage: 'Договор отправлен', amount: 10, type: 'neutral', icon: 'FileText' },
    { stage: 'Договор подписан', amount: 10, type: 'neutral', icon: 'FilePenLine' },
    { stage: 'Счёт выставлен', amount: 5, type: 'neutral', icon: 'Receipt' },
    { stage: 'Поступила предоплата от клиента за заказ', amount: null, type: 'income', icon: 'CircleDollarSign' },
    { stage: 'Заплатила аванс за материалы и отгрузила их на производство', amount: null, type: 'expense', icon: 'ShoppingCart' },
    { stage: 'Себестоимость отгруженного товара', amount: null, type: 'expense', icon: 'Package' },
    { stage: 'Доплатила поставщику за материалы', amount: null, type: 'expense', icon: 'Banknote' },
    { stage: 'Отгрузила товар клиенту', amount: null, type: 'neutral', icon: 'Truck' },
    { stage: 'Товар доставлен', amount: null, type: 'neutral', icon: 'PackageCheck' },
    { stage: 'Получила от клиента постоплата', amount: null, type: 'income', icon: 'Wallet' },
    { stage: 'Получены закрывающие документы', amount: null, type: 'neutral', icon: 'FileStack' },
    { stage: 'Оплатила долг по аренде цеха за прошлый месяц', amount: null, type: 'expense', icon: 'Building' },
    { stage: 'Начислила и оплатила аренду цеха за этот месяц', amount: null, type: 'expense', icon: 'Home' },
    { stage: 'Начисляла и оплатила себе зарплату за текущий месяц', amount: 0, type: 'expense', icon: 'User' },
    { stage: 'Перечисляла на счет налогов', amount: null, type: 'expense', icon: 'Receipt' },
    { stage: 'Перечислила на счет страховых взносов', amount: null, type: 'expense', icon: 'Shield' },
    { stage: 'Начисляла амортизацию за оборудование', amount: null, type: 'expense', icon: 'Settings' },
    { stage: 'Оплатила старый кредит (тело + процент)', amount: null, type: 'expense', icon: 'CreditCard' },
    { stage: 'Чистая прибыль', amount: null, type: 'profit', icon: 'TrendingUp' }
  ];

  const totalIncome = businessMetrics
    .filter(m => m.type === 'income' && m.amount)
    .reduce((sum, m) => sum + m.amount, 0);
  
  const totalExpenses = businessMetrics
    .filter(m => m.type === 'expense' && m.amount)
    .reduce((sum, m) => sum + m.amount, 0);

  const team = [
    { 
      name: 'Алена Цветова', 
      role: 'Управляющий партнёр', 
      expertise: 'Стратегическое развитие бизнеса',
      icon: 'Crown'
    },
    { 
      name: 'Ведущий специалист', 
      role: 'Главный эксперт', 
      expertise: 'Операционное управление',
      icon: 'Award'
    }
  ];

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('ru-RU', { 
      style: 'currency', 
      currency: 'RUB',
      maximumFractionDigits: 0 
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-orange-50">
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/90 border-b border-purple-100 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 animate-fade-in">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                <Icon name="Sparkles" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="font-heading font-bold text-xl text-purple-900">ИП Цветова А.С.</h1>
                <p className="text-xs text-purple-600">Многопрофильные решения для бизнеса</p>
              </div>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#services" className="text-sm font-medium text-purple-800 hover:text-orange-500 transition-colors">Направления</a>
              <a href="#funnel" className="text-sm font-medium text-purple-800 hover:text-orange-500 transition-colors">Аналитика</a>
              <a href="#team" className="text-sm font-medium text-purple-800 hover:text-orange-500 transition-colors">Команда</a>
              <a href="#knowledge" className="text-sm font-medium text-purple-800 hover:text-orange-500 transition-colors">База знаний</a>
            </div>
            <Button className="bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 shadow-lg">
              <Icon name="MessageCircle" className="mr-2" size={16} />
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">
                Премиальный сервис для бизнеса
              </Badge>
              <h2 className="font-heading text-5xl md:text-6xl font-bold text-purple-900 mb-6 leading-tight">
                Многопрофильные решения для вашего успеха
              </h2>
              <p className="text-lg text-purple-700 mb-8 leading-relaxed">
                От бухгалтерии до строительства — комплексный подход к развитию вашего бизнеса. 
                Работаем на базе собственной системы знаний и автоматизированных процессов.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-lg shadow-lg">
                  <Icon name="Bot" className="mr-2" size={20} />
                  Начать работу через бот
                </Button>
                <Button size="lg" variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
                  <Icon name="Play" className="mr-2" size={20} />
                  Смотреть на YouTube
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-orange-400 rounded-3xl blur-2xl opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop" 
                alt="Профессиональное бизнес-пространство"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-orange-100 text-orange-700">Наши направления</Badge>
            <h3 className="font-heading text-4xl font-bold text-purple-900 mb-4">
              Полный спектр бизнес-услуг
            </h3>
            <p className="text-lg text-purple-600 max-w-2xl mx-auto">
              Четыре ключевых направления для комплексного развития вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-purple-100 hover:border-purple-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={service.icon as any} size={28} />
                  </div>
                  <CardTitle className="font-heading text-purple-900">{service.title}</CardTitle>
                  <CardDescription className="text-purple-600">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="funnel" className="py-20 px-6 bg-gradient-to-br from-purple-50 to-orange-50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-purple-100 text-purple-700">Финансовая аналитика</Badge>
            <h3 className="font-heading text-4xl font-bold text-purple-900 mb-4">
              Аналитика в реальном времени
            </h3>
            <p className="text-lg text-purple-600 max-w-2xl mx-auto">
              Полный цикл операций: от сделки до прибыли
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
            <Card className="bg-gradient-to-r from-green-600 to-emerald-500 text-white shadow-2xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm mb-1 text-green-100">Доходы</p>
                    <p className="text-3xl font-bold">{formatAmount(totalIncome)}</p>
                  </div>
                  <Icon name="TrendingUp" size={40} className="text-green-200" />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-r from-red-600 to-rose-500 text-white shadow-2xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm mb-1 text-red-100">Расходы</p>
                    <p className="text-3xl font-bold">{formatAmount(totalExpenses)}</p>
                  </div>
                  <Icon name="TrendingDown" size={40} className="text-red-200" />
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="max-w-5xl mx-auto shadow-2xl border-purple-200">
            <CardContent className="p-8">
              <div className="space-y-4">
                {businessMetrics.map((metric, index) => {
                  const bgColor = 
                    metric.type === 'income' ? 'bg-green-50 border-green-200' :
                    metric.type === 'expense' ? 'bg-red-50 border-red-200' :
                    metric.type === 'profit' ? 'bg-purple-50 border-purple-300' :
                    'bg-gray-50 border-gray-200';
                  
                  const iconColor =
                    metric.type === 'income' ? 'text-green-600' :
                    metric.type === 'expense' ? 'text-red-600' :
                    metric.type === 'profit' ? 'text-purple-600' :
                    'text-gray-600';
                  
                  return (
                    <div 
                      key={index} 
                      className={`p-4 rounded-lg border-2 ${bgColor} animate-slide-up transition-all hover:shadow-md`}
                      style={{ animationDelay: `${index * 30}ms` }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 flex-1">
                          <Icon name={metric.icon as any} size={24} className={iconColor} />
                          <span className="font-medium text-gray-800">{metric.stage}</span>
                        </div>
                        <div className="text-right">
                          {metric.amount !== null ? (
                            <span className={`font-bold text-lg ${
                              metric.type === 'income' ? 'text-green-700' :
                              metric.type === 'expense' ? 'text-red-700' :
                              metric.type === 'profit' ? 'text-purple-700' :
                              'text-gray-700'
                            }`}>
                              {formatAmount(metric.amount)}
                            </span>
                          ) : (
                            <span className="text-gray-400 text-sm">—</span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="team" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-orange-100 text-orange-700">Наша команда</Badge>
            <h3 className="font-heading text-4xl font-bold text-purple-900 mb-4">
              Профессионалы своего дела
            </h3>
            <p className="text-lg text-purple-600 max-w-2xl mx-auto">
              Опыт и экспертиза для решения самых сложных задач
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 border-purple-200 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Icon name={member.icon as any} className="text-white" size={28} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="font-heading text-purple-900 text-xl">{member.name}</CardTitle>
                      <Badge className="mt-2 bg-purple-100 text-purple-700">{member.role}</Badge>
                    </div>
                  </div>
                  <CardDescription className="text-purple-600 mt-4 flex items-center">
                    <Icon name="Briefcase" className="inline mr-2" size={16} />
                    {member.expertise}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="knowledge" className="py-20 px-6 bg-gradient-to-br from-purple-900 to-orange-600 text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Icon name="BookOpen" size={40} />
            </div>
            <h3 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              База знаний и автоматизация
            </h3>
            <p className="text-xl mb-8 text-purple-100 leading-relaxed">
              Все взаимодействие происходит через интеллектуального бота, работающего на основе нашей 
              базы знаний. Статьи, видео на YouTube и Rutube, пошаговые инструкции — всё для вашего удобства.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-50 shadow-xl">
                <Icon name="Bot" className="mr-2" size={20} />
                Открыть бот
              </Button>
              <div className="flex flex-col gap-3">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Icon name="Youtube" className="mr-2" size={20} />
                  Смотреть на YouTube
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Icon name="Video" className="mr-2" size={20} />
                  Смотреть на Rutube
                </Button>
              </div>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Icon name="FileText" className="mr-2" size={20} />
                Читать статьи
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-purple-950 text-purple-200">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-orange-500 rounded-lg flex items-center justify-center">
                <Icon name="Sparkles" className="text-white" size={20} />
              </div>
              <div>
                <p className="font-bold text-white">ИП Цветова Алена Сергеевна</p>
                <p className="text-xs text-purple-300">Многопрофильные решения для бизнеса</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="text-purple-200 hover:text-white hover:bg-purple-900">
                <Icon name="Mail" className="mr-2" size={16} />
                Написать
              </Button>
              <Button variant="ghost" size="sm" className="text-purple-200 hover:text-white hover:bg-purple-900">
                <Icon name="Phone" className="mr-2" size={16} />
                Позвонить
              </Button>
            </div>
          </div>
          <div className="border-t border-purple-800 mt-8 pt-6 text-center text-sm text-purple-300">
            <p>© 2025 ИП Цветова А.С. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;