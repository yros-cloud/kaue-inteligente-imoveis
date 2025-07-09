
import { useState } from "react";
import { Search, MapPin, Phone, Mail, MessageCircle, Users, Award, TrendingUp, Star, Heart, Share2, Filter, Bed, Bath, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showChatbot, setShowChatbot] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { type: "bot", message: "Olá! Sou a assistente virtual da Kaue Imóveis. Como posso te ajudar hoje?" }
  ]);
  const [currentMessage, setCurrentMessage] = useState("");

  const properties = [
    {
      id: 1,
      title: "Apartamento Luxo Beira Mar",
      location: "Copacabana, Rio de Janeiro",
      price: "R$ 2.850.000",
      bedrooms: 3,
      bathrooms: 2,
      area: 145,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Casa Moderna Condomínio",
      location: "Barra da Tijuca, Rio de Janeiro",
      price: "R$ 1.950.000",
      bedrooms: 4,
      bathrooms: 3,
      area: 220,
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop",
      featured: false
    },
    {
      id: 3,
      title: "Cobertura Vista Panorâmica",
      location: "Ipanema, Rio de Janeiro",
      price: "R$ 4.200.000",
      bedrooms: 4,
      bathrooms: 4,
      area: 280,
      image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=400&h=300&fit=crop",
      featured: true
    }
  ];

  const handleSearch = () => {
    toast({
      title: "Busca realizada!",
      description: `Procurando por "${searchTerm}"...`,
    });
  };

  const handleChatSend = () => {
    if (!currentMessage.trim()) return;
    
    const newMessages = [
      ...chatMessages,
      { type: "user", message: currentMessage },
      { type: "bot", message: "Obrigada pela sua mensagem! Nossa equipe entrará em contato em breve. Posso te ajudar com mais alguma coisa?" }
    ];
    
    setChatMessages(newMessages);
    setCurrentMessage("");
    
    toast({
      title: "Mensagem enviada!",
      description: "Nossa equipe entrará em contato em breve.",
    });
  };

  const handleContactForm = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Contato enviado!",
      description: "Entraremos em contato em até 2 horas úteis.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                Kaue Imóveis
              </h1>
              <p className="text-xs text-gray-600">Realizando sonhos desde 2020</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#imoveis" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Imóveis</a>
            <a href="#sobre" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Sobre</a>
            <a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contato</a>
            <Button className="bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600">
              <Phone className="w-4 h-4 mr-2" />
              (11) 96654-3889
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-emerald-500/10"></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            #1 em vendas na zona sul
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Encontre o seu
            <span className="block bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
              Imóvel dos Sonhos
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Com inteligência artificial e atendimento personalizado, transformamos sua busca por imóveis em uma experiência única e eficiente.
          </p>

          {/* Search Bar with AI */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Digite o bairro, cidade ou tipo de imóvel..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 h-14 text-lg border-0 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <Button 
                  onClick={handleSearch}
                  className="h-14 px-8 bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 text-lg font-semibold"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Buscar com IA
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="secondary" className="cursor-pointer hover:bg-blue-100">
                  Copacabana
                </Badge>
                <Badge variant="secondary" className="cursor-pointer hover:bg-blue-100">
                  Ipanema
                </Badge>
                <Badge variant="secondary" className="cursor-pointer hover:bg-blue-100">
                  Barra da Tijuca
                </Badge>
                <Badge variant="secondary" className="cursor-pointer hover:bg-blue-100">
                  Apartamento
                </Badge>
                <Badge variant="secondary" className="cursor-pointer hover:bg-blue-100">
                  Casa
                </Badge>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Imóveis Vendidos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-500 mb-2">1.2k+</div>
              <div className="text-gray-600">Clientes Felizes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-500 mb-2">24/7</div>
              <div className="text-gray-600">Atendimento IA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="imoveis" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Imóveis em Destaque</h2>
            <p className="text-xl text-gray-600">Selecionados especialmente para você pela nossa IA</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <Card key={property.id} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <div className="relative">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {property.featured && (
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-emerald-500">
                      <Star className="w-3 h-3 mr-1" />
                      Destaque
                    </Badge>
                  )}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <Button size="sm" variant="secondary" className="w-8 h-8 p-0 bg-white/80 hover:bg-white">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="w-8 h-8 p-0 bg-white/80 hover:bg-white">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold">{property.title}</h3>
                    <span className="text-2xl font-bold text-blue-600">{property.price}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Bed className="w-4 h-4 mr-1" />
                        {property.bedrooms}
                      </div>
                      <div className="flex items-center">
                        <Bath className="w-4 h-4 mr-1" />
                        {property.bathrooms}
                      </div>
                      <div className="flex items-center">
                        <Square className="w-4 h-4 mr-1" />
                        {property.area}m²
                      </div>
                    </div>
                    
                    <Button className="bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600">
                      Ver Detalhes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              <Filter className="w-5 h-5 mr-2" />
              Ver Todos os Imóveis
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-gradient-to-r from-blue-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Por que escolher a Kaue Imóveis?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Somos pioneiros em usar inteligência artificial para revolucionar o mercado imobiliário, oferecendo uma experiência personalizada e eficiente para cada cliente.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Atendimento Personalizado</h3>
                    <p className="text-gray-600">Nossa IA aprende suas preferências para oferecer as melhores opções</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Excelência Reconhecida</h3>
                    <p className="text-gray-600">Premiados como a melhor imobiliária da zona sul em 2023</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Resultados Comprovados</h3>
                    <p className="text-gray-600">Vendemos 40% mais rápido que a média do mercado</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=600&h=400&fit=crop" 
                alt="Kaue Imóveis" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold text-blue-600 mb-1">98%</div>
                <div className="text-sm text-gray-600">Satisfação dos Clientes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
            <p className="text-xl text-gray-600">Estamos prontos para ajudar você a encontrar o imóvel perfeito</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left">Fale Conosco Agora</h3>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <Button className="h-16 bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 text-lg">
                    <Phone className="w-5 h-5 mr-3" />
                    <div className="text-left">
                      <div className="font-semibold">Ligar Agora</div>
                      <div className="text-sm opacity-90">(11) 96654-3889</div>
                    </div>
                  </Button>

                  <Button variant="outline" className="h-16 border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white text-lg">
                    <MessageCircle className="w-5 h-5 mr-3" />
                    <div className="text-left">
                      <div className="font-semibold">WhatsApp</div>
                      <div className="text-sm opacity-75">Resposta imediata</div>
                    </div>
                  </Button>
                </div>
              </div>

              <form onSubmit={handleContactForm} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input placeholder="Seu nome" className="h-12" required />
                  <Input placeholder="Seu telefone" type="tel" className="h-12" required />
                </div>
                <Input placeholder="Seu e-mail" type="email" className="h-12" required />
                <textarea 
                  placeholder="Como podemos te ajudar?"
                  className="w-full p-4 border rounded-lg h-32 resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <Button type="submit" className="w-full h-12 bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 text-lg font-semibold">
                  <Mail className="w-5 h-5 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Telefone</div>
                    <div className="text-gray-600">(11) 96654-3889</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-semibold">E-mail</div>
                    <div className="text-gray-600">contato@kaueimoveis.com.br</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Endereço</div>
                    <div className="text-gray-600">Av. Atlântica, 1234 - Copacabana<br />Rio de Janeiro - RJ</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-xl border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2h</div>
                  <div className="text-sm text-gray-600">Tempo médio de resposta</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">K</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Kaue Imóveis</h3>
                <p className="text-gray-400 text-sm">Realizando sonhos desde 2020</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6">© 2024 Kaue Imóveis. Todos os direitos reservados.</p>
            
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">CRECI: 12345-RJ</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
        {showChatbot && (
          <Card className="w-80 mb-4 shadow-2xl border-0 animate-scale-in">
            <div className="bg-gradient-to-r from-blue-600 to-emerald-500 text-white p-4 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold">Assistente IA</div>
                    <div className="text-xs opacity-90">Online agora</div>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-white hover:bg-white/20 h-8 w-8 p-0"
                  onClick={() => setShowChatbot(false)}
                >
                  ×
                </Button>
              </div>
            </div>
            
            <div className="h-64 overflow-y-auto p-4 space-y-3">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs p-3 rounded-lg text-sm ${
                    msg.type === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {msg.message}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  placeholder="Digite sua mensagem..."
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleChatSend()}
                  className="flex-1"
                />
                <Button 
                  size="sm" 
                  onClick={handleChatSend}
                  className="bg-gradient-to-r from-blue-600 to-emerald-500"
                >
                  →
                </Button>
              </div>
            </div>
          </Card>
        )}
        
        <Button
          size="lg"
          className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 shadow-2xl animate-bounce"
          onClick={() => setShowChatbot(!showChatbot)}
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
