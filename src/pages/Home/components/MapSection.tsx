import { MapPin, Phone, Mail } from 'lucide-react';

export default function MapSection() {
  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row shadow-2xl rounded-none overflow-hidden bg-white">
          
          {/* Info Panel */}
          <div className="md:w-1/3 p-10 md:p-12 flex flex-col justify-center bg-primary text-white relative z-10">
            <h2 className="text-3xl font-serif mb-8 border-b border-white/20 pb-4">位置資訊</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 mt-1 shrink-0 text-secondary" />
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-1 text-secondary">Address</h3>
                  <p className="font-light text-sm leading-relaxed opacity-90">
                    香港上環文咸東街139-141號<br/>
                    139-141 Bonham Strand,<br/>
                    Sheung Wan, Hong Kong
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 mt-1 shrink-0 text-secondary" />
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-1 text-secondary">Phone</h3>
                  <p className="font-light text-sm opacity-90">+852 1234 5678</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 mt-1 shrink-0 text-secondary" />
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-1 text-secondary">Email</h3>
                  <p className="font-light text-sm opacity-90">info@ardenhotel.com</p>
                </div>
              </div>
            </div>
            
            <button className="mt-10 border border-white/30 hover:bg-white hover:text-primary transition-all px-6 py-3 text-xs uppercase tracking-widest self-start">
              Get Directions
            </button>
          </div>
          
          {/* Map */}
          <div className="md:w-2/3 h-[400px] md:h-auto relative  transition-all duration-700">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.3644026369066!2d114.15132531534954!3d22.285856485331185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404007c6f091c71%3A0x6641883506456722!2s139-141%20Bonham%20Strand%2C%20Sheung%20Wan!5e0!3m2!1sen!2shk!4v1677654321098!5m2!1sen!2shk" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
