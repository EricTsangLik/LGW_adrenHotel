import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function Contact() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <div className="pt-24 pb-12 bg-primary text-white text-center">
        <h1 className="text-4xl font-serif">聯絡鏈居</h1>
      </div>
      
      <section className="py-24 container mx-auto px-4 max-w-5xl">
         <div className="flex flex-col md:flex-row gap-16">
            {/* Contact Info */}
            <div className="md:w-1/3 text-primary">
               <h2 className="text-2xl font-serif mb-8">Arden Hotel</h2>
               <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-sm uppercase tracking-widest text-secondary mb-2">地址</h3>
                    <p className="leading-relaxed">香港上環文咸東街139-141號<br/>139-141 Bonham Strand, Sheung Wan, Hong Kong</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm uppercase tracking-widest text-secondary mb-2">電話</h3>
                    <p className="leading-relaxed">+852 6299 0323</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm uppercase tracking-widest text-secondary mb-2">電郵</h3>
                    <p className="leading-relaxed">owenyhk@gmail.com </p>
                  </div>
               </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:w-2/3">
               <h2 className="text-2xl font-serif mb-8 text-primary">發送訊息</h2>
               <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div>
                       <label className="block text-sm font-medium text-gray-700 mb-2">姓名</label>
                       <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary transition-colors" />
                     </div>
                     <div>
                       <label className="block text-sm font-medium text-gray-700 mb-2">電郵</label>
                       <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary transition-colors" />
                     </div>
                  </div>
                  <div>
                     <label className="block text-sm font-medium text-gray-700 mb-2">主旨</label>
                     <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div>
                     <label className="block text-sm font-medium text-gray-700 mb-2">訊息內容</label>
                     <textarea rows={5} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary transition-colors"></textarea>
                  </div>
                  <button type="submit" className="bg-primary text-white px-8 py-3 hover:bg-opacity-90 transition-opacity uppercase tracking-widest text-sm">
                    發送
                  </button>
               </form>
            </div>
         </div>
      </section>

      {/* Google Map Section */}
      <section className="w-full h-[500px] bg-gray-100 relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.3644026369066!2d114.15132531534954!3d22.285856485331185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404007c6f091c71%3A0x6641883506456722!2s139-141%20Bonham%20Strand%2C%20Sheung%20Wan!5e0!3m2!1sen!2shk!4v1677654321098!5m2!1sen!2shk" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="transition-all duration-700"
        ></iframe>
      </section>
      
      <Footer />
    </div>
  );
}
