-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-04-2023 a las 01:51:12
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `catalogo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compra`
--

CREATE TABLE `compra` (
  `idCompra` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `idProducto` int(11) NOT NULL,
  `unidades` int(11) NOT NULL,
  `total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `compra`
--

INSERT INTO `compra` (`idCompra`, `idUsuario`, `idProducto`, `unidades`, `total`) VALUES
(12, 1, 13, 1, 200000),
(14, 1, 22, 1, 45000),
(15, 1, 17, 1, 300000),
(17, 1, 14, 1, 35000),
(18, 1, 18, 1, 80000),
(19, 1, 21, 1, 150000),
(21, 1, 16, 1, 70000),
(23, 1, 17, 1, 300000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensaje`
--

CREATE TABLE `mensaje` (
  `idMensaje` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `telefono` varchar(20) NOT NULL,
  `mensaje` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `mensaje`
--

INSERT INTO `mensaje` (`idMensaje`, `nombre`, `apellido`, `correo`, `telefono`, `mensaje`) VALUES
(1, 'Sergio', 'Calvo', 'sergio.123@gmail.com', '1234567890', 'Administrador'),
(23, 'sara', 'Cadavid', 'Sara.098@gmail.com', '234235', 'prueba correo'),
(24, 'Martha', 'Velez', 'martha.1290@gmail.com', '234256679', 'prueba telefono');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `idProducto` int(11) NOT NULL,
  `nombreProducto` varchar(50) NOT NULL,
  `descripcion` varchar(250) NOT NULL,
  `imagenProducto` varchar(255) NOT NULL,
  `categoria` varchar(10) NOT NULL,
  `estado` varchar(10) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio` int(11) NOT NULL,
  `descuento` varchar(5) NOT NULL,
  `valor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`idProducto`, `nombreProducto`, `descripcion`, `imagenProducto`, `categoria`, `estado`, `cantidad`, `precio`, `descuento`, `valor`) VALUES
(12, 'Natural Set', 'Set de anillos anillos de oro de 18k hechos a mano con gemas naturales.', 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80', 'Joyeria', 'Nuevo', 10, 50000, 'Si', 10),
(13, 'Bordado Floral', 'Bordado floral en tonos suave con hilos de algodón en aro de 6\"x6\".', 'https://images.unsplash.com/photo-1622378134706-4a2194cc9648?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80', 'Tejido', 'Nuevo', 32, 200000, 'Si', 50),
(14, 'Escultura multicolor', 'Figuras decorativas abstractas de barro pintados a mano.', 'https://images.unsplash.com/photo-1612099498598-b1ad62c36e42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 'Escultura', 'Nuevo', 15, 35000, 'Si', 10),
(15, 'El campesino del lago', 'Obra de arte hecha a mano con técnica acuarela en papel de algodón 300gr tamaño 30x50.', 'https://images.unsplash.com/photo-1679563559367-6452affe2705?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=601&q=80', 'Pintura', 'Nuevo', 1, 150000, 'Si', 10),
(16, 'Camisas bordadas', 'Camisas para hombre de maga corta bordadas a mano personalizables.', 'https://images.unsplash.com/photo-1628071711153-d0204a351a6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80', 'Tejido', 'Nuevo', 5, 70000, 'No', 0),
(17, 'Mucama del prado', 'Pintura hecha a mano en óleo sobre lienzo sin marco, tamaño 50x50 cm', 'https://images.unsplash.com/photo-1667559180631-e4d1c9164d88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=825&q=80', 'Pintura', 'Nuevo', 2, 300000, 'No', 0),
(18, 'Cortina de elefantes', 'Cortina decorativa con elefantes de cerámica pintadas a mano y cuentas de cristal.', 'https://images.unsplash.com/photo-1663519338616-7abc154816e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80', 'Escultura', 'Nuevo', 4, 80000, 'No', 0),
(19, 'Aretes de perla', 'Elegantes pendientes de gota de perlas de agua dulce de plata esterlina 925.', 'https://images.unsplash.com/photo-1590166223826-12dee1677420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80', 'Joyeria', 'Nuevo', 14, 95000, 'No', 0),
(20, 'Platos decorativos', 'Platos de cerámica pintados a mano con diseños personalizados.', 'https://images.unsplash.com/photo-1597758464605-aa125b827c33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80', 'Escultura', 'Usado', 35, 75000, 'No', 0),
(21, 'Anillos de plata', 'Set de anillos entorchados y de esferas de plata esterlina 950.', 'https://images.unsplash.com/photo-1584811644165-33db3b146db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80', 'Joyeria', 'Nuevo', 12, 150000, 'No', 0),
(22, 'Bolso tejido', 'Bolso con diseños de flores circular de paja tejido a mano.', 'https://images.unsplash.com/photo-1527385352018-3c26dd6c3916?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 'Tejido', 'Usado', 2, 45000, 'No', 0),
(23, 'Ballena azul', 'Pintura en técnica acrílico sobre papel canson 290g tamaño 14x11 cm', 'https://images.unsplash.com/photo-1642867028805-f8c2673d4f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80', 'Pintura', 'Nuevo', 1, 250000, 'No', 0),
(24, 'Pulsera de piedras naturales', 'Pulsera para hombre con piedras de jaspe negro, con separadores y terminaciones en plata 925.', 'https://images.unsplash.com/photo-1632670549453-7a3dfac254a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 'Joyeria', 'Nuevo', 55, 38000, 'Si', 10),
(25, 'Lectura y té', 'Obra de arte en puntillizmo en técnica de acuarela sobre papel de algodón tamaño 35x35 cm', 'https://images.unsplash.com/photo-1583243567239-3727551e0c59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=644&q=80', 'Pintura', 'Nuevo', 1, 450000, 'No', 0),
(27, 'Brazalete cruz', 'Brazalete realizada en Plata de ley 925, un modelo de diseño rígido con figura de cruz central que también actúa como cierre.  ', 'https://images.unsplash.com/photo-1508022909583-69228d7b2f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80', 'Joyeria', 'Usado', 1, 93000, 'Si', 10),
(29, 'Vaca Hindú', 'Escultura decorativa de Vaca Hindú en barro pintada a mano.', 'https://images.unsplash.com/photo-1521990965826-7fc3c11371aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80', 'Escultura', 'Nuevo', 4, 29000, 'No', 0),
(30, 'Tapiz macramé', 'Tapiz colgante en macramé color amarillo mostaza.', 'https://images.unsplash.com/photo-1590069832789-943efe055053?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80', 'Tejido', 'Nuevo', 1, 430000, 'No', 0),
(31, 'Pulseras entorchadas', 'Brazaletes con diseño entorchado de plata 925 ajustables o con broche.', 'https://images.unsplash.com/photo-1517857399767-a9dc28f5a734?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 'Joyeria', 'Nuevo', 7, 136000, 'Si', 10),
(32, 'Cuidad de piedra', 'Pintura a lápiz de color sobre papel 50x30cm protegida con barniz mate.', 'https://images.unsplash.com/photo-1582201957424-621320ad670d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=709&q=80', 'Pintura', 'Nuevo', 1, 1500000, 'No', 0),
(33, 'Mándala tejida', 'Mándala en macramé en aro de 10\"x10\"en cordón de algodón reciclado.', 'https://images.unsplash.com/photo-1577547078777-ff1088d792b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', 'Tejido', 'Usado', 1, 100000, 'No', 0),
(34, 'Habitación', 'Obra de arte pictórica en acrílico sobre lienzo tamaño 50x50', 'https://images.unsplash.com/photo-1578321272794-79e82a581d5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80', 'Pintura', 'Nuevo', 1, 485000, 'No', 0),
(35, 'Jarrón de barro', 'Jarrón decorativo en barro con estilo bohemio único hecho a mano.', 'https://images.unsplash.com/photo-1636214530723-12879a99452f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80', 'Escultura', 'Nuevo', 5, 67000, 'No', 0),
(36, 'Maceta de búhos', 'Maceta en cerámica para plantas pequeñas en forma de tetera pintada a mano.', 'https://images.unsplash.com/photo-1604462601707-1691bd732d75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', 'Escultura', 'Nuevo', 2, 36000, 'Si', 30),
(37, 'Porta vasos ', 'Juego de 6 porta vasos en crochet cuadrados en algodón de encaje de punto.', 'https://images.unsplash.com/photo-1627667539472-75fbc7f4654d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 'Tejido', 'Nuevo', 21, 70000, 'No', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `idUsuario` int(11) NOT NULL,
  `nombreUsuario` varchar(50) NOT NULL,
  `apellidoUsuario` varchar(50) NOT NULL,
  `usuario` varchar(30) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `sexo` varchar(20) NOT NULL,
  `pais` varchar(50) NOT NULL,
  `contrasena` varchar(25) NOT NULL,
  `rol` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`idUsuario`, `nombreUsuario`, `apellidoUsuario`, `usuario`, `correo`, `sexo`, `pais`, `contrasena`, `rol`) VALUES
(1, 'Sergio', 'Calvo', 'Checho', 'sergio.123@gmail.com', 'Hombre', 'Colombia', '1234567890', 'Administrador'),
(3, 'Sara', 'Cadavid', 'sarita', 'sara.123@gmail.com', 'Mujer', 'Colombia', 'sara721', 'Administrador'),
(4, 'Juan', 'Gallego', 'juanG', 'juana@gmail.com', 'Hombre', 'Ecuador', '1234567890j', 'Usuario'),
(5, 'Nelson', 'Mazo', 'Nelma', 'Nelson.123@hotmail.com', 'Hombre', 'Uruguay', '0987654321', 'Usuario');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vendido`
--

CREATE TABLE `vendido` (
  `idVenta` int(11) NOT NULL,
  `idProducto` int(11) NOT NULL,
  `unidades` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `vendido`
--

INSERT INTO `vendido` (`idVenta`, `idProducto`, `unidades`) VALUES
(1, 20, 1),
(2, 21, 1),
(3, 14, 1),
(4, 14, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `compra`
--
ALTER TABLE `compra`
  ADD PRIMARY KEY (`idCompra`),
  ADD KEY `idUsuario` (`idUsuario`),
  ADD KEY `idProducto` (`idProducto`);

--
-- Indices de la tabla `mensaje`
--
ALTER TABLE `mensaje`
  ADD PRIMARY KEY (`idMensaje`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`idProducto`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idUsuario`);

--
-- Indices de la tabla `vendido`
--
ALTER TABLE `vendido`
  ADD PRIMARY KEY (`idVenta`),
  ADD KEY `idProducto` (`idProducto`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `compra`
--
ALTER TABLE `compra`
  MODIFY `idCompra` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `mensaje`
--
ALTER TABLE `mensaje`
  MODIFY `idMensaje` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `idProducto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `vendido`
--
ALTER TABLE `vendido`
  MODIFY `idVenta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `compra`
--
ALTER TABLE `compra`
  ADD CONSTRAINT `compra_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `compra_ibfk_2` FOREIGN KEY (`idProducto`) REFERENCES `productos` (`idProducto`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `vendido`
--
ALTER TABLE `vendido`
  ADD CONSTRAINT `vendido_ibfk_1` FOREIGN KEY (`idProducto`) REFERENCES `productos` (`idProducto`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
