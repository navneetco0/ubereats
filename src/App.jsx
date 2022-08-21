import { Routes, Route } from 'react-router-dom';
import { MerchantNav } from './Components/MerchantNav';
import { Cr_bussiness } from './Pages/Cr_bussiness';
import { Email } from './Pages/Email';
import { Home } from './Pages/Home';

function App() {
  return (
    <div>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/email" element={<Email/>} />
         <Route path="/create-bussiness-account" element={<Cr_bussiness/>}/>
         <Route path="/merchant" element={<MerchantNav/>} />
      </Routes>
    </div>
  );
}

export default App;
