import React, {useState} from 'react'

export default function B9() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [submitted, setSubmitted] = useState<boolean>(false);
  
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault(); 
      setSubmitted(true);
    };
  
    return (
        <>
        <h2>Form Đăng Nhập</h2>
        <form onSubmit={handleSubmit}>
            <div>
            <label>Email:</label>
            <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                required
            />
            </div>
            <br />
            <div>
            <label>Mật khẩu:</label>
            <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                required
            />
            </div>
            <br />
            <button type="submit">Submit</button>
        </form>
        {submitted && (
            <div>
            <h3>Email: {email}</h3>
            <h3>Mật khẩu: {password}</h3>
            </div>
        )}
        </>
    )
}
