import Link from "next/link";
import { MailIcon, PhoneIcon } from "@/components/ui/icons";
import { siteConfig } from "@/lib/site";

export function MobileContactBar() {
  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed inset-x-0 bottom-0 z-30 grid min-h-16 grid-cols-2 border-t border-[#c8d6e0] bg-white shadow-[0_-12px_35px_rgba(8,20,33,0.14)] lg:hidden"
    >
      <a
        href={siteConfig.phoneHref}
        className="flex items-center justify-center gap-2 bg-[#081421] px-4 text-xs font-extrabold uppercase tracking-[0.12em] text-white"
      >
        <PhoneIcon className="h-4 w-4" />
        Call the team
      </a>
      <Link
        href="/contact"
        className="flex items-center justify-center gap-2 bg-[#1266a8] px-4 text-xs font-extrabold uppercase tracking-[0.12em] text-white"
      >
        <MailIcon className="h-4 w-4" />
        Contact us
      </Link>
    </aside>
  );
}
