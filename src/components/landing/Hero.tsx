import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-background" />
      
      {/* Decorative circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
            >
              ¡Nuevos Trackers SlimeVR{" "}
              <span className="text-gradient">sin WiFi!</span>{" "}
              <span className="inline-block">🔥</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground mb-4 max-w-lg mx-auto lg:mx-0"
            >
              Más estables, pequeños y con batería de hasta 30 horas.
              <br />
              <span className="font-semibold text-foreground">Ghosty Trackers by Ghosty Labs — Listos para enviarse.</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm text-muted-foreground/70 mb-8 italic"
            >
              by elshavo
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={() => scrollToSection("#paquetes")}
                variant="outline"
                size="lg"
                className="border-2 border-primary text-foreground hover:bg-primary/10 font-semibold px-8"
              >
                Ver paquetes
              </Button>
              <Button
                onClick={() => scrollToSection("#paquetes")}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 shadow-ghosty-md hover:shadow-glow transition-all duration-300"
              >
                Comprar ahora
              </Button>
            </motion.div>
          </motion.div>

          {/* 3D Model */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-accent/30 rounded-full blur-3xl scale-75" />
              
              {/* @ts-ignore */}
              <model-viewer
                src="/3dTracker.glb"
                alt="Ghosty Tracker 3D"
                auto-rotate
                camera-controls
                shadow-intensity="1"
                style={{
                  width: "100%",
                  height: "450px",
                  backgroundColor: "transparent",
                  "--poster-color": "transparent",
                } as React.CSSProperties}
                environment-image="neutral"
                exposure="1.1"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
