import type { CharacterType } from "../../App";
import Card from "../Card";


interface Props {
  character: CharacterType[]
}

const index = ({character} : Props) => {
  return (
    <>
      {
        character.map( (item) => {
            return (
             <Card item={item} key={item.id}/>
            )
        })
      }
    </>
  )
}


export default index;