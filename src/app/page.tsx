'use client'

import Image from "next/image";
import { 
  Box, 
  Button, 
  VStack, 
  HStack, 
  OrderedList, 
  ListItem, 
  Code, 
  Link,
  useColorModeValue
} from '@chakra-ui/react';

export default function Home() {
  return (
    <Box 
      minH="100vh" 
      bg="page.bg" 
      color="page.text"
      display="grid"
      gridTemplateRows="20px 1fr 20px"
      alignItems="center"
      justifyItems="center"
      p={8}
      pb={20}
      gap={16}
      sx={{
        '@media (min-width: 640px)': {
          p: 20
        }
      }}
    >
      <VStack as="main" spacing={8} gridRowStart={2} align="center">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        
        <OrderedList 
          fontFamily="mono" 
          fontSize="sm" 
          lineHeight={6} 
          textAlign={{ base: 'center', sm: 'left' }}
          spacing={2}
        >
          <ListItem letterSpacing="-0.01em">
            Get started by editing{" "}
            <Code 
              bg={useColorModeValue('blackAlpha.50', 'whiteAlpha.100')}
              fontFamily="mono" 
              fontWeight="semibold" 
              px={1} 
              py={0.5} 
              borderRadius="md"
            >
              src/app/page.tsx
            </Code>
            .
          </ListItem>
          <ListItem letterSpacing="-0.01em">
            Save and see your changes instantly.
          </ListItem>
        </OrderedList>

        <HStack spacing={4} align="center" direction={{ base: 'column', sm: 'row' }}>
          <Button
            as={Link}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            borderRadius="full"
            bg="page.text"
            color="page.bg"
            leftIcon={
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
            }
            _hover={{
              bg: useColorModeValue('#383838', '#ccc'),
              textDecoration: 'none'
            }}
            fontWeight="medium"
            fontSize={{ base: 'sm', sm: 'base' }}
            h={{ base: 10, sm: 12 }}
            px={{ base: 4, sm: 5 }}
            w={{ base: 'full', sm: 'auto' }}
          >
            Deploy now
          </Button>
          
          <Button
            as={Link}
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            borderRadius="full"
            borderColor={useColorModeValue('blackAlpha.200', 'whiteAlpha.300')}
            _hover={{
              bg: useColorModeValue('#f2f2f2', '#1a1a1a'),
              borderColor: 'transparent',
              textDecoration: 'none'
            }}
            fontWeight="medium"
            fontSize={{ base: 'sm', sm: 'base' }}
            h={{ base: 10, sm: 12 }}
            px={{ base: 4, sm: 5 }}
            w={{ base: 'full', sm: 'auto', md: '158px' }}
          >
            Read our docs
          </Button>
        </HStack>
      </VStack>
      
      <HStack 
        as="footer"
        gridRowStart={3} 
        spacing={6} 
        flexWrap="wrap" 
        align="center" 
        justify="center"
      >
        <Link
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          display="flex"
          alignItems="center"
          gap={2}
          _hover={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </Link>
        <Link
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          display="flex"
          alignItems="center"
          gap={2}
          _hover={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </Link>
        <Link
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          display="flex"
          alignItems="center"
          gap={2}
          _hover={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </Link>
      </HStack>
    </Box>
  );
}
