import Link from "next/link";
import React from "react";

export function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <div>
        <svg
          width="90"
          height="75"
          viewBox="0 0 90 75"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-auto"
        >
          <path
            d="M90.0006 20.0208C90.0006 17.3916 89.4828 14.7882 88.4769 12.3592C87.4709 9.93014 85.9965 7.72306 84.1377 5.86396C82.279 4.00485 80.0724 2.53013 77.6438 1.52399C75.2152 0.517853 72.6123 0 69.9836 0H27.2891L44.097 23.2858L71.2937 14.5053L54.4992 37.4845L71.2154 60.7486L44.1524 51.9331L27.3215 75H69.9863C75.2947 74.9993 80.3854 72.8896 84.1387 69.1351C87.892 65.3805 90.0006 60.2886 90.0006 54.9792C89.9914 51.3963 89.0168 47.8822 87.1793 44.8066C85.3419 41.731 82.7095 39.2076 79.5592 37.502C82.7097 35.7957 85.3422 33.2716 87.1796 30.1953C89.017 27.119 89.9915 23.6042 90.0006 20.0208Z"
            fill="#353843"
          />
          <path
            d="M0 37.4535L27.2898 46.234V28.6353L0 37.4535Z"
            fill="#E46DAA"
          />
        </svg>
      </div>

      <div className="flex gap-8">
        <Link href="/">Work</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
      </div>
    </header>
  );
}
