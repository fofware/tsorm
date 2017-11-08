# tsorm
Buscando la manera de iniciar un proyecto con TypeScript, Node js, mysql 

<ul>
<li>Crear el repositorio en GitHab MyProject y cloanrlo en la compu</li>
<li>Desde el mismo directorio y teniendo typeorm instalado de forma global crear MyProyect:<pre>
typeorm init --name MyProject --database mysql --express</pre>
</li>
<li>cambiar al directorio de MyProyect:<pre>
cd MyProject
</pre></li>
<li>Instalar los paquetes<pre>npm install</pre></li>
<li>Hasta aquí es la inicializacion del proyecto y fue extraido desde <a href="http://typeorm.io/#/undefined/step-by-step-guide">la documentacion de TypeORM</a> esta domumentación está muy completa y te recomiendo que le pegues una mirada para mayores detalles, vale la pena</li>
<li>Modifico ormconfig.json y pongo los datos del servidor de mysql que corresponden<pre>{
   "type": "mysql",
   "host": "localhost",
   "port": 3306,
   "username": "www-data",
   "password": "",
   "database": "ccaballos",
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/entity/**/*.ts"
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}</pre></li>
<li>Modifico entity/Users.ts, aquí es donde se definen los campos de la tabla "user"</li>
<li>Modifico index.ts, comento la parte del demo que crea usuarios de prueba<pre>
/*
    // insert new users for test
    await connection.manager.save(connection.manager.create(User, {
        firstName: "Timber",
        lastName: "Saw",
        age: 27
    }));
    await connection.manager.save(connection.manager.create(User, {
        firstName: "Phantom",
        lastName: "Assassin",
        age: 24
    }));
*/
</pre></li>
<li>Ejecuto el proyecto y si todo fue bien se crea la tabla user en la base de datos<pre>
npm start
</pre></li>
<li>
TypeORM tiene como tipo de datos "json" y "simple_array", pero en mySQL/MariaDB no funcionan
</li>
<li>
Hasta aquí todo bien, tenemos la conexión a base de datos funcionando.
</li>
<li> Para poder mostrar las paginas web voy a usar handlebars y para eso instalamos:<pre>
npm install --save express-handlebars
npm install --save-dev @types/express-handlebars
</pre>
Creamos el subdirectorio "views" dentro del otro "layouts" los archivos hbs correspondientes:<pre>views/layouts/layout.hbs
views/index.hbs
views/login.hbs
views/register.hbs
</pre>
En ellos estará lo necesario para comenzar con nuestaras páginas.
</li>
<li>
Como pretendo usar websocket en mi proyecto voy a instalar "faye-websocket", porque ese y no otro, sencillo, cuando estuve buscando y proban distintas implementaciones este era el único que cumplía con el estandar de web-socket y es el que funciona con la implementación de WebSocket en <a href="https://www.lua.org/">Lua</a> que tienen las placas NodeMCU, que son las placas de desarrollo basada en el chip ESP8266 que nos hace la vida más fácil a los que queremos desarrollar dispositivos conectados.<p>
Si el navegador a usar no soporta web-socket, no lo he probado pero podriamos escribir un cliente.js y transpilarlo con babel, imagino que funcionaría y si no bueno que actualicen los Browser</p>
<pre>
npm install --save faye-websocket
</pre>
Al intentar instalar <pre>npm install --save-dev @types/faye-websocket</pre>
Obtuve un error "ESO NO EXISTE".<p>Antes de pensar en dejar de lado TypeScript, hay una solución al problema.</p>
Instalamos de forma global dts-gen y generamos el archivo con los types para TypeScript<pre>sudo npm install -g dts-gen</pre>
el "sudo" es sólo para los linux o los Mac.<p>Una vez que tenemos esto podemos generar de manera muy sencilla lo que necesitamos.</p>Creamos una subdirectorio dentro de src que se llame "types"<pre>
dst-gen -m faye-websocket
</li>
Se genera el archivo faye-websocket.d.ts, lo movemos a src/types
y modificamos el archivo tsconfig.json para indicarle donde buscar las librerias. Dentro de compilerOptions agregamos: <pre>      "baseUrl": "./",
      "paths": {
        "*": [
            "node_modules/*",
            "src/types/*"
        ]
      }
</pre>
</ul>
Listo esta es la base, ahora empecemos a jugar.