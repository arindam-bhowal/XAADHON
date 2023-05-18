import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import './semester.scss'

const Semester = () => {
    const {branch, year} = useParams()
    const navigate = useNavigate()
    const location = useLocation()

  return (
    <div>
        <Navbar />
        <div className="semester">
            <div className="container">
                <div onClick={() => {navigate(`${location.pathname}/odd`)}} className="sems year-num-img">
                    Odd
                </div>
                <div onClick={() => {navigate(`${location.pathname}/even`)}} className="sems year-num-img">
                    Even
                </div>
            </div>
        </div>
    </div>
  )
}

export default Semester