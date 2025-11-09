
import React from 'react';

const AboutUsPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 md:px-8 py-8">
        <h1 className="font-bebas text-6xl md:text-8xl text-gray-800 tracking-wider mb-12">Our Story</h1>

        {/* Founder Section */}
        <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16">
          <div className="flex-shrink-0">
            <img src="https://picsum.photos/seed/patrick-lewis/500/650" alt="Patrick Lewis, Founder" className="rounded-lg shadow-xl w-full md:w-96 h-auto object-cover" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="font-bebas text-6xl text-gray-900 tracking-wider">Patrick Lewis</h2>
            <h3 className="font-bold text-gray-600 text-xl tracking-widest">FOUNDER</h3>
            <div className="flex justify-center md:justify-start gap-4 my-4">
               <a href="#" aria-label="Facebook" className="text-gray-700 hover:text-black"><i className="ri-facebook-box-fill text-3xl"></i></a>
               <a href="#" aria-label="Instagram" className="text-gray-700 hover:text-black"><i className="ri-instagram-fill text-3xl"></i></a>
            </div>
            <hr className="border-t-2 border-gray-800 w-24 mx-auto md:mx-0" />
            <p className="mt-6 text-gray-700 leading-relaxed max-w-2xl">
              Hi, I'm Patrick Lewis, a 5th degree taekwondo black belt, dedicated Taekwondo practitioner, and coffee entrepreneur based in Delray Beach FL. With a passion for martial arts, I have been actively involved in Taekwondo, honing discipline, focus, and physical fitness. Alongside my martial arts journey, I channel my love for coffee into a thriving business, offering quality beans to fellow enthusiasts. If you're interested in martial arts, or just looking for a great bag of coffee, including bean or ground, instant coffee, K-Cup, or mushroom coffee, feel free to connect with me!
            </p>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="bg-gray-50 rounded-2xl p-8 md:p-12 my-16">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="font-bebas text-5xl md:text-6xl text-gray-900 tracking-wider">Our Mission</h2>
              <p className="mt-4 text-gray-700 leading-relaxed text-lg">
                We are a team of passionate creators committed to bringing our vision to life. From humble beginnings in a small garage, we have grown into a company dedicated to quality, innovation, and our community. Our journey is a testament to perseverance and a love for what we do. We believe in building not just a company, but a legacy.
              </p>
            </div>
            <div className="lg:w-1/2 relative h-64 lg:h-auto">
              <img src="https://picsum.photos/seed/mission1/600/400" alt="Our team collaborating" className="rounded-lg shadow-xl w-full h-full object-cover transform rotate-1 transition-transform duration-500 hover:rotate-0" />
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="my-16 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/2">
                <img src="https://picsum.photos/seed/culture-art/600/600" alt="Vector art of coffee beans and a person meditating" className="rounded-lg"/>
            </div>
            <div className="md:w-1/2 text-center md:text-left">
                <h2 className="font-bebas text-5xl md:text-6xl text-gray-900 tracking-wider">More than coffee, a way of life</h2>
                <h3 className="text-xl text-gray-700 mt-4 leading-relaxed">
                    A coffee-forward brand and experience inspired by the principles of Taekwondo—adapted into daily rituals of brewing, movement, and self-mastery. Each brew represents a belt level, a mindset, and a movement.
                </h3>
            </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
