import DefaultPicture from '../../assets/profile.png'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useTheme } from '../../utils/hooks'
import { useState } from 'react'


const CardLabel = styled.span`
  color: #5843e4;
  font-size: 22px;
  font-weight: normal;
  padding-left: 15px;
`

const CardTitle = styled.span`
  color: ${({theme}) => theme === 'light' ? 'black' : 'white'};
  font-size: 22px;
  font-weight: normal;
  align-self: center;
`

const CardImage = styled.img`
  height: 150px;
  width: 150px;
  align-self: center;
  border-radius: 50%;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
  background-color: ${
    ({ theme }) => theme === 'light' ? 
    `${colors.backgroundLight}` : `${colors.backgroundDark}`
  };
  border-radius: 30px;
  width: 300px;
  height: 300px;
  transition: 1000ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`

function Card({ label, title, picture }) {
  const [isFavorite, setIsFavorite] = useState(false)
  const star = isFavorite ? '🌟' : ''
  const {theme} = useTheme()
  return (
    <CardWrapper theme={theme} onClick={() => setIsFavorite(!isFavorite)}>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" />
      <CardTitle theme={theme} data-testid="1e">
        {star}{title}{star}
      </CardTitle>
    </CardWrapper>
  )
}

Card.propTypes = {
  label : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired
}
Card.defaultProps = {
  title: '',
  label : '',
  picture : DefaultPicture
}

export default Card






