export const addItemToList=(listItems,ItemToAdd)=>{
    const checkExistence = listItems.find(listItem =>
        listItem['item'].id === ItemToAdd['item'].id && listItem['doc'] === ItemToAdd['doc']   
    )
    if(checkExistence){
        return listItems
    }else{
        return [...listItems,ItemToAdd]
    }
}