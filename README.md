# Farrasindo Website 2.0.0

Official website for Farrasindo Group - A comprehensive Next.js application showcasing products, services, portfolio, and company information.

## 🚀 Tech Stack

- **Framework**: Next.js 16.0.3 (App Router)
- **React**: 19.2.0
- **TypeScript**: v5
- **Styling**: Tailwind CSS v4
- **UI Libraries**: Radix UI, Framer Motion, React Slick, Lucide React
- **Internationalization**: Multi-language support (ID/EN)

## 📦 Getting Started

### Development

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Production Build

```bash
npm run build
npm start
```

## 🐳 Docker Deployment

This project includes Docker support for easy deployment.

### Quick Start with Docker

```bash
# Build and run with Docker Compose
docker-compose up -d --build

# Access the application
# http://localhost:3000
```

### Docker Commands

```bash
# Start containers
docker-compose up -d

# Stop containers
docker-compose down

# View logs
docker-compose logs -f

# Rebuild
docker-compose up -d --build
```

For detailed Docker deployment guide, see [DOCKER.md](./DOCKER.md)

## 📁 Project Structure

```
src/
├── app/              # Next.js App Router
│   ├── [locale]/     # i18n routes
│   └── api/          # API routes
├── components/       # Reusable components
├── lib/              # Utilities and data
│   └── datas/        # Static data files
└── messages/         # i18n translations
```

## 🌐 Features

- ✅ Multi-language support (Indonesian/English)
- ✅ Responsive design
- ✅ Product catalog with filtering
- ✅ Portfolio showcase
- ✅ News & Events section
- ✅ Company information
- ✅ Contact forms
- ✅ SEO optimized

## 📚 Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## 🚢 Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Deploy with Docker

See [DOCKER.md](./DOCKER.md) for comprehensive Docker deployment guide including:
- Production deployment
- Nginx reverse proxy setup
- SSL/HTTPS configuration
- Performance optimization
- Troubleshooting

### Deploy with OpenLiteSpeed

See [OPENLITESPEED.md](./OPENLITESPEED.md) for OpenLiteSpeed reverse proxy configuration:
- Virtual Host setup
- Proxy configuration
- SSL/HTTPS with Let's Encrypt
- Performance tuning
- Auto-restart configuration

## 📄 License

Copyright © 2024 Farrasindo Group. All rights reserved.

