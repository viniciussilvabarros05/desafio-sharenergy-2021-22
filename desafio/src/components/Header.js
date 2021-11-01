import { useDispatch } from "react-redux"
import { menuActived } from "../actions/actionList"
export function Header() {

    const dispatch = useDispatch()

    return (
        <>
            <header>
                <div onClick = {()=>{dispatch(menuActived())}} className="menu-hamburguer">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </header>
        </>
    )
}