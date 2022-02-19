import Button from './Button'
import { CgMathPlus } from 'react-icons/cg'
import s from './Header.module.css'


export default function Header() {
    return(
    <header className={s.wrapper}>
            <h1>movie review</h1>{' '}
            <Button>
            <>
                        Add review
                        <CgMathPlus size={22} />
                    </>
                </Button>
    </header>

    )}