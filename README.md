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
   "database": "campodecaballos",
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
</ul>