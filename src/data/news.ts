import vf8 from "@/assets/vf8.jpg";
import vf9 from "@/assets/vf9.jpg";
import vf3 from "@/assets/vf3.jpg";

export type NewsItem = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  content: string[];
};

export const news: NewsItem[] = [
  {
    slug: "vf9-bao-giao-chau-au",
    date: "12/05/2026",
    title: "VinFast bàn giao lô VF 9 đầu tiên tại châu Âu",
    excerpt:
      "Cột mốc quan trọng đánh dấu bước tiến của thương hiệu Việt trên thị trường quốc tế.",
    image: vf9,
    content: [
      "Ngày 12/05/2026, VinFast chính thức bàn giao lô xe VF 9 đầu tiên đến tay khách hàng tại Đức, mở ra chương mới trong hành trình toàn cầu hóa.",
      "Lô xe gồm 200 chiếc VF 9 phiên bản Plus, được sản xuất tại nhà máy Hải Phòng và vận chuyển bằng tàu chuyên dụng đến cảng Bremerhaven.",
      "Sự kiện đánh dấu cam kết của VinFast trong việc đưa xe điện Việt Nam ra thế giới, đồng thời khẳng định chất lượng đạt chuẩn châu Âu.",
    ],
  },
  {
    slug: "vf8-an-toan-5-sao",
    date: "08/05/2026",
    title: "VF 8 đạt chứng nhận an toàn 5 sao Euro NCAP",
    excerpt:
      "Khẳng định chất lượng và độ an toàn hàng đầu trong phân khúc SUV điện.",
    image: vf8,
    content: [
      "VF 8 vừa được Euro NCAP — tổ chức đánh giá an toàn ô tô uy tín nhất châu Âu — trao chứng nhận 5 sao tuyệt đối.",
      "Mẫu xe đạt điểm số ấn tượng trong cả 4 hạng mục: bảo vệ người lớn, bảo vệ trẻ em, bảo vệ người đi đường và hệ thống hỗ trợ an toàn.",
      "Đây là bước tiến quan trọng giúp VF 8 cạnh tranh sòng phẳng với các đối thủ hạng sang tại thị trường châu Âu.",
    ],
  },
  {
    slug: "vf3-cu-hich-do-thi",
    date: "01/05/2026",
    title: "VF 3 — Cú hích mới cho phân khúc xe đô thị",
    excerpt: "Mẫu mini SUV điện cá tính, giá hợp lý cho người dùng trẻ.",
    image: vf3,
    content: [
      "Với thiết kế trẻ trung, kích thước nhỏ gọn và mức giá chỉ từ 299 triệu, VF 3 đang trở thành hiện tượng trong phân khúc xe đô thị.",
      "Chỉ sau 66 giờ mở bán, VinFast đã nhận được hơn 27.000 đơn đặt cọc — con số kỷ lục trong lịch sử ngành ô tô Việt Nam.",
      "VF 3 nhắm đến nhóm khách hàng trẻ, năng động, ưu tiên sự cá tính và tiết kiệm chi phí vận hành.",
    ],
  },
];

export const getNews = (slug: string) => news.find((n) => n.slug === slug);