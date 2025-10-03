# Next.js PWA with Authentication

A Progressive Web App (PWA) built with Next.js 15, featuring mock authentication and modern UI with Tailwind CSS.

## Features

- ✅ **Next.js 15** - Latest version with App Router
- ✅ **Progressive Web App (PWA)** - Installable, works offline with service workers
- ✅ **Mock Authentication** - Demo authentication system with localStorage
- ✅ **TypeScript** - Full type safety
- ✅ **Tailwind CSS** - Modern, responsive UI design
- ✅ **Protected Routes** - Dashboard accessible only to authenticated users
- ✅ **Dark Mode Support** - UI adapts to system preferences

## Screenshots

### Login Page
![Login Page](https://github.com/user-attachments/assets/2663f203-68c4-4fb0-a2cf-cff234a6b7b5)

### Dashboard
![Dashboard](https://github.com/user-attachments/assets/874ea83d-4cb6-41b7-8f30-ab9bb454c7da)

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/worida2025/agenet_test.git
cd agenet_test
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Demo Credentials

The app includes three demo accounts for testing:

| Email | Password | Role |
|-------|----------|------|
| admin@example.com | admin123 | admin |
| user@example.com | user123 | user |
| demo@example.com | demo123 | user |

## Project Structure

```
agenet_test/
├── app/
│   ├── dashboard/         # Protected dashboard page
│   │   └── page.tsx
│   ├── login/            # Login page
│   │   └── page.tsx
│   ├── layout.tsx        # Root layout with AuthProvider
│   ├── page.tsx          # Home page (redirects to login/dashboard)
│   └── globals.css       # Global styles
├── contexts/
│   └── AuthContext.tsx   # Authentication context and hooks
├── lib/
│   └── mockData.ts       # Mock user data and validation
├── public/
│   └── manifest.json     # PWA manifest
├── next.config.ts        # Next.js configuration with PWA
└── package.json
```

## Authentication Flow

1. **Unauthenticated users** are redirected to `/login`
2. **Login** validates credentials against mock data
3. **Successful login** stores user in localStorage and redirects to `/dashboard`
4. **Protected routes** check authentication status and redirect if needed
5. **Logout** clears localStorage and redirects to `/login`

## PWA Features

- **Installable**: Users can install the app on their device
- **Offline Support**: Service workers enable offline functionality (in production)
- **App-like Experience**: Runs in standalone mode on mobile devices
- **Fast Performance**: Optimized caching strategies

### Installing the PWA

On desktop browsers:
- Look for the install icon in the address bar
- Click to install the app

On mobile devices:
- Open the app in your browser
- Tap the "Add to Home Screen" option
- Follow the prompts to install

## Technologies Used

- **Framework**: [Next.js 15](https://nextjs.org/)
- **PWA**: [@ducanh2912/next-pwa](https://github.com/DuCanhGH/next-pwa)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **State Management**: React Context API

## Development Notes

### Mock Authentication

The current authentication system uses:
- localStorage for session persistence
- Mock user data in `/lib/mockData.ts`
- Client-side validation

**⚠️ Important**: This is for demonstration only. For production:
- Implement proper backend authentication
- Use secure session management (JWT, OAuth, etc.)
- Add HTTPS
- Implement CSRF protection
- Use secure cookies instead of localStorage

### PWA Configuration

PWA is configured in `next.config.ts`:
- Disabled in development mode
- Service workers generated automatically in production
- Manifest file located at `/public/manifest.json`

### Adding Icons

Replace the placeholder icon files with actual images:
- `public/icon-192x192.png` (192x192px)
- `public/icon-512x512.png` (512x512px)

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

