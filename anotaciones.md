# Proyecto Integrador -> Etapa 3 (React)

## Creamos la aplicación React

```sh
npm create vite@latest ./ -- --template react
```

## Instalamos las dependencias

```sh
npm i # npm install
```

## Instalamos React Router

```sh
npm react-router react-router-dom
```

## Arracamos el servidor

```sh
npm run dev
```

## Detener el servidor

Ctrl + C

## Instalando JSON-SERVER

```sh
npm i json-server@0.17.4 -D
```

## Crear la carpeta data/db.json

```sh
mkdir data
touch data/db.json
```

## Pegamos el json en el archivo db.json

<https://gist.github.com/mlapeducacionit/85b332b33f74e30deb946062f3d3362c>

```json
{
  "productos": [
    {
      "nombre": "IPhone 15 Pro Max",
      "foto": "img/apple-iphone-11-pro-max.jpg",
      "detalles": "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      "precio": 250.5,
      "stock": "4444",
      "marca": "Apple",
      "categoria": "celulares",
      "id": 1,
      "envio": false
    },
    {
      "nombre": "IPhone 12",
      "foto": "img/apple-iphone-12.jpg",
      "detalles": "Quasi cupiditate quisquam facere molestiae",
      "precio": 240.3,
      "stock": "4",
      "marca": "Apple",
      "categoria": "celulares",
      "id": 2,
      "envio": true
    },
    {
      "nombre": "Auriculares Sony",
      "foto": "img/auriculares-sony.jpg",
      "detalles": "Saepe enim ipsa facilis velit quidem voluptatibus totam dicta",
      "precio": 985,
      "stock": 4,
      "marca": "Sleek Cotton Chips",
      "categoria": "Refined",
      "id": 3,
      "envio": false
    },
    {
      "nombre": "Camara Canon",
      "detalles": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      "foto": "img/camara-canon.jpg",
      "precio": 678,
      "stock": 7,
      "marca": "Rustic Soft Tuna",
      "categoria": "Generic",
      "id": 4,
      "envio": true
    },
    {
      "nombre": "Samsung",
      "detalles": "Facere molestiae odio neque rerum provident voluptas",
      "foto": "img/celular-samsung.jpg",
      "precio": 1200,
      "stock": 4,
      "marca": "Samsung",
      "categoria": "celulares",
      "id": 5,
      "envio": true
    },
    {
      "id": 6,
      "nombre": "Chromecast",
      "precio": 332.22,
      "stock": 4,
      "marca": "Google",
      "categoria": "Electronica",
      "detalles": "Natus iure quasi cupiditate quisquam facere molestiae odio neque rerum provident voluptas!",
      "foto": "img/chromecast-google.jpg",
      "envio": true
    },
    {
      "id": 7,
      "nombre": "DJI Mavic 2 pro",
      "precio": 333.22,
      "stock": 2,
      "marca": "DJI",
      "categoria": "Drones",
      "detalles": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "foto": "img/dji-mavic-2-pro.jpg",
      "envio": false
    },
    {
      "id": 8,
      "nombre": "Producto X",
      "precio": "2333",
      "stock": "2",
      "marca": "Sorny",
      "categoria": "Electro",
      "detalles": "Piola. 8k",
      "foto": "img/apple-iphone-11-pro-max.jpg",
      "envio": true
    }
  ],
  "carrito": [
    [
      {
        "nombre": "IPhone 15 Pro Max",
        "foto": "img/apple-iphone-11-pro-max.jpg",
        "detalles": "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        "precio": 250.5,
        "stock": "4444",
        "marca": "Apple",
        "categoria": "celulares",
        "id": 1,
        "envio": false,
        "cantidad": 3
      },
      {
        "nombre": "IPhone 12",
        "foto": "img/apple-iphone-12.jpg",
        "detalles": "Quasi cupiditate quisquam facere molestiae",
        "precio": 240.3,
        "stock": "4",
        "marca": "Apple",
        "categoria": "celulares",
        "id": 2,
        "envio": true,
        "cantidad": 1
      },
      {
        "nombre": "Auriculares Sony",
        "foto": "img/auriculares-sony.jpg",
        "detalles": "Saepe enim ipsa facilis velit quidem voluptatibus totam dicta",
        "precio": 985,
        "stock": 4,
        "marca": "Sleek Cotton Chips",
        "categoria": "Refined",
        "id": 3,
        "envio": false,
        "cantidad": 3
      },
      {
        "nombre": "Camara Canon",
        "detalles": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "foto": "img/camara-canon.jpg",
        "precio": 678,
        "stock": 7,
        "marca": "Rustic Soft Tuna",
        "categoria": "Generic",
        "id": 4,
        "envio": true,
        "cantidad": 1
      },
      {
        "nombre": "Samsung",
        "detalles": "Facere molestiae odio neque rerum provident voluptas",
        "foto": "img/celular-samsung.jpg",
        "precio": 1200,
        "stock": 4,
        "marca": "Samsung",
        "categoria": "celulares",
        "id": 5,
        "envio": true,
        "cantidad": 1
      }
    ],
    [
      {
        "id": 6,
        "nombre": "Chromecast",
        "precio": 332.22,
        "stock": 4,
        "marca": "Google",
        "categoria": "Electronica",
        "detalles": "Natus iure quasi cupiditate quisquam facere molestiae odio neque rerum provident voluptas!",
        "foto": "img/chromecast-google.jpg",
        "envio": true,
        "cantidad": 1
      },
      {
        "id": 7,
        "nombre": "DJI Mavic 2 pro",
        "precio": 333.22,
        "stock": 2,
        "marca": "DJI",
        "categoria": "Drones",
        "detalles": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "foto": "img/dji-mavic-2-pro.jpg",
        "envio": false,
        "cantidad": 3
      }
    ],
    [
      {
        "nombre": "IPhone 15 Pro Max",
        "foto": "img/apple-iphone-11-pro-max.jpg",
        "detalles": "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        "precio": 250.5,
        "stock": "4444",
        "marca": "Apple",
        "categoria": "celulares",
        "id": 1,
        "envio": false,
        "cantidad": 1
      },
      {
        "nombre": "IPhone 12",
        "foto": "img/apple-iphone-12.jpg",
        "detalles": "Quasi cupiditate quisquam facere molestiae",
        "precio": 240.3,
        "stock": "4",
        "marca": "Apple",
        "categoria": "celulares",
        "id": 2,
        "envio": true,
        "cantidad": 1
      },
      {
        "nombre": "Auriculares Sony",
        "foto": "img/auriculares-sony.jpg",
        "detalles": "Saepe enim ipsa facilis velit quidem voluptatibus totam dicta",
        "precio": 985,
        "stock": 4,
        "marca": "Sleek Cotton Chips",
        "categoria": "Refined",
        "id": 3,
        "envio": false,
        "cantidad": 1
      }
    ]
  ]
}
```

## Colocamos el script

> package.json

```json
"scripts": {
    "dev": "vite",
    "server": "json-server --watch data/db.json --port 8080" // <----- Script a agregar
}
```

## Variables de entorno en VITE

<https://vitejs.dev/guide/env-and-mode>

## Extensión Visual Studio

* mikestead.dotenv

## Para testear los Endpoint de nuestra APIs

* Insomnia <https://insomnia.rest/>
* Postman
* Thunder Client (extensiones)
* Rapid API Client (extensiones)

## Visualizar de forma bonitar los JSON

<https://chromewebstore.google.com/detail/json-viewer-pro/eifflpmocdbdmepbjaopkkhbfmdgijcc>

## Instalamos la dependencia SASS

```sh
npm i sass -D
```