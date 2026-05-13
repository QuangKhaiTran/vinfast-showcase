import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { MapPin, Phone } from "lucide-react";

const dealers = [
  { name: "VinFast Hà Nội", address: "458 Minh Khai, Quận Hai Bà Trưng, Hà Nội", phone: "1900 23 23 89" },
  { name: "VinFast TP. Hồ Chí Minh", address: "Số 7 Đường Tân Trào, Quận 7, TP. HCM", phone: "1900 23 23 89" },
  { name: "VinFast Đà Nẵng", address: "Đường Võ Nguyên Giáp, Quận Sơn Trà, Đà Nẵng", phone: "1900 23 23 89" },
  { name: "VinFast Hải Phòng", address: "Khu Vinhomes Imperia, Hồng Bàng, Hải Phòng", phone: "1900 23 23 89" },
  { name: "VinFast Cần Thơ", address: "Đại lộ Hòa Bình, Ninh Kiều, Cần Thơ", phone: "1900 23 23 89" },
  { name: "VinFast Nha Trang", address: "Đường Trần Phú, Nha Trang, Khánh Hòa", phone: "1900 23 23 89" },
];

export const Route = createFileRoute("/dai-ly")({
  head: () => ({
    meta: [
      { title: "Hệ thống đại lý VinFast trên toàn quốc" },
      { name: "description", content: "Tìm đại lý VinFast gần bạn nhất tại các thành phố lớn trên toàn Việt Nam." },
    ],
  }),
  component: () => (
    <Layout>
      <section className="bg-gradient-hero py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold">Hệ thống <span className="text-gradient-primary">đại lý</span></h1>
          <p className="mt-4 text-lg text-muted-foreground">Hơn 120 showroom & xưởng dịch vụ trên toàn quốc.</p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dealers.map((d) => (
          <div key={d.name} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition">
            <h3 className="text-xl font-bold">{d.name}</h3>
            <div className="mt-4 flex items-start gap-3 text-sm text-muted-foreground">
              <MapPin size={16} className="mt-0.5 text-primary shrink-0" />
              <span>{d.address}</span>
            </div>
            <div className="mt-2 flex items-center gap-3 text-sm text-muted-foreground">
              <Phone size={16} className="text-primary" /><span>{d.phone}</span>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  ),
});
