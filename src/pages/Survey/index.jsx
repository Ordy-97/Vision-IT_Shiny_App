import { useParams, Link } from 'react-router-dom'
import { useContext } from 'react'
import { Loader } from '../../utils/style/Atoms'
import { SurveyContext } from '../../utils/context'
import { useFetch } from '../../utils/hooks'
import { useTheme } from '../../utils/hooks'
import colors from '../../utils/style/colors'

function Survey() {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextQuestionNumber = questionNumberInt + 1
  const { theme } = useTheme()

  const { data, isLoading, error } = useFetch(`https://api-vision-vercel.vercel.app/survey`)
  const { surveyData } = data

  const textStyle = {
    color: theme === 'light' ? `${colors.primary}` : `${colors.backgroundLight}`,
  }

  // const [surveyData, setSurveyData] = useState({})
  // const [isDataLoading, setDataLoading] = useState(false)

  const { answers, saveAnswers } = useContext(SurveyContext)

  function saveReply(answer) {
    saveAnswers({ [questionNumber]: answer })
  }

  // useEffect(() => {
  //   setDataLoading(true)
  //   fetch(`http://localhost:8000/survey`)
  //        .then((response) => response.json()
  //        .then(({ surveyData }) => {
  //           setSurveyData(surveyData)
  //           setDataLoading(false)
  //         })
  //        .catch((error) => console.log(error))
  //     )
  // }, [])

  if (error) {
    return <div className="text-center mt-5">Il y a un problème !!!</div>
  }

  return (
    <div
      className={`container-fluid py-5 d-flex flex-column align-items-center ${
        theme === 'light' ? `${colors.backgroundLight}` : `${colors.backgroundDark}`
      }`}
    >
      <h2
        className={`text-center text-decoration-underline ${
          theme === 'dark' ? 'text-secondary' : 'text-primary'
        }`}
      >
        Question {questionNumber}
      </h2>

      {isLoading ? (
        <div className="d-flex justify-content-center my-5">
          <Loader />
        </div>
      ) : (
        <p className="text-center mt-4" style={textStyle}>
          {surveyData && surveyData[questionNumber]}
        </p>
      )}

      <div className="d-flex justify-content-center mt-4 gap-3">
        <button
          className={`btn btn-lg ${
            answers[questionNumber] === true ? 'btn-primary' : 'btn-outline-primary'
          }`}
          onClick={() => saveReply(true)}
        >
          Oui
        </button>
        <button
          className={`btn btn-lg ${
            answers[questionNumber] === false ? 'btn-primary' : 'btn-outline-primary'
          }`}
          onClick={() => saveReply(false)}
        >
          Non
        </button>
      </div>

      <div className="d-flex justify-content-between mt-5 w-50 gap-4">
        <Link className="btn btn-outline-secondary" to={`/survey/${prevQuestionNumber}`}>
          Précédent
        </Link>
        {surveyData && surveyData[questionNumberInt + 1] ? (
          <Link className="btn btn-outline-secondary" to={`/survey/${nextQuestionNumber}`}>
            Suivant
          </Link>
        ) : (
          <Link className="btn btn-primary" to="/results">
            Résultats
          </Link>
        )}
      </div>
    </div>
  )
}

export default Survey
