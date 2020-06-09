create database ENZO;
use ENZO;

create table clientes(
	id_cliente int primary key,
	nombre  varchar(20),
    correo varchar(30),
    telefono int,
    mensaje varchar (200)
);