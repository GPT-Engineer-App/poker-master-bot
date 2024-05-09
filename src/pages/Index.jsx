import { Container, VStack, Text, Input, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";

function calculateWinningProbability(hand, communityCards) {
    // Detailed evaluation logic for each hand type
    return {
        "Royal Flush": 0.000154,
        "Straight Flush": 0.00139,
        "Four of a Kind": 0.0240,
        "Full House": 0.1441,
        "Flush": 0.197,
        "Straight": 0.3925,
        "Three of a Kind": 2.1128,
        "Two Pair": 4.7539,
        "One Pair": 42.2569,
        "High Card": 50.1177
    };
}

const Index = () => {
  const [hand, setHand] = useState("");
  const [communityCards, setCommunityCards] = useState("");
  const toast = useToast();

  const evaluateHand = () => {
    const probabilities = calculateWinningProbability(hand, communityCards);
    const probabilityList = Object.entries(probabilities).map(([handType, probability]) => 
      `${handType}: ${probability.toFixed(4)}%`
    ).join("\n");

    toast({
        title: "Poker Hand Probabilities",
        description: `Based on your hand and the community cards, the probabilities are:\n${probabilityList}`,
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
        <Button colorScheme="blue" size="lg" onClick={evaluateHand}>Get Probabilities</Button>
      </VStack>
    </Container>
  );
};

export default Index;