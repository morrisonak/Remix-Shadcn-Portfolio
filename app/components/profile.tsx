import { constants } from "~/data/siteData";
import { Link } from "@remix-run/react";
import { Mail, Phone, Download } from "lucide-react";
import { Button } from "~/components/ui/button";

export function Profile() {
  const { firstLastname, role, linkedin, personalEmail, personalPhone } = constants;

  return (
    <section id="profile" className="bg-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <img
          src="/headshot2.jpg"
          alt={`Headshot of ${firstLastname}`}
          width={300}
          height={300}
          className="rounded-full mb-8 md:mb-0 md:mr-12"
        />
        <div>
          <h2 className="text-4xl font-bold mb-4">{firstLastname}</h2>
          <p className="text-xl text-gray-600 mb-6">{role}</p>
          <div className="flex space-x-4 mb-6">
            <Link
              to={linkedin}
              className="text-gray-600 hover:text-gray-900"
              target="_blank" // Opens in a new tab
              rel="noopener noreferrer" // Security improvement
            >
              <img src="/In-Blue-21.png" alt="LinkedIn Icon" className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              to={`mailto:${personalEmail}`} // Use mailto for email links
              className="text-gray-600 hover:text-gray-900"
            >
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </Link>
            <Link
              to={`tel:${personalPhone}`} // Use tel for phone links
              className="text-gray-600 hover:text-gray-900"
            >
              <Phone className="w-6 h-6" />
              <span className="sr-only">Phone</span>
            </Link>
          </div>
          <Button variant="outline" aria-label="Download Resume">
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
}
