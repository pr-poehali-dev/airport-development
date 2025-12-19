import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ServicesAndFooter = () => {
  return (
    <>
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
    </>
  );
};

export default ServicesAndFooter;
