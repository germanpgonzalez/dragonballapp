import type { CharacterType } from "../../App"

interface Props {
  character: CharacterType[]
}

const index = ({character} : Props) => {
  return (
    <>
      {
        character.map( (item) => {
            return (
            <article key={item.id}>
                <h3>{item.name}</h3>
                {item.image}
            </article>
            )
        })
      }
    </>
  )
}


export default index;