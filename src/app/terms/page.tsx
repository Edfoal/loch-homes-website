import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
export default function TermsPage() {
  return (
    <>
      <nav className="bg-[#0F666B] py-4 px-6 flex justify-between items-center shadow-md">
        {/* ✅ Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/loch-homes-logo-2.svg" // apna logo image path yaha dalna
            alt="Loch Homes"
            width={140}
            height={50}
            priority
          />
        </Link>

        {/* ✅ Right Button */}
        <Link
          href="/contact"
          className="bg-white text-gray-800 font-medium px-4 py-2 rounded-md shadow hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </nav>
      <nav className="flex items-center justify-between px-8 py-8 bg-white px-16">
        {/* Left Side */}
        <a href="/" className="flex items-center text-[#C2613D] font-medium hover:underline">
          <span className="mr-3"> ←</span>Back To Home
        </a>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          <a href="/terms" className="text-[#C2613D] font-semibold hover:underline">
            Terms & Conditions
          </a>
          <a href="/privacy" className="text-[#C2613D]/70 hover:text-[#C2613D] hover:underline">
            Privacy Policy
          </a>
        </div>
      </nav>

      <main className="min-h-screen min-w-screen bg-white text-gray-900 mb-6">
        <div className=" mx-32 mb-12">
          <h1 className="text-[40px] font-bold mb-6 text-center text-[#C2613D] pt-6">Terms & Conditions</h1>
          <p className="mb-4 font-semibold text-base">
            Last updated: September 05, 2023
          </p>
          <p className="text-base">
            Welcome to Loch Homes!
          </p>
          <p className="text-base">
            These terms and conditions outline the rules and regulations for the use of Loch Homes’s Website, located at https://lochhomes.com
          </p>
          <br></br>
          <p className="text-base mb-6">
            By accessing this website we assume you accept these terms and conditions. Do not continue to use Loch Homes if you do not agree to take all of the terms and conditions stated on this page.    The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: “Client”, “You” and “Your” refers to you, the person log on this website and compliant to the Company’s terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of us. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
          </p>
          <h2 className="text-2xl font-medium mb-4 text-[#C2613D]">Cookies</h2>
          <p className="mb-6">
            We employ the use of cookies. By accessing Loch Homes, you agreed to use cookies in agreement with the Loch Homes’s Privacy Policy.
            Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable
            the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may
            also use cookies.
          </p>
          <h2 className="text-2xl font-medium mb-4 text-[#C2613D]">License</h2>
          <p className="mb-3">
            Unless otherwise stated, Loch Homes and/or its licensors own the intellectual property rights for all material on Loch Homes. All intellectual property rights are reserved. You may access this from Loch Homes for your own personal use subjected to restrictions set in these terms and conditions.
            You must not:
          </p>
          <ul className="list-disc pl-6 mb-3">
            <li>Republish material from Loch Homes</li>
            <li>Sell, rent or sub-license material from Loch Homes</li>
            <li> Reproduce, duplicate or copy material from Loch Homes</li>
            <li>Redistribute content from Loch Homes</li>
          </ul>
          <p className="mb-3">
            This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the help of the Free Terms and Conditions Generator.
            Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Loch Homes
            does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Loch
            Homes,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted
            by applicable laws, Loch Homes shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of
            and/or posting of and/or appearance of the Comments on this website.
          </p>
          <p className="mb-3">
            Loch Homes reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.
            You warrant and represent that:
          </p>
          <ul className="list-disc pl-6 mb-3">
            <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so</li>
            <li>The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;</li>
            <li>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy</li>
            <li>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</li>
          </ul>
          <p className="mb-6">
            You hereby grant Loch Homes a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.
          </p>
          <h2 className="text-2xl font-medium mb-4 text-[#C2613D]">Hyperlinking to our Content</h2>
          <p className="mb-3">
            The following organizations may link to our Website without prior written approval:
          </p>
          <ul className="list-disc pl-6 mb-3">
            <li>Government agencies;</li>
            <li>Search engines;</li>
            <li>News organizations;</li>
            <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and.</li>
            <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
          </ul>
          <p className="mb-2">
            These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.
          </p>
          <p className="mb-3">
            We may consider and approve other link requests from the following types of organizations:
          </p>
          <ul className="list-disc pl-6 mb-3">
            <li>Commonly-known consumer and/or business information sources;</li>
            <li>dot.com community sites;</li>
            <li>associations or other groups representing charities;</li>
            <li>online directory distributors;</li>
            <li>internet portals;</li>
            <li>accounting, law and consulting firms; and</li>
            <li>educational institutions and trade associations.</li>
          </ul>
          <p className="mb-1">
            We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Loch Homes; and (d) the link is in the context of general resource information.
          </p>
          <p className="mb-1">
            These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party’s site.
          </p>
          <p className="mb-1">
            If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to Loch Homes. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.
          </p>
          <p className="mb-3">
            Approved organizations may hyperlink to our Website as follows:
          </p>
          <ul className="list-disc pl-6 mb-3">
            <li>By use of our corporate name; or</li>
            <li>By use of the uniform resource locator being linked to; or</li>
            <li>By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party’s site.;</li>
          </ul>
          <p className="mb-3">
            No use of Loch Homes’s logo or other artwork will be allowed for linking absent a trademark license agreement.
          </p>
          <h2 className="text-2xl font-medium mb-4 text-[#C2613D]">iFrames</h2>
          <p className="mb-3">
            Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.
          </p>
          <h2 className="text-2xl font-medium mb-4 text-[#C2613D]">Content Liability</h2>
          <p className="mb-3">
            We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
          </p>
          <h2 className="text-2xl font-medium mb-4 text-[#C2613D]">Reservation of Rights</h2>
          <p className="mb-3">
            We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
          </p>
          <h2 className="text-2xl font-medium mb-4 text-[#C2613D]">Removal of links from our website</h2>
          <p className="mb-3">
            If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.
            Last updated: Tue Aug 26 2025
          </p>
          <p className="mb-3">
            We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.
          </p>
          <h2 className="text-2xl font-medium mb-4 text-[#C2613D]">Disclaimer</h2>
          <p className="mb-3">
            To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
          </p>
          <ul className="list-disc pl-6 mb-3">
            <li>limit or exclude our or your liability for death or personal injury;</li>
            <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
            <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
            <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
          </ul>
          <p className="mb-12">
            The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.
            As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
          </p>
        </div>
      </main>

      <Footer />   {/* ✅ Bottom Footer */}
    </>
  );
}
