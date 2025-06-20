import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { icon: <FaLinkedinIn className="h-5 w-5" />, href: "#" },
    { icon: <FaTwitter className="h-5 w-5" />, href: "#" },
    { icon: <FaFacebookF className="h-5 w-5" />, href: "#" },
    { icon: <FaInstagram className="h-5 w-5" />, href: "#" },
  ];

  const services = [
    "Green Home Construction",
    "Solar Energy Solutions", 
    "Sustainable Architecture",
    "Eco-Friendly Development"
  ];

  return (
    <footer className="bg-accent text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4">All Green Homes and Development Limited</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading Nigeria's sustainable housing revolution with eco-friendly construction, 
              renewable energy solutions, and innovative green building technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>688c, Jacob Nwaokola Close</li>
              <li>Omole Phase 2</li>
              <li>Lagos, Nigeria</li>
              <li className="pt-2">+234 803 372 1950</li>
              <li>info@allgreenhomesdevelopment.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 All Green Homes and Development Limited. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
