import { AiOutlineRight } from "react-icons/ai";

interface Shop {
  image?: string;
  name: string;
  productCount: number;
}

interface ShopItemProps {
  shop: Shop;
}

const ShopItem: React.FC<ShopItemProps> = ({ shop }) => {
  return (
    <div className="flex flex-row justify-between items-center w-full h-[60px] px-5 mb-5">
      <div className="flex flex-row justify-between items-center gap-5">
        <img
          src={shop.image || "/product-bg.png"}
          alt={shop.name}
          className="h-[60px] w-[60px] rounded-2xl bg-[#C1CF16] opacity-80"
        />
        <div>
          <h1 className="text-[14px] font-semibold mb-2">{shop.name}</h1>
          <p className="text-[12px]">{shop.productCount} Products</p>
        </div>
      </div>
      <button>
        <AiOutlineRight size={16} className="text-gray-400" />
      </button>
    </div>
  );
};

export default ShopItem;
