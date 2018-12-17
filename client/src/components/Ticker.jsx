import React from "react"
import styled from "styled-components"

//  styled components
const Wrapper = styled.div``

const Drink = styled.div`
  display: grid;

  grid-template-columns: 150px 100px 70px;
`

const Title = styled.div``

const Code = styled.div``

const Price = styled.div``

const Ticker = props => {
  return (
    <Wrapper>
      <div>Ticker</div>
      {!props.hasLoaded
        ? null
        : props.drinks.map(drink => (
            <Drink>
              <Title>{drink.title}</Title>
              <Code>{drink.code}</Code>
              <Price>{drink.startPrice}</Price>
            </Drink>
          ))}
    </Wrapper>
  )
}

export default Ticker
