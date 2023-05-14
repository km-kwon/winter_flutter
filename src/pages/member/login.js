import s from "../../styles/Wikidoc.module.css";
import MainLayout from "../../components/mainLayout";
import { useState } from "react";
function Login() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePw = (e) => {
    setPw(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const reqData = {
      userEmail: email,
      userPassword: pw,
    };
    fetch("http://localhost:3001/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqData),
    })
      .then((response) => {
        if (response.redirected) {
          window.location.href = "http://localhost:3000/"; //로그인 성공시 기본 페이지로 리다이렉션
          console.log(response.headers.get("Location"));
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <MainLayout>
      <div>
        <div className={`{${s.header} ${s.loginTitle}`}>
          <div className={`${s.headerContainer}  `}>
            <h1 className={`${s.title}`}>로그인</h1>
          </div>
        </div>

        <form className={s.loginBody} onSubmit={handleSubmit}>
          <div className={s.loginBodyContainer}>
            <div className={s.loginInput}>
              <label htmlFor={s.username}>Username</label>
              <input
                type="text"
                onChange={handleEmail}
                className={s.username}
              ></input>
              <label htmlFor={s.password}>Password</label>
              <input
                type="password"
                onChange={handlePw}
                className={s.password}
              ></input>
            </div>

            <div className={s.loginSecondLine}>
              <div>
                <input type="checkbox" className={s.checkbox}></input>
                <label htmlFor={s.checkbox}>자동 로그인</label>
              </div>
              <a href="/member/recover">[아이디/비밀번호 찾기]</a>
            </div>

            <div className={s.loginBtn}>
              <a href="/member/signUp">계정 만들기</a>
              <button className={s.loginBtn} type="submit">
                로그인
              </button>
            </div>
          </div>
        </form>
      </div>
    </MainLayout>
  );
}

export default Login;
