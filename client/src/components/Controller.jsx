import React from "react"
import ReactSelect from "react-select"
import styled from "styled-components"

//  styled-components
const Wrapper = styled.div`
  text-align: center;
`

const Title = styled.div`
  text-align: center;
  font-size: 20px;
`

const Hr = styled.hr`
  width: 50%;
`

const Section = styled.div`
  padding: 30px 0px;
`

const Heading = styled.div`
  margin-bottom: 20px;
`

const Dropdown = styled.div`
  margin-bottom: 20px;
`

const Select = styled(ReactSelect)`
  width: 200px;
  height: 30px;
  font-size: 12px;
  text-align: left;
  text-transform: capitalize;

  margin: 0 auto;
`

const Button = styled.div`
  & > button {
    font-size: 15px;
    border-radius: 3px;
    border: 1px black solid;
    width: 120px;
    height: 30px;
  }

  & > button:hover {
    color: darkgrey;
    border: 1px darkgrey solid;
  }
`

const Controller = props => {
  return (
    <Wrapper>
      <Title>Controller</Title>
      <Hr />
      <Section>
        <Heading>Buy Drinks</Heading>
        <Dropdown>
          <Select name="drinks" onChange={props.selectDrink} options={props.drinks} />
        </Dropdown>
        <Button>
          <button onClick={() => props.handleClick("buy")}>Buy</button>
        </Button>
      </Section>

      <Section>
        <Heading>Sell Bottles</Heading>
        <Dropdown>
          <Select name="bottles" onChange={props.selectBottle} options={props.bottles} />
        </Dropdown>
        <Button>
          <button onClick={() => props.handleClick("sell")}>Sell</button>
        </Button>
      </Section>
    </Wrapper>
  )
}

export default Controller
