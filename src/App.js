


import Address from './components/profile/Address.js';
import './App.css';
import FullName from './components/profile/FullName.js';
import ProfilePhoto from './components/profile/ProfilePhoto.js';


function App() {
  return (
    <div className="App">
      <ProfilePhoto/>
      <FullName/>
      <Address/>

    </div>
  );
}

export default App;