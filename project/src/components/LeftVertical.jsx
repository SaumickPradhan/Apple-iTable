import React from 'react';
import phone from '../assets/phone.jpeg';
import watch from '../assets/watch.jpeg';
import airpods from '../assets/airpods.jpeg';

function LeftVertical(){
    //JSX: Javascript XML
    return (
        // <div className="left-vertical-component">
      <div>
        <div class="circle">
        <img src={phone} alt="App Icon 1" />
        <div class="status">
        <span class="battery">80%</span>
        <span class="connection">📶</span>
      </div>
      </div>
      <div class="circle">
      <img src={watch} alt="App Icon 2" />
      <div class="status">
      <span class="battery">95%</span>
      <span class="connection">📶</span>
      </div>
      </div>
      <div class="circle">
      <img src={airpods} alt="App Icon 3" />
      <div class="status">
      <span class="battery">60%</span>
      <span class="connection">📶</span>
      </div>
      </div>
         </div>
      );
}
export default LeftVertical;




