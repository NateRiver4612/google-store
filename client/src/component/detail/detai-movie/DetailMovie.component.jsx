import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from "react-modal-video";
import {selectItemDetail} from '../../../redux/store/store.selector'
import 'react-modal-video/scss/modal-video.scss';
import { connect } from 'react-redux';
import ReactTextCollapse from '../../react-text-collapse/ReactTextCollapse'
import { Container,Wrap,Span,AddCartButton, AddCartIcon,ButtonContainer, WarningIcon } from './DetailMovie.styles.js';
import styled from 'styled-components'
import { addItem } from '../../../redux/wish-list/wishList.action.js';
import {selectPersonStart} from '../../../redux/person/person.action'
import StripeCheckoutButton from '../../stripe-button/stripe-button.component'

const  DetailMovie= ({id,chosenType,addItem,doc,selectPersonStart,ownProps,item})=>{
    const [isOpen, setstate] = useState(false)

    const {title,rate,price,type,imgUrl,videoImg,videoUrl,description,duration,year,warning,performer,producer,writer,director} = item
    const idArray = videoUrl.split('/')
    const videoId = idArray[idArray.length - 1];
    const typesArray = type.split(',')
    const performerList = performer.split(',')
    const producerList = producer.split(',')
    const writerList = writer.split(',')
    const directorList = director.split(',')  
    const readMore = Math.floor(description.length / 3.3)
    console.log(item)


    const TEXT_COLLAPSE_OPTIONS = {
        collapse: false,
        collapseText: 'READ MORE',
        expandText: 'READ LESS',
        minHeight: 80,
        maxHeight: readMore,
        textStyle: {
            fontSize:14,
            paddingLeft:'40%',
            color:'#898989',
            cursor:'pointer',
            fontWeight:'500',
            opacity:'0.8',
        }
      }

    return (
        <Container>
        <Wrap>
            <Wrap className="detail-img">
                <img src={imgUrl}/>
            </Wrap>

            <Wrap className="detail-info">
                <Span className='title'>{title}</Span>
                <Span className='date-time'>
                    <span>
                        {year}
                    </span>
                    <span>
                        {duration} minutes
                    </span>
                </Span>
                <Span className='type'>
                    {
                        typesArray.map((type)=>(
                            <Link to={`/movies/category/${type}`}>
                                {type}
                            </Link> 
                        ))
                    }

                </Span>
                <Span className="warning">
                    <WarningIcon/>
                        {warning}
                </Span>
                <ButtonContainer>
                    <AddCartButton onClick={()=> addItem({item,doc})}>
                        <AddCartIcon/>
                        Add to wish list
                    </AddCartButton>
                    <StripeCheckoutButton price={price} content={`Buy: ${price},000 VND`}>
                    </StripeCheckoutButton>
                </ButtonContainer>

            </Wrap>
        </Wrap>
        <Wrap className='seperate-line'>
            <hr/>
        </Wrap>
        <Wrap className="detail-video">
            <Wrap className='detail-video-img'>
              <img src={videoImg}
                    alt=""
                 onClick={()=>setstate(true)}
              />
               <span className='trailer'>TRAILER</span>
            </Wrap>
            <ModalVideo
                isOpen={isOpen}
                onClose={()=>setstate(false)}
                channel='youtube'
                autoplay = 'autoplay'
                videoId={videoId}
            >
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
            </ModalVideo>
        </Wrap>
        <Wrap className='detail-description'>
        {
            readMore > 100 
            ?
                <ReactTextCollapse options={TEXT_COLLAPSE_OPTIONS}>
                    <span>
                    {description}          
                    </span>
                </ReactTextCollapse>
            :
                <span>
                    {description}          
                </span>
        }
        </Wrap>
        <Wrap className='seperate-line'>
            <hr/>
        </Wrap>
        
        <Wrap className='detail-production'> 
            <h2>ACTOR  AND MOVIE TITLE</h2>  
            <Wrap className="perfomer-producer">
                <Wrap  className='performer'>
                    <h2>Perfomer</h2>
                    <Wrap className="performer-list">
                        {performerList.map((actor,index)=>{
                            const name = actor.trim()
                            const job = 'actors'
                            if(index == (performerList.length-1)){
                               return <Link to={`/movies/participant/${actor}`} onClick={()=>{selectPersonStart({name,job})}}>{actor}</Link>
                            }else{
                               return <Link to={`/movies/participant/${actor}`} onClick={()=>{selectPersonStart({name,job})}}>{actor}<span style={{paddingRight:'5px'}}>,</span></Link>
                            }
                        })}
                    </Wrap>
                </Wrap>
                <Wrap className = 'producer'>
                    <h2>Producer</h2>
                    <Wrap className="producer-list">
                        {
                            producerList.map((producer,index)=>{
                                if(index == (producerList.length-1) ){
                                   return <span>{producer}</span>
                                }else{
                                   return <span>{producer}<span style={{paddingRight:'5px'}}>,</span></span>
                                }
                            })
                        }
                    </Wrap>
                </Wrap>
            </Wrap>


            <Wrap className="director-writer">
                <Wrap  className='director'>
                    <h2>Director</h2>
                    <Wrap className="director-list">
                        {directorList.map((director,index)=>{
                            if(index == (directorList.length-1)){
                            return <span>{director}</span>
                            }else{
                            return <span>{director}<span style={{paddingRight:'5px'}}>,</span></span>
                            }
                        })}
                    </Wrap>
                </Wrap>
                <Wrap className = 'writer'>
                    <h2>Writer</h2>
                    <Wrap className="writer-list">
                        {writerList.map((writer,index)=>{
                            if(index == (writerList.length-1)){
                            return <span>{writer}</span>
                            }else{
                            return <span>{writer}<span style={{paddingRight:'5px'}}>,</span></span>
                            }
                        })}
                    </Wrap>
                </Wrap>
            </Wrap>
        </Wrap>
        <Wrap className='seperate-line'>
        <hr/>
    </Wrap>
        </Container>    
    )
}


const mapStateToProps = (state,ownProps)=>({
    ownProps:ownProps,
    item:selectItemDetail('movies',ownProps.chosenType,ownProps.id)(state)
})
const mapDispatchToProps = dispatch =>({
    addItem:(item)=>dispatch(addItem(item)),
    selectPersonStart:(person)=>dispatch(selectPersonStart(person))
})

export default connect(mapStateToProps,mapDispatchToProps)(DetailMovie);
