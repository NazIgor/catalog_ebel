-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Май 23 2022 г., 09:50
-- Версия сервера: 5.7.33
-- Версия PHP: 8.0.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `ebel`
--

-- --------------------------------------------------------

--
-- Структура таблицы `locale`
--

CREATE TABLE `locale` (
  `id` int(11) NOT NULL,
  `name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ru` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `en` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `kz` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `locale`
--

INSERT INTO `locale` (`id`, `name`, `ru`, `en`, `kz`) VALUES
(1, 'button_send', 'отправить', 'send', 'алга'),
(2, 'button-cancel', 'отмена', 'cancel', 'кетнахуй'),
(3, 'btn_addUI', 'UI элемент', 'UI elements', 'UI чего-то'),
(4, 'btn_main', 'Главная', 'Main', 'Баска'),
(5, 'btn_catalog', 'Каталог', 'Catalog', 'Котолог'),
(7, 'lb_add', 'Добавить', 'Add', 'Бер (наверно))');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `locale`
--
ALTER TABLE `locale`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `locale`
--
ALTER TABLE `locale`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
