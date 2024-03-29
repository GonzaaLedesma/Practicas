/*TDD
  1 - crear un test que falle[red]
  2 - lo minimo y necesario para que pase[green]
  3 - REFACTORS [identacion y codigo limpio]
*/

import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

// se puede poner test por it es lo mismo

describe('componente', () => {
  beforeEach(() => {     //se utiliza para renderizar el componente <App /> antes de cada prueba 
    render(<App />);
  });

  it('contador', () => {
    const counterElement = screen.getByText('Contador: 0');
    const button = screen.getByText('Aumentar Contador');

    fireEvent.click(button);

    expect(counterElement).toHaveTextContent('Contador: 1');//  se utiliza para verificar si el texto dentro de un elemento coincide con un valor específico o una expresión regular.
  });

  it('agrega tarea a la lista', () => {
    const input = screen.getByPlaceholderText('Ingrese una tarea');
    const button = screen.getByText('Agregar Tarea');
    const task = 'Ir al super';

    fireEvent.change(input, { target: { value: task } });
    fireEvent.click(button);

    expect(screen.getByText(task)).toBeInTheDocument();
  });
});

/*
Jest
expect: Es la función principal para realizar aserciones en tus pruebas. Puedes usar métodos encadenados con expect para verificar valores, propiedades y comportamientos esperados.

describe: Utilizado para agrupar pruebas relacionadas. Puedes anidar describe para crear una jerarquía de grupos de pruebas.

test / it: Ambos se utilizan para definir pruebas individuales. Puedes usar test o it indistintamente para escribir tus pruebas.

beforeEach: Se ejecuta antes de cada prueba en un grupo describe. Útil para configurar el estado inicial común antes de cada prueba.

afterEach: Se ejecuta después de cada prueba en un grupo describe. Útil para limpiar y restaurar el estado después de cada prueba.

beforeAll: Se ejecuta una vez antes de todas las pruebas en un grupo describe. Útil para configurar el estado inicial común una sola vez antes de todas las pruebas.

afterAll: Se ejecuta una vez después de todas las pruebas en un grupo describe. Útil para limpiar y restaurar el estado una sola vez después de todas las pruebas.

expect.assertions: Utilizado para garantizar que un número específico de aserciones se ejecuten dentro de una prueba. Si no se cumplen las expectativas, la prueba fallará.

expect.hasAssertions: Similar a expect.assertions, pero verifica si al menos una aserción se ha ejecutado dentro de la prueba.

toBe: Comprueba si dos valores son idénticos utilizando el operador de igualdad estricta (===).

toEqual: Compara dos objetos o arreglos recursivamente para verificar si son iguales en términos de valores.

toMatch / toContain: Utilizado para verificar si un valor coincide con un patrón de expresión regular o si un arreglo o cadena contiene ciertos elementos.

toThrow: Verifica si una función lanza una excepción cuando se llama.

toHaveBeenCalled / toHaveBeenCalledTimes / toHaveBeenCalledWith: Utilizado para verificar si una función ha sido llamada, cuántas veces ha sido llamada o con qué argumentos ha sido llamada.

jest.fn: Crea una función simulada (mock function) que puede ser espiada, rastreada y verificada en tus pruebas.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Testing Library
render: Renderiza un componente en un contenedor virtual para que pueda ser probado.

screen: Proporciona una serie de funciones para seleccionar y consultar elementos en el árbol de componentes renderizado, como getByText, getByTestId, getByRole, etc.

fireEvent: Dispara eventos sintéticos en los elementos, como clics, cambios, teclas presionadas, etc.

waitFor: Espera a que una condición se cumpla antes de continuar con la ejecución de las pruebas, útil para pruebas asincrónicas.

cleanup: Limpia el DOM después de cada prueba, eliminando cualquier elemento renderizado para evitar efectos secundarios entre pruebas.

act: Envuelve interacciones con el DOM y actualizaciones del estado en pruebas asincrónicas para asegurarte de que se ejecuten de manera sincrónica.

queries: Proporciona funciones para buscar elementos en el árbol de componentes, como getByText, getByRole, getByLabelText, etc.

waitForElementToBeRemoved: Espera a que un elemento desaparezca del DOM antes de continuar con la ejecución de las pruebas.

waitForElement: Espera a que un elemento aparezca en el DOM antes de continuar con la ejecución de las pruebas.

within: Permite seleccionar elementos dentro de un subárbol de componentes, lo que facilita la búsqueda y la interacción con elementos específicos dentro de un componente renderizado.

----------------------------------------------------------------------------------------------------------------------------------------------------------------
METODOS DE JESTDOM

toBeInTheDocument(): Como ya se discutió, verifica si un elemento está presente en el DOM.

toHaveTextContent(text): Verifica si un elemento tiene el texto especificado como su contenido.

toHaveAttribute(attribute, value?): Verifica si un elemento tiene el atributo especificado y, opcionalmente, verifica su valor.

toHaveClass(className): Verifica si un elemento tiene la clase CSS especificada.

toHaveStyle(style): Verifica si un elemento tiene el estilo CSS especificado.

toBeVisible(): Verifica si un elemento es visible en la pantalla (es decir, no está oculto por CSS o fuera del área visible de la ventana del navegador).

toBeDisabled(): Verifica si un elemento de formulario (como un botón o un campo de entrada) está deshabilitado.

toBeEnabled(): Verifica si un elemento de formulario está habilitado.

toBeEmptyDOMElement(): Verifica si un elemento no tiene hijos.

toContainElement(element): Verifica si un elemento contiene otro elemento como su descendiente.

*/