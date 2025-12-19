import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export interface Flight {
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

interface FlightScheduleProps {
  departures: Flight[];
  arrivals: Flight[];
}

const FlightSchedule = ({ departures, arrivals }: FlightScheduleProps) => {
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

  return (
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
  );
};

export default FlightSchedule;
