import Link from 'next/link';
import { useContext } from 'react';
import { HStack, Flex, VStack, Button } from '@chakra-ui/react';
import styles from '@/styles/Header.module.css';
import Search from './Search';
import AuthContext from '@/context/AuthContext';
import 'typeface-raleway';
import '@fontsource/questrial';
import '@fontsource/inter';

export default function Header() {
  const { user, signout } = useContext(AuthContext);
  return (
    // <header className={styles.header}>
    <Flex
      mb="50px"
      w="100vw"
      justifyContent="center"
      alignItems="center"
      // bg="pink"
    >
      <div className={styles.logo}>
        <HStack minWidth="300px" align="center" justify="center">
          <Link href="/">
            <a
              style={{
                fontFamily: 'questrial',
                fontWeight: '600',
                textDecoration: 'underline',
              }}
            >
              Sport News
            </a>
          </Link>
        </HStack>
      </div>
      <HStack minWidth="300px" justifyContent="center" alignItems="center">
        <Search />
      </HStack>
      <HStack
        minWidth="300px"
        justifyContent="center"
        alignItems="center"
        spacing="50px"
        // bg="blue"
      >
        <Link href="/news">
          <a>News</a>
        </Link>
        {user ? (
          <>
            <Link href="/news/add">
              <a>Add News</a>
            </Link>
            <Link href="/auth/dashboard">
              <a>Dashboard</a>
            </Link>
            <button className="btn-secondary" onClick={() => signout()}>
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link href="/auth/signin">
              {/* <button>Sign In</button> */}
              <Button>Sign In</Button>
            </Link>
          </>
        )}
        <Link href="/about">
          <a>About</a>
        </Link>
      </HStack>
    </Flex>
    // </header>
  );
}
