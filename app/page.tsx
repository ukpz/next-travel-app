import Image from "next/image";
import BottomNav from '../components/BottomNav'
import CategorySlider from "@/components/home/CategorySlider";
import DestinationSlider from "@/components/home/DestinationSlider";

export default function Home() {
  return (
    <>
      <div className=" flex justify-between items-center bg-white p-4">
        <div>
          <div className="text-xl font-medium text-black dark:text-black">Hello Kate!</div>
          <p className="text-gray-500 dark:text-gray-400">You have a new message!</p>
        </div>
        <Image className="size-15 shrink-0" src="/avatar.jpg" alt="avatar" width={50} height={50} />
      </div>
      <CategorySlider/>
      <DestinationSlider/>
      <BottomNav />
    </>
  );
}
