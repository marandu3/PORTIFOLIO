import React from 'react'
import Educard from '../components/AboutCard'

function Education() {
  return (
    <div className='md:grid md:grid-cols-3'>
        <Educard level="PRIMARY EDUCATION" school="DIAGWA SEMINARY" location="SINGIDA" finished="2010 - 2016" grade="A"/>
        <Educard level="ORDINARY LEVEL" school="DUNG'UNYI SEMINARY" location="SINGIDA" finished="2017 - 2020" grade="DIV: 1 P: 7"/>
        <Educard level="ADVANCED LEVEL" school="MARIAN BOYS HIGH SCHOOL" location="BAGAMOYO" finished="2021 - 2023" grade="DIV: 1 P: 3"/>
        <Educard level="UNDERGRADUATE EDUCATION" school="UNIVERSITY OF DAR ES SALAAM" location="DAR ES SALAAM" course="COURSE: COMPUTER ENGINEERING AND IT" finished="2023 ->"/>
    </div>
    
  )
}

export default Education