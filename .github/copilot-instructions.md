You are an expert in TypeScript, React, and scalable responsive web application development. You write maintainable, performant, and accessible code following React and TypeScript best practices.

# Copilot Instructions for Don Schaefer Portfolio Site

## Project Overview
A personal portfolio site built with React 18, TypeScript, Vite, and Material-UI v5, showcasing case studies and creative work. The site uses a custom dark theme with "Goodtimes" font and follows responsive design patterns.

## Architecture & Key Patterns

### Routing & Navigation
- **Central Route Config**: All routes defined in `src/data/navRoutes.tsx` as `INavRoute[]` with JSX components
- **Route Helper**: Use `navRoute(NavRouteLabel.Home)` from `src/utilities/routeHelpers.ts` for type-safe navigation
- **Error Handling**: 404 routes automatically fallback to `errorRoute` from navRoutes data

### Component Structure
- **Layout Pattern**: Main `Layout` component (`src/components/Layout/Layout.tsx`) handles:
  - Dynamic header with scroll-triggered logo appearance
  - Navigation state management
  - Theme provider wrapping
- **Template Components**: Use `BasicPageTemplate` or `InnerPageTemplate` for consistent page layouts
- **Data-Driven Components**: Case studies, tech stack, and media pulled from JSON files in `src/data/`

### Styling Approach
- **MUI + SCSS Hybrid**: Material-UI v5 components with custom SCSS variables/mixins
- **Theme Structure**: Dark theme in `src/themes/dark.ts` with custom typography variants (including `logo` variant)
- **Responsive Images**: Use `responsiveImageUrl()` helper for breakpoint-based image optimization
- **Global Styles**: SCSS in `src/styles/` with module imports for variables/mixins

### State & Data Management
- **JSON Data Files**: Case studies, media gallery, tech stack stored in `src/data/*.json`
- **TypeScript Models**: Strongly typed interfaces in `src/models/` (INavRoute, INavItem, MediaType, etc.)
- **Custom Hooks**: `useElementDimensions()` for responsive behavior based on DOM measurements

## TypeScript Best Practices
- Use strict type checking
- Prefer type inference when the type is obvious
- Avoid the `any` type; use `unknown` when type is uncertain

## React Best Practices
- Always use functional components with hooks over class components
- Prefer custom hooks for reusable stateful logic
- Use React.memo() for performance optimization when props are stable
- Implement code splitting with React.lazy() and Suspense for route-level components
- Use semantic HTML elements and proper ARIA attributes for accessibility

## Components
- Keep components small and focused on a single responsibility
- Use TypeScript interfaces for props (follow `I{ComponentName}Props` convention)
- Use `useState` and `useEffect` appropriately, avoiding unnecessary re-renders
- Prefer controlled components over uncontrolled ones
- Use `useCallback` and `useMemo` sparingly, only when performance issues are identified
- Prefer composition over prop drilling - use React Context for deeply nested state

## State Management
- Use `useState` for local component state
- Use `useMemo` for expensive computed values
- Keep state updates immutable and predictable
- Use `useReducer` for complex state logic instead of multiple `useState` calls
- Leverage the existing `useElementDimensions` custom hook pattern for DOM-based state

## Templates & JSX
- Keep JSX simple and avoid complex inline logic
- Extract complex conditional rendering into separate functions or components
- Use semantic HTML and proper accessibility attributes
- Prefer early returns over nested conditionals
- Use Material-UI's `sx` prop for component-specific styling (as established in this project)

## Custom Hooks & Services
- Design custom hooks around a single responsibility (like `useElementDimensions`)
- Use custom hooks to encapsulate side effects and stateful logic
- Keep utility functions pure and place them in `src/utilities/` by category
- Use the established helper pattern: `routeHelpers`, `responsiveHelpers`, `stringHelpers`

## Development Workflow

### Commands
- `npm start` - Vite dev server on port 5173
- `npm test` - Vitest UI for interactive testing
- `npm run build` - Production build to `build/` folder
- `npm run lint` - ESLint on TypeScript/JSX files
- `npm run deploy` - GitHub Pages deployment

### Testing
- **Framework**: Vitest (Jest-compatible) with jsdom environment
- **Location**: Tests in `src/tests/unitTests/` with `.test.ts` extensions
- **Setup**: Global test setup in `src/setupTests.ts`
- **Coverage**: V8 provider with text/HTML reporters

### Media Management
- **Public Assets**: Static files in `public/media/` (copied to build)
- **Responsive Images**: Multiple sizes with suffixes (`-sm`, `-md`, `-lg`)
- **Media Types**: Defined in `src/models/MediaType.ts` enum

## Project-Specific Conventions

### File Organization
- Components use PascalCase folder names with matching `.tsx` files
- Utilities grouped by purpose (`routeHelpers`, `responsiveHelpers`, `stringHelpers`)
- Models define TypeScript interfaces with descriptive names
- Themes and breakpoints separated into dedicated files

### Component Patterns
- Props interfaces follow `I{ComponentName}Props` convention
- Use Material-UI's `sx` prop for component-specific styling
- Custom containers implement `ICustomContainerProps` interface
- Navigation components receive theme as prop for consistent styling

### Performance Considerations
- TODO comment in App.tsx mentions Gallery page optimization for Lighthouse
- Responsive image loading based on viewport width
- Component lazy loading not currently implemented but architecture supports it

## External Dependencies
- **Core**: React 18.3, TypeScript, Vite, Material-UI v5
- **Routing**: React Router DOM v6
- **Styling**: SCSS, Emotion (MUI dependency)
- **Media**: Video.js for video components
- **Testing**: Vitest, React Testing Library
- **Deployment**: GitHub Pages via gh-pages package
