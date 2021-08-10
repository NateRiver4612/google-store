import { Link } from 'react-router-dom';
import {selectItemDetail} from '../../redux/store/store.selector.js'
import 'react-modal-video/scss/modal-video.scss';
import { connect } from 'react-redux';
import ReactTextCollapse from '../react-text-collapse/ReactTextCollapse'
import {BuyButton,Wrap,Container,Span,ButtonContainer,AddCartButton,AddCartIcon} from './DetailBook.styles'
import { addItem } from '../../redux/wish-list/wishList.action.js';


const  DetailBook= ({id,chosenType,addItem,doc,ownProps,item})=>{
    const {title, imgUrl,price,type,rate,description,author,published,authorImg,publisher,page,language} = item

    //get date format
    // const typesArray = type.split(',')
    // const timeStamp = published.date
    // const dateList = timeStamp.split(' ')
    // const Date = []
    // Date[0]=dateList[2]
    // Date[1]=dateList[1]
    // Date[2]=dateList[3]
    // const date = Date.join(' ')
    const readMore = Math.floor(description.length / 3.3)    
    const typeList = type.split(',')
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
                <Span className='date-author'>
                    <span style={{color:'#0396de',fontWeight:'500'}}classname="author">
                        {author}
                    </span>
                    <span>
                        
                    </span>
                </Span>
                <Span className="type-audio">
                    <Span className='type'>
                        {publisher}
                    </Span>
                    <Span className='audio'>
                        Penguin Random House Audio
                    </Span>
                </Span>
                <Span className="reader-time">
                    <Span className='type'>
                        Reader: Nate River
                    </Span>
                    <Span className='audio'>
                        191 minutes
                    </Span>
                </Span>
                <ButtonContainer>
                    <AddCartButton onClick={()=>addItem({item,doc})}>
                        <AddCartIcon/>
                        Add to wish list
                    </AddCartButton>
                    <BuyButton>
                        Buy: {price},000 VND
                    </BuyButton>
                </ButtonContainer>
            </Wrap>
        </Wrap>
        <Wrap className='seperate-line'>
            <hr/>
        </Wrap>
        <Wrap className="detail-video">
            <Wrap className='detail-video-img'>
              <img src={authorImg}
                    alt=""
              />
               <span className='trailer'>{author}</span>
            </Wrap>
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
            <h2>ADDITIONAL INFORMATION</h2>  
            <Wrap className="perfomer-producer">
                <Wrap  className='performer'>
                    <h2>Publisher</h2>
                    <Wrap className="performer-list">
                        {publisher}
                    </Wrap>
                </Wrap>
                <Wrap className = 'producer'>
                    <h2>Page</h2>
                    <Wrap className="producer-list">
                      {page}
                    </Wrap>
                </Wrap>
            </Wrap>


            <Wrap className="director-writer">
                <Wrap  className='director'>
                    <h2>Category</h2>
                    <Wrap className="director-list">
                    {typeList.map((type,index)=>{
                        if(index == (typeList.length-1)){
                           return <Link to={`/books/category/${type}`}>
                                {type}
                            </Link> 
                        }else{
                           return <Link to={`/books/category/${type}`}>
                                    {type}
                                    <span style={{paddingRight:'5px'}}>,</span>
                                  </Link> 
                        }
                    })}
                    </Wrap>
                </Wrap>
                <Wrap className = 'writer'>
                    <h2>Language</h2>
                    <Wrap className="writer-list">
                        {language}
                    </Wrap>
                </Wrap>
            </Wrap>

            <Wrap className="director-writer">
                <Wrap  className='director'>
                    <h2>Most suitable</h2>
                    <Wrap className="director-list">
                       
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
    item:selectItemDetail('books',ownProps.chosenType,ownProps.id)(state)
})

const mapDispatchToProps = dispatch =>({
    addItem:(item)=>dispatch(addItem(item))
})

export default connect(mapStateToProps,mapDispatchToProps)(DetailBook);
