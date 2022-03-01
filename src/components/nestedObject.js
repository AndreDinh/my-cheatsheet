import './nestedObject.css';
import People from './Objects.js'; // this is my object i'm grabing
function NestedObject() {
  return(
  <div>
    
     {/* object.map((item) => <div>{item}</div> */
    //  this will create the map of items 
     }
     {/* object.map((item) => <div>{item.key.map((sub) => <div>sub.key</div>}</div> */
    //  this grabs the object put in map function then grab item then go through nested to grab nested key and display the nested key

}

<p>Mapping people and there details using .map</p>
    {People.data.map((item) => 
      <div><h2>{item.name}</h2>
      <ul>
          {item.details.map((sub) => 
          <li>
              {sub.info}
        </li>
          )}
      </ul>
      </div>
    )}
 </div>
  )
}

export default NestedObject;
