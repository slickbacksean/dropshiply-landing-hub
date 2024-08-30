import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Upload, Play, CheckCircle, Star, DollarSign } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white font-sans">
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">DropShiply</h1>
          <div className="space-x-4">
            <a href="#features" className="hover:text-blue-400">Features</a>
            <a href="#tech" className="hover:text-blue-400">Tech Stack</a>
            <a href="#reviews" className="hover:text-blue-400">Reviews</a>
            <a href="#pricing" className="hover:text-blue-400">Pricing</a>
          </div>
        </div>
      </nav>

      <header className="container mx-auto py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Simplify Your Dropshipping Journey</h1>
        <p className="text-xl mb-8">Upload a product image, get wholesale links instantly</p>
        <Card className="max-w-md mx-auto bg-gray-700 p-6 rounded-lg shadow-lg">
          <CardContent>
            <div className="flex items-center justify-center h-40 bg-gray-600 rounded-lg mb-4">
              <Upload size={48} className="text-gray-400" />
            </div>
            <Input type="file" className="mb-4" />
            <Button className="w-full bg-blue-500 hover:bg-blue-600">Find Wholesale Link</Button>
          </CardContent>
        </Card>
      </header>

      <section id="video" className="bg-gray-800 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">See DropShiply in Action</h2>
          <div className="max-w-3xl mx-auto bg-gray-700 rounded-lg shadow-lg p-4">
            <div className="aspect-w-16 aspect-h-9 bg-gray-600 rounded-lg flex items-center justify-center">
              <Play size={64} className="text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Image Recognition', 'Instant Wholesale Links', 'Price Comparison'].map((feature) => (
              <Card key={feature} className="bg-gray-700">
                <CardContent className="p-6">
                  <CheckCircle className="text-blue-400 mb-4" size={32} />
                  <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                  <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tech" className="bg-gray-800 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Built with Cutting-Edge Tech</h2>
          <div className="flex justify-center space-x-8">
            {['React', 'Node.js', 'TensorFlow', 'AWS'].map((tech) => (
              <div key={tech} className="flex flex-col items-center">
                <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center mb-2">
                  <span className="text-2xl">{tech[0]}</span>
                </div>
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'John D.', review: 'DropShiply has revolutionized my e-commerce business!' },
              { name: 'Sarah M.', review: 'The time I save using this tool is incredible.' },
              { name: 'Alex K.', review: 'Best investment for my dropshipping venture.' }
            ].map((review, index) => (
              <Card key={index} className="bg-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="text-yellow-400" size={20} />
                    ))}
                  </div>
                  <p className="mb-4">"{review.review}"</p>
                  <p className="font-semibold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-gray-800 py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Simple, Token-Based Pricing</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Plan</TableHead>
                <TableHead>Tokens</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Features</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { plan: 'Starter', tokens: '100', price: '$10', features: 'Basic image recognition' },
                { plan: 'Pro', tokens: '500', price: '$40', features: 'Advanced recognition + price comparison' },
                { plan: 'Enterprise', tokens: 'Unlimited', price: 'Custom', features: 'Full suite + API access' }
              ].map((tier) => (
                <TableRow key={tier.plan}>
                  <TableCell className="font-medium">{tier.plan}</TableCell>
                  <TableCell>{tier.tokens}</TableCell>
                  <TableCell>{tier.price}</TableCell>
                  <TableCell>{tier.features}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      <footer className="bg-gray-900 py-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-sm">© 2024 DropShiply. All rights reserved.</div>
          <div className="space-x-4">
            <a href="#" className="text-sm hover:text-blue-400">Blog</a>
            <a href="#" className="text-sm hover:text-blue-400">About</a>
            <a href="#" className="text-sm hover:text-blue-400">Privacy</a>
            <a href="#" className="text-sm hover:text-blue-400">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
