import React, { Fragment } from "react"
import styled from "styled-components"

//  variables
const height = "70px"

//  styled-components
const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: ${height};
`

const Title = styled.div`
  text-align: center;
  font-size: 30px;
  position: relative;
  top: 50%;
  transform: translate(0, -50%);
`

const Space = styled.div`
  height: ${height};
`

const Header = props => {
  return (
    <Fragment>
      <Wrapper>
        <Title>Drink Exchange</Title>
      </Wrapper>

      <Space />
    </Fragment>
  )
}

export default Header
