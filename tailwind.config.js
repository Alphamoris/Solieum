/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    // Primary purple colors
    'bg-primary-purple-50', 'bg-primary-purple-100', 'bg-primary-purple-200', 'bg-primary-purple-300',
    'bg-primary-purple-400', 'bg-primary-purple-500', 'bg-primary-purple-600', 'bg-primary-purple-700',
    'bg-primary-purple-800', 'bg-primary-purple-900',
    // Primary blue colors
    'bg-primary-blue-50', 'bg-primary-blue-100', 'bg-primary-blue-200', 'bg-primary-blue-300',
    'bg-primary-blue-400', 'bg-primary-blue-500', 'bg-primary-blue-600', 'bg-primary-blue-700',
    'bg-primary-blue-800', 'bg-primary-blue-900',
    // Primary green colors
    'bg-primary-green-50', 'bg-primary-green-100', 'bg-primary-green-200', 'bg-primary-green-300',
    'bg-primary-green-400', 'bg-primary-green-500', 'bg-primary-green-600', 'bg-primary-green-700',
    'bg-primary-green-800', 'bg-primary-green-900',
    // Text colors
    'text-primary-purple-300', 'text-primary-purple-400', 'text-primary-blue-300', 'text-primary-green-300',
    // Opacity variants
    'bg-primary-purple-500/5', 'bg-primary-purple-500/10', 'bg-primary-purple-500/15',
    'bg-primary-purple-500/20', 'bg-primary-purple-500/30', 'bg-primary-purple-500/40',
    'bg-primary-blue-500/5', 'bg-primary-blue-500/10', 'bg-primary-blue-500/15',
    'bg-primary-blue-500/20', 'bg-primary-blue-500/30', 'bg-primary-blue-500/40',
    'bg-primary-green-500/5', 'bg-primary-green-500/10', 'bg-primary-green-500/15',
    'bg-primary-green-500/20', 'bg-primary-green-500/30', 'bg-primary-green-500/40',
    // Border colors
    'border-primary-purple-500', 'border-primary-blue-500', 'border-primary-green-500',
    'border-primary-purple-500/20', 'border-primary-blue-500/20', 'border-primary-green-500/20',
    // Gradient backgrounds
    'bg-gradient-purple-blue', 'bg-gradient-blue-purple', 'bg-gradient-purple-green', 
    'bg-gradient-blue-green', 'bg-gradient-tri', 'bg-gradient-to-tri', 'bg-gradient-tri-down',
    // Box shadows
    'shadow-glow-purple', 'shadow-glow-blue', 'shadow-glow-green', 'shadow-glow-tri',
    // Button-specific classes
    'hover:bg-primary-purple-600', 'hover:bg-primary-blue-600', 'hover:bg-primary-green-600',
    'hover:shadow-glow-purple', 'hover:shadow-glow-blue', 'hover:shadow-glow-green',
    'shadow-primary-purple-500/20', 'shadow-primary-blue-500/20', 'shadow-primary-green-500/20',
    'hover:bg-primary-purple-500/10', 'hover:border-primary-purple-400/50',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-geist-sans)'],
      mono: ['var(--font-geist-mono)'],
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        md: '2rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
    extend: {
      colors: {
        background: '#000000',
        foreground: '#f0f0f8',
        primary: {
          purple: {
            50: '#faf0ff',
            100: '#f5e1ff',
            200: '#ebc3ff',
            300: '#e094ff',
            400: '#e050ff',
            500: '#DC1FFF',
            600: '#ca0fea',
            700: '#ac0bc7',
            800: '#8e0ea1',
            900: '#750e84',
            950: '#4c005a',
          },
          blue: {
            50: '#e0feff',
            100: '#c2fbff',
            200: '#94f7ff',
            300: '#54f1ff',
            400: '#20e8ff',
            500: '#03E1FF',
            600: '#00b4cc',
            700: '#008fa7',
            800: '#037387',
            900: '#07606f',
            950: '#003f4c',
          },
          green: {
            50: '#e9fff6',
            100: '#c8ffea',
            200: '#97ffda',
            300: '#51ffc4',
            400: '#16ffad',
            500: '#00FFA3',
            600: '#00d084',
            700: '#00a669',
            800: '#008256',
            900: '#006948',
            950: '#003c29',
          },
        },
        secondary: {
          orange: {
            50: '#fff8ed',
            100: '#ffefd4',
            200: '#ffdca8',
            300: '#ffc271',
            400: '#ff9e36',
            500: '#ff7f0f',
            600: '#f76203',
            700: '#cc4a05',
            800: '#a23b0d',
            900: '#84330f',
            950: '#471705',
          },
        },
        state: {
          success: '#00FFA3',
          warning: '#f59e0b',
          error: '#ef4444',
          info: '#03E1FF',
        },
        neutral: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'gradient-shift': {
          '0%, 100%': { 
            backgroundPosition: '0% 50%',
            transform: 'scale(1)',
          },
          '25%': { 
            backgroundPosition: '100% 50%',
            transform: 'scale(1.03)',
          },
          '50%': { 
            backgroundPosition: '100% 100%',
            transform: 'scale(0.98)',
          },
          '75%': { 
            backgroundPosition: '0% 100%',
            transform: 'scale(1.01)',
          },
        },
        'spin': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'float': {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        'pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'gradient-slow': 'gradient-shift 20s ease infinite alternate',
        'spin': 'spin 1s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'gradient-purple-blue': 'linear-gradient(135deg, #DC1FFF, #03E1FF)',
        'gradient-blue-purple': 'linear-gradient(135deg, #03E1FF, #DC1FFF)',
        'gradient-purple-green': 'linear-gradient(135deg, #DC1FFF, #00FFA3)',
        'gradient-blue-green': 'linear-gradient(135deg, #03E1FF, #00FFA3)',
        'gradient-tri': 'linear-gradient(135deg, #DC1FFF, #03E1FF, #00FFA3)',
        'gradient-to-tri': 'linear-gradient(to right, #DC1FFF, #03E1FF, #00FFA3)',
        'gradient-tri-down': 'linear-gradient(to bottom, #DC1FFF, #03E1FF, #00FFA3)',
      },
      boxShadow: {
        'glow-purple': '0 0 15px 2px rgba(220, 31, 255, 0.3)',
        'glow-blue': '0 0 15px 2px rgba(3, 225, 255, 0.3)',
        'glow-green': '0 0 15px 2px rgba(0, 255, 163, 0.3)',
        'glow-tri': '0 0 20px 3px rgba(3, 225, 255, 0.25), 0 0 15px 2px rgba(220, 31, 255, 0.2), 0 0 15px 2px rgba(0, 255, 163, 0.2)',
      },
    },
  },
  plugins: [],
}; 