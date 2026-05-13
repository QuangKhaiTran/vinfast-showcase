import vf8 from "@/assets/vf8.jpg";
import vf9 from "@/assets/vf9.jpg";
import vf3 from "@/assets/vf3.jpg";
import escooter from "@/assets/escooter.jpg";

export type Car = {
  slug: string;
  name: string;
  tagline: string;
  category: "SUV" | "Sedan" | "Mini" | "Xe máy điện";
  price: string;
  range: string;
  power: string;
  acceleration: string;
  image: string;
  description: string;
};

export const cars: Car[] = [
  {
    slug: "vf-9",
    name: "VF 9",
    tagline: "SUV điện cao cấp 7 chỗ",
    category: "SUV",
    price: "1.491.000.000 ₫",
    range: "468 km",
    power: "300 kW",
    acceleration: "6.5s",
    image: vf9,
    description:
      "Đỉnh cao công nghệ và sang trọng. VF 9 mang đến trải nghiệm di chuyển êm ái với không gian rộng rãi 7 chỗ ngồi và hệ thống trợ lái thông minh.",
  },
  {
    slug: "vf-8",
    name: "VF 8",
    tagline: "SUV điện thông minh 5 chỗ",
    category: "SUV",
    price: "1.099.000.000 ₫",
    range: "447 km",
    power: "260 kW",
    acceleration: "5.5s",
    image: vf8,
    description:
      "Thiết kế Pininfarina đẳng cấp, công nghệ AI tiên tiến và hiệu suất vận hành mạnh mẽ trong từng chi tiết.",
  },
  {
    slug: "vf-3",
    name: "VF 3",
    tagline: "Xe đô thị mini điện",
    category: "Mini",
    price: "299.000.000 ₫",
    range: "210 km",
    power: "32 kW",
    acceleration: "5.3s",
    image: vf3,
    description:
      "Nhỏ gọn, linh hoạt, cá tính. VF 3 là người bạn đồng hành lý tưởng cho cuộc sống đô thị năng động.",
  },
  {
    slug: "evo200",
    name: "Evo200",
    tagline: "Xe máy điện thế hệ mới",
    category: "Xe máy điện",
    price: "22.000.000 ₫",
    range: "203 km",
    power: "3.5 kW",
    acceleration: "—",
    image: escooter,
    description:
      "Xe máy điện thông minh với pin LFP an toàn, quãng đường di chuyển ấn tượng cho mỗi lần sạc.",
  },
];

export const getCar = (slug: string) => cars.find((c) => c.slug === slug);