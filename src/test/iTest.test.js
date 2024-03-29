import React from 'react';
import { render } from '@testing-library/react';
import ParentComponent from '../components/parentComponent';

test('itegracion', () => {
  const { getByText } = render(<ParentComponent />);
  
  const h1Elemet = getByText('Componente Padre');
  const h2Elemet = getByText('Componente Hijo');
  
  // Seleccionar el elemento h2 dentro del componente hijo
  const h2ChildElement = document.querySelector('h2');

  expect(h1Elemet).toBeInTheDocument();
  expect(h2Elemet).toBeInTheDocument();
  expect(h2ChildElement).toBeInTheDocument();
});

