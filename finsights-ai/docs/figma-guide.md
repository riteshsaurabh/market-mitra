# FinInsights AI - Figma Design Guide

## Creating a Figma Design File

While a complete Figma file isn't included directly in this codebase, you can create one based on the existing design. Here's how to approach it:

### Step 1: Set Up Design System

1. Create a new Figma file named "FinInsights AI Design System"
2. Set up color styles based on the CSS variables in `globals.css`:
   - Primary: #006080 (hsl(198, 100%, 30%))
   - Secondary: #D1F3F0 (hsl(175, 100%, 82%))
   - Midnight: #0B1F3F
   - Teal: #008C99
   - Aqua: #D1F3F0

3. Set up text styles based on the typography used:
   - Font: Inter (Google Font)
   - Headings: Bold, various sizes
   - Body: Regular, various sizes

### Step 2: Create Component Library

Create the following components that match the shadcn/ui components used in the application:
- Buttons (Primary, Secondary, Outline, Ghost)
- Cards
- Form elements (Input, Checkbox, Radio)
- Navigation elements (Sidebar, Navbar)
- Charts and data visualization elements

### Step 3: Create Page Layouts

Design the following pages:
1. Landing page
2. Dashboard
3. Insights viewer
4. Sign-in/Sign-up pages
5. Demo page
6. Status report page

### Step 4: Export Assets

Export any icons or images used in the design for use in the application.

## Design Principles

- **Responsive Design**: Ensure all components work across different screen sizes
- **Accessibility**: Use sufficient color contrast and clear visual hierarchy
- **Consistency**: Maintain consistent spacing, typography, and color usage
- **Dark Mode**: Create variants for both light and dark themes

## Key Measurements

- Border radius: 1rem (16px) for cards and larger elements
- Border radius: 0.5rem (8px) for buttons and smaller elements
- Spacing: Multiples of 4px (0.25rem)
- Container max-width: 1400px

## Color Palette Reference

```css
/* Light Mode */
--background: 0 0% 100%;
--foreground: 222.2 84% 4.9%;
--primary: 198 100% 30%;
--secondary: 175 100% 82%;
--muted: 210 40% 96.1%;
--accent: 175 100% 82%;

/* Dark Mode */
--background: 222.2 84% 4.9%;
--foreground: 210 40% 98%;
--primary: 198 100% 30%;
--secondary: 175 100% 82%;
--muted: 217.2 32.6% 17.5%;
--accent: 175 100% 82%;
