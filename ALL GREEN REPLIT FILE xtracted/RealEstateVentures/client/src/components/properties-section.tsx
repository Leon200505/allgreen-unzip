import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function PropertiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const properties = [
    {
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Green Valley Estate",
      description: "Sustainable residential community in Lagos featuring solar panels, rainwater harvesting, and eco-friendly materials.",
      value: "₦25M - ₦45M",
      status: "Available",
      statusColor: "bg-green-100 text-green-800"
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Eco Smart Homes Abuja",
      description: "Modern green homes with smart home technology, energy-efficient appliances, and sustainable design.",
      value: "₦35M - ₦60M",
      status: "In Progress",
      statusColor: "bg-blue-100 text-blue-800"
    },
    {
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Solar Powered Villas",
      description: "Luxury villas with complete solar energy systems, battery storage, and zero electricity bills.",
      value: "₦50M - ₦80M",
      status: "Planning",
      statusColor: "bg-yellow-100 text-yellow-800"
    },
    {
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Green Office Complex",
      description: "Sustainable commercial building with LEED certification, natural ventilation, and energy-efficient lighting.",
      value: "₦120M Development",
      status: "Completed",
      statusColor: "bg-green-100 text-green-800"
    },
    {
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Eco Apartments Lekki",
      description: "Affordable green apartments with rooftop gardens, waste recycling systems, and renewable energy.",
      value: "₦15M - ₦30M",
      status: "Available",
      statusColor: "bg-green-100 text-green-800"
    },
    {
      image: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Sustainable City Project",
      description: "Large-scale eco-friendly development with green spaces, renewable energy, and sustainable transportation.",
      value: "₦500M Development",
      status: "Planning",
      statusColor: "bg-yellow-100 text-yellow-800"
    }
  ];

  return (
    <section ref={ref} id="properties" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Properties</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of exceptional developments that showcase our commitment to quality and innovation.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="bg-white shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-full">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{property.title}</h3>
                  <p className="text-gray-600 mb-4">{property.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-semibold text-lg">{property.value}</span>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Badge className={`${property.statusColor} hover:${property.statusColor}`}>
                        {property.status}
                      </Badge>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
