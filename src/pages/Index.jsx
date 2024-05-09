import { Container, VStack, Text, Input, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [hand, setHand] = useState("");
  const [communityCards, setCommunityCards] = useState("");
  const toast = useToast();

  const evaluateHand = () => {
    let advice = "Call"; // Default advice
    const totalCards = hand + ' ' + communityCards;
    const cardCount = totalCards.split(' ').filter(card => card).length;

    if (cardCount < 5) {
        advice = "Fold";
    } else if (cardCount >= 5 && cardCount <= 7) {
        advice = "Call";
    } else if (cardCount > 7) {
        advice = "Raise";
    }

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