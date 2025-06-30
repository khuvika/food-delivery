"use client";
import Image from "next/image";

export default function Dood() {
  return (
    <footer className="bg-[#181818] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="text-red-500 font-bold text-xl mb-2">NomNom</div>
          <p className="text-sm text-gray-400">Swift delivery</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">
            {" "}
            <Image src={"/logo.png"} alt="logo" height={44} width={146} />
          </h4>
          <ul className="text-gray-400 space-y-1 text-sm">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Contact us</a>
            </li>
            <li>
              <a href="">Delivery zone</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">MENU</h4>
          <div className="grid grid-cols-2 gap-x-4 text-gray-400 text-sm">
            <ul className="space-y-1">
              <li>
                <a href="">Appetizers</a>
              </li>
              <li>
                <a href="login">Salads</a>
              </li>
              <li>
                <a href="">Pizzas</a>
              </li>
              <li>
                <a href="">Main dishes</a>
              </li>
              <li>
                <a href="">Desserts</a>
              </li>
            </ul>
            <ul className="space-y-1">
              <li>
                <a href="">Side dish</a>
              </li>
              <li>
                <a href="">Brunch</a>
              </li>
              <li>
                <a href="">Desserts</a>
              </li>
              <li>
                <a href="">Beverages</a>
              </li>
              <li>
                <a href="">Fish & Sea foods</a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-2">FOLLOW US</h4>
          <div className="flex space-x-4 text-xl text-gray-400">
            <a href="#">
              {" "}
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
                className="lucide lucide-facebook-icon lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#">
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
                className="lucide lucide-instagram-icon lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        <p>Copy right ©2024 & Nomnom LLC</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#">Privacy policy</a>
          <a href="#">Terms and condition</a>
          <a href="#">Cookie policy</a>
        </div>
      </div>
    </footer>
  );
}
