import React from 'react'
import RelatedItem from '../../component/related-Item/Related-Item.component'
// import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { selectItemsByOption } from '../../redux/store/store.selector'

const RelatedCollection=({id,type,items,doc})=>{
        const randomList = []
        const typeArr = type.split(',')
        const relate = []

        console.log(items)
        //function to return in the index of given value from the given list
        const index=(item,arr)=>{
            var one = 0
            arr.map((key,index)=>{
                if(parseInt(key) === parseInt(item)){
                    one = index
                }
            })
            return one
        }

        //create relate list with every related item include the current type
        Object.keys(items).map((key,value)=>{
            if(typeArr.includes(key)){
                const list = items[key]
                Object.keys(list).map((key)=>{
                    relate.push(list[key])
                })
            }
        })    

        //erase every duplicate item
        for(var i = 0;i < relate.length;i++){
            for(var j = i+1;j < relate.length - 1 ; j++){
                if(relate[i]['id'] === relate[j]['id']){
                    relate.splice(j,1)
                }
            }
        }

        console.log(relate)

        //select relate more specific
        


        //the id of items except the chosen id
        const relateId = []
        relate.map(item=>{
            if(item['id'] !== id){
                relateId.push(item['id'])
            }
        })

        //randomize the id list
        var ranlist = []
        while(relateId.length>0){
            var random = relateId[Math.floor(Math.random() * relateId.length)];
            ranlist.push(random)
            relateId.splice(index(random,relateId),1)
        }

        //create list of items followed id list order
        const itemList = []
        ranlist.map((key)=>{
            for(var i=0;i<relate.length;i++){
                if(relate[i]['id']===key){
                    itemList.push(relate[i])
                    break
                }
            }
        })

    return (
        <div>
        {
            doc === 'movies'
            ?
                itemList.map(key=>{
                    const {title,price,id,rate,description,type,imgUrl} = key
                    // const oneType = type.includes(',') ? type.substr(0,type.indexOf(',')):type  
                    return <RelatedItem title={title} id={id} doc={doc} key={id} imgUrl={imgUrl} price={price} type={type}
                                            rate={rate} description={description}></RelatedItem>
                }) 
            :
            doc === 'books'
            ?
                itemList.map(key=>{
                    const {title,price,id,author,rate,description,imgUrl} = key
                    return <RelatedItem title={title} doc={doc} id={id} key={id} imgUrl={imgUrl} price={price} 
                            author={author} rate={rate} description={description}></RelatedItem>
            }) 
            :
                []
        }
        </div>
    )
}

const mapStateToProps = (state,ownProps)=>({
    items:selectItemsByOption(ownProps.doc)(state)
})
export default connect(mapStateToProps)(RelatedCollection)
