import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

export default function Index() {
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    petName: '',
    ownerName: '',
    phone: '',
    email: '',
    service: '',
    notes: ''
  });

  const services = [
    { 
      id: 'checkup', 
      name: 'Профилактический осмотр', 
      price: '2500 ₽', 
      icon: 'Stethoscope',
      description: 'Комплексный осмотр здоровья питомца'
    },
    { 
      id: 'vaccination', 
      name: 'Вакцинация', 
      price: '1800 ₽', 
      icon: 'Syringe',
      description: 'Плановые и внеплановые прививки'
    },
    { 
      id: 'surgery', 
      name: 'Хирургия', 
      price: 'от 5000 ₽', 
      icon: 'Scissors',
      description: 'Плановые и экстренные операции'
    },
    { 
      id: 'grooming', 
      name: 'Груминг', 
      price: '3000 ₽', 
      icon: 'Sparkles',
      description: 'Стрижка и уход за шерстью'
    },
    { 
      id: 'dental', 
      name: 'Стоматология', 
      price: '2000 ₽', 
      icon: 'Smile',
      description: 'Лечение зубов и десен'
    },
    { 
      id: 'emergency', 
      name: 'Экстренная помощь', 
      price: '24/7', 
      icon: 'Zap',
      description: 'Круглосуточная неотложная помощь'
    }
  ];

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30', '18:00'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Запись создана!\nДата: ${date ? format(date, 'dd.MM.yyyy') : ''}\nВремя: ${selectedTime}\nПитомец: ${formData.petName}\nВладелец: ${formData.ownerName}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-coral-50 via-white to-turquoise-50">
      {/* Навигация */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-coral-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-coral-500 to-turquoise-500 rounded-lg flex items-center justify-center">
                <Icon name="Heart" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold text-charcoal-600">ВетКлиника</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#hero" className="text-charcoal-600 hover:text-coral-600 transition-colors">Главная</a>
              <a href="#services" className="text-charcoal-600 hover:text-coral-600 transition-colors">Услуги</a>
              <a href="#prices" className="text-charcoal-600 hover:text-coral-600 transition-colors">Цены</a>
              <a href="#booking" className="text-charcoal-600 hover:text-coral-600 transition-colors">Записаться</a>
              <a href="#contact" className="text-charcoal-600 hover:text-coral-600 transition-colors">Контакты</a>
            </div>
            <Button className="bg-coral-500 hover:bg-coral-600 text-white">
              <Icon name="Phone" size={16} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
          </div>
        </div>
      </nav>

      {/* Герой секция */}
      <section id="hero" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-charcoal-600 leading-tight mb-6">
                Забота о ваших питомцах —{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral-500 to-turquoise-500">
                  наша миссия
                </span>
              </h1>
              <p className="text-xl text-charcoal-500 mb-8 leading-relaxed">
                Современная ветеринарная клиника с опытными врачами. Мы обеспечиваем комплексный уход за здоровьем ваших любимых питомцев.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-coral-500 hover:bg-coral-600 text-white">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться на приём
                </Button>
                <Button size="lg" variant="outline" className="border-coral-300 text-coral-600 hover:bg-coral-50">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Экстренный вызов
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-coral-600">15+</div>
                  <div className="text-charcoal-500">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-turquoise-600">5000+</div>
                  <div className="text-charcoal-500">довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-coral-600">24/7</div>
                  <div className="text-charcoal-500">экстренная помощь</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-coral-200/50 to-turquoise-200/50 rounded-2xl transform rotate-6"></div>
              <img 
                src="/img/fbcd8571-384d-460e-9798-ab43969c551e.jpg" 
                alt="Ветеринар с питомцем"
                className="relative rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section id="services" className="py-20 px-4 bg-white/70">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal-600 mb-4">Наши услуги</h2>
            <p className="text-xl text-charcoal-500">Полный спектр ветеринарных услуг для ваших питомцев</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-coral-500 to-turquoise-500 rounded-2xl flex items-center justify-center">
                    <Icon name={service.icon as any} size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-charcoal-600">{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="secondary" className="text-coral-600 bg-coral-100 text-lg px-4 py-2">
                    {service.price}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Цены */}
      <section id="prices" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal-600 mb-4">Прайс-лист</h2>
            <p className="text-xl text-charcoal-500">Прозрачные цены на все виды услуг</p>
          </div>
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-charcoal-600 mb-4">Консультации и осмотры</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span>Первичный приём</span>
                      <span className="font-semibold text-coral-600">1500 ₽</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span>Повторный приём</span>
                      <span className="font-semibold text-coral-600">1000 ₽</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span>Профилактический осмотр</span>
                      <span className="font-semibold text-coral-600">2500 ₽</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal-600 mb-4">Процедуры</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span>Вакцинация</span>
                      <span className="font-semibold text-turquoise-600">1800 ₽</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span>Груминг</span>
                      <span className="font-semibold text-turquoise-600">3000 ₽</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span>Стерилизация</span>
                      <span className="font-semibold text-turquoise-600">от 8000 ₽</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Запись на приём */}
      <section id="booking" className="py-20 px-4 bg-white/70">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal-600 mb-4">Записаться на приём</h2>
            <p className="text-xl text-charcoal-500">Выберите удобное время для визита</p>
          </div>
          
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="petName" className="text-charcoal-600">Имя питомца</Label>
                    <Input
                      id="petName"
                      value={formData.petName}
                      onChange={(e) => handleInputChange('petName', e.target.value)}
                      placeholder="Как зовут вашего питомца?"
                      className="mt-1 border-coral-200 focus:border-coral-500"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="ownerName" className="text-charcoal-600">Ваше имя</Label>
                    <Input
                      id="ownerName"
                      value={formData.ownerName}
                      onChange={(e) => handleInputChange('ownerName', e.target.value)}
                      placeholder="Ваше имя"
                      className="mt-1 border-coral-200 focus:border-coral-500"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-charcoal-600">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+7 (999) 123-45-67"
                      className="mt-1 border-coral-200 focus:border-coral-500"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-charcoal-600">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your@email.com"
                      className="mt-1 border-coral-200 focus:border-coral-500"
                    />
                  </div>
                </div>
                
                <div>
                  <Label className="text-charcoal-600">Тип услуги</Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)} required>
                    <SelectTrigger className="mt-1 border-coral-200 focus:border-coral-500">
                      <SelectValue placeholder="Выберите услугу" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.id} value={service.id}>
                          {service.name} — {service.price}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-charcoal-600">Дата приёма</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal mt-1 border-coral-200 focus:border-coral-500",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <Icon name="Calendar" size={16} className="mr-2" />
                          {date ? format(date, 'dd.MM.yyyy') : 'Выберите дату'}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          disabled={(date) => date < new Date() || date.getDay() === 0}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div>
                    <Label className="text-charcoal-600">Время</Label>
                    <Select value={selectedTime} onValueChange={setSelectedTime} required>
                      <SelectTrigger className="mt-1 border-coral-200 focus:border-coral-500">
                        <SelectValue placeholder="Выберите время" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>{time}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="notes" className="text-charcoal-600">Дополнительные пожелания</Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    placeholder="Расскажите о состоянии питомца или особых пожеланиях..."
                    className="mt-1 border-coral-200 focus:border-coral-500"
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-coral-500 to-turquoise-500 hover:from-coral-600 hover:to-turquoise-600 text-white"
                >
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться на приём
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Контакты */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal-600 mb-4">Контакты</h2>
            <p className="text-xl text-charcoal-500">Мы всегда рады помочь вашим питомцам</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl h-full">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-coral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" size={24} className="text-coral-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-charcoal-600 mb-1">Адрес</h3>
                        <p className="text-charcoal-500">г. Москва, ул. Примерная, д. 123</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-turquoise-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" size={24} className="text-turquoise-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-charcoal-600 mb-1">Телефон</h3>
                        <p className="text-charcoal-500">+7 (495) 123-45-67</p>
                        <p className="text-sm text-charcoal-400">Круглосуточно для экстренных случаев</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-coral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Mail" size={24} className="text-coral-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-charcoal-600 mb-1">Email</h3>
                        <p className="text-charcoal-500">info@vetclinic.ru</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-turquoise-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Clock" size={24} className="text-turquoise-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-charcoal-600 mb-1">Режим работы</h3>
                        <p className="text-charcoal-500">Пн-Пт: 9:00 - 20:00</p>
                        <p className="text-charcoal-500">Сб-Вс: 10:00 - 18:00</p>
                        <p className="text-sm text-coral-600 font-medium">24/7 экстренная помощь</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-turquoise-200/50 to-coral-200/50 rounded-2xl transform -rotate-3"></div>
              <img 
                src="/img/8fce1a7e-92ce-43dc-9328-7807b4dfd778.jpg" 
                alt="Счастливые питомцы"
                className="relative rounded-2xl shadow-2xl w-full h-full object-cover min-h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Подвал */}
      <footer className="bg-charcoal-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-coral-500 to-turquoise-500 rounded-lg flex items-center justify-center">
                  <Icon name="Heart" size={20} className="text-white" />
                </div>
                <span className="text-xl font-bold">ВетКлиника</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Мы заботимся о здоровье ваших питомцев с любовью и профессионализмом уже более 15 лет.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Быстрые ссылки</h3>
              <div className="space-y-2">
                <a href="#services" className="text-gray-300 hover:text-coral-300 transition-colors block">Услуги</a>
                <a href="#prices" className="text-gray-300 hover:text-coral-300 transition-colors block">Цены</a>
                <a href="#booking" className="text-gray-300 hover:text-coral-300 transition-colors block">Запись</a>
                <a href="#contact" className="text-gray-300 hover:text-coral-300 transition-colors block">Контакты</a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Экстренная помощь</h3>
              <p className="text-coral-300 font-semibold text-lg">+7 (495) 123-45-67</p>
              <p className="text-gray-300 text-sm mt-1">Круглосуточно, без выходных</p>
              <div className="mt-4 flex space-x-4">
                <Button size="sm" className="bg-coral-500 hover:bg-coral-600">
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ВетКлиника. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}