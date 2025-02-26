import Image from "next/image";
import { FaTrophy } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-[#0f0f11] min-h-screen py-8 px-4 sm:px-6 lg:px-8 2xl:px-12">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-white bg-[#161619] rounded-3xl overflow-hidden">
          {/* القسم الرئيسي */}
          <div className="p-6 sm:p-8 lg:p-10 xl:p-12 2xl:p-16">
            {/* العنوان والأزرار */}
            <div className="flex flex-col xl:flex-row gap-6 xl:gap-10 2xl:gap-12 items-start xl:items-center justify-between">
              <h3 className="flex items-center gap-3 font-bold text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
                <FaTrophy className="w-6 h-6 lg:w-8 lg:h-8 2xl:w-10 2xl:h-10" />
                Leaderboard
              </h3>

              {/* مجموعة الأزرار */}
              <div className="w-full xl:w-auto grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
                <button className="rounded px-3 sm:px-4 py-2 text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold transition-colors hover:bg-white hover:text-black text-black bg-white/70 whitespace-nowrap">
                  RM Solo
                </button>
                <button className="rounded px-3 sm:px-4 py-2 text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold transition-colors hover:bg-white hover:text-black bg-black/30 whitespace-nowrap">
                  RM Team
                </button>
                <button className="rounded px-3 sm:px-4 py-2 text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold transition-colors hover:bg-white hover:text-black bg-black/30 whitespace-nowrap">
                  Console RM Solo
                </button>
                <button className="rounded px-3 sm:px-4 py-2 text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold transition-colors hover:bg-white hover:text-black bg-black/30 whitespace-nowrap">
                  Console RM Team
                </button>
              </div>
            </div>

            {/* محتوى إضافي (يمكن إضافته لاحقًا) */}
            <div className="mt-8 lg:mt-12 xl:mt-16 2xl:mt-20">
              {/* مساحة لمحتوى الجدول أو غيره */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}