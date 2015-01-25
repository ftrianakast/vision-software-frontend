[1]: http://gulpjs.com/
[2]: http://jade-lang.com/
[3]: http://learnboost.github.io/stylus/

# Workportal

## Versión funcional

Usted puede encontrar una versión funcional en http://54.148.184.238:3000/

## Ingreso

Para ingresar debe usar las siguientes credenciales:

__Username__: admin
__Password__: admin

## Fuentes

Tener en cuenta que las fuentes se encuentran sobre la carpeta __src__. La carpeta __app__ es autogenerada. Por tanto si se desea hacer evaluación __arquitectural__ es conveniente hacerla sobre la carpeta __src__.

Se utilizó [gulp][1] en la etapa de __desarrollo__ para la generación de los archivos __HTML__ a partir del motor de templating [Jade][2], y los archivos __CSS__ a partir del preprocesador [Stylus][3].

En _src_ usted podrá encontrar controladores, servicios y llamados ajax usando el servicio __$http__ de AngularJS.



## Tecnologías utilizadas

1. Angularjs
2. Requirejs para el cargado asíncrono de las distintas piezas de software: controladores, servicios y demás.
3. Bootstrap para darle estilo y hacer responsive la página creada
4. [Gulp][1] para la compilación de los archivos jade, stylus en HTML y CSS respectivamente.
5. Momentjs para el manejo fácil de fechas. En este caso se utilizo para calcular los __días hábiles__ solicitados por un empleado.
6. [Jade][2] como motor de templating __HTML__
7. [Stylus][3] como preprocesador __CSS__ 
8. Se desplego la aplicación sobre __AWS__.


