import React from "react"
import styled, { keyframes } from "styled-components"

//  styled components
const Wrapper = styled.div`
  font-size: 14px;
`

const Title = styled.div`
  text-align: center;
  font-size: 20px;
`

const Hr = styled.hr`
  width: 50%;
`

const Content = styled.div`
  width: max-content;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
`

const Drink = styled.div`
  display: grid;
  grid-template-columns: auto 80px 70px 70px;

  padding: 5px 0px;

  color: slategray;
`

const Name = styled.div`
  text-transform: capitalize;
  padding-right: 25px;
`

const Code = styled.div``

const Sold = styled.div`
  text-align: center;
`

const Price = styled.div`
  text-align: center;
`

const Heading = styled(Drink)`
  ${Name}, ${Code}, ${Sold}, ${Price} {
    color: black;
  }
`

const Drinks = props => {
  return (
    <Wrapper>
      <Title>Drinks</Title>
      <Hr />
      <Content>
        <Heading>
          <Name>Drink</Name>
          <Code>Ticker</Code>
          <Sold>Sold</Sold>
          <Price>Price</Price>
        </Heading>
        {!props.hasLoaded
          ? null
          : props.drinks.map((drink, i) => (
              <Drink key={i}>
                <Name>{drink.title}</Name>
                <Code>{drink.code}</Code>
                <Sold>{drink.sold}</Sold>
                <Price>{drink.price.toFixed(2)}</Price>
              </Drink>
            ))}
      </Content>
    </Wrapper>
  )
}

export default Drinks
