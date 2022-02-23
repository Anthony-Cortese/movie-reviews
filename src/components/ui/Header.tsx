import Button from './Button'
import { CgMathPlus } from 'react-icons/cg'
import s from './Header.module.css'


export default function Header() {
    return(
    <header className={s.wrapper}>
            <img
            className={s.movieimg} 
            src='https://i.postimg.cc/tJk5BJnj/Winter-Movie-Review.png' 
            alt='Winter-Movie-Review'
            />
            <Button>
            <>
                        Add review
                        <CgMathPlus size={22} />
                    </>
                </Button>
    </header>

    )}