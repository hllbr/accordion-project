import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions,setQuestions] = useState(data);//questions u data verileriyle başlıyorum
  return (
    <main>
      <div className='container'>
        <h3>hllbr sorular ve cevaplar hakkında</h3>
        <section className='info'>
          {questions.map((item)=>{
            return(
              <SingleQuestion key={item.id} {...item}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
