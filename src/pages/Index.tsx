import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Flight {
  id: string;
  number: string;
  airline: string;
  destination: string;
  origin: string;
  time: string;
  status: 'on-time' | 'delayed' | 'boarding' | 'departed' | 'cancelled';
  gate: string;
  terminal: string;
  type: 'arrival' | 'departure';
}

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [flights, setFlights] = useState<Flight[]>([
    {
      id: '1',
      number: 'SU 1234',
      airline: 'Аэрофлот',
      destination: 'Москва',
      origin: 'Санкт-Петербург',
      time: '14:30',
      status: 'on-time',
      gate: 'A12',
      terminal: '1',
      type: 'departure'
    },
    {
      id: '2',
      number: 'S7 5678',
      airline: 'S7 Airlines',
      destination: 'Новосибирск',
      origin: 'Москва',
      time: '15:45',
      status: 'boarding',
      gate: 'B5',
      terminal: '2',
      type: 'departure'
    },
    {
      id: '3',
      number: 'UT 9012',
      airline: 'Utair',
      destination: 'Сочи',
      origin: 'Екатеринбург',
      time: '16:20',
      status: 'delayed',
      gate: 'C3',
      terminal: '1',
      type: 'departure'
    },
    {
      id: '4',
      number: 'FV 3456',
      airline: 'Rossiya',
      destination: 'Владивосток',
      origin: 'Москва',
      time: '13:15',
      status: 'departed',
      gate: 'A8',
      terminal: '1',
      type: 'departure'
    },
    {
      id: '5',
      number: 'SU 2468',
      airline: 'Аэрофлот',
      destination: 'Санкт-Петербург',
      origin: 'Казань',
      time: '14:00',
      status: 'on-time',
      gate: 'B12',
      terminal: '2',
      type: 'arrival'
    },
    {
      id: '6',
      number: 'S7 7890',
      airline: 'S7 Airlines',
      destination: 'Москва',
      origin: 'Краснодар',
      time: '15:30',
      status: 'boarding',
      gate: 'A3',
      terminal: '1',
      type: 'arrival'
    }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlights((prevFlights) =>
        prevFlights.map((flight) => {
          const statuses: Array<'on-time' | 'delayed' | 'boarding' | 'departed' | 'cancelled'> = [
            'on-time',
            'delayed',
            'boarding',
            'departed'
          ];
          const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
          return Math.random() > 0.8 ? { ...flight, status: randomStatus } : flight;
        })
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: Flight['status']) => {
    const colors = {
      'on-time': 'bg-green-500/20 text-green-700 border-green-500/30',
      delayed: 'bg-red-500/20 text-red-700 border-red-500/30',
      boarding: 'bg-blue-500/20 text-blue-700 border-blue-500/30',
      departed: 'bg-gray-500/20 text-gray-700 border-gray-500/30',
      cancelled: 'bg-red-600/20 text-red-800 border-red-600/30'
    };
    return colors[status];
  };

  const getStatusText = (status: Flight['status']) => {
    const texts = {
      'on-time': 'По расписанию',
      delayed: 'Задержан',
      boarding: 'Посадка',
      departed: 'Вылетел',
      cancelled: 'Отменён'
    };
    return texts[status];
  };

  const getStatusIcon = (status: Flight['status']) => {
    const icons = {
      'on-time': 'CheckCircle2',
      delayed: 'Clock',
      boarding: 'Users',
      departed: 'Plane',
      cancelled: 'XCircle'
    };
    return icons[status];
  };

  const filteredFlights = flights.filter(
    (flight) =>
      flight.number.toLowerCase().includes(searchQuery.toLowerCase()) ||
      flight.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
      flight.origin.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const departures = filteredFlights.filter((f) => f.type === 'departure');
  const arrivals = filteredFlights.filter((f) => f.type === 'arrival');

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100">
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b border-sky-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                <Icon name="Plane" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  AeroHub
                </h1>
                <p className="text-xs text-muted-foreground">Международный аэропорт</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                Главная
              </a>
              <a href="#schedule" className="text-sm font-medium hover:text-primary transition-colors">
                Расписание
              </a>
              <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
                Услуги
              </a>
              <a href="#info" className="text-sm font-medium hover:text-primary transition-colors">
                Информация
              </a>
              <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">
                Контакты
              </a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                О нас
              </a>
            </nav>
            <Button className="md:hidden" variant="outline" size="icon">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Добро пожаловать в AeroHub
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Современный международный аэропорт с системой отслеживания рейсов в реальном времени
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
              <div className="relative flex-1 w-full">
                <Icon
                  name="Search"
                  size={20}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                />
                <Input
                  placeholder="Номер рейса, город..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 text-base shadow-lg border-2"
                />
              </div>
              <Button size="lg" className="h-12 px-8 shadow-lg">
                <Icon name="Search" size={20} className="mr-2" />
                Найти рейс
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      </section>

      <section id="schedule" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-3xl font-bold mb-2">Расписание рейсов</h3>
              <p className="text-muted-foreground flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse-glow"></span>
                Обновляется в реальном времени
              </p>
            </div>
            <Button variant="outline" size="sm">
              <Icon name="RefreshCw" size={16} className="mr-2" />
              Обновить
            </Button>
          </div>

          <Tabs defaultValue="departures" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
              <TabsTrigger value="departures" className="flex items-center gap-2">
                <Icon name="PlaneTakeoff" size={18} />
                Вылет ({departures.length})
              </TabsTrigger>
              <TabsTrigger value="arrivals" className="flex items-center gap-2">
                <Icon name="PlaneLanding" size={18} />
                Прилёт ({arrivals.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="departures" className="space-y-4 animate-fade-in">
              {departures.map((flight) => (
                <Card
                  key={flight.id}
                  className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30 group"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                            <Icon name="Plane" size={24} className="text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h4 className="text-xl font-bold">{flight.number}</h4>
                              <Badge variant="outline" className="text-xs">
                                {flight.airline}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground mb-3">
                              <Icon name="MapPin" size={16} />
                              <span className="text-sm">
                                {flight.origin} → {flight.destination}
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-3 text-sm">
                              <div className="flex items-center gap-1">
                                <Icon name="Clock" size={14} className="text-muted-foreground" />
                                <span className="font-medium">{flight.time}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Icon name="DoorOpen" size={14} className="text-muted-foreground" />
                                <span>Выход {flight.gate}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Icon name="Building2" size={14} className="text-muted-foreground" />
                                <span>Терминал {flight.terminal}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-end">
                        <Badge
                          className={`${getStatusColor(
                            flight.status
                          )} px-4 py-2 text-sm font-semibold border-2 flex items-center gap-2`}
                        >
                          <Icon name={getStatusIcon(flight.status)} size={16} />
                          {getStatusText(flight.status)}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="arrivals" className="space-y-4 animate-fade-in">
              {arrivals.map((flight) => (
                <Card
                  key={flight.id}
                  className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30 group"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/10 to-accent/10 flex items-center justify-center">
                            <Icon name="Plane" size={24} className="text-secondary rotate-180" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h4 className="text-xl font-bold">{flight.number}</h4>
                              <Badge variant="outline" className="text-xs">
                                {flight.airline}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground mb-3">
                              <Icon name="MapPin" size={16} />
                              <span className="text-sm">
                                {flight.origin} → {flight.destination}
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-3 text-sm">
                              <div className="flex items-center gap-1">
                                <Icon name="Clock" size={14} className="text-muted-foreground" />
                                <span className="font-medium">{flight.time}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Icon name="DoorOpen" size={14} className="text-muted-foreground" />
                                <span>Выход {flight.gate}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Icon name="Building2" size={14} className="text-muted-foreground" />
                                <span>Терминал {flight.terminal}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-end">
                        <Badge
                          className={`${getStatusColor(
                            flight.status
                          )} px-4 py-2 text-sm font-semibold border-2 flex items-center gap-2`}
                        >
                          <Icon name={getStatusIcon(flight.status)} size={16} />
                          {getStatusText(flight.status)}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="services" className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Наши услуги</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Комфортный сервис для пассажиров и эффективная работа с авиакомпаниями
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-primary/30 hover:shadow-lg transition-all group">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Wifi" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-xl">Бесплатный Wi-Fi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Высокоскоростной интернет во всех зонах аэропорта
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-secondary/30 hover:shadow-lg transition-all group">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="ShoppingBag" size={24} className="text-secondary" />
                </div>
                <CardTitle className="text-xl">Duty Free</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Широкий ассортимент товаров по выгодным ценам
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-accent/30 hover:shadow-lg transition-all group">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Coffee" size={24} className="text-accent" />
                </div>
                <CardTitle className="text-xl">Рестораны</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Кафе и рестораны на любой вкус в терминалах
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="info" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Icon name="Info" size={24} className="text-primary" />
                  Полезная информация
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <Icon name="Clock" size={20} className="text-muted-foreground mt-1" />
                  <div>
                    <p className="font-medium">Режим работы</p>
                    <p className="text-sm text-muted-foreground">Круглосуточно, 24/7</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Car" size={20} className="text-muted-foreground mt-1" />
                  <div>
                    <p className="font-medium">Парковка</p>
                    <p className="text-sm text-muted-foreground">Многоуровневые паркинги, 2000+ мест</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Shield" size={20} className="text-muted-foreground mt-1" />
                  <div>
                    <p className="font-medium">Безопасность</p>
                    <p className="text-sm text-muted-foreground">Современные системы контроля</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Icon name="Phone" size={24} className="text-primary" />
                  Контакты
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <Icon name="Phone" size={20} className="text-muted-foreground mt-1" />
                  <div>
                    <p className="font-medium">Горячая линия</p>
                    <p className="text-sm text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" size={20} className="text-muted-foreground mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">info@aerohub.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={20} className="text-muted-foreground mt-1" />
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p className="text-sm text-muted-foreground">г. Москва, ул. Аэропортовая, 1</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Plane" size={20} className="text-white" />
                </div>
                <h4 className="text-xl font-bold">AeroHub</h4>
              </div>
              <p className="text-sm text-slate-300">
                Международный аэропорт нового поколения с современной инфраструктурой
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Навигация</h5>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Главная
                  </a>
                </li>
                <li>
                  <a href="#schedule" className="hover:text-primary transition-colors">
                    Расписание
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary transition-colors">
                    Услуги
                  </a>
                </li>
                <li>
                  <a href="#info" className="hover:text-primary transition-colors">
                    Информация
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Социальные сети</h5>
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20">
                  <Icon name="Facebook" size={18} />
                </Button>
                <Button size="icon" variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20">
                  <Icon name="Twitter" size={18} />
                </Button>
                <Button size="icon" variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20">
                  <Icon name="Instagram" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
            <p>© 2024 AeroHub. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
