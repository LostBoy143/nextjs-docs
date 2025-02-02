"use client";
import Image from "next/image";
export default function PujaService() {
  const stats = [
    {
      number: "10,00,000+",
      label: "Puja's Done",
      icon: "/placeholder.svg?height=50&width=50",
    },
    {
      number: "300,000+",
      label: "Happy Devotees",
      icon: "/placeholder.svg?height=50&width=50",
    },
    {
      number: "100+",
      label: "Famous Temples in India",
      icon: "/placeholder.svg?height=50&width=50",
    },
    {
      number: "1 Sankalp",
      label: "Spreading Sanatan Dharma",
      icon: "/placeholder.svg?height=50&width=50",
    },
  ];

  return (
    <div className="min-h-screen bg-white px-4 md:px-20">
      {/* Header Section */}
      <div className="md:bg-gradient-to-r from-[#FE9002] to-[#FF4C13] relative rounded-xl">
        <div className="container flex flex-col items-center mx-auto px-4 pt-12 pb-8 md:pb-16 text-center">
          {" "}
          <h1 className="text-black sm:text-white text-xl md:text-2xl lg:text-3xl font-serif max-w-4xl mx-auto leading-tight">
            Embark on a Divine Journey with
            <br />
            Meri Bhakti Puja Services
          </h1>
          <Image
            height={200}
            width={200}
            src="/hero/whiteThreadImage.png"
            alt="thread logo"
            className="hidden md:block"
          />
          <Image
            height={200}
            width={200}
            src="/hero/threadImage.svg"
            alt="thread logo"
            className="md:hidden"
          />
        </div>
        {/* Decorative Border */}

        <div className="absolute -bottom-1 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 60"
            fill="none"
            className="w-full h-16"
            preserveAspectRatio="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 60H1440V30C1410 30 1380 45 1350 45C1320 45 1290 30 1260 30C1230 30 1200 45 1170 45C1140 45 1110 30 1080 30C1050 30 1020 45 990 45C960 45 930 30 900 30C870 30 840 45 810 45C780 45 750 30 720 30C690 30 660 45 630 45C600 45 570 30 540 30C510 30 480 45 450 45C420 45 390 30 360 30C330 30 300 45 270 45C240 45 210 30 180 30C150 30 120 45 90 45C60 45 30 30 0 30V60Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 60V45C15 45 30 52.5 45 52.5C60 52.5 75 45 90 45C105 45 120 52.5 135 52.5C150 52.5 165 45 180 45C195 45 210 52.5 225 52.5C240 52.5 255 45 270 45C285 45 300 52.5 315 52.5C330 52.5 345 45 360 45C375 45 390 52.5 405 52.5C420 52.5 435 45 450 45C465 45 480 52.5 495 52.5C510 52.5 525 45 540 45C555 45 570 52.5 585 52.5C600 52.5 615 45 630 45C645 45 660 52.5 675 52.5C690 52.5 705 45 720 45C735 45 750 52.5 765 52.5C780 52.5 795 45 810 45C825 45 840 52.5 855 52.5C870 52.5 885 45 900 45C915 45 930 52.5 945 52.5C960 52.5 975 45 990 45C1005 45 1020 52.5 1035 52.5C1050 52.5 1065 45 1080 45C1095 45 1110 52.5 1125 52.5C1140 52.5 1155 45 1170 45C1185 45 1200 52.5 1215 52.5C1230 52.5 1245 45 1260 45C1275 45 1290 52.5 1305 52.5C1320 52.5 1335 45 1350 45C1365 45 1380 52.5 1395 52.5C1410 52.5 1425 45 1440 45V60H0Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/* Temple Icon Section */}
      <div className="container mx-auto px-4 ">
        {" "}
        {/* Added top padding instead of negative margin */}
        <div className="flex justify-center mb-4">
          <img
            src="/Logo_Meri_Bhakti_White.svg"
            alt="Temple Icon"
            className="w-16 md:w-40 md:h-40 h-16 object-contain"
          />
        </div>
        {/* Decorative Line */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px bg-[#FF6B1A] flex-1 max-w-[200px]"></div>
          <div className="text-[#FF6B1A] text-2xl">
            ✤
          </div>
          <div className="h-px bg-[#FF6B1A] flex-1 max-w-[200px]"></div>
        </div>
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 pb-16">
          {" "}
          {/* Added bottom padding */}
          {stats.map((stat, index) => (
            <div
              key={index}
              className="shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
            >
              {stat.number && (
                <div className="text-3xl font-bold text-[#FF6B1A] mb-2">
                  {stat.number}
                </div>
              )}
              {/* <img
                src={
                  stat.icon || "/placeholder.svg"
                }
                alt={stat.label}
                className="w-12 h-12 mx-auto mb-4"
              /> */}
              <div className="text-lg font-medium text-black">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
