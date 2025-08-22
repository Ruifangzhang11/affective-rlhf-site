import { useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

const chartData = [
  { name: "Cost", Research: 100, Traditional: 300 },
  { name: "Latency", Research: 80, Traditional: 250 },
  { name: "Scalability", Research: 300, Traditional: 150 },
  { name: "Accuracy", Research: 95, Traditional: 75 },
  { name: "Speed", Research: 400, Traditional: 100 },
];

const performanceData = [
  { month: "Jan", Traditional: 65, PhysioRLHF: 85 },
  { month: "Feb", Traditional: 68, PhysioRLHF: 88 },
  { month: "Mar", Traditional: 72, PhysioRLHF: 92 },
  { month: "Apr", Traditional: 75, PhysioRLHF: 94 },
  { month: "May", Traditional: 78, PhysioRLHF: 96 },
  { month: "Jun", Traditional: 80, PhysioRLHF: 98 },
];

const signalData = [
  { name: "Heart Rate", value: 40, color: "#ef4444" },
  { name: "HRV", value: 25, color: "#60a5fa" },
  { name: "Activity", value: 20, color: "#4ade80" },
  { name: "Sleep", value: 15, color: "#a78bfa" },
];

const heartRateData = [
  { time: "00:00", bpm: 65 },
  { time: "02:00", bpm: 58 },
  { time: "04:00", bpm: 55 },
  { time: "06:00", bpm: 70 },
  { time: "08:00", bpm: 85 },
  { time: "10:00", bpm: 92 },
  { time: "12:00", bpm: 88 },
  { time: "14:00", bpm: 95 },
  { time: "16:00", bpm: 78 },
  { time: "18:00", bpm: 82 },
  { time: "20:00", bpm: 75 },
  { time: "22:00", bpm: 68 },
];

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "Chief Research Officer",
    expertise: "Neuroscience & ML",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Dr. Marcus Rodriguez",
    role: "CTO & Co-founder",
    expertise: "Computer Science",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Dr. Elena Petrov",
    role: "Head of Biometrics",
    expertise: "Signal Processing",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Dr. James Kim",
    role: "Lead ML Engineer",
    expertise: "Deep Learning",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  }
];

const technologies = [
  { name: "SwiftUI", icon: "📱", description: "iOS Development" },
  { name: "HealthKit", icon: "❤️", description: "Health Data" },
  { name: "WatchKit", icon: "⌚", description: "Apple Watch" },
  { name: "WatchConnectivity", icon: "🔗", description: "Device Sync" },
  { name: "Supabase", icon: "☁️", description: "Backend" },
  { name: "React", icon: "⚛️", description: "Web Frontend" }
];

const features = [
  {
    title: "Real-time Heart Rate Monitoring",
    description: "Continuous heart rate data collection from Apple Watch with millisecond precision",
    icon: "❤️",
    details: ["Live BPM tracking", "HRV analysis", "Activity correlation", "Sleep insights"]
  },
  {
    title: "Cross-device Synchronization",
    description: "Seamless communication between iPhone and Apple Watch using WatchConnectivity",
    icon: "🔗",
    details: ["Real-time data sync", "Automatic pairing", "Connection monitoring", "Offline support"]
  },
  {
    title: "HealthKit Integration",
    description: "Native integration with Apple's health ecosystem for comprehensive data access",
    icon: "🏥",
    details: ["Health data access", "Privacy compliance", "Data persistence", "Background sync"]
  },
  {
    title: "AI Training Integration",
    description: "Physiological feedback for AI model optimization and reinforcement learning",
    icon: "🧠",
    details: ["Real-time feedback", "Model optimization", "Progress tracking", "Performance analytics"]
  }
];

