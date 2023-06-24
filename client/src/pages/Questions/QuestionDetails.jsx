
import React from 'react'
import { useParams } from 'react-router-dom'
import upvote from '../../assets/sort-up.svg'
import downvote from '../../assets/sort-down.svg'
import {Link} from 'react-router-dom'
import Avatar from '../../components/Avatar/Avatar'
import './Questions.css'
import DisplayAnswers from './DisplayAnswers'
const QuestionDetails = () => {

    const{ id } = useParams()
    console.log(id)

    var questionsList=[{
        _id:'1',
        upVotes:3,
        downVotes:2,
        noOfAnswers:2,
        questionTitle:"What is a function?",
        questionBody:"It meant to be",
        questionTags:["java","node.js","react.js","mongodb"],
        userPosted:"Aravinth",
        userId:1,

        askedOn:"June1",
        answer:[{
            answerBody:"Answered Good",
            userAnswered:"Aravinth",
            answeredOn:"Jan2",
            userId:"2"
        }]
    },{
        _id:'2',
        upVotes:4,
        downVotes:2,
        noOfAnswers:0,
        questionTitle:"What is a function of HTML?",
        questionBody:"It meant to be",
        questionTags:["java","node.js","react.js","mongodb"],
        userPosted:"Aravinth",
        userId:1,

        askedOn:"June1",
        answer:[{
            answerBody:"Answered Well",
            userAnswered:"Aravinth",
            answeredOn:"Jan2",
            userId:"2"
        }]
    },{
        _id:'3',
        upVotes:21,
        downVotes:12,
        noOfAnswers:6,
        questionTitle:"What is a function of CSS?",
        questionBody:"It meant to be",
        questionTags:["java","node.js","react.js","mongodb"],
        userPosted:"Aravinth",
        userId:1,

        askedOn:"June1",
        answer:[{
            answerBody:"Answered HaveSome",
            userAnswered:"Aravinth",
            answeredOn:"Jan2",
            userId:"2"
        }]
    }]

    return (
        <div className='question-details-page'>
            {
                questionsList === null ?
                <h1>Loading...</h1> :
                <>
                    {
                        questionsList.filter(question=>question._id === id).map(question => (
                            <div key={question._id}>
                                {console.log(question)}
                                <section class="question-details-container">
                                    <h1>{question.questionTitle}</h1>
                                    <div className='question-details-container-2'>
                                        <div className='question-votes'>
                                            <img src={upvote}alt='upvote_img ' width='18px' className='vote-icon'/>
                                            <p>{question.upVotes-question.downVotes}</p>
                                            <img src={downvote} alt='downvote_img' width='18px'  className='vote-icon'/>
                                        </div>

                                        
                                        <div style={{width:"100%"}}>
                                            <p className='question-body'>{question.questionBody}</p>
                                            <div className="question-details-tags">
                                                {
                                                    question.questionTags.map((tag)=>(
                                                        <p key={tag}>{tag}</p>
                                                    ))
                                                }
                                            </div>
                                            <div className="question-actions-user">
                                                <div>
                                                    <button type='button'>Share</button>
                                                    <button type='button'>Delete</button>
                                                    <p>Asked On {question.askedOn}</p>
                                                </div>
                                                <div>
                                                    
                                                    <Link to={`/User/${question.userId}`} className='user-link' style={{color:"#0086d8"}}>
                                                    
                                                    
                                                    
                                                        <Avatar  >{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                
                                                        <div>
                                                            {question.userPosted}
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {
                                    question.noOfAnswers!==0 &&(
                                        <section>
                                            <h3>{question.noOfAnswers} Answers</h3>
                                            <DisplayAnswers key={question._id}question={question}/>
                                        </section>
                                    )
                                }
                                <section className='post-ans-container'>
                                    <h3>Your Answers</h3>
                                    <form>
                                        <textarea name="" id=""  cols="20" rows="5"> </textarea>
                                        <input type="submit" className='post-ans-btn' value='Post Your Answer'/> 
                                    </form>
                                    <p>
                                        Browse other Questions with tagged same as .
                                        {
                                            question.questionTags.map((tag) => (
                                                <Link to='/Tags' key={tag} className='ans-tags'>{tag}</Link>
                                            ))

                                        } or 
                                        <Link to="/AskQuestions" style={{textDecoration:'none',color:"#009dff"}}> Ask your own Question.</Link>
                                    </p>

                                </section>
                            </div>
                        ))
                    }
                </>
            }
            
            
            
        </div>
    )
}

export default QuestionDetails