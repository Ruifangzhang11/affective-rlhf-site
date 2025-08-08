import { useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const chartData = [
  { name: "Cost", Research: 100, Traditional: 300 },
  { name: "Latency", Research: 80, Traditional: 250 },
  { name: "Scalability", Research: 300, Traditional: 150 },
];

export default function AffectiveRLHFHome() {
  useEffect(() => {
    document.title = "Affective RLHF | Next-Gen Human Feedback";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <header className="p-6 flex justify-between items-center border-b border-gray-700">
        <h1 className="text-3xl font-bold tracking-tight">Affective RLHF</h1>
        <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black transition-all">Request Demo</Button>
      </header>

      <section className="p-12 text-center">
        <motion.h2 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl font-extrabold mb-6">
          Reinventing Human Feedback with Biometric Signals
        </motion.h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          We bridge the gap between human preference and machine learning with real-time affective signals: EEG, EMG, HRV, and facial micro-expressions. Our approach enables scalable, accurate, and implicit feedback for training reward models.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-6 p-12">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">💡 Problem</h3>
            <p className="text-gray-300 text-sm">
              Human-labeled preference data is time-consuming, expensive, and often noisy. Traditional RLHF pipelines rely heavily on manual ranking, which doesn't scale.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">🧠 Our Solution</h3>
            <p className="text-gray-300 text-sm">
              We use multimodal biosignals collected during the annotation process to infer implicit feedback and emotional reactions—enabling faster, more authentic training data.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">🚀 Impact</h3>
            <p className="text-gray-300 text-sm">
              Reduced annotation cost, faster iteration cycles, and more robust reward models with real-time physiological feedback as supervision signals.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="p-12 bg-gray-900">
        <h3 className="text-3xl font-bold mb-6 text-center">⚖️ Benchmark Comparison</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData} margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Bar dataKey="Research" fill="#4ade80" />
            <Bar dataKey="Traditional" fill="#f87171" />
          </BarChart>
        </ResponsiveContainer>
      </section>

      <section className="p-12 bg-gray-950">
        <h3 className="text-3xl font-bold text-center mb-6">📈 Use Cases</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Card><CardContent className="p-6"><p>🔍 Fine-tuning LLMs with minimal manual preference data</p></CardContent></Card>
          <Card><CardContent className="p-6"><p>🎮 Adaptive game mechanics using players’ real-time emotions</p></CardContent></Card>
          <Card><CardContent className="p-6"><p>🧪 Cognitive research & stimulus-response experiments</p></CardContent></Card>
        </div>
      </section>

      <footer className="p-6 border-t border-gray-700 text-sm text-center text-gray-400">
        © 2025 AffectiveRLHF.ai — Built with ❤️ for the next generation of AI.
      </footer>
    </div>
  );
}