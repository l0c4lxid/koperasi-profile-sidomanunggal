import { testimonials } from "../data/data"; // Mengimpor data testimoni dari file data
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons"; // Mengimpor ikon bintang dan komentar

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
              <div className="flex items-center mb-4">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-yellow-400 mr-2"
                />{" "}
                {/* Ikon bintang */}
              </div>
              <p className="text-gray-600 italic mb-6 flex-grow text-base leading-relaxed">
                &quot;{testimonial.quote}&quot;
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
