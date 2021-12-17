import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/styles/color'
import { Loader } from '../../utils/styles/Atoms'
import { useFetch, useTheme } from '../../utils/Hooks'

import Card from '../../Components/Card'

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
`

const PageTitle = styled.h1`
  font-size: 30px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  align-items: center;
  padding-bottom: 30px;
`

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export default function Freelances() {
  const { theme } = useTheme()
  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/freelances`
  )

  const freelancersList = data?.freelancersList

  if (error) {
    return <span>Oups il y a eu un probleme</span>
  }

  return (
    <div>
      <PageTitle theme={theme}>Trouver votre prestataire</PageTitle>
      <PageSubtitle theme={theme}>
        Chez Skiny nous réunissons les meilleurs profils pour vous
      </PageSubtitle>
      {isLoading ? (
        <LoaderWrapper>
          <Loader theme={theme} data-testid="loader" />
        </LoaderWrapper>
      ) : (
        <CardsContainer>
          {freelancersList.map((profile, index) => (
            <Link key={`freelance-${profile.id}`} to={`/profile/${profile.id}`}>
              <Card
                key={`${profile.name}-${index}`}
                label={profile.name}
                title={profile.job}
                picture={profile.picture}
              />
            </Link>
          ))}
        </CardsContainer>
      )}
    </div>
  )
}
