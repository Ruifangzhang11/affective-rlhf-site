export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-8">
      <header className="text-center mb-20">
        <h1 className="text-5xl font-extrabold tracking-tight">Affective RLHF</h1>
        <p className="mt-4 text-xl text-gray-300">Let machines learn from what you feel, not just what you click.</p>
        <button className="mt-6 text-lg px-6 py-3 bg-white text-black rounded-lg">Join the Revolution</button>
      </header>

      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-4">The Problem</h2>
          <p className="text-gray-300">Explicit human feedback is noisy, expensive, and shallow. It doesn't reflect how people really feel.</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Solution</h2>
          <p className="text-gray-300">We use real-time physiological signals—EEG, GSR, HRV, and eye tracking—to directly model human preference.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-6 text-center">Why Now</h2>
        <ul className="text-gray-300 space-y-3 list-disc list-inside">
          <li>LLMs need better alignment</li>
          <li>Wearables are cheap and accurate</li>
          <li>Feedback should be implicit and real-time</li>
        </ul>
      </section>

      <footer className="text-center text-gray-500 mt-20">
        <p>© 2025 Affective RLHF. All rights reserved.</p>
      </footer>
    </div>
  );
}
