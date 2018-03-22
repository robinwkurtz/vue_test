import styled from 'vue-styled-components'
import colors from './colors'

export const Wrapper = styled.div`
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: ${colors.blue2C};
`

export const NavList = styled.ul`
    > li {
        display: inline-block;
        margin: 0 6px;
        > a {
            color: ${colors.white};
            font-weight: bold;
            text-decoration: none;
        }
    }
`

export const StyledHeader = styled.header`
    padding: 30px;

    background-color: ${colors.green4F};
    border-bottom: 3px solid ${colors.blue2C};

    text-align: right;
`

export const StyledBody = styled.div`
    position: relative;
    padding: 60px;
`
