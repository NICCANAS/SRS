/*Select a todas las comunas existentes*/
SELECT NOM_COM FROM COMUNA;

/*Inicio de sesion*/
/*Cliente*/
SELECT COALESCE(COUNT(*), 0) FROM CLIENTE WHERE(CORREO_CLI='juanperez@gmail.com' and CONTRA_CLI='12345');/*revisa si existe un usuario con ese correo y contraseña especifico, y el valor devuelto debe ser exactamente 1*/
/*Empresa*/
SELECT COALESCE(COUNT(*), 0) FROM EMPRESA WHERE(CORREO_EMP='juanperez@gmail.com' and CONTRA_EMP='12345');/*revisa si existe un usuario con ese correo y contraseña especifico, y el valor devuelto debe ser exactamente 1*/

/*Registrar cliente*/
SELECT COALESCE(COUNT(*), 0) FROM CLIENTE WHERE(CORREO_CLI='correo');/*Esto verificara si existe un correo igual, si el resultado es > 0, no se puede crear el usuario por que encontro coincidencias*/
INSERT INTO CLIENTE VALUES(208699253,'nombre','apellido','correo',null,1,1);

/*Registrar empresa*/
SELECT COALESCE(COUNT(*), 0) FROM EMPRESA WHERE(CORREO_CLI='correo');/*Esto verificara si existe un correo igual, si el resultado es > 0, no se puede crear el usuario por que encontro coincidencias*/
INSERT INTO EMPRESA VALUES(208699253,'nombre empresa','direccion empresa',null,1,1,'correo empresa',123456789);