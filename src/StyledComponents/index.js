import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #223a5f;
  background-size: cover;
  height: 100vh;
  align-items: center;
  justify-content: center;
`

export const ScoreContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-radius: 10px;
  border-width: 2px;
  border-color: #ffffff;
  width: 70%;
  border-style: solid;
  font-weight: bold;
`
export const ListItemsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`

export const EachItem = styled.h1`
  color: black;
  font-family: 'Bree-Serif';
  color: white;
  margin-bottom: 10px;
`

export const ScoreSubContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  width: 130px;
  height: 110px;
  border-width: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ScoreHeading = styled.p`
  color: #223a5f;
  font-family: ' #223a5f';
  font-weight: bold;
  font-size: 20px;
`
export const ScoreValue = styled.p`
  color: #223a5f;
  font-family: 'Roboto';
  font-weight: bolder;
  font-size: 20px;
`

export const ElementsImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 320px;
  justify-content: center;
  margin-top: 25px;
`

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ItemButton = styled.button`
  background-color: transparent;
  height: 150px;
  width: 150px;
  margin: 5px;
  border-width: 0px;
`
export const ElementImage = styled.img`
  height: 100px;
  width: 100px;
`

export const ResultImagesContainer = styled.div`
  display: flex;
`
export const ResultSubImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`

export const ElementHeading = styled.p`
  color: white;
  text-align: center;
`
export const ResultValue = styled.p`
  color: white;
  font-size: 25px;
  text-align: center;
`
export const PlayAgainButton = styled.button`
  color: #223a5f;
  border-radius: 5px;
  background-color: white;
`

export const RulesButton = styled.button`
  border-radius: 5px;
`

export const PopupImage = styled.img`
  height: 80%;
  width: 80%;
  align-self: center;
`

export const CloseButton = styled.button`
  background-color: transparent;
  align-self: flex-end;
`
export const PopupContainer = styled.div`
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
`
