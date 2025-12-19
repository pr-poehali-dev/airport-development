import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
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
  );
};

export default Header;
