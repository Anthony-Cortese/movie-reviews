import Button from './Button'
import { CgMathPlus, CgArrowLeft } from 'react-icons/cg'
import s from './Header.module.css'
import { APP_URLS } from '../../utils/constants'
import { useHistory, useLocation } from 'react-router'



export default function Header() {
    const { pathname } = useLocation()
    const { push } = useHistory()

    const isHome: boolean = pathname === APP_URLS.HOME

    const handleNavigation = (): void =>
        !isHome ? push(APP_URLS.HOME) : push(APP_URLS.ADD_NEW_REVIEW)

    return(
    <header className={s.wrapper}>
            <img
            className={s.movieimg} 
            src='https://i.postimg.cc/tJk5BJnj/Winter-Movie-Review.png' 
            alt='Winter-Movie-Review'
            />
            <Button onClick={handleNavigation}>
                {!isHome ? (
                    <>
                        Return
                        <CgArrowLeft size={22} />
                    </>
                ) : (
                    <>
                        Add review
                        <CgMathPlus size={22} />
                    </>
                )}
            </Button>
            
    </header>

    )}