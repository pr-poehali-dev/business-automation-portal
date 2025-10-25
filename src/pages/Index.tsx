import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('overview');

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

  const salesFunnel = [
    { stage: 'Новая сделка', amount: 2000000, color: 'bg-slate-400' },
    { stage: 'ЛПР', amount: 123333, color: 'bg-blue-400' },
    { stage: 'Отправлено КП', amount: 0, color: 'bg-cyan-400' },
    { stage: 'Согласовано КП', amount: 1000000, color: 'bg-green-400' },
    { stage: 'Договор отправлен', amount: 0, color: 'bg-lime-400' },
    { stage: 'Договор подписан', amount: 3333333, color: 'bg-yellow-400' },
    { stage: 'Счёт выставлен', amount: 3235423, color: 'bg-orange-400' },
    { stage: 'Товар доставлен', amount: 12332111, color: 'bg-purple-400' },
    { stage: 'Закрывающие документы', amount: 7843000, color: 'bg-pink-400' }
  ];

  const maxAmount = Math.max(...salesFunnel.map(s => s.amount));

  const team = [
    { name: 'Алена Цветова', role: 'Управляющий партнёр', expertise: 'Стратегия и развитие' },
    { name: 'Ведущий специалист', role: 'Главный эксперт', expertise: 'Операционное управление' }
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
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-purple-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 animate-fade-in">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-orange-500 rounded-xl flex items-center justify-center">
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
            <Button className="bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600">
              <Icon name="MessageCircle" className="mr-2" size={16} />
              Связаться через бот
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
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-lg">
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
                src="https://cdn.poehali.dev/projects/050ac2ee-43c1-420e-b33a-c7ab151da85e/files/839ba948-742d-4376-a6d8-92dc7a2b5b60.jpg" 
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
            <Badge className="mb-4 bg-purple-100 text-purple-700">Воронка продаж</Badge>
            <h3 className="font-heading text-4xl font-bold text-purple-900 mb-4">
              Аналитика в реальном времени
            </h3>
            <p className="text-lg text-purple-600 max-w-2xl mx-auto">
              Прозрачная система отслеживания сделок на каждом этапе
            </p>
          </div>
          <Card className="max-w-5xl mx-auto shadow-2xl border-purple-200">
            <CardContent className="p-8">
              <div className="space-y-6">
                {salesFunnel.map((stage, index) => (
                  <div 
                    key={index} 
                    className="animate-slide-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-purple-900">{stage.stage}</span>
                      <span className="font-bold text-purple-700">{formatAmount(stage.amount)}</span>
                    </div>
                    <div className="relative h-8 bg-purple-100 rounded-lg overflow-hidden">
                      <div 
                        className={`h-full ${stage.color} flex items-center px-4 text-white font-medium text-sm transition-all duration-1000`}
                        style={{ width: `${stage.amount > 0 ? (stage.amount / maxAmount) * 100 : 2}%` }}
                      >
                        {stage.amount > 0 && (
                          <span className="drop-shadow-md">
                            {((stage.amount / maxAmount) * 100).toFixed(1)}%
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-gradient-to-r from-purple-100 to-orange-100 rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-purple-600 mb-1">Общая сумма в воронке</p>
                    <p className="text-3xl font-bold text-purple-900">
                      {formatAmount(salesFunnel.reduce((sum, s) => sum + s.amount, 0))}
                    </p>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-orange-500 rounded-full flex items-center justify-center">
                    <Icon name="TrendingUp" className="text-white" size={32} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="team" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-orange-100 text-orange-700">Команда экспертов</Badge>
            <h3 className="font-heading text-4xl font-bold text-purple-900 mb-4">
              Профессионалы своего дела
            </h3>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all border-purple-200 animate-scale-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-orange-500 rounded-full flex items-center justify-center">
                      <Icon name="User" className="text-white" size={28} />
                    </div>
                    <div>
                      <CardTitle className="font-heading text-purple-900">{member.name}</CardTitle>
                      <Badge className="mt-1 bg-purple-100 text-purple-700">{member.role}</Badge>
                    </div>
                  </div>
                  <CardDescription className="text-purple-600">
                    <Icon name="Award" className="inline mr-2" size={16} />
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
              базы знаний. Статьи, видео на YouTube и пошаговые инструкции — всё для вашего удобства.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-50">
                <Icon name="Bot" className="mr-2" size={20} />
                Открыть бот
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Icon name="Youtube" className="mr-2" size={20} />
                Смотреть видео
              </Button>
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
                <p className="font-heading font-bold text-white">ИП Цветова Алена Сергеевна</p>
                <p className="text-sm text-purple-400">Многопрофильные решения для бизнеса</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-purple-300 hover:text-white hover:bg-purple-800">
                <Icon name="Mail" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-purple-300 hover:text-white hover:bg-purple-800">
                <Icon name="Phone" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-purple-300 hover:text-white hover:bg-purple-800">
                <Icon name="MessageCircle" size={20} />
              </Button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-purple-800 text-center text-sm text-purple-400">
            © 2025 ИП Цветова А.С. Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
