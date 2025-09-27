# Portfolio Setup Instructions

## Profile Image Setup

Your portfolio is using a placeholder SVG image located at `/public/profile.svg`. To use your actual profile photo:

1. Save your profile image as `profile.jpg` in the `/public` folder
2. Update the Hero component to use `profile.jpg` instead of `profile.svg`
3. The image should be:
   - Square aspect ratio (recommended)
   - High resolution (at least 400x400px)
   - Good lighting and professional appearance

## Current Features Implemented

### ✅ Glassmorphism Navbar
- Beautiful glassmorphism effect with backdrop blur
- Scroll-triggered shadow enhancement
- Animated navigation links with gradient underlines
- Mobile responsive design

### ✅ Animated Profile Section
- Profile image with gradient border animation
- Click to spin animation (1 second rotation)
- Floating animation when not spinning
- Waving emoji (👋) appears when clicked
- "Hello!" text bubble with fade-in effect
- Glowing hover effects

### ✅ Enhanced Styling
- Custom CSS animations
- Improved glassmorphism effects
- Smooth transitions and transforms
- Responsive design for all screen sizes

## How to Replace Profile Image

1. Replace `/public/profile.svg` with `/public/profile.jpg`
2. In `/src/components/Hero.js`, change:
   ```javascript
   src="/profile.svg"
   ```
   to:
   ```javascript
   src="/profile.jpg"
   ```

## Animation Details

- **Profile Click**: Triggers 360° rotation + waving emoji
- **Navbar Scroll**: Glassmorphism effect intensifies with shadow
- **Profile Hover**: Glowing effect with multiple colored shadows
- **Navigation Links**: Gradient underline animation on hover

Your portfolio is now ready with all the requested features! 🎉