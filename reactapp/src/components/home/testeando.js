import React from 'react';
import testApi from '../../../../catalogo/views';

function MyComponent() {
  const handleClick = () => {
    console.log(testApi)
  }

  return (
    <div>
      <button onClick={handleClick}>Ejecutar función de Django</button>
    </div>
  );
}

export default MyComponent;