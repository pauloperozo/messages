
#  (Chat Integrations) 📊

Esta API permite conectarse a un sistema de mensajería y gestionar su función básicas:
    - Permite listar chats con los usuarios que escriben al bot.
    - Permite enviar un mensaje de texto a los usuarios que interactúan con el bot ( uno/varios).
    - Permite enviar mensajes con fotografías a los usuarios que interactúan con el bot 📥.

# ( Plataforma )
    - Se seleciono como plataforma de mensajeria  ```Telegram``` 
    - Herramienta de gestion ```BotFather``` 
    - Nombre del bot ```PauloPerozoBOt``` 
    - link :```http://t.me/PauloPerozoBOt``` 

* **Nota:** - Agregar el bot en su mobil o desktop para interactuar con el api👤.

#  ( Arquitectura o Patrones ) 
    - Se uso una arquitectura básica modelo, vista controlador ajustada
    - Se aplico algunos principios solid para que la aplicación no fuera tan extensa.
    - se aplico parte del la arquitectura hexagonal separando  infraestructura( server,db ) de la lógica del negocio o dominio (app) no se aplico repository para no extender la aplicación  .

#  ( Rutas o EndPoint ) 


#### POST /messages

>  Permite enviar uno o varios mensajes a los chat : 
> - chat_id: listado de id de chat separados por coma.
> - text: texto del mensaje.
> - image: se adjunta una imagen ( opcional )



#### GET /messages

> Permite consultar los chats del bot se filtran por el params con las siguientes keys:
> - chat_id: id del chat a filtrar.
> - name: nombre de la persona que envio un mensaje dentro del chat.



## Variables de entorno
En el archivo ``.env``se encuentran las variables de entorno que a saber son:

  * PORT (puerto en que correra el servicio)
  * TELEGRAM_TOKEN ( codigo que nos permite auteficarnos con el bot )

## Construido con 🛠️

* [Nodejs](https://nodejs.org) - Entorno de ejecuciónJS.
* [Express](https://expressjs.com/es/) - Framework de nodejs utilizado ES6.
* [npm](https://www.npmjs.com/) - Permite instalar diversas librerías utilizadas en el proyecto.

## Pre-requisitos 📋

_Necesitas instalar lo siguiente:_ ⚠️

* Instala Nodejs

## Deploy 🚀
_Ejecuta los siguientes pasos en orden:_

### Paso 1 Clona el repositorio: 

  ```$ git clone https://github.com/pauloperozo/messages.git``` ⏬

### Paso 2 Entra a la carpeta y ejecuta el siquiente comando: 

  ```$ npm install``` 📂    

Ya con estos dos pasos se tiene el código del proyecto y se instalan las dependencias.

### Paso 3 Runner del proyecto:

   ```$ npm run dev``` 
    Con este comando se inicia el servicio modo entorno desarrollo los datos son volatiles guarado en sqlite::memory .

   ```$ npm start``` 
    Con este comando se inicia el servicio modo producion, el cual guarda un archivo .sqlite con los datos persistente para continuo uso


## Pruebas 🚥

Los test se desarrollaron utilizando jest y supertest (se encuentran en dependencias de desarrollo)
Para ejecutar las pruebas, sólo debes utilizar el comando ``npm run test``` ✅.

## Resulado Final 🚥

Para poder usar esta API  recomiendo un cliente API-REST:

    * Postman : (app para win/lin/mac ) en la carpeta test se incluye una collections de postman para facilitar el test al API
    * Thunder Client :(extension de vscode) https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client

Para gestionar los datos en sqlite recomendamos:

    * SQLite Viewer :(extension de vscode) https://marketplace.visualstudio.com/items?itemName=qwtel.sqlite-viewer

## Autor ✒️

* **Paulo Perozo** - (#des_paulo) 👤.