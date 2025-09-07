import Image from "next/image";
import { FaMoneyBillWave, FaClock, FaHome, FaChartLine } from "react-icons/fa";

export default function ForeclosureNotice() {
  return (
    <section className="bg-[#c85d32] text-white py-12 px-0 lg:px-0">
      <div className="container max-w-full max-h-auto">
        
        {/* Heading */}
		<div className="text-center px-4 sm:px-6 md:px-8 max-w-full mx-auto mb-12">
			<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-snug">
				Got a Foreclosure Notice? You Still Have Options
			</h2>
			<p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
				Don’t wait until it’s too late to protect your home’s value. A fair cash offer could
				stop the process and put money in your pocket.
			</p>
		</div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:max-w-full xl:grid-cols-2 items-center">
          
		{/* Left Column (Bullet Points) */}
		<div className="space-y-6 sm:space-y-8 md:space-y-10 xl:space-y-12 px-10 lg:px-20">
			{/* Item 1 */}
			<div className="flex items-start space-x-3 sm:space-x-4">
				<FaMoneyBillWave className="text-white text-2xl sm:text-3xl lg:text-5xl flex-shrink-0" />
				<div>
				<h3 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">
					Foreclosure help isn’t one-size-fits-all.
				</h3>
				<p className="text-xs sm:text-sm md:text-base lg:text-lg">
					Not everyone qualifies for bank programs. Selling could be your best move.
				</p>
				</div>
			</div>

			{/* Item 2 */}
			<div className="flex items-start space-x-3 sm:space-x-4">
				<FaClock className="text-white text-2xl sm:text-3xl lg:text-5xl flex-shrink-0" />
				<div>
				<h3 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">
					Behind on payments? We can still help.
				</h3>
				<p className="text-xs sm:text-sm md:text-base lg:text-lg">
					A foreclosure auction date doesn’t have to mean the end — you could still sell 
					your home and prevent foreclosure, even at the last minute.
				</p>
				</div>
			</div>

			{/* Item 3 */}
			<div className="flex items-start space-x-3 sm:space-x-4">
				<FaHome className="text-white text-2xl sm:text-3xl lg:text-5xl flex-shrink-0" />
				<div>
				<h3 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">
					No repairs, no cleanup needed.
				</h3>
				<p className="text-xs sm:text-sm md:text-base lg:text-lg">
					We'll make a fair cash offer and handle everything as is. 
					You can leave any unwanted items behind, and we’ll remove them at our expense.
				</p>
				</div>
			</div>

			{/* Item 4 */}
			<div className="flex items-start space-x-3 sm:space-x-4">
				<FaChartLine className="text-white text-2xl sm:text-3xl lg:text-5xl flex-shrink-0" />
				<div>
				<h3 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">
					Cash in Hand. Credit Protected. Fresh Start
				</h3>
				<p className="text-xs sm:text-sm md:text-base lg:text-lg">
					Protect your credit for the next 7 years, receive money at closing, 
					and enjoy a fresh start. Our team will be with you from start to finish, 
					making the process worry-free.
				</p>
				</div>
			</div>
			</div>


          {/* Right Column (Image) */}
          <div className="flex justify-end py-8">
            <Image
              src="https://ik.imagekit.io/lochhomesllc/assets/pre-foreclosure-house.svg" // replace with actual image path in /public
              alt="House"
              width={650}
              height={550}
              className="object-contain md:w-full lg:max-h-[761px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
