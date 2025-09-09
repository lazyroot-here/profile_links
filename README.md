# Premium Profile Link Page

A beautiful, animated profile link page built with React, Vite, and Tailwind CSS. Perfect for social media bios, business cards, or personal branding.

## Features

✨ **Premium Animations**
- Smooth hover effects with glass morphism
- Floating background orbs
- Gradient animations
- Staggered card appearances

🎨 **Modern Design**
- Dark/Light theme toggle
- Responsive design
- Premium glass effects
- Custom gradient backgrounds

🛠️ **Easy Customization**
- Simple configuration object
- Easily replaceable profile data
- Customizable links and social media

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Customization

### Update Your Profile

Edit the `PROFILE_CONFIG` object in `App.jsx` to customize your profile:

```javascript
const PROFILE_CONFIG = {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio description...",
  profileImage: "your-image-url.jpg",
  links: [
    {
      title: "Portfolio",
      subtitle: "Featured Work",
      url: "https://yourwebsite.com",
      icon: Globe,
      gradient: "from-purple-500 via-violet-500 to-indigo-500",
      description: "Explore my latest projects"
    },
    // Add more links...
  ]
};
```

### Available Icons

Import any icon from `lucide-react`:
- `Github`, `Twitter`, `Linkedin`, `Instagram`, `Youtube`
- `Globe`, `Mail`, `Phone`, `MapPin`
- `Code`, `Briefcase`, `Camera`, `Music`
- And many more...

### Gradient Options

Use any Tailwind CSS gradient classes:
- `from-purple-500 via-violet-500 to-indigo-500`
- `from-blue-600 via-blue-700 to-indigo-700`
- `from-rose-400 via-pink-500 to-red-500`
- `from-emerald-400 via-green-500 to-teal-500`

## File Structure

```
profiel_card/
├── src/
│   ├── main.jsx          # React entry point
│   └── index.css         # Global styles
├── App.jsx               # Main component
├── index.html            # HTML template
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind configuration
└── package.json          # Dependencies
```

## Technologies Used

- **React 18** - Modern UI framework
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

## Deployment

### Netlify/Vercel
1. Run `npm run build`
2. Upload the `dist` folder
3. Configure redirects for SPA routing

### GitHub Pages
1. Run `npm run build`
2. Push to a GitHub repository
3. Enable GitHub Pages from the repository settings

## License

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️ by developers, for developers.

# profile_links
