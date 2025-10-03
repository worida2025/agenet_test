# Quick Start Guide

## Running the Application

1. **Install dependencies** (first time only):
```bash
npm install
```

2. **Start development server**:
```bash
npm run dev
```

3. **Open in browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

4. **Login with demo account**:
- Email: `admin@example.com`
- Password: `admin123`

## Testing the PWA Features

### Development Mode
- PWA features are disabled in development for easier debugging
- Service workers are not registered

### Production Mode
1. Build the application:
```bash
npm run build
```

2. Start production server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000)

4. Look for the install prompt in your browser to install the PWA

## Key Features to Test

1. **Authentication Flow**
   - Login with any demo account
   - Access protected dashboard
   - Logout and verify redirect to login

2. **Route Protection**
   - Try accessing `/dashboard` without logging in
   - Verify automatic redirect to `/login`

3. **PWA Installation** (Production only)
   - Install the app from browser
   - Launch as standalone app
   - Test offline functionality

## Demo Accounts

| Email | Password | Role |
|-------|----------|------|
| admin@example.com | admin123 | admin |
| user@example.com | user123 | user |
| demo@example.com | demo123 | user |

## Troubleshooting

**Build errors?**
- Ensure Node.js 20.x or higher is installed
- Delete `node_modules` and `package-lock.json`, then run `npm install`

**Login not working?**
- Check browser console for errors
- Ensure localStorage is enabled in your browser

**PWA not installing?**
- PWA features only work in production mode (`npm run build && npm start`)
- Use HTTPS in production (required for service workers)
- Check browser compatibility for PWA features

## Next Steps

For production deployment:
1. Replace mock authentication with real backend
2. Add actual PWA icons (192x192 and 512x512)
3. Configure environment variables
4. Set up HTTPS
5. Add proper error handling and validation
6. Implement secure session management
