import { useTheme } from '../../utils/Hooks'
import styled from 'styled-components'
import colors from '../../utils/styles/color'

import EmailInput from '../EmailInput'

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding-top: 60px;
`

const NightModeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${colors.secondary};
`

export default function Footer() {
  const { toggleTheme, theme } = useTheme()
  return (
    <FooterContainer>
      <EmailInput theme={theme} />
      <NightModeButton onClick={() => toggleTheme()}>
        Changer de mode : {theme === 'light' ? '🌞' : '🌙'}
      </NightModeButton>
    </FooterContainer>
  )
}
