# Тестовое задание про Swapi

Используя [Star Wars API](https://swapi.dev/documentation) необходимо создать небольшое приложение с информационными карточками персонажей.

Примерный [макет](https://www.figma.com/file/SHilmuqmNa4GXNUSJNUauv/StarWars?node-id=2%3A3&t=zcbcyVY0nFHuB6VJ-0) приложения.

Приложение должно содержать 3 страницы:

- Главная: страница содержит приветствие пользователя, навигационное меню (активная в данный момент страница в меню должна быть подсвечена), кнопку перехода к странице с карточками персонажей.
- Страница с карточками о персонажах.
- Страница с ошибкой 404.

(остальное в `task.md`)

- Компонент карточки должен быть протестирован.
  В `CharacterProfile.test.tsx`

## Технологии

Для решения используется следющее:

- [React]
- [Typescript]
- [emotion]

## Установка

Можно быстро установить и запустить через

```sh
make first-start
```

Установка:

```sh
make install
```

или

```sh
npm i
```

## Запуск:

```sh
make dev
```

или

```sh
npm run dev
```

[http://localhost:3000](http://localhost:3000)

## Тесты

Линтер

```sh
make lint
```

или

```sh
npm run lint
```

Тесты

```sh
make test
```

или

```sh
npm run test
```

## Демо

[Здесь, тык](https://test-infinite-scroll-six.vercel.app/)

![image](https://user-images.githubusercontent.com/46269438/217400730-ecfa9fa3-c9e4-4551-b785-79caff381aac.png)
