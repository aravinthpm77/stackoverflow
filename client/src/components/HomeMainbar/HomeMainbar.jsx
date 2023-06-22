import React from 'react'
import {useLocation,useNavigate} from 'react-router-dom'
import './HomeMainbar.css'
import QuestionList from './QuestionList'
 

const HomeMainbar = () => {
    const navigate= useNavigate()
    const user= 1;
    const Checknull = () => {
        if (user===null){
            alert("Login or SignUp to Ask a Question")
            navigate('/Auth') 
        }else{
            navigate('/AskQuestions')
        }
    }
    
    
    var questionsList=[{
        id:1,
        votes:3,
        noOfAnswers:2,
        questionTitle:"What is a function?",
        questionBody:"It meant to be",
        questionTags:["java","node.js","react.js","mongodb"],
        userPosted:"Aravinth",
        askedOn:"June1"
    },{
        id:2,
        votes:4,
        noOfAnswers:0,
        questionTitle:"What is a function of HTML?",
        questionBody:"It meant to be",
        questionTags:["java","node.js","react.js","mongodb"],
        userPosted:"Aravinth",
        askedOn:"June1"
    },{
        id:3,
        votes:21,
        noOfAnswers:6,
        questionTitle:"What is a function of CSS?",
        questionBody:"It meant to be",
        questionTags:["java","node.js","react.js","mongodb"],
        userPosted:"Aravinth",
        askedOn:"June1"
    }]
    

    const location = useLocation()

    return (
        <div className='main-bar'>
            <div className='main-bar-header'>
                {
                    location.pathname ==='/' ?<h1>Top Questions</h1> : <h1>All Questions</h1>
                     
                }
                <button onClick={Checknull} className='ask-btn'>Ask Questions</button>
            </div>
            <div>
                {
                    questionsList === null ?
                    <h1>Loading...</h1> :
                    <>
                        <p>{ questionsList.length  } Questions</p>
         
                        <QuestionList questionsList={questionsList}/>
                    </>
                }
            </div>

        </div>
    )
}

export default HomeMainbar