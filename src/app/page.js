"use client";
import {
  Button,
  Container,
  Rating,
  Text,
  Textarea,
  Title,
  Divider,
  Group,
  Pagination,
} from "@mantine/core";

export default function FoodReviewPage() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Title order={4} mt="sm">
        Your rating
      </Title>
      <Rating size="lg" />
      <Textarea
        minRows={3}
        label="Your review"
        placeholder="Do you enjoy eating?"
        mt="xs"
      />
      <Button mt="xs" color="orange">
        Submit Review
      </Button>
      <Divider size="xs" mt="sm" />
      <Group position="center" mt="sm">
        <Title order={4}> Elon Musk</Title>
        <Rating value={5} fractions={2} readOnly />
      </Group>
      <Text c="dimmed" align="center">
        Best pizza in this world. I give you X score.
      </Text>
      <Divider size="xs" mt="sm" />
      <Group position="center" mt="sm">
        <Title order={4}> Mark Zuck</Title>
        <Rating value={4} fractions={2} readOnly />
      </Group>
      <Text c="dimmed" align="center">
        My favourite part is pepperoni
      </Text>
      <Group position="center" mt="md">
        <Pagination total={20} color="orange" />
      </Group>
      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 Noppol Nunpiang 650612086
      </Text>
    </Container>
  );
}
