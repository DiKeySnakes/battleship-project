import Ship from "./ship";

test("check length", () => {
  const ship = Ship(3, [1, 2, 3]);
  expect(ship.length).toBe(3);
});

test("check coords", () => {
  const ship = Ship(3, [1, 2, 3]);
  expect(ship.coords).toStrictEqual([1, 2, 3]);
});

test("check hit", () => {
  const ship = Ship(3, [1, 2, 3]);
  expect(ship.hit(2)).toBeTruthy();
});

test("check isSunk", () => {
  const ship = Ship(3, [1, 2, 3]);
  ship.hit(1);
  ship.hit(2);
  ship.hit(3);
  expect(ship.isSunk()).toBeTruthy();
});
