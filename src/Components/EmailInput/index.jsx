import { useState } from 'react'
import styled from 'styled-components'
import colors from '../../utils/styles/color'

const InputWrapper = styled.div`
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
  display: flex;
  flex-direction: row;
`

const StyledLabel = styled.label`
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
`

const StyledInput = styled.input`
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
  border: none;
  background-color: transparent;
  border-bottom: 1px solid
    ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
  margin-top: 5px;
  margin-bottom: 15px;
`

function EmailInput({ theme }) {
  const [inputValue, setInputValue] = useState('')

  return (
    <InputWrapper theme={theme}>
      <StyledLabel theme={theme}>Adresse Email : </StyledLabel>
      <StyledInput
        theme={theme}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {inputValue}
    </InputWrapper>
  )
}

export default EmailInput
