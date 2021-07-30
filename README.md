# Alpha version

# Что реализовано:
- Реализован генератор чекпоинтов, которые генерятся по длине пути svg.
- Достаточно любую карту(svg path) залить и можно динамически генерить чекпоинты и взаимодействовать с ними. Легко расширить до автоматических равных промежутков, между длинной пути
- Реализован бесконечный слайдер и pop-up окна рейтинга
- Реализована базовая доступность всех интерактивных элементов для скринридеров и людей с ОВ.

# Пока не успел реализовать:
- прогрессивную деградацию
- Добавить градиенты, повторяющие картинки, pixel perfect
- поддержку ie
- mvc, или более-менее подходящую архитектуру
- перемещение персонажа по path используя request-animation и меняя transform, а не position. Но для этого 70% уже написано.
- слайдер в такой реализации не имеет анимации и дергает DOM. Но тз по нему, не очень понятное. Можно переделать на свайпы.

<br>
<img src="cover.png">


