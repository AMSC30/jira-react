import styled from '@emotion/styled'
import { ReactComponent as SoftwareLogo } from 'assets/software-logo.svg'
import Row from '../../components/row'
import HeaderUser from './header-user'

export default () => {
    return (
        <>
            <PageHeader>
                <Row gap={2}>
                    <SoftwareLogo width={'18rem'} color={'rgb(38, 132, 255)'}></SoftwareLogo>
                    <div>项目</div>
                    <div>成员</div>
                </Row>
                <HeaderUser></HeaderUser>
            </PageHeader>
            <PageMain></PageMain>
        </>
    )
}

const PageHeader = styled(Row)`
    padding: 0 2rem;
    height: 6rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0 1px 0 1px;
`
const PageMain = styled.main`
    height: calc(100vh - 6rem);
`
