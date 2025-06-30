import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import { usePathname } from "next/navigation";

import Link from "next/link";

export const metadata: Metadata = {
  title: "Admin",
  description: "admins",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex w-screen h-screen">
          <div className="flex flex-col items-center  gap-10 w-[205px] h-screen bg-white-300">
            <div className="mt-10">
              {" "}
              <Image
                src={"/adminLogo.png"}
                alt="logo"
                height={44}
                width={146}
              />
            </div>
            <Link
              href={"/admin/menu"}
              className="  w-[165px] h-[40px] rounded-lg  flex items-center justify-center gap-2 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-layout-dashboard-icon lucide-layout-dashboard"
              >
                <rect width="7" height="9" x="3" y="3" rx="1" />
                <rect width="7" height="5" x="14" y="3" rx="1" />
                <rect width="7" height="9" x="14" y="12" rx="1" />
                <rect width="7" height="5" x="3" y="16" rx="1" />
              </svg>
              <p>Food menu</p>
            </Link>
            <Link
              href={"/admin/orders"}
              className="  w-[165px] h-[40px] bg-black text-white rounded-lg  flex items-center justify-center gap-2 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-truck-icon lucide-truck"
              >
                <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                <path d="M15 18H9" />
                <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
                <circle cx="17" cy="18" r="2" />
                <circle cx="7" cy="18" r="2" />
              </svg>
              <span>Order</span>
            </Link>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
