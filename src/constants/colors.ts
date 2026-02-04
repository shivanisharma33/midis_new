/**
 * Brand color palette for consistent theming
 */

export const BRAND_COLORS = {
  primary: {
    orange: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f97316',
      600: '#ea580c',
    },
    purple: {
      400: '#c084fc',
      500: '#a855f7',
      600: '#9333ea',
    },
    pink: {
      400: '#f472b6',
      500: '#ec4899',
    },
  },
  neutral: {
    black: '#000000',
    white: '#ffffff',
    gray: {
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
    },
  },
  gradients: {
    orangeToPink: 'linear-gradient(to right, #fb923c, #f472b6)',
    purpleToOrange: 'linear-gradient(to right, #a855f7, #fb923c)',
    blackFade: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.2), rgba(0,0,0,0.5))',
  },
} as const;
