import Popup from 'reactjs-popup'
import {Component} from 'react'
import {RiCloseLine} from 'react-icons/ri'

import {
  MainContainer,
  ScoreContainer,
  ListItemsContainer,
  EachItem,
  ScoreSubContainer,
  ScoreHeading,
  ScoreValue,
  ElementsImageContainer,
  ResultContainer,
  ElementImage,
  ItemButton,
  ResultImagesContainer,
  ResultSubImageContainer,
  ElementHeading,
  ResultValue,
  PlayAgainButton,
  RulesButton,
  PopupImage,
  CloseButton,
  PopupContainer,
} from './StyledComponents'

import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    score: '0',
    game: true,
    clickedImage: 0,
    randomImageId: 0,
    statusMessage: '',
  }

  clickImage = id => {
    const {score} = this.state
    const randomImageGenerator = Math.floor(Math.random() * 2)
    const result = choicesList.filter(each => each.id === id)
    let statusValue = ''
    let scoreValue = 0
    if (
      result[0].id === 'PAPER' &&
      choicesList[randomImageGenerator].id === 'SCISSORS'
    ) {
      scoreValue = parseInt(score) - 1
      statusValue = 'YOU LOSE'
    } else if (
      result[0].id === 'SCISSORS' &&
      choicesList[randomImageGenerator].id === 'PAPER'
    ) {
      scoreValue = parseInt(score) + 1
      statusValue = 'YOU WON'
    } else if (
      result[0].id === 'ROCK' &&
      choicesList[randomImageGenerator].id === 'SCISSORS'
    ) {
      scoreValue = parseInt(score) + 1
      statusValue = 'YOU WON'
    } else if (
      result[0].id === 'SCISSORS' &&
      choicesList[randomImageGenerator].id === 'ROCK'
    ) {
      scoreValue = parseInt(score) - 1
      statusValue = 'YOU LOSE'
    } else if (
      result[0].id === 'ROCK' &&
      choicesList[randomImageGenerator].id === 'PAPER'
    ) {
      scoreValue = parseInt(score) - 1
      statusValue = 'YOU LOSE'
    } else if (result[0].id === choicesList[randomImageGenerator].id) {
      scoreValue = parseInt(score)
      statusValue = 'IT IS DRAW'
    } else if (
      result[0].id === 'PAPER' &&
      choicesList[randomImageGenerator].id === 'ROCK'
    ) {
      scoreValue = parseInt(score) + 1
      statusValue = 'YOU WON'
    }
    this.setState({
      clickedImage: result[0].imageUrl,
      randomImageId: choicesList[randomImageGenerator].imageUrl,
      game: false,
      score: scoreValue,
      statusMessage: statusValue,
    })
  }

  clickPlayAgain = () => {
    this.setState({
      game: true,
    })
  }

  render() {
    const {score, clickedImage, game, randomImageId, statusMessage} = this.state

    return (
      <MainContainer>
        <ScoreContainer>
          <ListItemsContainer>
            {choicesList.map(each => (
              <EachItem>{each.id}</EachItem>
            ))}
          </ListItemsContainer>
          <ScoreSubContainer>
            <ScoreHeading>Score</ScoreHeading>
            <ScoreValue>{score}</ScoreValue>
          </ScoreSubContainer>
        </ScoreContainer>
        {game ? (
          <ElementsImageContainer>
            {choicesList.map(each => (
              <ItemButton
                data-testid={`${each.id.toLowerCase()}Button`}
                onClick={() => this.clickImage(each.id)}
                key={each.id}
              >
                <ElementImage src={each.imageUrl} alt={each.id} />
              </ItemButton>
            ))}
          </ElementsImageContainer>
        ) : (
          <ResultContainer>
            <ResultImagesContainer>
              <ResultSubImageContainer>
                <ElementHeading>YOU</ElementHeading>
                <ElementImage src={clickedImage} alt="your choice" />
              </ResultSubImageContainer>
              <ResultSubImageContainer>
                <ElementHeading>OPPONENT</ElementHeading>
                <ElementImage src={randomImageId} alt="opponent choice" />
              </ResultSubImageContainer>
            </ResultImagesContainer>
            <ResultValue>{statusMessage}</ResultValue>
            <PlayAgainButton type="button" onClick={this.clickPlayAgain}>
              Play Again
            </PlayAgainButton>
          </ResultContainer>
        )}
        <Popup modal trigger={<RulesButton type="button">Rules</RulesButton>}>
          {close => (
            <PopupContainer>
              <CloseButton type="button" onClick={() => close()}>
                <RiCloseLine />
              </CloseButton>
              <PopupImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </PopupContainer>
          )}
        </Popup>
      </MainContainer>
    )
  }
}

export default App
