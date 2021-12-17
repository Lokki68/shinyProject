import React, { useContext } from 'react'
import styled from 'styled-components'

import { useFetch } from '../../utils/Hooks'

import colors from '../../utils/styles/color'
import { StyledLink, Loader } from '../../utils/styles/Atoms'
import { SurveyContext } from '../../utils/context'
import { ThemeContext } from '../../utils/context'
import EmptyList from '../../Components/EmptyList'

// Styled
const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 90px;
  padding: 30px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`

const ResultTitle = styled.h2`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  font-weight: bold;
  font-size: 28px;
  max-width: 60%;
  text-align: center;
  & > span {
    padding-left: 10px;
  }
`

const DescriptionWrapper = styled.div`
  padding: 60px;
`

const JobTitle = styled.span`
  color: ${({ theme }) =>
    theme === 'light' ? colors.primary : colors.backgroundLight};
`

const JobDescription = styled.div`
  font-size: 18px;
  & > p { 
    color: ${({ theme }) => (theme === 'light' ? colors.secondary : '#FFFFFF')}
    margin-block-start: 5px;
  }
  &> span { 
    font-size: 20px;
  }
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export function formatQueryParams(answers) {
  const answerNumber = Object.keys(answers)

  return answerNumber.reduce((previousParams, answerNumber, index) => {
    const isFirstParam = index === 0

    const separator = isFirstParam ? '' : '&'
    return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`
  }, '')
}

export function formatJobList(title, listLength, index) {
  if (index === listLength - 1) {
    return title
  }
  return `${title},`
}

export default function Results() {
  const { theme } = useContext(ThemeContext)
  const { answers } = useContext(SurveyContext)
  const fetchParams = formatQueryParams(answers)

  const { data, isLoading, error } = useFetch(`
    http://localhost:8000/results?${fetchParams}
  `)

  if (error) {
    return <span>Il y a eu un problème</span>
  }

  const resultsData = data?.resultsData

  if (resultsData?.length < 1) {
    return <EmptyList theme={theme} />
  }

  return isLoading ? (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  ) : (
    <ResultsContainer theme={theme}>
      <ResultTitle theme={theme}>
        Les compétences dont vous avez besoin :
        {resultsData &&
          resultsData.map((result, index) => (
            <JobTitle
              key={`result-title-${index}- ${result.title}`}
              theme={theme}
            >
              {formatJobList(result.title, resultsData.length, index)}
            </JobTitle>
          ))}
      </ResultTitle>
      <StyledLink $isFullLink to="/freelances">
        Découvrez nos profils
      </StyledLink>
      <DescriptionWrapper>
        {resultsData &&
          resultsData.map((result, index) => (
            <JobDescription
              theme={theme}
              key={`result-detail-${index}-${result.title}`}
            >
              <JobTitle theme={theme}>{result.title}</JobTitle>
            </JobDescription>
          ))}
      </DescriptionWrapper>
    </ResultsContainer>
  )
}
