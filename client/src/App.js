import React from 'react';
import Auth from './containers/Auth';
import RecipeButton from './components/RecipeButton';

function App() {

  return (
    <div className="App">
      <Auth/>
      <br/>
      <RecipeButton/>
    </div>
  );
}

export default App;
