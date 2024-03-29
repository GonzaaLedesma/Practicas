import React from 'react';
import ChildComponent from './childComponent';

export default function parent (){
  return (
    <div>
      <h1>Componente Padre</h1>
      <ChildComponent />
    </div>
  );
}
