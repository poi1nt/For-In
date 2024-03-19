import orderByProps from '../app'

const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}

test("Тест №1: Возвращение отсортированного списка по убыванию", () => {
  let res = orderByProps(obj, ["name", "level"])
  expect(res).toEqual([
    {key: "name", value: "мечник"}, // порядок взят из массива с ключами
    {key: "level", value: 2}, // порядок взят из массива с ключами
    {key: "attack", value: 80}, // порядок по алфавиту (т.к. в массиве с ключами нет значения "attack")
    {key: "defence", value: 40}, // порядок по алфавиту (т.к. в массиве с ключами нет значения "defence")
    {key: "health", value: 10} // порядок по алфавиту (т.к. в массиве с ключами нет значения "health")
  ])
})

test("Тест №2: Ключ lastName не найдет", () => {
  expect(() => orderByProps(obj, ["lastName"])).toThrow('Не найдено lastName');
});
