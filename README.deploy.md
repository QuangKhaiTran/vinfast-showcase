# Hướng dẫn Deploy

## Deploy lên Cloudflare Pages (Khuyến nghị)

Project này được build cho Cloudflare Workers, deploy lên Cloudflare Pages sẽ dễ nhất:

### Bước 1: Cài đặt Wrangler CLI
```bash
npm install -g wrangler
```

### Bước 2: Login Cloudflare
```bash
wrangler login
```

### Bước 3: Deploy
```bash
npm run build
wrangler pages deploy dist/client
```

Hoặc connect GitHub repo với Cloudflare Pages:
1. Vào https://dash.cloudflare.com/
2. Chọn "Workers & Pages" > "Create application" > "Pages"
3. Connect GitHub repository
4. Build command: `npm run build`
5. Build output directory: `dist/client`
6. Deploy!

## Deploy lên Vercel (Cần chuyển đổi)

Nếu muốn deploy lên Vercel, cần:
1. Xóa Cloudflare adapter
2. Cài TanStack Start Vercel adapter
3. Cấu hình lại vite.config.ts

Bạn có muốn tôi chuyển đổi sang Vercel không?
