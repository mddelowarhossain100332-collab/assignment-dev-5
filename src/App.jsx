import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import TechCard from "./components/TechCard.jsx";
import StackPanel from "./components/StackPanel.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState([]);

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => setTechnologies(data))
      .catch(() => toast.error("Could not load technologies. Please refresh."))
      .finally(() => setLoading(false));
  }, []);

  const addToStack = (tech) => {
    if (stack.some((item) => item.id === tech.id)) {
      toast.warning(`${tech.name} is already in your stack.`);
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack.`);
  };

  const removeFromStack = (id) => {
    const tech = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));
    toast.info(`${tech.name} removed from your stack.`);
  };

  const removeAll = () => {
    setStack([]);
    toast.info("Your stack is now empty.");
  };

  return (
    <div className="min-h-screen bg-base-200/40">
      <Navbar />
      <Hero />

      <main id="technologies" className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Choose your technologies</h2>
          <p className="mx-auto mt-3 max-w-xl text-base-content/70">
            Compare popular tools by category, difficulty and rating, then add the ones you want to your stack.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <section id="projects">
            {loading ? (
              <div className="flex flex-col items-center gap-3 py-24">
                <span className="loading loading-spinner loading-lg text-secondary"></span>
                <p className="text-base-content/70">Loading technologies...</p>
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {technologies.map((tech) => (
                  <TechCard
                    key={tech.id}
                    tech={tech}
                    added={stack.some((item) => item.id === tech.id)}
                    onAdd={addToStack}
                  />
                ))}
              </div>
            )}
          </section>

          <StackPanel stack={stack} onRemove={removeFromStack} onRemoveAll={removeAll} />
        </div>
      </main>

      <Footer />
      <ToastContainer position="top-right" autoClose={2500} />
    </div>
  );
}
