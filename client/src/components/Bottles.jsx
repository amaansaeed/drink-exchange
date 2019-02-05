import React from "react"
import styled from "styled-components"

//  container
import Container from "../containers/BottlesContainer"

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

const Bottle = styled.div`
  display: grid;
  grid-template-columns: auto 90px 70px 70px;

  padding: 5px 0px;

  color: slategray;
`

const Name = styled.div`
  text-transform: capitalize;
  padding-right: 25px;
`

const Type = styled.div``

const Stock = styled.div`
  text-align: center;
`

const Price = styled.div`
  text-align: center;
`

const Heading = styled(Bottle)`
  ${Name}, ${Type}, ${Stock}, ${Price} {
    color: black;
  }
`

const Bottles = ({bottles}) => {
  return (
    <Wrapper>
      <Title>Bottles</Title>
      <Hr />
      <Content>
        <Heading>
          <Name>Bottle</Name>
          <Type>Type</Type>
          <Stock>Stock</Stock>
          <Price>Price</Price>
        </Heading>
        {!bottles
          ? null
          : bottles.map((bottle, i) => (
              <Bottle key={i}>
                <Name>{bottle.title}</Name>
                <Type>{bottle.type}</Type>
                <Stock>{bottle.stock}</Stock>
                <Price>{bottle.price.toFixed(2)}</Price>
              </Bottle>
            ))}
      </Content>
    </Wrapper>
  )
}

export default Container(Bottles)
