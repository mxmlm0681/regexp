import Validator from '../app';

test('Успешная валидация Max', () => {
  const validator = new Validator();
  const received = validator.validateUsername('Max');
  expect(received).toBe(true);
});

test('Успешная валидация Petrov', () => {
  const validator = new Validator();
  const received = validator.validateUsername('Petrov');
  expect(received).toBe(true);
});

test('Начинается с цифры', () => {
  const validator = new Validator();
  const received = validator.validateUsername('555');
  expect(received).toBe(false);
});

test('Заканчивается цифрой', () => {
  const validator = new Validator();
  const received = validator.validateUsername('Oleg2025');
  expect(received).toBe(false);
});

test('Более трех цифр подряд', () => {
  const validator = new Validator();
  const received = validator.validateUsername('N2025new');
  expect(received).toBe(false);
});

test('Кириллица', () => {
  const validator = new Validator();
  const received = validator.validateUsername('Чебурашка');
  expect(received).toBe(false);
});

test('Начинается с тире', () => {
  const validator = new Validator();
  const received = validator.validateUsername('-gun');
  expect(received).toBe(false);
});

test('Заканчивается подчеркиванием', () => {
  const validator = new Validator();
  const received = validator.validateUsername('Medmax_');
  expect(received).toBe(false);
});
