import { Container, VStack, Text, Input, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [hand, setHand] = useState("");
  const [communityCards, setCommunityCards] = useState("");
  const toast = useToast();

  const evaluateHand = () => {
    // This is a placeholder for the poker logic
    const advice = "Call"; // Default advice, replace with real logic
    toast({
      title: "Poker Advice",
      description: `Based on your hand and the community cards, you should: ${advice}`,
      status: "info",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl" mb="8">Poker Strategy Advisor</Text>
        <Input
          placeholder="Your Hand (e.g., AH KH)"
          value={hand}
          onChange={(e) => setHand(e.target.value)}
          size="lg"
          mb="4"
        />
        <Input
          placeholder="Community Cards (e.g., 10C JD QD)"
          value={communityCards}
          onChange={(e) => setCommunityCards(e.target.value)}
          size="lg"
          mb="4"
        />
        <Button colorScheme="blue" size="lg" onClick={evaluateHand}>Get Advice</Button>
      </VStack>
    </Container>
  );
};

export default Index;