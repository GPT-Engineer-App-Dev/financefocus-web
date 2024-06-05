import { Box, Container, Flex, Heading, HStack, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box bg="gray.900" color="white" py={4}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Heading as="h1" size="lg">Financial Times</Heading>
          <HStack spacing={8}>
            <Link href="#" color="white">Home</Link>
            <Link href="#" color="white">World</Link>
            <Link href="#" color="white">Business</Link>
            <Link href="#" color="white">Markets</Link>
            <Link href="#" color="white">Opinion</Link>
            <Link href="#" color="white">Tech</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Content Area */}
      <Flex direction={{ base: "column", md: "row" }} mt={8} px={4}>
        {/* Featured Article */}
        <Box flex="2" mr={{ md: 4 }} mb={{ base: 4, md: 0 }}>
          <Box bg="gray.100" p={4} borderRadius="md">
            <Heading as="h2" size="xl" mb={4}>Featured Article Title</Heading>
            <Text fontSize="md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
          </Box>
        </Box>

        {/* Sidebar */}
        <Box flex="1" bg="gray.50" p={4} borderRadius="md">
          <Heading as="h3" size="lg" mb={4}>Trending Topics</Heading>
          <VStack align="start" spacing={3}>
            <Link href="#">Topic 1</Link>
            <Link href="#">Topic 2</Link>
            <Link href="#">Topic 3</Link>
            <Link href="#">Topic 4</Link>
          </VStack>
        </Box>
      </Flex>

      {/* Grid of Smaller Articles */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} mt={8} px={4}>
        <Box bg="gray.100" p={4} borderRadius="md">
          <Heading as="h4" size="md" mb={2}>Article Title 1</Heading>
          <Text fontSize="sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </Box>
        <Box bg="gray.100" p={4} borderRadius="md">
          <Heading as="h4" size="md" mb={2}>Article Title 2</Heading>
          <Text fontSize="sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </Box>
        <Box bg="gray.100" p={4} borderRadius="md">
          <Heading as="h4" size="md" mb={2}>Article Title 3</Heading>
          <Text fontSize="sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </Box>
      </SimpleGrid>

      {/* Footer */}
      <Box bg="gray.900" color="white" py={4} mt={8}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Text>&copy; 2023 Financial Times</Text>
          <HStack spacing={8}>
            <Link href="#" color="white">Contact</Link>
            <Link href="#" color="white">Privacy Policy</Link>
            <Link href="#" color="white">Terms of Service</Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;