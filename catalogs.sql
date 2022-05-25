-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 25, 2022 at 07:53 PM
-- Server version: 10.7.3-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ebel`
--

-- --------------------------------------------------------

--
-- Table structure for table `catalogs`
--

CREATE TABLE `catalogs` (
  `id` int(11) NOT NULL,
  `ru` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `en` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `kz` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `catalogs`
--

INSERT INTO `catalogs` (`id`, `ru`, `en`, `kz`) VALUES
(1, 'Мягкая мебель', 'cushioned furniture', 'жаксы корпе'),
(2, 'спальни', 'bedroom', 'жатын бөлме'),
(3, 'стул', 'soft chair', 'корпе');

-- --------------------------------------------------------

--
-- Table structure for table `sub_catalog`
--

CREATE TABLE `sub_catalog` (
  `id` int(11) NOT NULL,
  `catalog` int(11) NOT NULL,
  `ru` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `en` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `kz` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sub_catalog`
--

INSERT INTO `sub_catalog` (`id`, `catalog`, `ru`, `en`, `kz`) VALUES
(1, 1, 'диван', 'sofa', 'тапчан'),
(4, 1, 'стул', 'soft chair', 'корпе');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `catalogs`
--
ALTER TABLE `catalogs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sub_catalog`
--
ALTER TABLE `sub_catalog`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `catalogs`
--
ALTER TABLE `catalogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `sub_catalog`
--
ALTER TABLE `sub_catalog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
