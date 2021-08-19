import Link from 'next/link';
import { useContext } from 'react';
import { HStack, Flex, VStack } from '@chakra-ui/react';
import styles from '@/styles/Header.module.css';
import Search from './Search';
import AuthContext from '@/context/AuthContext';

export default function Header() {
  const { user, signout } = useContext(AuthContext);
  return (
    // <header className={styles.header}>
    <Flex mb="50px" w="100vw" justifyContent="center" alignItems="center">
      <div className={styles.logo}>
        <Flex w="400px">
          <Link href="/">
            <a>Sport News</a>
          </Link>
        </Flex>
      </div>
      <Search />
      <HStack
        w="100%"
        justifyContent="center"
        alignItems="center"
        spacing="50px"
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
              <a className="btn-secondary">Sign In</a>
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
