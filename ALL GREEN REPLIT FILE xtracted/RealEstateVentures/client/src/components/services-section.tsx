import { Card, CardContent } from "@/components/ui/card";
import { Handshake, Building, TrendingUp, Compass, Search, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const services = [
    {
      icon: <Building className="h-10 w-10" />,
      title: "Green Home Construction",
      description: "Eco-friendly residential buildings using sustainable materials and energy-efficient designs for modern living."
    },
    {
      icon: <TrendingUp className="h-10 w-10" />,
      title: "Solar Energy Solutions",
      description: "Complete solar panel installation and renewable energy systems to reduce electricity costs and carbon footprint."
    },
    {
      icon: <Compass className="h-10 w-10" />,
      title: "Sustainable Architecture",
      description: "Innovative building designs that maximize natural lighting, ventilation, and environmental harmony."
    },
    {
      icon: <Search className="h-10 w-10" />,
      title: "Property Development",
      description: "Full-service development from land acquisition to project completion with green building standards."
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Consultation Services",
      description: "Expert advice on sustainable building practices, green certifications, and eco-friendly construction methods."
    },
    {
      icon: <Handshake className="h-10 w-10" />,
      title: "Green Financing",
      description: "Assistance with eco-friendly mortgage options and green building incentives for sustainable developments."
    }
  ];

  return (
    <section ref={ref} id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive real estate development solutions tailored to maximize returns and create lasting value.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="bg-gray-50 hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <motion.div 
                    className="text-primary mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
