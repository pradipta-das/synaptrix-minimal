# Modern Business Theme - Installation Guide

## Table of Contents
1. [Quick Installation](#quick-installation)
2. [Development Setup](#development-setup)
3. [Theme Configuration](#theme-configuration)
4. [Required Apps](#required-apps)
5. [Performance Optimization](#performance-optimization)
6. [Troubleshooting](#troubleshooting)

## Quick Installation

### Method 1: Upload Theme Files
1. **Download the theme** files from this repository
2. **Compress the theme** folder into a ZIP file
3. **Go to your Shopify admin** → Online Store → Themes
4. **Click "Upload theme"** and select your ZIP file
5. **Publish the theme** once uploaded

### Method 2: Using Shopify CLI (Recommended)
1. **Install Shopify CLI**: `npm install -g @shopify/cli @shopify/theme`
2. **Clone this repository**: `git clone [repository-url]`
3. **Navigate to theme directory**: `cd modern-business-theme`
4. **Connect to your store**: `shopify theme dev --store your-store.myshopify.com`
5. **Push to production**: `shopify theme push`

## Development Setup

### Prerequisites
- Node.js 18+ and npm 8+
- Shopify CLI
- Git (optional but recommended)

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint

# Format code
npm run format
```

### Development Commands
- `npm run dev` - Start Shopify development server
- `npm run build` - Build optimized CSS/JS
- `npm run watch` - Watch for file changes
- `npm run deploy` - Deploy to production
- `npm run test` - Run all tests and linting

## Theme Configuration

### 1. Basic Setup
After installation, configure these essential settings:

**Theme Settings → General:**
- Store name and tagline
- Logo upload (recommended: 200x60px)
- Favicon upload (32x32px)
- Color scheme selection
- Typography settings

**Theme Settings → Layout:**
- Page width: 1200px (default)
- Container padding: 20px
- Section spacing: 50px

### 2. Homepage Configuration
The theme comes with a pre-configured homepage. Customize these sections:

1. **Hero Banner** - Main promotional area
2. **Featured Products** - Showcase best sellers
3. **Collections** - Product categories
4. **Trust Badges** - Build customer confidence
5. **Testimonials** - Social proof
6. **Newsletter** - Email capture

### 3. Header & Navigation
- **Logo**: Upload in Theme Settings → Header
- **Menu**: Create in Navigation → Main menu
- **Announcement Bar**: Configure in Theme Settings → Announcement

### 4. Footer Configuration
- **Newsletter signup**: Enable in Theme Settings → Footer
- **Social media links**: Add in Theme Settings → Social media
- **Payment methods**: Configure in Theme Settings → Payments
- **Footer menu**: Create in Navigation → Footer menu

## Required Apps

### Essential Apps (Free)
1. **Shopify Email** - Email marketing
2. **Shopify Inbox** - Customer chat
3. **Google & YouTube** - SEO and ads
4. **Kit** - Marketing automation

### Recommended Apps (Premium)
1. **Klaviyo** - Advanced email marketing
2. **Yotpo** - Product reviews
3. **Loox** - Photo reviews
4. **Bold Upsell** - Increase AOV
5. **ShipStation** - Shipping management

### 2025 Trending Apps
1. **Sidekick AI** - AI-powered personalization
2. **Shop Pay** - Fast checkout
3. **Shopify AR** - Augmented reality
4. **EcoCart** - Carbon neutral shipping
5. **TikTok** - Social commerce

## Performance Optimization

### Image Optimization
- Use WebP format when possible
- Compress images before upload
- Use appropriate image sizes:
  - Hero images: 1920x800px
  - Product images: 1024x1024px
  - Thumbnails: 300x300px

### Speed Optimization
1. **Enable browser caching** in your hosting
2. **Use CDN** for static assets
3. **Minimize HTTP requests**
4. **Optimize CSS/JS** using build tools
5. **Use lazy loading** for images

### SEO Setup
1. **Configure meta titles and descriptions**
2. **Add structured data** (included in theme)
3. **Create XML sitemap**
4. **Set up Google Analytics**
5. **Configure Search Console**

## Post-Installation Checklist

### Content Setup
- [ ] Upload logo and favicon
- [ ] Add products with high-quality images
- [ ] Create collections and organize products
- [ ] Write compelling product descriptions
- [ ] Add shipping and return policies
- [ ] Create essential pages (About, Contact, FAQ)

### Settings Configuration
- [ ] Configure payment methods
- [ ] Set up shipping zones and rates
- [ ] Configure taxes
- [ ] Set up email templates
- [ ] Configure checkout settings
- [ ] Enable relevant apps

### Testing
- [ ] Test on mobile devices
- [ ] Test checkout process
- [ ] Test contact forms
- [ ] Test search functionality
- [ ] Test newsletter signup
- [ ] Check page loading speeds

## Troubleshooting

### Common Issues

**Theme not displaying correctly:**
- Clear browser cache
- Check for JavaScript errors in console
- Verify theme is published
- Check for conflicting apps

**Images not loading:**
- Verify image URLs are correct
- Check file sizes (max 20MB)
- Ensure images are in correct format
- Check CDN settings

**Slow loading times:**
- Optimize images
- Remove unused apps
- Check third-party scripts
- Use performance monitoring tools

**Mobile issues:**
- Test on actual devices
- Check responsive breakpoints
- Verify touch interactions
- Test mobile checkout

### Support Resources
- **Shopify Help Center**: help.shopify.com
- **Community Forums**: community.shopify.com
- **Developer Documentation**: shopify.dev
- **Theme Inspector**: Chrome extension for debugging

## Advanced Customization

### Custom CSS
Add custom styles in:
- Theme Settings → Custom CSS
- Or edit `assets/base.css` directly

### Custom JavaScript
Add custom functionality in:
- Theme Settings → Custom JavaScript
- Or edit `assets/theme.js` directly

### Liquid Customization
For advanced customization:
- Edit template files in `templates/`
- Modify sections in `sections/`
- Create custom snippets in `snippets/`

## Maintenance

### Regular Updates
- Keep Shopify CLI updated
- Update Node.js dependencies
- Monitor theme performance
- Regular backups before major changes

### Monitoring
- Use Google Analytics
- Monitor Core Web Vitals
- Track conversion rates
- Check for broken links

## Getting Help

If you encounter issues:
1. Check this documentation
2. Review Shopify's official documentation
3. Search community forums
4. Contact Shopify support
5. Consider hiring a Shopify expert

---

**Note**: This theme includes all the latest 2025 Shopify features and is optimized for small businesses. Regular updates and maintenance will ensure optimal performance and security.