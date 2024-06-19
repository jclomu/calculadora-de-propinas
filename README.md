# Calculadora de Propinas y Consumos

## Descripción del Proyecto

La "Calculadora de Propinas y Consumos" es una aplicación aún sin conexión a Backend para restaurantes donde los clientes pueden generar una orden con sus consumos y elegir la propina que desean dejar. La aplicación calcula automáticamente el total a pagar incluyendo la propina seleccionada. Esta aplicación incluye optimización mediante operadores ternarios para ocultar componentes que no son necesarios cuando la orden está vacía, así como un botón para reiniciar la orden.

## Tecnologías Implementadas

### Vite
**Vite** es una herramienta de desarrollo que proporciona un entorno rápido y eficiente para aplicaciones modernas de frontend.

En este proyecto, Vite se utiliza para crear la estructura inicial del proyecto y proporcionar un entorno de desarrollo rápido.

### React
**React** es una biblioteca de JavaScript para construir interfaces de usuario. Se utiliza para crear componentes reutilizables que permiten la creación de aplicaciones web rápidas y eficientes.

En este proyecto, React se usa para crear la interfaz de usuario principal, los componentes de lista de productos, el resumen de la orden y la calculadora de propinas.

### TypeScript
**TypeScript** es un superconjunto de JavaScript que añade tipos estáticos. Mejora la robustez del código y facilita la detección de errores en tiempo de desarrollo.

En este proyecto, TypeScript se usa para definir tipos explícitos para los productos, los estados y las funciones, lo que mejora la legibilidad y el mantenimiento del código.

### Tailwind CSS
**Tailwind CSS** es un framework de CSS de utilidad que permite diseñar rápidamente con clases utilitarias predefinidas.

En este proyecto, Tailwind CSS se usa para estilizar la interfaz de usuario. Proporciona una manera rápida y eficiente de aplicar estilos sin escribir CSS personalizado.

### Custom Hooks
**Custom Hooks** en React permiten encapsular lógica reutilizable. Facilitan la separación de la lógica del componente de su presentación.

En este proyecto, se crean hooks personalizados como `useOrder` para manejar la lógica de la orden.

### useMemo
**useMemo** es un hook de React que memoriza valores calculados entre renderizados. Mejora el rendimiento evitando cálculos innecesarios.

En este proyecto, `useMemo` se usa en el componente de calculadora de propinas para memorizar los productos agregados a la orden, el porcentaje de propina y el total a pagar.

## Optimización
Se utilizan operadores ternarios para ocultar componentes que no son necesarios cuando la orden está vacía, mejorando así la experiencia del usuario. Además, se implementa un botón para reiniciar la orden, permitiendo a los usuarios comenzar de nuevo fácilmente.
