import { useEffect } from 'react';
import { useState } from 'react';

import Navbar from './Components/Navbar';
import Breadcrumb from './Components/Breadcrumb';
import { getImages } from './Services/Api';
import Images from './Components/Images';
import Infomsgcount from './Components/Infomsgcount';

function App() {

  const [data, setData] = useState([]);
  //Get and Set values From Breadcrumb
  const [text, setText] = useState('Mountains');
  const [count, setCount] = useState(10);

  //Toggle Value open and close of error message
  const [open, toggleMsg]=useState(false);

  useEffect(() => {

    //Message
    if (count < 3 || count > 200) {
      toggleMsg(true);
      return;
    }
    
    toggleMsg(false);

    //Images
    getImages(text, count).then(response => {
      setData(response.data.hits);

    })
  }, [text, count]);



  //Define the Function -From Breadcrumbs - Onchange
  const OnTextChange = (text) => {
    setText(text);
  }

  const onCountChange = (count) => {
    setCount(count);
  }

  return (
    <div className="App">
      <Navbar />
      <Breadcrumb OnTextChange={OnTextChange} onCountChange={onCountChange} />
      <Images data={data} />
      <Infomsgcount open={open} toggleMsg={toggleMsg}/>
      
    </div>
  );
}

export default App;
