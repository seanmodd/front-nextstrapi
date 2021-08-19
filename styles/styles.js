// 1. Import the extendTheme function
import { extendTheme, useColorMode } from '@chakra-ui/react';
import 'typeface-poppins';
import { GlobalStyleProps, Styles, mode } from '@chakra-ui/theme-tools';
// 2. Extend the theme to include custom colors, fonts, etc
// const colors = {
//   brand: {
//     900: '#1a365d',
//     800: '#153e75',
//     700: '#2a69ac',
//   },
// };

// // setup light/dark mode global defaults
// const mystyles: Styles = {
//   global: (props) => ({
//     body: {
//       color: useColorMode('gray.800', 'whiteAlpha.900')(props),
//       bg: useColorMode('white', 'gray.900')(props)
//     }
//   })
// };

// const mycomponents = {
//   Link: {
//     // setup light/dark mode component defaults
//     baseStyle: (props: GlobalStyleProps) => ({
//       color: mode('blue.400', 'blue.300')(props)
//     })
//   }
// };

export const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        // bg: mode('white', 'black')(props),
        color: useColorMode('red.300', 'blue.500'),
      },
      // styles for the `body`
      h1: {
        // color: '#202020',
        fontFamily: 'Poppins, sans-serif',
        fontSize: '1.5rem',
        fontWeight: 'semibold',
        lineHeight: '1.5',
        padding: '0 1rem',
      },
      // styles for the `h1`
      body: {
        // bg: 'gray.400',
        // color: '#202020',
        color: useColorMode('red.300', 'blue.500'),
      },
      // styles for the `a`
      a: {
        color: 'blue.500',
        _hover: {
          textDecoration: 'underline',
        },
      },
      button: {
        p: '5',
        m: '5',
        bg: 'gray.700',
        color: 'blue.50',
        fontWeight: 'semibold',
        textShadow: '-1px 1px 15px #ff00007e',
        // border: '1px',
        borderWidth: '5px',
        borderRadius: '15px',
        borderColor: 'gray.700',
        _hover: {
          // textDecoration: 'underline',
          // border: '5px',
          borderColor: '#0022e4',
          bg: 'gray.50',
          color: '#0022e4',
          textShadow: '0 3px 0 #a0a0a07e',
          borderWidth: '5px',
          borderRadius: '15px',
          borderColor: '#0022e4',
        },
        transition: 'all 0.5s ease-in-out',
      },
    }),
  },
  components: {
    Heading: {
      baseStyle: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        lineHeight: '1.5',
        fontFamily: 'Poppins, sans-serif',
      },
    },
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: 'bold', // Normally, it is "semibold"
      },
      // 2. We can add a new button size or extend existing
      sizes: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
        },
        lg: {
          h: '48px',
          fontSize: 'lg',
          px: '24px',
        },
        md: {
          h: '40px',
          fontSize: 'lg',
          px: '20px',
        },
        sm: {
          h: '32px',
          fontSize: 'lg',
          px: '16px',
        },
        xs: {
          h: '28px',
          fontSize: 'lg',
          px: '14px',
        },
      },
      variants: {
        'with-shadow': {
          bg: 'red.400',
          boxShadow: '0 0 2px 2px #efdfde',
        },
        // 4. We can override existing variants
        solid: (props) => ({
          bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
          color: props.colorMode === 'dark' ? 'red.300' : 'blue.500',
        }),
      },
    },
  },
});

// const myfonts = {
//   fonts: {
//     heading: 'Poppins',
//     body: 'Poppins',
//   },
// };

// export const theme = extendTheme({ colors, mytheme });
