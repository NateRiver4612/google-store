import React from 'react'
import {DetailWarrper} from './navbar.component'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {withRouter, useLocation} from 'react-router-dom'

const Application=({history})=>{
    return (
        <Container>
            <Link to='/application/myapps'>
            <DetailWarrper onClick={()=>history.replace(`/application/myapps`)}>
                <Span>My Apps</Span>
            </DetailWarrper>
            </Link>


            <Link to='/application/shopping'>
            <DetailWarrper onClick={()=>history.replace(`/application/shopping`)}>
                <Span>Shopping</Span>
            </DetailWarrper>
            </Link>

            <Link to='/application/game'>
            <DetailWarrper className="bonus-detail" onClick={()=>history.replace(`/application/game`)}>
                <Span>Game</Span>
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


export default withRouter(Application);
