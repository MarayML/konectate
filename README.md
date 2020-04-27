# Konecta formacion

Proyecto web que simula una plataforma de cursos virtuales. Desarrollado en VueJS con uso de la librería Vuetify para los componentes UI.

## Estructura del Proyecto

El proyecto consume la data desde un archivo .JSON, resguardado en assets/data/data.json, donde se respalda la información de los Cursos,Unidades y Test que ofrece la plataforma. A manera ilustrativa el archivo JSON almacena la data con la siguiente estructura y propiedades:

cursos": [
        {
            "id": 
            "img":
            "autor":
            "imga": 
            "porcent":
            "title": 
            "status":
            "unidad": [
                {   "title":
                    "video":
                    "porcent":
                    "time": 
                    "status":
                    "test": [
                        {
                            "title":,
                            "img": 
                            "video":
                            "time": 
                            "porcent":
                            "status":                       
                        }
                    ]
                }
            ]
        },
     
Para desarrollar el ejercicio se consideró la data de 2 cursos, uno de ellos conformado por 1 unidad y 2 test y el otro curso conformado por 2 unidades y 4 test. 

### Barra de progreso

El objetivo principal del ejercicio es determinar el porciento de avance del usuario en cada curso, en función de cada unidad y test vencido.

Para ello se toma en consideración el tiempo establecido para estudiar cada contenido y se supervisa con la función setInterval() para cronometrar el tiempo que permanece el usuario interactuando con dicho contenido. El resultado se dibuja en la barra de progreso de cada elemento y en el tablero de la pagina principal, donde se resume la estadística general de progreso por parte del usuario.

### Componentes y vistas

El proyecto está compuesto por 5 componentes y 3 vistas, que fraccionan el código y lo reutilizan para una mejor comprensión y funcionalidad.

### Flujo de la aplicación

Se escoge uno de los cursos para iniciar.

![page-1](https://i.imgur.com/A3hRn4c.jpg)


Se comienza con la unidad o los test o bien se regresa a la pagina principal.

![page-2](https://i.imgur.com/U4OiwSq.jpg)


Se visualiza el contenido de la unidad o del test y se selecciona termina.

![page-3](https://i.imgur.com/wwg3dbm.jpg)
