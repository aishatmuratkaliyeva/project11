// App.js
import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import ExampleComponent from './ExampleComponent'; // Добавляем импорт вашего компонента

function App() {
  return (
    <div>
      <h1>Task 11</h1>
      <RegistrationForm /> {/* Ваш компонент RegistrationForm */}
      <ExampleComponent /> {/* Добавляем ваш компонент здесь */}
    </div>
  );
}

export default App;
