import Data from './file.json'
import Card from './Card'



function BasicAddFile() {

/**
   * Data Loading with for loop
  let item = [];
  for(let x = 0; x<Data.length; x++){
    item.push(<Card name={Data[x].name} address={Data[x].address} selary={Data[x].salary} />)
  }
*/

/**
   * Data Loading with map() function
    { Data.map((item)=><Card name = {item.name} address = {item.address} salary = {item.salary}/>)}
*/

  return (
    <div>
     { Data.map((item, index)=><Card key={index} name = {item.name} address = {item.address} salary = {item.salary}/>)}
    </div>
)


        
}

export default BasicAddFile