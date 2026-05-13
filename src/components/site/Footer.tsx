import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/30 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2">
          <div className="text-2xl font-bold text-gradient-primary mb-4">VINFAST</div>
          <p className="text-sm text-muted-foreground max-w-sm">
            Mạnh mẽ. Sáng tạo. Trách nhiệm. Hãng xe điện toàn cầu của người Việt,
            kiến tạo tương lai di chuyển bền vững.
          </p>
          <div className="flex gap-3 mt-6">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 rounded-full bg-secondary hover:bg-primary transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm">Sản phẩm</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/xe-o-to">Xe ô tô điện</Link></li>
            <li><Link to="/xe-may-dien">Xe máy điện</Link></li>
            <li><Link to="/tram-sac">Trạm sạc V-Green</Link></li>
            <li><Link to="/uu-dai">Ưu đãi</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm">Hỗ trợ</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/dich-vu">Dịch vụ sau bán hàng</Link></li>
            <li><Link to="/dai-ly">Hệ thống đại lý</Link></li>
            <li><Link to="/lien-he">Liên hệ</Link></li>
            <li><Link to="/ve-chung-toi">Về VinFast</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/50 py-6 text-center text-xs text-muted-foreground">
        © 2026 VinFast. Mô phỏng giao diện cho mục đích trình diễn.
      </div>
    </footer>
  );
}