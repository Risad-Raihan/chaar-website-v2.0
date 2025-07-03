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
  Image,
  Divider,
  Spacer,
  Link,
  Badge,
  Accordion,
  AccordionItem
} from '@heroui/react'
import { useState, useEffect } from 'react'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeTab, setActiveTab] = useState("food")
  const [particles, setParticles] = useState<Array<{left: number, top: number, delay: number}>>([])
  const {isOpen, onOpen, onOpenChange} = useDisclosure()

  useEffect(() => {
    setIsLoaded(true)
    // Generate particles only on client side to avoid hydration mismatch
    const newParticles = Array.from({ length: 10 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2
    }))
    setParticles(newParticles)
  }, [])

  const categories = [
    { id: 'food', name: 'Food', icon: '🍔', deals: 23, color: 'from-orange-500 to-red-500' },
    { id: 'clothing', name: 'Clothing', icon: '👕', deals: 18, color: 'from-purple-500 to-pink-500' },
    { id: 'accessories', name: 'Accessories', icon: '🛍️', deals: 12, color: 'from-emerald-500 to-teal-500' },
    { id: 'groceries', name: 'Groceries', icon: '🛒', deals: 15, color: 'from-blue-500 to-cyan-500' }
  ]

  const features = [
    { icon: '🎯', title: 'Smart Location Targeting', desc: 'Find deals within 5km of your location' },
    { icon: '⚡', title: 'Real-time Updates', desc: 'Get notified when new deals go live' },
    { icon: '🔥', title: 'Hot Deals Alert', desc: 'Never miss limited-time offers' },
    { icon: '💰', title: 'Save up to 70%', desc: 'Verified discounts from trusted partners' }
  ]

  const testimonials = [
    { name: 'Sarah Ahmed', location: 'Dhanmondi', rating: 5, text: 'Saved 2000 BDT on groceries this month!', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5a0?w=150' },
    { name: 'Rakib Hassan', location: 'Gulshan', rating: 5, text: 'Best discount app for Dhaka. Love it!', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150' },
    { name: 'Fatima Khan', location: 'Chittagong', rating: 5, text: 'Finally available in Chittagong! Amazing deals.', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150' }
  ]

  return (
    <main className="min-h-screen w-full relative">
      {/* Background Layer */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-emerald-900/20" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
      </div>

      {/* Floating Particles - Only render after hydration */}
      {particles.length > 0 && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-emerald-400 rounded-full opacity-30"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: particle.delay
              }}
            />
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              {/* Left Content */}
              <div className="space-y-10 max-w-2xl">
                {/* Status Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex justify-start"
                >
                  <Badge content="LIVE" color="success" placement="top-right" className="rounded-full">
                    <Chip 
                      startContent="🇧🇩"
                      variant="flat"
                      className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 font-bold px-6 py-3 text-lg border border-emerald-500/30 rounded-full"
                    >
                      Available in Dhaka & Chittagong
                    </Chip>
                  </Badge>
                </motion.div>

                {/* Main Heading */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="space-y-6"
                >
                  <h1 className="text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight">
                    Discover{" "}
                    <span className="bg-gradient-to-r from-purple-400 via-emerald-400 to-amber-400 bg-clip-text text-transparent tracking-wide">
                      Bangladesh's
                    </span>
                    <br />
                    <span className="text-5xl lg:text-6xl tracking-wide">Best Deals</span>
                  </h1>
                  <p className="text-xl text-slate-300 leading-relaxed tracking-wide">
                    Save up to{" "}
                    <span className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent tracking-wider">70%</span>{" "}
                    on food, clothing, accessories & groceries in{" "}
                    <span className="text-emerald-400 font-semibold tracking-wide">Dhaka & Chittagong</span>
                  </p>
                </motion.div>

                {/* Stats Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-6"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/30 backdrop-blur-md border border-purple-500/30 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl">
                      <CardBody className="text-center p-6 space-y-3">
                        <div className="text-4xl font-black text-purple-400 tracking-wide">68+</div>
                        <div className="text-slate-300 font-medium text-sm tracking-wide">Active Deals</div>
                        <div className="w-8 h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full mx-auto"></div>
                      </CardBody>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <Card className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/30 backdrop-blur-md border border-emerald-500/30 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl">
                      <CardBody className="text-center p-6 space-y-3">
                        <div className="text-4xl font-black text-emerald-400 tracking-wide">2.5K+</div>
                        <div className="text-slate-300 font-medium text-sm tracking-wide">Happy Users</div>
                        <div className="w-8 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full mx-auto"></div>
                      </CardBody>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <Card className="bg-gradient-to-br from-amber-500/20 to-amber-600/30 backdrop-blur-md border border-amber-500/30 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl">
                      <CardBody className="text-center p-6 space-y-3">
                        <div className="text-4xl font-black text-amber-400 tracking-wide">70%</div>
                        <div className="text-slate-300 font-medium text-sm tracking-wide">Max Savings</div>
                        <div className="w-8 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto"></div>
                      </CardBody>
                    </Card>
                  </motion.div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="flex flex-col sm:flex-row gap-4 pt-6"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-emerald-600 text-white font-bold px-8 py-6 text-lg hover:scale-105 transition-all duration-300 shadow-xl shadow-purple-500/20 rounded-2xl tracking-wide"
                    startContent="📱"
                    endContent="→"
                  >
                    Download for Android
                  </Button>
                  <Button
                    size="lg"
                    variant="bordered"
                    className="border-2 border-amber-400 text-amber-400 font-bold px-8 py-6 text-lg hover:bg-amber-400 hover:text-black transition-all duration-300 rounded-2xl tracking-wide"
                    startContent="🍎"
                    endContent="→"
                  >
                    Download for iOS
                  </Button>
                </motion.div>

                {/* Social Proof */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="pt-6"
                >
                  <div className="flex items-center gap-6">
                    <div className="flex -space-x-3">
                      {testimonials.map((user, i) => (
                        <Avatar
                          key={i}
                          src={user.avatar}
                          className="border-3 border-purple-500 w-12 h-12"
                        />
                      ))}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-amber-400 text-lg">⭐</span>
                        ))}
                        <span className="text-white font-bold ml-2">4.9/5</span>
                      </div>
                      <p className="text-slate-400 text-sm">From 2,500+ verified users</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Content - App Mockup */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center lg:justify-end"
              >
                <div className="relative max-w-sm mx-auto">
                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [0, -15, 0], rotate: [0, 3, -3, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-4 -right-4 z-20"
                  >
                    <Card className="bg-gradient-to-r from-orange-500 to-red-500 shadow-2xl rounded-2xl">
                      <CardBody className="text-center text-white px-4 py-3">
                        <div className="text-lg font-bold">🚀</div>
                        <div className="text-xs font-semibold">Just Launched!</div>
                      </CardBody>
                    </Card>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 12, 0], rotate: [0, -2, 2, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-4 -left-4 z-20"
                  >
                    <Card className="bg-gradient-to-r from-emerald-500 to-teal-500 shadow-2xl rounded-2xl">
                      <CardBody className="text-center text-white px-4 py-3">
                        <div className="text-lg font-bold">💯</div>
                        <div className="text-xs font-semibold">100% FREE</div>
                      </CardBody>
                    </Card>
                  </motion.div>

                  {/* Main Phone Mockup */}
                  <Card className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-purple-500/30 shadow-2xl rounded-3xl overflow-hidden">
                    <CardBody className="p-6 w-80 space-y-6">
                      {/* App Header Card */}
                      <Card className="bg-gradient-to-r from-slate-700/30 to-slate-800/30 border border-slate-600/30 rounded-2xl">
                        <CardBody className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Avatar 
                                src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100"
                                className="ring-2 ring-purple-500 w-12 h-12"
                              />
                              <div>
                                <h3 className="text-xl font-bold text-white tracking-wide">Chaar BD</h3>
                                <p className="text-emerald-400 text-sm tracking-wide">Find discounts near you</p>
                              </div>
                            </div>
                            <Badge content="5" color="danger" placement="top-right" className="rounded-full">
                              <Button isIconOnly variant="flat" className="bg-purple-500/20 rounded-full">
                                🔔
                              </Button>
                            </Badge>
                          </div>
                        </CardBody>
                      </Card>

                      {/* Location Card */}
                      <Card className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-2xl">
                        <CardBody className="p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-slate-400 text-sm">Current Location</p>
                              <p className="text-white font-bold">📍 Dhaka, Bangladesh</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                              <span className="text-emerald-400 text-sm font-medium">Active</span>
                            </div>
                          </div>
                        </CardBody>
                      </Card>

                      {/* Category Tabs */}
                      <div className="space-y-4">
                        <Tabs 
                          selectedKey={activeTab} 
                          onSelectionChange={(key) => setActiveTab(String(key))}
                          variant="underlined"
                          classNames={{
                            tabList: "gap-4 w-full relative rounded-none p-0",
                            cursor: "w-full bg-purple-500 rounded-full",
                            tab: "max-w-fit px-0 h-10",
                            tabContent: "group-data-[selected=true]:text-purple-400"
                          }}
                        >
                          {categories.map(category => (
                            <Tab key={category.id} title={
                              <div className="flex items-center space-x-2">
                                <span className="text-lg">{category.icon}</span>
                                <span className="font-medium text-sm">{category.name}</span>
                              </div>
                            }>
                              <Card className={`bg-gradient-to-r ${category.color}/20 border border-current/30 mt-4 rounded-2xl`}>
                                <CardBody className="p-4">
                                  <div className="text-center space-y-2">
                                    <div className="text-3xl">{category.icon}</div>
                                    <h4 className="text-white font-bold">{category.name}</h4>
                                    <p className="text-slate-300 text-sm">{category.deals} active deals</p>
                                    <Progress 
                                      value={category.deals * 3} 
                                      className="mt-2"
                                      color="secondary"
                                      classNames={{
                                        track: "bg-slate-700",
                                        indicator: "bg-gradient-to-r from-purple-500 to-emerald-500"
                                      }}
                                    />
                                  </div>
                                </CardBody>
                              </Card>
                            </Tab>
                          ))}
                        </Tabs>
                      </div>

                      {/* Hot Deals */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <h4 className="text-white font-bold">🔥 Hot Deals</h4>
                          <Chip size="sm" color="danger" className="rounded-full">Live</Chip>
                        </div>
                        
                        <Card className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-2xl">
                          <CardBody className="p-4 space-y-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <Badge content="LIMITED" color="warning" placement="top-right" className="rounded-full">
                                  <Image
                                    src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=60&h=60&fit=crop"
                                    alt="Pizza"
                                    className="w-12 h-12 rounded-xl object-cover"
                                  />
                                </Badge>
                                <div>
                                  <h5 className="text-white font-bold text-sm">Pizza Hut Dhanmondi</h5>
                                  <p className="text-slate-400 text-xs">2.1 km away • ⏱️ 2h left</p>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-2xl font-bold text-red-400">70% OFF</p>
                                <p className="text-slate-300 text-sm">Buy 1 Get 1 Free</p>
                              </div>
                              <Button 
                                size="sm" 
                                className="bg-red-500 text-white rounded-xl font-medium"
                                onPress={onOpen}
                              >
                                Claim →
                              </Button>
                            </div>
                          </CardBody>
                        </Card>

                        <Card className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl">
                          <CardBody className="p-4 space-y-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <Image
                                  src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=60&h=60&fit=crop"
                                  alt="Fashion"
                                  className="w-12 h-12 rounded-xl object-cover"
                                />
                                <div>
                                  <h5 className="text-white font-bold text-sm">Aarong Gulshan</h5>
                                  <p className="text-slate-400 text-xs">1.8 km away • 🆕 New</p>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-2xl font-bold text-purple-400">50% OFF</p>
                                <p className="text-slate-300 text-sm">Summer Collection</p>
                              </div>
                              <Button 
                                size="sm" 
                                variant="bordered"
                                className="border-purple-400 text-purple-400 rounded-xl font-medium"
                              >
                                View →
                              </Button>
                            </div>
                          </CardBody>
                        </Card>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-transparent to-slate-900/50">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16 space-y-4"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-wide">
                Why Choose <span className="bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent tracking-wider">Chaar BD</span>?
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto tracking-wide leading-relaxed">
                Experience the future of discount hunting with our AI-powered platform designed specifically for Bangladesh
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md border border-purple-500/20 h-full hover:border-purple-500/40 transition-all duration-300 rounded-2xl">
                    <CardBody className="text-center p-8 space-y-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-emerald-500/20 rounded-2xl blur-lg"></div>
                        <div className="relative bg-gradient-to-br from-purple-500/10 to-emerald-500/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-2 border border-purple-500/20">
                          <span className="text-4xl">{feature.icon}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-white tracking-wide">{feature.title}</h3>
                      <p className="text-slate-300 text-sm leading-relaxed tracking-wide">{feature.desc}</p>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16 space-y-4"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-wide">
                What Our Users Say
              </h2>
              <p className="text-lg text-slate-300 tracking-wide leading-relaxed">
                Join thousands of satisfied customers saving money every day
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md border border-emerald-500/20 h-full rounded-2xl">
                    <CardBody className="p-8 space-y-6">
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-amber-400 text-lg">⭐</span>
                        ))}
                      </div>
                      <p className="text-slate-300 text-lg italic leading-relaxed">"{testimonial.text}"</p>
                      <div className="flex items-center gap-3">
                        <Avatar src={testimonial.avatar} className="ring-2 ring-emerald-500 w-12 h-12" />
                        <div>
                          <p className="text-white font-bold">{testimonial.name}</p>
                          <p className="text-slate-400 text-sm">{testimonial.location}</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6 bg-gradient-to-t from-slate-900/50 to-transparent">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16 space-y-4"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-wide">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Accordion variant="splitted" className="space-y-4">
                <AccordionItem 
                  key="1" 
                  aria-label="How does it work" 
                  title="How does Chaar BD work?" 
                  className="text-white bg-slate-800/50 rounded-2xl border border-purple-500/20"
                >
                  <p className="text-slate-300 pb-4">
                    Chaar BD uses advanced AI to scan and verify discounts from hundreds of stores across Dhaka and Chittagong. 
                    Simply download the app, enable location services, and start discovering deals near you!
                  </p>
                </AccordionItem>
                <AccordionItem 
                  key="2" 
                  aria-label="Is it free" 
                  title="Is Chaar BD completely free?" 
                  className="text-white bg-slate-800/50 rounded-2xl border border-purple-500/20"
                >
                  <p className="text-slate-300 pb-4">
                    Yes! Chaar BD is completely free to download and use. We make money through partnerships with stores, 
                    so you never pay anything to access deals.
                  </p>
                </AccordionItem>
                <AccordionItem 
                  key="3" 
                  aria-label="Locations" 
                  title="Which areas are covered?" 
                  className="text-white bg-slate-800/50 rounded-2xl border border-purple-500/20"
                >
                  <p className="text-slate-300 pb-4">
                    Currently, we cover Dhaka and Chittagong with plans to expand to Sylhet and Rajshahi soon. 
                    We're working hard to bring Chaar BD to more cities across Bangladesh.
                  </p>
                </AccordionItem>
                <AccordionItem 
                  key="4" 
                  aria-label="Updates" 
                  title="How often are deals updated?" 
                  className="text-white bg-slate-800/50 rounded-2xl border border-purple-500/20"
                >
                  <p className="text-slate-300 pb-4">
                    Our AI system updates deals every 3-4 days, and we verify each deal to ensure accuracy. 
                    You'll also receive push notifications for hot deals and limited-time offers.
                  </p>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-purple-900/20 to-emerald-900/20">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-5xl lg:text-6xl font-bold text-white tracking-wide">
                Ready to Start <span className="bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent tracking-wider">Saving?</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto tracking-wide leading-relaxed">
                Join thousands of smart shoppers and never pay full price again
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-emerald-600 text-white font-bold px-10 py-6 text-xl hover:scale-105 transition-all duration-300 shadow-xl rounded-2xl tracking-wide"
                  startContent="📱"
                >
                  Download Now
                </Button>
                <Button
                  size="lg"
                  variant="bordered"
                  className="border-2 border-white text-white font-bold px-10 py-6 text-xl hover:bg-white hover:text-black transition-all duration-300 rounded-2xl tracking-wide"
                  startContent="🎯"
                >
                  View Demo
                </Button>
              </div>
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
                <Image
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
