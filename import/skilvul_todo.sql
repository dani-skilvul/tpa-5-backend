-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 24, 2023 at 03:41 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `skilvul_todo`
--

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20230520145706-create-user.js'),
('20230520150840-create-todo.js'),
('20230521095040-create-todo.js'),
('20230521095521-create-user.js'),
('20230521095912-create-todo.js'),
('20230521100604-create-todo.js'),
('20230521111241-create-todo.js'),
('20230521111418-create-user.js'),
('20230521112218-create-todo.js'),
('20230521112223-create-user.js'),
('20230521112250-create-todo.js'),
('20230521112255-create-user.js'),
('20230521112355-create-todo.js'),
('20230521113902-create-todo.js'),
('20230521113903-create-todo.js'),
('20230521114412-create-user.js'),
('20230523061044-create-user.js'),
('20230523061045-create-user.js'),
('20230523061258-create-user.js'),
('20230523063049-create-user.js'),
('20230523063050-create-user.js'),
('20230523063051-create-user.js'),
('20230523063052-create-user.js'),
('20230523063053-create-user.js'),
('20230523063054-create-user.js'),
('20230523063055-create-user.js'),
('20230523063056-create-user.js'),
('20230523071724-create-user.js'),
('20230523071725-create-user.js'),
('20230523071726-create-user.js'),
('20230523071727-create-user.js'),
('20230523071728-create-user.js');

-- --------------------------------------------------------

--
-- Table structure for table `todos`
--

CREATE TABLE `todos` (
  `id` varchar(255) NOT NULL,
  `todo` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `email` varchar(255) NOT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `todos`
--
ALTER TABLE `todos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