export default function AffectiveRLHFHome() {
  useEffect(() => {
    document.title = "PhysioRLHF | Physiological Reinforcement Learning";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <header className="p-6 flex justify-between items-center border-b border-gray-700">
        <div className="flex items-center space-x-4">
          <h1 className="text-3xl font-bold tracking-tight">PhysioRLHF</h1>
          <span className="text-sm bg-red-600 px-2 py-1 rounded">v2.1</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-red-400 transition-colors">About</a>
          <a href="#features" className="hover:text-red-400 transition-colors">Features</a>
          <a href="#technology" className="hover:text-red-400 transition-colors">Technology</a>
          <a href="#team" className="hover:text-red-400 transition-colors">Team</a>
          <a href="#contact" className="hover:text-red-400 transition-colors">Contact</a>
        </nav>
        <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black transition-all">Download App</Button>
      </header>

      {/* Hero Section */}
      <section className="p-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-purple-600/10"></div>
        <div className="relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent"
          >
            Physiological Reinforcement Learning from Human Feedback
          </motion.h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Revolutionizing AI training with real-time physiological signals from Apple Watch. 
            Our iOS application collects heart rate data to provide authentic, continuous feedback 
            for reinforcement learning models, enabling more natural and responsive AI systems.
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-red-600 hover:bg-red-700 px-8 py-3 text-lg">Download for iOS</Button>
            <Button variant="outline" className="px-8 py-3 text-lg">Watch Demo</Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="p-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12">🚀 Key Features</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-8">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h4 className="text-2xl font-semibold mb-4">{feature.title}</h4>
                    <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <span className="text-red-400 mr-2">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Solution Cards */}
      <section className="grid md:grid-cols-3 gap-8 p-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card className="h-full">
            <CardContent className="p-8">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-2xl font-semibold mb-4">The Problem</h3>
              <p className="text-gray-300 leading-relaxed">
                Traditional RLHF relies on manual preference rankings that are subjective, 
                time-consuming, and don't capture real-time emotional responses. Current methods lack:
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-400">
                <li>• Real-time physiological feedback</li>
                <li>• Continuous data collection</li>
                <li>• Objective biometric measurements</li>
                <li>• Natural user interaction</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card className="h-full">
            <CardContent className="p-8">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-2xl font-semibold mb-4">Our Solution</h3>
              <p className="text-gray-300 leading-relaxed">
                Apple Watch-powered physiological monitoring that provides continuous, 
                real-time heart rate data as feedback signals for AI model training.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-400">
                <li>• Live heart rate monitoring</li>
                <li>• WatchConnectivity integration</li>
                <li>• HealthKit data access</li>
                <li>• Seamless user experience</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card className="h-full">
            <CardContent className="p-8">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-semibold mb-4">The Impact</h3>
              <p className="text-gray-300 leading-relaxed">
                More authentic AI training with physiological feedback, enabling models 
                that respond to real human emotions and reactions.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-400">
                <li>• Authentic emotional feedback</li>
                <li>• Continuous data collection</li>
                <li>• Natural user interaction</li>
                <li>• Improved model performance</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Real-time Heart Rate Demo */}
      <section className="p-12 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-8 text-center">❤️ Real-time Heart Rate Monitoring</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-2xl font-semibold mb-6">Live Physiological Data</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
                  <div className="text-2xl">⌚</div>
                  <div>
                    <h5 className="font-semibold">Apple Watch Integration</h5>
                    <p className="text-sm text-gray-400">Continuous heart rate monitoring with millisecond precision</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
                  <div className="text-2xl">📱</div>
                  <div>
                    <h5 className="font-semibold">iPhone Synchronization</h5>
                    <p className="text-sm text-gray-400">Real-time data transmission via WatchConnectivity</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
                  <div className="text-2xl">🏥</div>
                  <div>
                    <h5 className="font-semibold">HealthKit Integration</h5>
                    <p className="text-sm text-gray-400">Secure health data storage and access</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
                  <div className="text-2xl">🧠</div>
                  <div>
                    <h5 className="font-semibold">AI Training Feedback</h5>
                    <p className="text-sm text-gray-400">Physiological signals for model optimization</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h5 className="text-lg font-semibold mb-4">24-Hour Heart Rate Pattern</h5>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={heartRateData} margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="time" stroke="#ccc" />
                    <YAxis stroke="#ccc" />
                    <Tooltip />
                    <Line type="monotone" dataKey="bpm" stroke="#ef4444" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section id="technology" className="p-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-8 text-center">🔬 Technology Stack</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-2xl font-semibold mb-6">iOS & Apple Watch Development</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
                  <div className="text-2xl">📱</div>
                  <div>
                    <h5 className="font-semibold">SwiftUI & UIKit</h5>
                    <p className="text-sm text-gray-400">Modern iOS development with declarative UI</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
                  <div className="text-2xl">⌚</div>
                  <div>
                    <h5 className="font-semibold">WatchKit & watchOS</h5>
                    <p className="text-sm text-gray-400">Apple Watch app development and heart rate monitoring</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
                  <div className="text-2xl">🔗</div>
                  <div>
                    <h5 className="font-semibold">WatchConnectivity</h5>
                    <p className="text-sm text-gray-400">Real-time communication between iPhone and Apple Watch</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
                  <div className="text-2xl">🏥</div>
                  <div>
                    <h5 className="font-semibold">HealthKit Framework</h5>
                    <p className="text-sm text-gray-400">Health data access and privacy management</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h5 className="text-lg font-semibold mb-4">Data Sources Distribution</h5>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={signalData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {signalData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benchmark Comparison */}
      <section className="p-12 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-8 text-center">⚖️ Performance Benchmark</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-semibold mb-6">Traditional vs PhysioRLHF</h4>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={chartData} margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
                  <XAxis dataKey="name" stroke="#ccc" />
                  <YAxis stroke="#ccc" />
                  <Tooltip />
                  <Bar dataKey="Research" fill="#ef4444" name="PhysioRLHF" />
                  <Bar dataKey="Traditional" fill="#f87171" name="Traditional RLHF" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-6">Performance Over Time</h4>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={performanceData} margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
                  <XAxis dataKey="month" stroke="#ccc" />
                  <YAxis stroke="#ccc" />
                  <Tooltip />
                  <Line type="monotone" dataKey="PhysioRLHF" stroke="#ef4444" strokeWidth={3} />
                  <Line type="monotone" dataKey="Traditional" stroke="#f87171" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="p-12 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12">📈 Applications & Use Cases</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8">
                <div className="text-3xl mb-4">🔍</div>
                <h4 className="text-xl font-semibold mb-4">AI Model Training</h4>
                <p className="text-gray-300 mb-4">
                  Train AI models with real-time physiological feedback from users' 
                  heart rate responses during interaction.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Real-time feedback loops</li>
                  <li>• Physiological reward signals</li>
                  <li>• Continuous model optimization</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <div className="text-3xl mb-4">🎮</div>
                <h4 className="text-xl font-semibold mb-4">Gaming & Entertainment</h4>
                <p className="text-gray-300 mb-4">
                  Adaptive experiences that respond to players' real-time heart rate 
                  and emotional states.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Dynamic difficulty adjustment</li>
                  <li>• Emotional storytelling</li>
                  <li>• Immersive experiences</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <div className="text-3xl mb-4">🧪</div>
                <h4 className="text-xl font-semibold mb-4">Research & Development</h4>
                <p className="text-gray-300 mb-4">
                  Cognitive research and human-computer interaction studies with 
                  precise physiological measurements.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Psychology studies</li>
                  <li>• UX research</li>
                  <li>• Clinical applications</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="p-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12">👥 Our Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6 text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h4 className="font-semibold text-lg">{member.name}</h4>
                    <p className="text-red-400 text-sm mb-2">{member.role}</p>
                    <p className="text-gray-400 text-xs">{member.expertise}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="p-12 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12">🛠️ Technologies We Use</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-2">{tech.icon}</div>
                    <h4 className="font-semibold text-sm">{tech.name}</h4>
                    <p className="text-gray-400 text-xs">{tech.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-12 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8">🚀 Ready to Get Started?</h3>
          <p className="text-xl text-gray-300 mb-8">
            Experience the future of physiological AI training with Apple Watch integration.
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-red-600 hover:bg-red-700 px-8 py-3 text-lg">Download App</Button>
            <Button variant="outline" className="px-8 py-3 text-lg">Contact Sales</Button>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-8 text-sm">
            <div>
              <h4 className="font-semibold mb-2">📧 Email</h4>
              <p className="text-gray-400">hello@physiorlhf.ai</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">📱 Phone</h4>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">📍 Location</h4>
              <p className="text-gray-400">San Francisco, CA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-8 border-t border-gray-700">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">PhysioRLHF</h4>
              <p className="text-gray-400 text-sm">
                Pioneering physiological reinforcement learning with Apple Watch integration.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>iOS App</li>
                <li>Apple Watch App</li>
                <li>Documentation</li>
                <li>API Reference</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>About</li>
                <li>Team</li>
                <li>Careers</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>Help Center</li>
                <li>Contact</li>
                <li>Status</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            © 2025 PhysioRLHF.ai — Built with ❤️ for the next generation of AI.
          </div>
        </div>
      </footer>
    </div>
  );
}