import styled from '@emotion/styled'

export default styled.div<{
    gap?: number
    content?: string
    align?: string
}>`
    display: flex;
    justify-content: ${props => (props.content ? props.content : 'space-between')};
    align-items: ${props => (props.align ? props.align : 'center')};
    > * {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
        margin-right: ${props => (props.gap === undefined ? props.gap + 'rem' : '2rem')} !important;
    }
`
