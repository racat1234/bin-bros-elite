# Bin Bros Elite - Bin Cleaning Service Website

A professional website for Bin Bros Elite, a bin cleaning service in Oakhurst. This modern, responsive React site includes sections for services, about us, and a booking system integrated with SimplyBook.me.

![Bin Bros Elite Screenshot](./screenshot.png)

## Features

- Responsive design that works on all devices
- Simple and clean UI with easy navigation
- Service cards showcasing different cleaning packages
- About section with company information and testimonials
- Integrated booking system via SimplyBook.me
- Contact information and call-to-action buttons

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- Netlify for deployment
- SimplyBook.me for booking functionality

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- Bun package manager

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/bin-bros-elite.git
   cd bin-bros-elite
   ```

2. Install dependencies
   ```
   bun install
   ```

3. Start the development server
   ```
   bun run dev
   ```

4. Open your browser at `http://localhost:5173`

## Booking Integration

The website integrates with SimplyBook.me for booking management. The integration is done via their widget:

```html
<script src="https://widget.simplybook.me/v2/widget/widget.js" type="text/javascript"></script>
<script type="text/javascript">
   var widget = new SimplybookWidget({...});
</script>
```

## Deployment

The site is configured for easy deployment to Netlify:

1. Build the project:
   ```
   bun run build
   ```

2. Deploy using Netlify CLI or connect your GitHub repository to Netlify for automatic deployments.

## Customization

- Colors and styling can be modified in `tailwind.config.js`
- Main content is in `App.tsx`
- Assets are stored in the `public` folder

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support with this website, please contact the developer.

---

Created for Bin Bros Elite © 2025
