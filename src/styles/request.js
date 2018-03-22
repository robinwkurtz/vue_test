import styled from 'vue-styled-components'
import colors from './colors'

export const List = styled.ul`
    margin: 0;
    padding: 0;

    list-style: none;
`

export const ListBody = styled.div`
    text-align: left;
`

export const ListItem = styled.li`
    margin-bottom: 30px;
    padding-left: 60px;
`

export const ListTitle = styled.h2`
    margin-bottom: 10px;

    font-size: 150%;
    font-weight: bold;
`

export const Number = styled.div`
    float: left;

    width: 30px;
    height: 30px;

    margin-right: 30px;
    margin-left: -60px;

    background-color: ${colors.green4F};
    border-radius: 50%;
    color: ${colors.white};

    font-weight: bold;

    text-align: center;
    line-height: 30px;
`
