import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-2 cursor-pointer">
        <Image src="/logo.png" alt="Mark8 Logo" width={40} height={40} />
        <div className="flex flex-col gap-1">
          <span className="text-[16px] font-bold text-[#0C0F0F]">AlgoCart</span>
          <p className="text-[#0C0F0F] font-light text-[12px]">Algo @2025 </p>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
