import { useState } from "react";
import { LayoutComponents } from "../../components/LayoutComponents";
import gifImg from '../../assets/Sono.gif'
import { Link } from 'react-router-dom'

export const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [tel, setTel] = useState("")

    return (
        <LayoutComponents>
            <form className="login-form">
                <span className="login-form-title">Criar conta</span>
                <span className="login-form-title">
                    <img src={gifImg} alt="Sabres de luz" />
                </span>

                <div className='Wrap-input'>
                    <input className={name !== '' ? 'has-val input' : 'input'}
                        type="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                    <span className='focus-input' data-placeholder='Nome'></span>
                </div>

                <div className='Wrap-input'>
                    <input className={tel !== '' ? 'has-val input' : 'input'}
                        type="tel"
                        value={tel}
                        required
                        onChange={e => setTel(e.target.value)}
                    />
                    <span className='focus-input' data-placeholder='Celular'></span>
                </div>

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

                <Link className="container-login-form-btn" to='/Login'>
                    <button className="login-form-btn">Login</button>
                </Link>

                <div className="text-center">
                    <span className='txt1'>Já possui conta?</span>

                    <Link className='txt2' to='/login'>
                        Acessar com Email e Senha.
                    </Link>
                </div>

            </form>
        </LayoutComponents>
    )
}