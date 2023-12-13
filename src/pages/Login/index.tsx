import { Link } from 'react-router-dom'
import gifImg from '../../assets/Sabre.gif'
import '../../assets/global.css'


import { useState } from 'react'
import { LayoutComponents } from '../../components/LayoutComponents'


export const Login = () => {
    //Criando estado do input
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <LayoutComponents>
            <form className="login-form">
                <span className="login-form-title">Bem vindo!</span>
                <span className="login-form-title">
                    <img src={gifImg} alt="Sabres de luz" />
                </span>

                <div className='Wrap-input'>
                    <input className={email !== '' ? 'has-val input' : 'input'}
                        type='email'
                        value={email}
                        required
                        onChange={e => setEmail(e.target.value)}
                    />
                    <span className='focus-input' data-placeholder='Email'></span>
                </div>

                <div className='Wrap-input'>
                    <input className={password !== '' ? 'has-val input' : 'input'}
                        type='password'
                        value={password}
                        required
                        onChange={e => setPassword(e.target.value)}
                    />
                    <span className='focus-input' data-placeholder='Password'></span>
                </div>

                <Link className="container-login-form-btn" to='/'>
                    <button className="login-form-btn">Login</button>
                </Link>

                <div className="text-center">
                    <span className='txt1'>Não possui conta?</span>

                    <Link className='txt2' to='/Register'>
                        Criar conta.
                    </Link>
                </div>

            </form>
        </LayoutComponents>
    )
}