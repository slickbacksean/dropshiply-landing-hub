import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Upload, Play, CheckCircle, Star } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#FFFCF9] text-[#1A1A1A] font-sans">
      <nav className="bg-[#FFFCF9] p-4 border-b border-[#E5E5E5]">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-[#3991C6] rounded-full p-2 mr-2">
              <span className="text-white font-bold">D</span>
            </div>
            <h1 className="text-xl font-bold">DropShiply</h1>
          </div>
          <div className="space-x-6">
            <a href="#features" className="hover:text-[#3991C6]">Features</a>
            <a href="#reviews" className="hover:text-[#3991C6]">Reviews</a>
            <a href="#pricing" className="hover:text-[#3991C6]">Pricing</a>
          </div>
        </div>
      </nav>

      <header className="container mx-auto py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">The <span className="text-[#3991C6]">free</span> dropshipping tool<br />with superpowers</h1>
        <p className="text-xl mb-8 text-[#4A4A4A]">Upload a product image, get wholesale links instantly</p>
        <div className="flex justify-center">
          <Button className="bg-[#3991C6] text-white hover:bg-[#2D7AA0]">Get Started →</Button>
        </div>
      </header>

      <section id="upload" className="container mx-auto mb-20">
        <Card className="max-w-md mx-auto bg-white border border-[#E5E5E5] shadow-lg rounded-lg overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-center justify-center h-40 bg-[#F5F5F5] rounded-lg mb-4">
              <Upload size={48} className="text-[#4A4A4A]" />
            </div>
            <Input type="file" className="mb-4" />
            <Button className="w-full bg-[#3991C6] text-white hover:bg-[#2D7AA0]">Find Wholesale Link</Button>
          </CardContent>
        </Card>
      </section>

      <section id="video" className="bg-[#F5F5F5] py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">See DropShiply in Action</h2>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-4">
            <div className="aspect-w-16 aspect-h-9 bg-[#E5E5E5] rounded-lg flex items-center justify-center">
              <Play size={64} className="text-[#4A4A4A]" />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'image', title: 'Image Recognition', description: 'Upload any product image and get instant results' },
              { icon: 'link', title: 'Wholesale Links', description: 'Access a vast network of verified wholesale suppliers' },
              { icon: 'trending-up', title: 'Price Comparison', description: 'Compare prices across multiple platforms in real-time' },
              { icon: 'zap', title: 'AI-Powered', description: 'Leverage advanced AI for accurate product matching' },
              { icon: 'bar-chart', title: 'Market Analysis', description: 'Get insights on product trends and market demand' },
              { icon: 'shield', title: 'Secure Transactions', description: 'Ensure safe and protected business dealings' }
            ].map((feature) => (
              <Card key={feature.title} className="bg-white border-none shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-[#3991C6] rounded-full p-3 mb-4">
                    <lucide-react.{feature.icon} className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-[#4A4A4A]">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tech" className="bg-[#F5F5F5] py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Built and Ships with</h2>
          <div className="flex justify-center space-x-12">
            {[
              { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
              { name: 'Node.js', logo: 'https://nodejs.org/static/images/logo.svg' },
              { name: 'TensorFlow', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg' },
              { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' }
            ].map((tech) => (
              <div key={tech.name} className="flex flex-col items-center">
                <div className="w-20 h-20 flex items-center justify-center mb-2">
                  <img src={tech.logo} alt={tech.name} className="max-w-full max-h-full" />
                </div>
                <span className="text-[#4A4A4A]">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open-source section removed */}

      <section id="reviews" className="bg-[#F5F5F5] py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Max Khamrovskyi', role: 'Senior Eng @ Red Hat', review: 'I used DropShiply to build and sell my AI-augmented SaaS app for marketplace vendors within two months!' },
              { name: 'Tim Skaggs', role: 'Founder @ Antler US', review: 'Nearly done with a MVP in 3 days of part-time work... and deployed on Fly.io in 10 minutes.' },
              { name: 'Jonathan Cocharan', role: 'Entrepreneur', review: 'In just 6 nights... my SaaS app is live! Huge thanks to the amazing @dropshiply community for their guidance along the way. These tools are incredibly efficient!' }
            ].map((review, index) => (
              <Card key={index} className="bg-white border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-[#3991C6] w-5 h-5" fill="#3991C6" />
                    ))}
                  </div>
                  <p className="mb-6 text-sm italic">"{review.review}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#3991C6] rounded-full mr-4 flex items-center justify-center text-white font-bold text-xl">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-sm text-[#4A4A4A]">{review.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Simple, Token-Based Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: 'Free', tokens: 10, price: '$0', features: ['10 product searches/month', 'Basic image recognition', 'Limited wholesale links'] },
              { name: 'Starter', tokens: 100, price: '$10', features: ['100 product searches/month', 'Advanced image recognition', 'Full wholesale link access', 'Basic market analysis'] },
              { name: 'Pro', tokens: 500, price: '$40', features: ['500 product searches/month', 'Premium image recognition', 'Priority wholesale links', 'Advanced market analysis', '24/7 support'] },
              { name: 'Enterprise', tokens: 'Unlimited', price: 'Custom', features: ['Unlimited searches', 'Custom AI models', 'Dedicated account manager', 'API access', 'Custom integrations'] }
            ].map((plan) => (
              <Card key={plan.name} className="bg-white border-none shadow-md">
                <CardContent className="p-6 text-center flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <p className="text-3xl font-bold text-[#3991C6] mb-4">{plan.price}</p>
                  <p className="mb-4">{plan.tokens} Tokens</p>
                  <ul className="text-left mb-6 flex-grow">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center mb-2">
                        <CheckCircle className="text-[#3991C6] mr-2" size={16} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-[#3991C6] text-white hover:bg-[#2D7AA0]">Choose Plan</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#FFFCF9] py-10 border-t border-[#E5E5E5]">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-sm text-[#4A4A4A]">© 2024 DropShiply. All rights reserved.</div>
          <div className="space-x-6">
            <a href="#" className="text-sm text-[#4A4A4A] hover:text-[#3991C6]">Blog</a>
            <a href="#" className="text-sm text-[#4A4A4A] hover:text-[#3991C6]">About</a>
            <a href="#" className="text-sm text-[#4A4A4A] hover:text-[#3991C6]">Privacy</a>
            <a href="#" className="text-sm text-[#4A4A4A] hover:text-[#3991C6]">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
