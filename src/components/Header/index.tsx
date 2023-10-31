import Logo from '../../assets/logo.svg'
import { HeaderBox, HeaderContainer } from './styles'

export default function Header() {
    return (
        <HeaderContainer>
            <HeaderBox>
                <img src={Logo} alt="" />
            </HeaderBox>
        </HeaderContainer>
        
    )
}