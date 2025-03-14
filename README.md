# Desafio13RamirezPB-TS

Treceavo desafío entregable del curso de Programación Backend de CoderHouse.

## Consigna

Realizar la configuración necesaria para tener documentado tu proyecto final a partir de **Swagger**.

- Se debe tener documentado el módulo de productos.
- Se debe tener documentado el módulo de carrito.
- [x] No realizar documentación de sesiones.

## Entrega

Enlace al repositorio de **GitHub** con el proyecto completo, sin la carpeta de **node_modules**.

## dependencies

- `npm i express`

> **Express.js** es un **framework** minimalista y flexible para **Node.js** que simplifica el desarrollo de aplicaciones web y **APIs** al proporcionar características esenciales como enrutamiento, manejo de **middleware**, integración con motores de plantillas, gestión de errores, y más. Su enfoque modular y su extensibilidad permiten a los desarrolladores construir aplicaciones de manera rápida y eficiente, adaptándose a las necesidades específicas de sus proyectos. Express.js es ampliamente utilizado en la comunidad de **Node.js** debido a su facilidad de uso y su capacidad para construir aplicaciones web escalables y robustas.

- `npm i zod`

> **Zod** es una biblioteca de validación de datos para **TypeScript** y **JavaScript**. Proporciona una forma simple y robusta de definir esquemas de datos y validarlos en tiempo de ejecución. Permite definir fácilmente la estructura y restricciones de datos, y luego utilizar esos esquemas para validar entradas de usuario, datos de **API**, y más.

- `npm i express-handlebars`

> **Handlebars** es un motor de plantillas para **JavaScript** que permite generar **HTML** de forma dinámica al combinar datos con plantillas **HTML** predefinidas. Es especialmente útil en aplicaciones web para renderizar vistas del lado del servidor con datos dinámicos.

- `npm i socket.io`

> **Socket.io** es una biblioteca de **JavaScript** que permite la comunicación bidireccional en tiempo real entre clientes web y servidores. Proporciona una abstracción sobre **WebSockets** y otros mecanismos de transporte, lo que facilita el desarrollo de aplicaciones web en tiempo real.

- `npm i mongodb`

> Controlador oficial de **MongoDB** para **Node.js**, lo que permite a las aplicaciones **Node.js** interactuar con una base de datos **MongoDB**.

- `npm i dotenv`

> **Dotenv** es una biblioteca de **Node.js** que permite cargar variables de entorno desde un archivo **.env** en tu aplicación.

- `npm i mongoose`

> **Mongoose** es una biblioteca de modelado de objetos de **MongoDB** para **Node.js**. Proporciona una solución basada en esquemas para modelar datos de aplicaciones utilizando **MongoDB**, lo que facilita la interacción con la base de datos **MongoDB** desde una aplicación **Node.js**.

- `npm i mongoose-paginate-v2`

> **mongoose-paginate-v2** proporciona funcionalidades de paginación para consultas en **MongoDB** utilizando **Mongoose**.

- `npm i cookie-parser`

> **Middleware** que facilita la manipulación de **cookies** en las aplicaciones web con **Express**.

- `npm i express-session`

> **Middleware** esencial para la gestión de sesiones en aplicaciones **Express**.

- `npm i connect-mongo`

> Es una herramienta para almacenar sesiones de usuario de forma persistente en una base de datos **MongoDB** en aplicaciones **Express.js**, proporcionando beneficios en términos de persistencia, escalabilidad y seguridad.

- `npm i bcrypt`

> **bcrypt** es una biblioteca de **hashing** de contraseñas diseñada para ser segura y resistente a ataques de fuerza bruta. Se utiliza comúnmente en aplicaciones web y sistemas de autenticación para almacenar contraseñas de manera segura.

- `npm i passport`

> - **Passport** es un **middleware** de autenticación para **Node.js**. Proporciona una forma flexible y modular de autenticar usuarios en una aplicación web.

- `npm i passport-local`

> - **passport-local** es una estrategia de autenticación local para **Passport**. Permite autenticar a los usuarios utilizando un nombre de usuario y una contraseña almacenados localmente en la base de datos de la aplicación.

- `npm i passport-github2`

> - **passport-github2** es una estrategia de autenticación para **passport**, diseñada específicamente para la autenticación de usuarios utilizando **GitHub** como proveedor de autenticación.

- `npm i commander`

> - **commander** es una biblioteca para **Node.js** que facilita la creación de interfaces de línea de comandos (**CLI**).

- `npm i cors`

> - **cors** se utiliza para habilitar **Cross-Origin Resource Sharing** (**CORS**) en tu servidor. El **Cross-Origin Resource Sharing** (**CORS**) es un mecanismo de seguridad que permite a los servidores indicar a los navegadores qué orígenes (dominios, esquemas o puertos) están permitidos acceder a los recursos del servidor. Este mecanismo es fundamental para habilitar el intercambio de recursos entre diferentes dominios en aplicaciones web, manteniendo al mismo tiempo una política de seguridad robusta.

- `npm i nodemailer`

> - **nodemailer** es una biblioteca para **Node.js** que permite enviar correos electrónicos desde aplicaciones **Node.js**.

- `npm i twilio`

