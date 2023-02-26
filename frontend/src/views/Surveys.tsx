import React from 'react'
import PageComponent from '../components/PageComponent'
import SurveyListItem from '../components/SurveyListItem'
import { useStateContext } from '../contexts/ContextProvider'

const Surveys = () => {
  const { surveys } = useStateContext()
  const onDeleteClick = () => {
    console.log("Delete survey")
  }

  return (
    <PageComponent title="Surveys" >
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3'>
        {surveys.map((survey, i) => (
          <SurveyListItem key={i} survey={survey} onDeleteClick={onDeleteClick} />
        ))}
      </div>
    </PageComponent>
  )
}

export default Surveys