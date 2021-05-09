import axios from "axios";
import { useEffect, useState } from "react";

export default function Questions() {
  const [questions, setQuestions] = useState([]);
  const [matchAnswer, setMatchAnswer] = useState([])
  const [step, setStep] = useState(0)

  const startGameTwo = async () => {
    const res = await axios.post('http://frontendbancolombia.iatech.com.co:3004/api/v1.0.0/game-two/start', {
      userId: "56231"
    })

    setMatchAnswer(res?.data?.data.match)
  }

  const getQuestions = () => {
    fetch(
      "http://frontendbancolombia.iatech.com.co:3004/api/v1.0.0/game-two/category/608ac07e24fc4a4d00bf14f4"
    )
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data?.data?.questions);
      });
  };

  const handlecCheckAnswer = async (e, userId, matchId, questionId, answerId) => {
    const res = await axios.post(
      "http://frontendbancolombia.iatech.com.co:3004/api/v1.0.0/game-two/check-answer",
      {
        "userId": userId,
        "matchId": matchId,
        "questionId": questionId,
        "answerId": answerId
      }
    )
    console.log(res.data.data)

    questions[step].answers.map(answer => {
      if (answer._id === answerId) {
        if (res.data.data.matched) {
          //si la respuesta es correcta cambiamos el color 'success'
          e.target.style.background = 'green'
        } else {
          e.target.style.background = 'red'
        }
      }
    })

    setTimeout(() => {
      setStep(step + 1)
    }, [3000])
  }

  useEffect(() => {
    startGameTwo()
    getQuestions();
  }, []);

  return (
    <>
      {questions && (
        <>
          <button>{questions[step]?.question}</button>
          {questions[step]?.answers?.map(answer => (
            <p onClick={(e) => handlecCheckAnswer(e, '56231', matchAnswer._id, questions[step]._id, answer._id)}> {answer.answer}</p>
          ))}
        </>
      )}
    </>
  );
}
