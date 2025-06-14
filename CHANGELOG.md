# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2024-03-19

### Added

- Authentication system with login and signup pages
- Protected routes with middleware
- Dummy credentials for demo purposes
- Form validation and error handling
- Responsive auth pages with Spotify-like design

### Changed

- Reorganized project structure under (main) and (auth) groups
- Improved routing and navigation
- Enhanced UI components with better accessibility

### Security

- Added basic route protection
- Implemented form validation
- Added error handling for auth forms

## [0.1.0] - 2024-03-19

### Added

- Initial project setup with Next.js, TypeScript, and Tailwind CSS
- Music player with play/pause, next/previous, and volume controls
- Dynamic routing for playlists, albums, and artists
- Search functionality with category filtering
- Responsive grid layouts for content display
- Loading states with skeleton components

### Changed

- Improved component organization
- Enhanced UI with better spacing and typography
- Optimized image loading and caching

### Fixed

- Image loading issues in production
- Type errors in components
- Search functionality edge cases

### Testing

- Added Jest configuration
- Implemented basic component tests
- Added test utilities and mocks

### Dependencies

- Added testing dependencies (Jest, React Testing Library)
- Updated Next.js to latest version
- Added Lucide icons for better UI elements
