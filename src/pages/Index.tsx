import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FlightSchedule, { Flight } from '@/components/FlightSchedule';
import ServicesAndFooter from '@/components/ServicesAndFooter';

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
      <Header />
      <HeroSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FlightSchedule departures={departures} arrivals={arrivals} />
      <ServicesAndFooter />
    </div>
  );
};

export default Index;
