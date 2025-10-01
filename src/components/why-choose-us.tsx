import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function WhyChooseLochHomes() {
  return (
    <section className="bg-[#0f5c63] text-white py-12 px-0 lg:px-0">
      <div className="container max-w-full">
        <div className="grid grid-cols-1 xl:grid-cols-2 items-center">
          
          {/* Left Column (Image) */}
          <div className="flex justify-start py-8">
            <Image
                src="https://ik.imagekit.io/lochhomesllc/assets/home-2.svg" // replace with your actual image inside /public
                alt="Modern House"
                width={650}
                height={550}
                className="object-cover rounded-md md:w-full lg:max-h-[761px]"
                unoptimized={true}
            />
          </div>

          {/* Right Column (Text + Bullet Points) */}
          <div className="space-y-6 sm:space-y-8 md:space-y-10 xl:space-y-12 px-10 lg:px-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-snug">
                Why Homeowners <br /> Choose Loch Homes
            </h2>

            {/* Bullet Item 1 */}
            <div className="flex items-start space-x-3 sm:space-x-4">
                <FaCheckCircle className="text-white text-xl sm:text-2xl lg:text-3xl flex-shrink-0" />
                <p className="text-sm sm:text-base md:text-lg lg:text-xl">
                    No upfront costs ever.
                </p>
            </div>

            {/* Bullet Item 2 */}
            <div className="flex items-start space-x-3 sm:space-x-4">
                <FaCheckCircle className="text-white text-xl sm:text-2xl lg:text-3xl flex-shrink-0" />
                <p className="text-sm sm:text-base md:text-lg lg:text-xl">
                    Fast, clear solutions tailored to your situation.
                </p>
            </div>

            {/* Bullet Item 3 */}
            <div className="flex items-start space-x-3 sm:space-x-4">
                <FaCheckCircle className="text-white text-xl sm:text-2xl lg:text-3xl flex-shrink-0" />
                <p className="text-sm sm:text-base md:text-lg lg:text-xl">
                    Experienced team with proven results.
                </p>
            </div>

            {/* Bullet Item 4 */}
            <div className="flex items-start space-x-3 sm:space-x-4">
                <FaCheckCircle className="text-white text-xl sm:text-2xl lg:text-3xl flex-shrink-0" />
                <p className="text-sm sm:text-base md:text-lg lg:text-xl">
                    Compassionate guidance through every step.
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}
