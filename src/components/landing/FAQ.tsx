import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Funciona con SlimeVR?",
    answer:
      "¡Sí! Nuestros trackers son 100% compatibles con SlimeVR. Funcionan perfectamente con el software oficial de SlimeVR y son ideales para VRChat, NeosVR y otros juegos VR.",
  },
  {
    question: "¿Por qué sin WiFi es más estable?",
    answer:
      "La conexión WiFi puede sufrir interferencias de otros dispositivos en tu hogar. Nuestros trackers usan una conexión RF dedicada a través del dongle USB, lo que elimina problemas de latencia y desconexiones.",
  },
  {
    question: "¿Cuánto dura la batería?",
    answer:
      "Los trackers tienen una batería de hasta 30 horas de uso continuo. Esto te permite sesiones de VR muy largas sin preocuparte por recargar.",
  },
  {
    question: "¿Qué incluye el paquete?",
    answer:
      "Cada paquete incluye los trackers, straps ajustables y cómodos, un cargador múltiple (6 Type-C a 1 USB), el dongle USB receptor, garantía y soporte personalizado 1 a 1.",
  },
  {
    question: "¿Hacen envíos?",
    answer:
      "¡Sí! Hacemos envíos a toda la República Mexicana y también internacionalmente. Los trackers se envían listos para usar. Contáctanos por Discord o Instagram para más información sobre envíos internacionales.",
  },
  {
    question: "¿Tiene garantía?",
    answer:
      "Todos nuestros productos incluyen garantía y soporte personalizado. Si tienes cualquier problema, estaremos ahí para ayudarte a resolverlo.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Preguntas <span className="text-gradient">frecuentes</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Resolvemos tus dudas sobre los Ghosty Trackers by Ghosty Labs
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-2xl px-6 border-none"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
