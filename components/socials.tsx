import Link from "next/link";

import { socialItems } from "@/lib/data";

export const Socials = () => {
  return (
    <div className="flex items-stretch justify-center lg:justify-start text-white">
      <p className="mr-8">Follow</p>
      <ul className="flex gap-x-6">
        {socialItems.map(({ icon: Icon, href, label }) => (
          <li key={label}>
            <Link
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`Link to ${label}`}
              className="hover:text-orange transition-colors duration-300"
            >
              <Icon />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
