import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import WhatsAppInput from "./ui/whatsendbox";

const links = [
  { label: "About us", href: "#" },
  { label: "Support", href: "#" },
  { label: "Resources", href: "#" },
  { label: "Blogs", href: "#" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Refund Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Cancellation Policy", href: "#" },
];

const otherPlatforms = [
  { label: "Dev.to", href: "#" },
  { label: "Pinterest", href: "#" },
  { label: "Quora", href: "#" },
  { label: "Stack Overflow", href: "#" },
];

const bottomLinks = [
  { label: "About us", href: "#" },
  { label: "Contact us", href: "#" },
  { label: "Sitemap", href: "https://www.parvatiandsons.in/sitemap.xml" },
];

const socialLinks = [
  { icon: FaFacebookF, href: "#" },
  { icon: FaTwitter, href: "#" },
  { icon: FaLinkedinIn, href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 w-full border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Logo and Contact */}
          <div className="lg:col-span-2 p-6 flex flex-col gap-4">
            <Image src="/logo/PAS-logo.svg" alt="Logo" width={120} height={120} />
            <p className="text-base font-medium text-gray-800">
              Let’s talk about your project idea
            </p>
            <WhatsAppInput />
          </div>

          {/* Links */}
          <FooterSection title="Links" items={links} />
          <FooterSection title="Legal" items={legalLinks} />
          <FooterSection title="Other Platforms" items={otherPlatforms} />
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-lg text-gray-500 font-extralight">
          <div className="flex gap-4 flex-wrap">
            {bottomLinks.map((link, i) => (
              <Link key={i} href={link.href} className="hover:text-blue-600 transition">
                {link.label}
              </Link>
            ))}
          </div>

          <p className="text-center">&copy; 2023 Parvati and Sons. All rights reserved.</p>

          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, href }, i) => (
              <Link key={i} href={href} className="hover:text-blue-600 transition">
                <Icon size={18} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterSection = ({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) => (
  <div className="flex flex-col">
    <h3 className="font-semibold text-2xl mb-4 text-gray-900">{title}</h3>
    <ul className="space-y-2 text-xl">
      {items.map((item, i) => (
        <li key={i}>
          <Link href={item.href} className="hover:text-blue-600 transition">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
