import {cssToken} from "../styles/css-token";

export const Button = ()  => {
    return <button className='text-red-500' style={{backgroundColor: cssToken.color.primary}}>Click Me</button>
}
