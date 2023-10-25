import styled from 'styled-components'


export const ItemCard2 = styled.li`




  width: 240px;
  list-style-type:none;
  background-color: whitesmoke;
  margin: 30px auto;
  border-radius: 33px;
  padding: 1rem;



li img{
  max-width: 200px;
  height: 240px;
  background: whitesmoke;
  border: 3px groove greenyellow;
  border-radius: 22px;
}

li:hover{
  box-shadow: greenyellow 2.6px 2.7px 0px 0.5px;
}

h1{
  text-shadow: 5px 5px black;
  font-size: 3rem;
}
`

export const ModalCardItem2 = styled.section`
position: fixed;
top: 20vh;
bottom: 20vh;
right: 5%;
left: 5%;
background: whitesmoke;
border: 2px dashed greeenyellow;
border-radius: 22px;
z-indexs: 11;
`