import React from 'react'
import {DetailWarrper} from './navbar.component'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {withRouter} from 'react-router-dom'

const Book= ({history})=>{
    return (
        <Container>
            <Link to='/book/mybooks'>
            <DetailWarrper onClick={()=>history.replace(`/book/mybooks`)}>
                <Span>My Books</Span>
            </DetailWarrper>
            </Link>


            <Link to='/book/mybooks'>
            <DetailWarrper onClick={()=>history.replace(`/book/shopping`)}>
                <Span>Shopping</Span>
            </DetailWarrper>
            </Link>


            <Link to='/book/audibook'>
            <DetailWarrper className="bonus-detail" onClick={()=>history.replace(`/book/audiobook`)}>
                <Span>Audiobook</Span>
            </DetailWarrper>
            </Link>

        </Container>
    )
}

const Span = styled(Link)`
   text-decoration: none;
   color:#979797;
   font-size: 14px;
`

const Container = styled.div`

`


export default withRouter(Book);
