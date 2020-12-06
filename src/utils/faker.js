import faker from "faker";

export function fakeTimestamps() {
  const createdAt = faker.date.recent();
  const updatedAt = faker.date.between(createdAt, new Date());

  return { createdAt, updatedAt };
}
