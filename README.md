# Hawaii SaaS Platform

A modern SaaS platform for authentic Hawaii travel experiences, connecting travelers with local guides.

## Project Structure

```
hawaii-saas/
├── pages/                  # Next.js pages
│   ├── _app.tsx          # App wrapper with Supabase context
│   ├── index.tsx         # Home page
│   └── auth/             # Authentication pages
│       ├── login.tsx
│       └── signup.tsx
├── components/           # React components
│   ├── Header.tsx
│   └── Footer.tsx
├── server/              # Express API server
│   ├── index.ts        # Main server file
│   └── db.ts           # Database configuration
├── types/              # TypeScript types
│   └── index.ts
├── utils/              # Utility functions
│   ├── supabase.ts     # Supabase client
│   └── api.ts          # API client
├── migrations/         # Database migrations
│   └── 001_initial_schema.sql
├── styles/             # Global styles
│   └── globals.css
├── scripts/            # Utility scripts
│   └── migrate.js      # Database migration runner
└── public/             # Static files

## Configuration Files

- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration (Next.js)
- `tsconfig.server.json` - TypeScript configuration (Express)
- `next.config.js` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `.env.example` - Environment variables template
- `.env.local` - Local environment variables
- `.gitignore` - Git ignore rules

## Technologies

### Frontend
- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Supabase** - Authentication and real-time database
- **Axios** - HTTP client

### Backend
- **Express.js** - Web framework
- **PostgreSQL** - Database
- **pg** - PostgreSQL client
- **TypeScript** - Type safety

### Integrations
- **Stripe** - Payment processing
- **Supabase** - Backend as a Service

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL 12+
- npm or yarn

### Installation

1. Install dependencies:
```bash
cd hawaii-saas
npm install
```

2. Configure environment variables:
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

3. Run database migrations:
```bash
npm run db:migrate
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at:
- Frontend: http://localhost:3000
- API: http://localhost:3001

### Building

Build for production:
```bash
npm run build
npm start
```

### Type Checking

Check TypeScript types:
```bash
npm run type-check
```

### Linting

Lint the code:
```bash
npm run lint
```

## Database Schema

### Users Table
- User authentication and type (traveler/guide)
- Linked to user profiles and experiences

### User Profiles
- First name, last name, bio, avatar
- Location information

### Experiences
- Tour/activity details
- Price, duration, participant limits
- Location information

### Bookings
- User bookings for experiences
- Status tracking (pending, confirmed, completed, cancelled)
- Pricing information

### Reviews
- User ratings and comments
- Linked to bookings

## API Endpoints

### Health Checks
- `GET /api/health` - Basic health check
- `GET /api/db-health` - Database connection check

## Features

- ✅ User authentication (Supabase)
- ✅ User roles (Traveler/Guide)
- ✅ Experience marketplace
- ✅ Booking system
- ✅ Reviews and ratings
- ✅ Payment integration (Stripe)
- ✅ Responsive design (Tailwind CSS)
- ✅ Type-safe (TypeScript)

## Contributing

Please follow these guidelines:
1. Create feature branches from main
2. Use TypeScript for all code
3. Follow the existing code style
4. Write meaningful commit messages
5. Test your changes before submitting

## License

MIT License - See LICENSE file for details

## Support

For issues and questions, please create an issue in the repository.
