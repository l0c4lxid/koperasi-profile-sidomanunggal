import { testimonials } from "../app/page";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 md:mb-16 text-center">
          Apa Kata Anggota Kami?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-blue-500 flex flex-col"
            >
              <svg
                className="w-10 h-10 text-blue-300 mb-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a3 3 0 00-3 3v4a3 3 0 003 3h4a3 3 0 003-3V7a3 3 0 00-3-3H8zm-7 3a1 1 0 011-1h2a1 1 0 110 2H2a1 1 0 01-1-1zm18 0a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <p className="text-gray-600 italic mb-6 flex-grow text-base leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="mt-auto">
                <p className="font-semibold text-gray-900 text-base">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