> - **Twilio** es una plataforma de comunicaciones en la nube que permite a los desarrolladores integrar capacidades de comunicación, como llamadas de voz, mensajes de texto (**SMS**), video y autenticación, en sus aplicaciones. **Twilio** proporciona **API** y servicios que facilitan la implementación de estas funcionalidades sin la necesidad de gestionar infraestructura de telecomunicaciones compleja.

- `npm i @faker-js/faker`

> - **@faker-js/faker** es una biblioteca de **JavaScript** diseñada para generar datos falsos o simulados (**mock data**).

- `npm i winston`

> - **winston** es una biblioteca de registro (**logging**) para **node.js** que permite registrar mensajes en diferentes niveles de severidad y en múltiples destinos (consola, archivos, bases de datos, etc).

- `npm i swagger-jsdoc`

> - **swagger-jsdoc** es una herramienta que genera documentación de la **API** a partir de anotaciones en el código fuente utilizando **JSDoc**. Proporciona una forma de describir la estructura y el comportamiento de la **API** directamente en el código mediante comentarios **JSDoc**. Estos comentarios se procesan para generar un archivo de especificación **OpenAPI**.

- `npm i swagger-ui-express`

> - **swagger-ui-express** es un paquete que facilita la integración de **Swagger UI** en una aplicación **Express**. **Swagger UI** es una interfaz gráfica que permite interactuar con la **API** documentada, probar **endpoints** y explorar la especificación **OpenAPI** generada.

## devDependencies

- `npm i nodemon -D`

> **Nodemon** reinicia automáticamente el servidor en cuanto detecta que hay cambios en el código.

- `npm i typescript -D` (Compilador de **TypeScript**)
- `npm i tsx -D` (Motor de ejecución de **TypeScript** para paquetes de tipo **module**)
- `npm i @types/node -D` (Definiciones de tipos de **TypeScript** para **Node.js**)
- `npm i @types/express -D` (Definiciones de tipos de **TypeScript** para **Express.js**)
- `npm i @types/cookie-parser -D` (Definiciones de tipos de **TypeScript** para **cookie-parser**)
- `npm i @types/express-session -D` (Definiciones de tipos de **TypeScript** para **express-session**)
- `npm i @types/bcrypt -D` (Definiciones de tipos de **TypeScript** para **bcrypt**)
- `npm i @types/passport -D` (Definiciones de tipos de **TypeScript** para **passport**)
- `npm i @types/passport-local -D` (Definiciones de tipos de **TypeScript** para **passport-local**)
- `npm i @types/passport-github2 -D` (Definiciones de tipos de **TypeScript** para **passport-github2**)
- `npm i @types/nodemailer -D` (Definiciones de tipos de **TypeScript** para **nodemailer**)
- `npm i @types/swagger-jsdoc -D` (Definiciones de tipos de **TypeScript** para **swagger-jsdoc**)
- `npm i @types/swagger-ui-express -D` (Definiciones de tipos de **TypeScript** para **swagger-ui-express**)

> **TypeScript** dependencies.

- `npm i tailwindcss -D`
- `npm i @tailwindcss/forms -D` (Conjunto de estilos predefinidos diseñados específicamente para mejorar el aspecto y la funcionalidad de los formularios **HTML**)

> Styles: **TailwindCSS**

## package.json

Se ubica en el directorio raíz.

- `"type": "module"`

> El proyecto utiliza módulos **ECMAScript** (**ESM**) en lugar de **CommonJS** para la gestión de módulos en **Node.js**. Permite utilizar la sintaxis de importación (**import**) y exportación (**export**) de **ECMAScript** estándar en lugar de la sintaxis **require** y **module.exports** de **CommonJS**.

## nodemon.json

Se ubica en el directorio raíz.

```json
{
  "watch": ["src", "public"],
  "ext": "js ts handlebars",
  "exec": "npx tailwindcss -i ./public/css/tailwind.css -o ./public/css/app.css && tsx ./src/app.ts"
}
```

> Al ejecutar con **nodemon** se compila el **css** y se ejecuta la **app**.

## tsconfig.json

Se ubica en el directorio raíz. Se especifican las opciones de configuración para el compilador de **TypeScript**.

```json
{
  "compilerOptions": {
    "esModuleInterop": true,
    "module": "ESNext",
    "moduleResolution": "Node"
  }
}
```

> - **"esModuleInterop": true**: **TypeScript** interpreta las importaciones predeterminadas (**import express from 'express'**) como si fueran importaciones de asignación (**import \* as express from 'express'**). Permite una mayor compatibilidad en las importaciones entre los diferentes estilos de exportación de módulos.
> - **"module": "ESNext"**: especifica el formato de módulo que se utilizará en la salida del compilador de **TypeScript**. **ESNext** indica que se utilizará el formato de módulo **ECMAScript** más reciente compatible con el entorno de ejecución.
> - **"moduleResolution": "Node"**: especifica el método de resolución de módulos que **TypeScript** utilizará al importar módulos. **TypeScript** utilizará la resolución de módulos de **Node.js** siguiendo la estructura de carpetas y los archivos **node_modules** para buscar y resolver las dependencias de los módulos.

## Ejecución

- **Scripts**: `tsx script.ts`.
- **TailwindCSS**: `npx tailwindcss -i tailwind.css -o output.css`
- **Nodemon**: `nodemon --exec tsx script.ts`

## JSON Formatter

- [JSON Formatter](https://chromewebstore.google.com/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa)

> Extensión para navegadores basados en Chromium.
