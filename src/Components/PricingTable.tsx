import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PricingSection: React.FC = () => {
  useEffect(() => {
    gsap.utils.toArray(".pricing-card").forEach((card) => {
      gsap.from(card as HTMLElement, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card as HTMLElement,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
    });
  }, []);

  return (
    <section className="py-20 bg-blue-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">
          Our Pricing Plans
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto font-semibold">
          Choose a plan that suits your document printing needs. Fast,
          affordable and high-quality service at your fingertips.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {/* Basic Plan */}
        <div className="pricing-card bg-white p-6 rounded-lg shadow-lg text-center hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-bold text-blue-600 mb-3">Basic</h3>
          <p className="text-gray-600 mb-4">Perfect for everyday prints</p>
          <p className="text-3xl font-bold text-yellow-400 mb-6">$2/page</p>
          <ul className="text-gray-600 mb-6 space-y-2">
            <li>Black & White</li>
            <li>Double-sided</li>
          </ul>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Choose Plan
          </button>
        </div>

        {/* Aurumlot Plan */}
        <div className="pricing-card bg-white p-6 rounded-lg shadow-lg text-center hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-bold text-blue-600 mb-3">Aurumlot</h3>
          <p className="text-gray-600 mb-4">Best for professional documents</p>
          <p className="text-3xl font-bold text-yellow-500 mb-6">$5/page</p>
          <ul className="text-gray-600 mb-6 space-y-2">
            <li>Color Print</li>
            <li>Double-sided Free</li>
            <li>Free Binding</li>
          </ul>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Choose Plan
          </button>
        </div>

        {/* Pro+ Plan */}
        <div className="pricing-card bg-white p-6 rounded-lg shadow-lg text-center hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-bold text-blue-600 mb-3">Pro+</h3>
          <p className="text-gray-600 mb-4">For bulk and premium printing</p>
          <p className="text-3xl font-bold text-yellow-400 mb-6">$7/page</p>
          <ul className="text-gray-600 mb-6 space-y-2">
            <li>Color & B/W</li>
            <li>Unlimited Double-sided</li>
            <li>Premium Binding</li>
            <li>Free Delivery</li>
          </ul>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Choose Plan
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
