import React, { useState } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Input } from './components/ui/input'
import { Textarea } from './components/ui/textarea'
import { Label } from './components/ui/label'
import { Leaf, Heart, Zap, Shield, Mail, Phone, MapPin } from 'lucide-react'
import './App.css'

// Import images
import logo from './assets/logo.png'
import varietiesImage from './assets/microgreens_varieties.jpg'
import growingImage from './assets/microgreens_growing.jpg'
import benefitsImage from './assets/microgreens_benefits.jpg'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="GrowGood Microgreens" className="h-16 w-auto" />
              <span className="text-xl font-bold text-primary">GrowGood Microgreens</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">About</a>
              <a href="#microgreens" className="text-gray-700 hover:text-primary transition-colors">Our Microgreens</a>
              <a href="#benefits" className="text-gray-700 hover:text-primary transition-colors">Benefits</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-green-50 to-green-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Fresh, Nutritious
                <span className="text-primary block">Microgreens</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover the power of microgreens - packed with nutrients, bursting with flavor, 
                and perfect for elevating your culinary creations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <a href="#contact">Get In Touch</a>
                </Button>
                <Button variant="outline" size="lg">
                  <a href="#microgreens">Learn More</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={varietiesImage} 
                alt="Fresh microgreens varieties" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About GrowGood Microgreens</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're passionate about bringing you the freshest, most nutritious microgreens. 
              Our commitment to quality and sustainability drives everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={growingImage} 
                alt="Microgreens growing process" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
              <p className="text-gray-600 mb-6">
                GrowGood Microgreens was born from a passion for healthy living and sustainable agriculture. 
                We believe that everyone deserves access to fresh, nutrient-dense foods that not only taste 
                amazing but also support optimal health.
              </p>
              <p className="text-gray-600 mb-6">
                Our microgreens are grown with care using sustainable practices, ensuring that every harvest 
                delivers maximum nutrition and flavor. From seed to harvest, we maintain the highest standards 
                of quality and freshness.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-gray-600">Organic</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">Fresh</div>
                  <div className="text-sm text-gray-600">Daily Harvest</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Microgreens Section */}
      <section id="microgreens" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Microgreens</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We grow a variety of microgreens, each with its own unique flavor profile and nutritional benefits.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Arugula",
                description: "Peppery and bold, perfect for salads and sandwiches",
                nutrients: "High in Vitamin K, Folate, and Calcium"
              },
              {
                name: "Broccoli",
                description: "Mild and fresh with a subtle broccoli flavor",
                nutrients: "Rich in Vitamin C, Sulforaphane, and Antioxidants"
              },
              {
                name: "Pea Shoots",
                description: "Sweet and tender with a fresh pea taste",
                nutrients: "Packed with Protein, Vitamin A, and Iron"
              },
              {
                name: "Radish",
                description: "Spicy and crisp, adds a kick to any dish",
                nutrients: "High in Vitamin E, Magnesium, and Phosphorus"
              },
              {
                name: "Sunflower",
                description: "Nutty and crunchy with a satisfying texture",
                nutrients: "Rich in Healthy Fats, Protein, and Vitamin E"
              },
              {
                name: "Kale",
                description: "Earthy and robust, a superfood in miniature",
                nutrients: "Loaded with Vitamin K, Iron, and Beta-Carotene"
              }
            ].map((microgreen, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-primary">{microgreen.name}</CardTitle>
                  <CardDescription>{microgreen.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{microgreen.nutrients}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Why Choose Microgreens?</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Nutrient Dense</h3>
                    <p className="text-gray-600">
                      Microgreens contain up to 40 times more nutrients than their mature counterparts, 
                      delivering maximum nutrition in every bite.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Health Benefits</h3>
                    <p className="text-gray-600">
                      Rich in antioxidants, vitamins, and minerals that support immune function, 
                      heart health, and overall wellness.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Leaf className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainable</h3>
                    <p className="text-gray-600">
                      Grown using minimal water and space, microgreens are an environmentally 
                      friendly choice for conscious consumers.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Fresh & Safe</h3>
                    <p className="text-gray-600">
                      Harvested fresh and grown in controlled environments, ensuring the highest 
                      quality and food safety standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src={benefitsImage} 
                alt="Health benefits of microgreens" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to experience the freshness of our microgreens? We'd love to hear from you!
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="Tell us about your interest in our microgreens..."
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-gray-600">info@growgoodmicrogreens.com</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="text-gray-600">+1 (555) 123-4567</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-gray-600">Local Farm, Your City</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Why Contact Us?</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Learn about our growing process</li>
                  <li>• Inquire about bulk orders</li>
                  <li>• Ask about specific varieties</li>
                  <li>• Get nutritional information</li>
                  <li>• Discuss partnership opportunities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src={logo} alt="GrowGood Microgreens" className="h-8 w-auto" />
                <span className="text-lg font-bold">GrowGood Microgreens</span>
              </div>
              <p className="text-gray-400">
                Fresh, nutritious microgreens grown with care and delivered with passion.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#microgreens" className="hover:text-white transition-colors">Our Microgreens</a></li>
                <li><a href="#benefits" className="hover:text-white transition-colors">Benefits</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>info@growgoodmicrogreens.com</p>
                <p>+1 (555) 123-4567</p>
                <p>Local Farm, Your City</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 GrowGood Microgreens. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

