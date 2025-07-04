"use client";

import { motion } from 'framer-motion'
import { 
  Button, 
  Card, 
  CardBody, 
  CardHeader,
  CardFooter,
  Chip, 
  Avatar, 
  Progress,
  Tabs,
  Tab,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Divider,
  Spacer,
  Link,
  Badge,
  Accordion,
  AccordionItem
} from '@heroui/react'
import { useState } from 'react'

export default function Home() {
  const [activeTab, setActiveTab] = useState("food")
  const {isOpen, onOpen, onOpenChange} = useDisclosure()

  const categories = [
    { id: 'food', name: 'Food', icon: '🍔', deals: 23, color: 'from-orange-500 to-red-500' },
    { id: 'clothing', name: 'Clothing', icon: '👕', deals: 18, color: 'from-purple-500 to-pink-500' },
    { id: 'accessories', name: 'Accessories', icon: '🛍️', deals: 12, color: 'from-emerald-500 to-teal-500' },
    { id: 'groceries', name: 'Groceries', icon: '🛒', deals: 15, color: 'from-blue-500 to-cyan-500' }
  ]

  const features = [
    { icon: '🎯', title: 'Smart Location Targeting', desc: 'Find deals within 5km of your location' },
    { icon: '🤖', title: 'Smart Offer Web Scraping with AI Agent', desc: 'Advanced AI scans thousands of deals automatically' },
    { icon: '🔥', title: 'Hot Deals Alert', desc: 'Never miss limited-time offers' },
    { icon: '💰', title: 'Save up to 70%', desc: 'Verified discounts from trusted partners' }
  ]



  return (
    <main className="min-h-screen w-full relative">
      {/* Background Layer */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-emerald-900/20" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
      </div>



      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 max-w-none">


                {/* Main Heading */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="space-y-16 mb-20"
                >
                                                        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight">
                    <span className="text-gradient-primary">Discover</span>{" "}
                    <span className="text-gradient-primary tracking-wide">
                      your nearest Chaar
                    </span>
                    <br />
                    <span className="text-4xl lg:text-5xl xl:text-6xl text-gradient-secondary tracking-wide">super easily</span>
                  </h1>
                  
                  <div className="pt-6"></div>
                  
                                                        <p className="text-xl lg:text-2xl text-gradient-subtle leading-relaxed tracking-wide max-w-3xl">
                    Save up to{" "}
                    <span className="text-4xl lg:text-5xl font-bold text-gradient-primary tracking-wider">70%</span>{" "}
                    on food, clothing, accessories & groceries in{" "}
                    <span className="text-gradient-accent font-semibold tracking-wide">Dhaka & Chittagong</span>
                  </p>
                </motion.div>

                {/* Stats Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="grid grid-cols-3 gap-6 mb-20"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    whileHover={{ scale: 1.08, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Card className="card-dark rounded-2xl h-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm hover:border-slate-600/70 transition-all duration-300">
                      <CardBody className="text-center p-6 space-y-4">
                        <div className="text-4xl font-black text-gradient-primary">68+</div>
                        <div className="text-gradient-secondary font-medium text-lg">Active Deals</div>
                        <div className="w-12 h-0.5 bg-muted-cyan mx-auto rounded-full"></div>
                      </CardBody>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    whileHover={{ scale: 1.08, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Card className="card-dark rounded-2xl h-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm hover:border-slate-600/70 transition-all duration-300">
                      <CardBody className="text-center p-6 space-y-4">
                        <div className="text-4xl font-black text-gradient-primary">2.5K+</div>
                        <div className="text-gradient-secondary font-medium text-lg">Happy Users</div>
                        <div className="w-12 h-0.5 bg-muted-magenta mx-auto rounded-full"></div>
                      </CardBody>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    whileHover={{ scale: 1.08, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Card className="card-dark rounded-2xl h-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm hover:border-slate-600/70 transition-all duration-300">
                      <CardBody className="text-center p-6 space-y-4">
                        <div className="text-4xl font-black text-gradient-primary">70%</div>
                        <div className="text-gradient-secondary font-medium text-lg">Max Savings</div>
                        <div className="w-12 h-0.5 bg-muted-lime mx-auto rounded-full"></div>
                      </CardBody>
                    </Card>
                  </motion.div>
                </motion.div>

                {/* CTA Buttons & Social Proof */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-20"
                >
                  {/* Download Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-slate-600 to-slate-700 text-white font-semibold px-12 py-4 text-lg hover:scale-110 hover:shadow-2xl hover:shadow-slate-500/30 transition-all duration-300 rounded-xl relative overflow-hidden group"
                      startContent="📱"
                    >
                      <span className="relative z-10">Download for Android</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-500 to-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Button>
                    <Button
                      size="lg"
                      variant="bordered"
                      className="border-2 border-slate-500 text-slate-300 font-semibold px-12 py-4 text-lg hover:bg-slate-500 hover:text-white hover:scale-110 hover:shadow-2xl hover:shadow-slate-500/20 transition-all duration-300 rounded-xl relative overflow-hidden group"
                      startContent="🍎"
                    >
                      <span className="relative z-10">Download for iOS</span>
                      <div className="absolute inset-0 bg-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Button>
                  </div>

                  {/* Social Proof - Compact */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="text-center lg:text-right"
                  >
                    <div className="flex items-center justify-center lg:justify-end gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-500 text-lg">⭐</span>
                      ))}
                      <span className="text-gradient-accent font-bold text-lg ml-2">4.9/5</span>
                    </div>
                    <p className="text-gradient-muted text-sm font-medium">From 2,500+ verified users</p>
                  </motion.div>
                </motion.div>
              </div>

              {/* Right Content - App Screenshots */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-5 flex justify-center items-center"
              >
                <div className="relative flex gap-4">
                  {/* First Image */}
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                      rotate: [0, -1, 0]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="relative z-10"
                  >
                    <img
                      src="/chaar2.jpg"
                      alt="Chaar BD App Screenshot 2"
                      className="w-48 h-auto rounded-xl shadow-lg border border-slate-600/30"
                    />
                  </motion.div>

                  {/* Second Image */}
                  <motion.div
                    animate={{
                      y: [0, 8, 0],
                      rotate: [0, 1, 0]
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    className="relative z-20 -ml-8"
                  >
                    <img
                      src="/chaar1.jpg"
                      alt="Chaar BD App Screenshot 1"
                      className="w-56 h-auto rounded-xl shadow-lg border border-slate-500/40"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-28 px-6 bg-gradient-to-b from-transparent via-slate-900/30 to-slate-900/50 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-slate-600/10 to-slate-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-slate-500/10 to-slate-700/10 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-24 space-y-8"
            >
              <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wide">
                <span className="text-gradient-primary">Why Choose</span> <span className="text-gradient-accent tracking-wider">Chaar</span>?
              </h2>
              <div className="flex justify-center">
                <p className="text-2xl text-gradient-secondary max-w-4xl mx-auto tracking-wide leading-relaxed text-center font-medium">
                  Experience the future of discount hunting with our AI-powered platform designed specifically for Bangladesh
                </p>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    transition: { duration: 0.3, type: "spring", stiffness: 400 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group"
                >
                  <Card className="card-elegant glow-hover h-full rounded-2xl border border-slate-700/50 backdrop-blur-sm relative overflow-hidden">
                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-600/5 to-slate-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <CardBody className="text-center p-6 space-y-5 relative z-10">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-600/20 to-slate-400/20 rounded-xl blur-md group-hover:blur-lg transition-all duration-300"></div>
                        <div className="relative bg-gradient-to-br from-slate-600/10 to-slate-400/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-3 border border-slate-600/20 group-hover:border-slate-400/30 transition-all duration-300">
                          <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                            {feature.icon}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-gradient-accent tracking-wide transition-all duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gradient-subtle text-sm leading-relaxed tracking-wide transition-all duration-300">
                        {feature.desc}
                      </p>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="py-28 px-6 bg-gradient-to-t from-slate-900/50 to-transparent">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20 space-y-6"
            >
              <h2 className="text-5xl lg:text-6xl font-bold text-gradient-primary tracking-wide">
                Contact Us
              </h2>
              <p className="text-xl text-gradient-secondary tracking-wide leading-relaxed max-w-3xl mx-auto">
                Get in touch with us for support, partnerships, or business collaborations
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <Card className="card-dark rounded-3xl border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm">
                  <CardBody className="p-10 space-y-8">
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-gradient-primary tracking-wide">
                        📍 Our Location
                      </h3>
                      <p className="text-lg text-gradient-secondary leading-relaxed">
                        Baridhara DOHS<br />
                        Road Number 6<br />
                        Dhaka, Bangladesh
                      </p>
                    </div>

                    <Divider className="bg-slate-600/50" />

                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-gradient-primary tracking-wide">
                        📧 Email Us
                      </h3>
                      <Link 
                        href="mailto:contact@chaarbd.com" 
                        className="text-lg text-gradient-accent hover:text-gradient-primary transition-all duration-300"
                      >
                        contact@chaarbd.com
                      </Link>
                    </div>

                    <Divider className="bg-slate-600/50" />

                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-gradient-primary tracking-wide">
                        💬 WhatsApp
                      </h3>
                      <Link 
                        href="https://wa.me/8801712345678" 
                        className="text-lg text-gradient-accent hover:text-gradient-primary transition-all duration-300 flex items-center gap-3"
                      >
                        <span>+880 171-234-5678</span>
                        <span className="text-green-500">📱</span>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>

              {/* Business Partnership */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-8"
              >
                <Card className="card-dark rounded-3xl border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm h-full">
                  <CardBody className="p-10 space-y-8">
                    <div className="text-center space-y-6">
                      <div className="text-6xl">🤝</div>
                      <h3 className="text-3xl font-bold text-gradient-primary tracking-wide">
                        Business Partnership
                      </h3>
                    </div>

                    <Divider className="bg-slate-600/50" />

                    <div className="space-y-6">
                      <p className="text-lg text-gradient-secondary leading-relaxed text-center">
                        Are you a local business owner? Join our growing network of partners and reach thousands of customers!
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <span className="text-2xl">🎯</span>
                          <div>
                            <h4 className="font-bold text-gradient-accent mb-2">Promote Your Offers</h4>
                            <p className="text-gradient-subtle">Feature your deals and discounts to our user base</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <span className="text-2xl">📈</span>
                          <div>
                            <h4 className="font-bold text-gradient-accent mb-2">Increase Visibility</h4>
                            <p className="text-gradient-subtle">Get discovered by customers in your area</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <span className="text-2xl">💰</span>
                          <div>
                            <h4 className="font-bold text-gradient-accent mb-2">Boost Sales</h4>
                            <p className="text-gradient-subtle">Drive more foot traffic to your business</p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-6">
                        <Button
                          size="lg"
                          className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold px-8 py-4 text-lg hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 rounded-2xl"
                          startContent="🚀"
                        >
                          Partner With Us Today
                        </Button>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mt-16 pt-12 border-t border-slate-700/50"
            >
              <p className="text-xl text-gradient-secondary max-w-3xl mx-auto leading-relaxed">
                Ready to start saving or partner with us? We're here to help you succeed. 
                <span className="text-gradient-accent font-semibold"> Contact us today!</span>
              </p>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Modal for Deal Details */}
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        backdrop="blur"
        size="lg"
        className="bg-slate-900 rounded-3xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-white">
                🔥 Hot Deal - Pizza Hut Dhanmondi
              </ModalHeader>
              <ModalBody className="space-y-6">
                <img
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=200&fit=crop"
                  alt="Pizza Deal"
                  className="w-full h-48 object-cover rounded-2xl"
                />
                <div className="text-white space-y-4">
                  <h3 className="text-2xl font-bold">70% OFF - Buy 1 Get 1 Free</h3>
                  <p className="text-slate-300">
                    Valid on all Large Pizzas. Perfect for sharing with friends and family!
                  </p>
                  <div className="space-y-3 bg-slate-800/50 p-4 rounded-xl">
                    <p><strong>Location:</strong> Pizza Hut, Dhanmondi Branch</p>
                    <p><strong>Distance:</strong> 2.1 km from your location</p>
                    <p><strong>Valid Until:</strong> Tonight 11:59 PM</p>
                    <p><strong>Terms:</strong> Dine-in only, not valid with other offers</p>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose} className="rounded-xl">
                  Close
                </Button>
                <Button 
                  className="bg-gradient-to-r from-purple-600 to-emerald-600 text-white rounded-xl"
                  onPress={onClose}
                >
                  Get Directions
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </main>
  )
}
