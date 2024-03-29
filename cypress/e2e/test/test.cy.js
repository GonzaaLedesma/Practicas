/// <reference types="cypress" />

describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('https://example.cypress.io/todo')
    })
        it('displays two todo items by default', () => {
            cy.get('.todo-list li').should('have.length', 2)
            cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
            cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
        })
        it('can add new todo items', () => {
            const newItem = 'Feed the cat'

            cy.get('[data-test=new-todo]').type(`${newItem}{enter}`)
            cy.get('[data-test=new-todo]').type("Feed the cat")

            cy.get('.todo-list li')
              .should('have.length', 3)
              .last()
              .should('have.text', newItem)
          })
})
/* 
METODOS CYPRESS

Selector de Elementos:

cy.get(): Selecciona un elemento o varios elementos en la página.
cy.contains(): Encuentra un elemento que contenga un texto específico.
cy.find(): Encuentra elementos secundarios dentro de un elemento seleccionado.
cy.eq(): Reduce el conjunto de elementos seleccionados al elemento en un índice específico.
cy.filter(): Reduce el conjunto de elementos seleccionados a aquellos que coinciden con un selector específico.
Interacciones de Usuario:

cy.type(): Simula la escritura en un campo de entrada.
cy.click(): Simula un clic en un elemento.
cy.check(): Marca una casilla de verificación.
cy.uncheck(): Desmarca una casilla de verificación.
cy.select(): Selecciona una opción de un elemento <select>.
Verificaciones y Asertos:

cy.should(): Realiza aserciones sobre elementos seleccionados.
cy.expect(): Realiza aserciones utilizando chai assertions.
cy.assert(): Realiza aserciones utilizando funciones de aserción de chai.
Navegación y URL:

cy.visit(): Visita una URL.
cy.url(): Obtiene la URL actual.
cy.reload(): Recarga la página actual.
cy.go(): Navega hacia adelante o hacia atrás en el historial del navegador.
Esperas y Retardos:

cy.wait(): Espera un período de tiempo especificado.
cy.contains().should(): Espera hasta que un elemento contenga un texto específico.
cy.intercept(): Intercepción de solicitudes de red para agregar retrasos o modificar respuestas.
Varias Funciones Útiles:

cy.clear(): Limpia el contenido de un campo de entrada.
cy.focus(): Da el foco a un elemento.
cy.blur(): Hace perder el foco a un elemento.
cy.scrollTo(): Desplaza la ventana del navegador hasta un elemento.

JQuery

Selección de Elementos:

$(selector): Selecciona elementos en el DOM utilizando un selector CSS.
Manipulación de Contenido:

.html(): Obtiene o establece el contenido HTML de un elemento.
.text(): Obtiene o establece el texto de un elemento.
.append(): Inserta contenido al final de los elementos seleccionados.
.prepend(): Inserta contenido al principio de los elementos seleccionados.
.remove(): Elimina los elementos seleccionados del DOM.
.empty(): Elimina el contenido de los elementos seleccionados.
Manipulación de Atributos y Propiedades:

.attr(): Obtiene o establece el valor de un atributo de un elemento.
.prop(): Obtiene o establece el valor de una propiedad de un elemento.
Estilos y Clases:

.css(): Obtiene o establece los estilos CSS de los elementos seleccionados.
.addClass(): Agrega una o más clases a los elementos seleccionados.
.removeClass(): Elimina una o más clases de los elementos seleccionados.
.toggleClass(): Alterna la presencia de una clase en los elementos seleccionados.
Eventos:

.on(): Adjunta un controlador de eventos a los elementos seleccionados.
.off(): Elimina un controlador de eventos previamente adjuntado a los elementos seleccionados.
Dimensiones y Posiciones:

.width(): Obtiene o establece el ancho de los elementos seleccionados.
.height(): Obtiene o establece la altura de los elementos seleccionados.
.position(): Obtiene las coordenadas de posición de un elemento con respecto a su elemento padre.
.offset(): Obtiene las coordenadas de posición de un elemento con respecto al documento.
*/