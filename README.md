# MercadoVerde 馃尶
MercadoVerde es un ecommerce que incluye categorias de plantas, arbustos y plantas artificiales. En el mismo podras seleccionar los productos que mas te gusten, seleccionar la cantidad, agregar al carrito y generar una orden de compra de los mismos. Este proyecto fue realizado para el curso de React - [CoderHouse]
## Instalaci贸n
Para instalar el proyecto: ejecutar los siguientes comandos en terminal
```sh
git clone  https://github.com/martinalvarez1992/react.git
```
```sh
npm install 
npm start
```
## Tecnolog铆a 馃捇 
El proyecto utiliza las siguientes tecnologias
- Javascript 
- React JS
- HTML
- CSS
- Firebase
- Bootstrap
- FontAwesome

## Firebase 馃搧
La base de datos del sistema esta implementada por el servicio Firebase/Firesore

Colecci贸n: Products:  
| Campo | Tipo | Valor | 
| ------ | ------ | ------ |
| name | String | Nombre del producto |  
| category | String | Categoria del producto |
| description | String | Descripci贸n del producto  |
| price | Number | Precio del producto |
| stock | Number | Cantidad de stock del producto | 
| image | String | URL de imagen del producto | 

Colecci贸n: Categories:  
| Campo | Tipo | Valor | 
| ------ | ------ | ------ |
| description | String | Categoria de productos | 

Colecci贸n: Orders:  
| Campo | Tipo | Valor | 
| ------ | ------ | ------ |
| buyer | Object | Datos de usuario |  
| date | Date | Fecha y hora|
| items | Array | Productos en la orden de compra |
| total | Number | Total de la orden |

## Vista Previa - Como realizar una compra  馃枼锔?

![Alt Text](https://github.com/martinalvarez1992/react/raw/master/mercadoverde.gif)
 
## License

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[CoderHouse]: <https://www.coderhouse.com.uy/>
 
