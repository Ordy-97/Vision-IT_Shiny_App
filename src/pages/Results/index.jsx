import React, { useContext } from 'react'
import { SurveyContext } from '../../utils/context'
import { useFetch, useTheme } from '../../utils/hooks'
import { StyledLink, Loader } from '../../utils/style/Atoms'
import colors from '../../utils/style/colors'

export function formatQueryParams(answers) {
  const answerNumbers = Object.keys(answers)

  return answerNumbers.reduce((previousParams, answerNumber, index) => {
    const isFirstAnswer = index === 0
    const separator = isFirstAnswer ? '' : '&'
    return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`
  }, '')
}

export function formatJobList(title, listLength, index) {
  if (index === listLength - 1) {
    return title
  }
  return `${title},`
}

function Results() {
  const { theme } = useTheme()
  const { answers } = useContext(SurveyContext)
  const queryParams = formatQueryParams(answers)
  const { data, error, isLoading } = useFetch(`https://api-vision-vercel.vercel.app/results?${queryParams}`)

  if (error) {
    return <div className="text-center mt-5">Il y a un problème !!!</div>
  }

  const resultsData = data?.resultsData

  return isLoading ? (
    <div className="d-flex justify-content-center mt-5">
      <Loader />
    </div>
  ) : (
    <div
      className={`container py-5 ${
        theme === 'light' ? `${colors.backgroundLight}` : `${colors.backgroundDark}`
      }`}
    >
      <div className="text-center mb-5">
        <h2 className={`fw-bold ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
          Les compétences dont vous avez besoin :
        </h2>
        {resultsData &&
          resultsData.map((result, index) => (
            <span
              key={`result-title-${index}-${result.title}`}
              className={`fw-bold ${
                theme === 'dark' ? 'text-primary' : 'text-success'
              }`}
            >
              {formatJobList(result.title, resultsData.length, index)}
            </span>
          ))}
      </div>

      <div className="text-center mb-5">
        <StyledLink
          $isFullLink
          className={`btn btn-lg ${
            theme === 'dark' ? 'btn-primary' : 'btn-outline-primary'
          }`}
          to="/freelances"
        >
          Découvrez nos profils
        </StyledLink>
      </div>

      <div className="row">
        {resultsData &&
          resultsData.map((result, index) => (
            <div className="col-md-6 mb-4" key={`result-detail-${index}-${result.title}`}>
              <h5
                className={`fw-bold ${
                  theme === 'dark' ? 'text-primary' : 'text-success'
                }`}
              >
                {result.title}
              </h5>
              <p
                className={`${
                  theme === 'dark' ? 'text-white' : 'text-secondary'
                }`}
              >
                {result.description}
              </p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Results
