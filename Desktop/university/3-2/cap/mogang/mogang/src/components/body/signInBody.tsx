import Body_main from "./styled/signInBodyStyle";
import LectureList from "./lecture/lectureCard";
import { useState } from "react";
import axios from "axios";

function MainBody() {
  const [form, setForm] = useState(["", "", "", "", ""]);
  const [isCheck, setIsCheck] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    let copy = [...form];
    copy[index] = event.target.value;
    setForm(copy);
  };
  const onsubmit = async () => {
    if (isCheck) {
      const options = await axios({
        method: "POST",
        url: "http://15.164.0.21:4000/graphql",
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "insomnia/8.4.2",
        },
        data: '{"query":"mutation CreateUserOutputDto {createUser(createUserInput: {email:"shk9946",password:"admin", checkPassword:"admin",firstName:"hi", lastName:"ho"}) {\tok \tmessage\tuser{\t\temail\t\tid\t}},"operationName":"CreateUserOutputDto"}',
      });

      console.log(options);
      /*let token_data = await axios({
        url: "http://15.164.0.21:4000/users",
        method: "POST",
        headers: {
          "Content-Type": "application/json", // 콘텐츠 타입 설정
        },
        data: {
          email: "lanos5019@ajou.ac.kr",
          checkPassword: "admin",
          password: "admin",
          firstName: "seoho",
          lastName: "kim",
        },
      });
      console.log(token_data);*/
    } else {
      alert("동의항목에 체크해주세요!");
    }
  };

  /*
  const test2 = async () => {
    let token_data = await axios({
      url: "http://15.164.0.21:4000/auth/login",
      method: "POST",
      headers: {
        "Content-Type": "application/json", // 콘텐츠 타입 설정
      },
      data: {
        email: "lanos5019@ajou.ac.kr",
        password: "admin",
      },
    });
    console.log(token_data);
  };
*/
  return (
    <Body_main>
      <ul>
        <li className="title">회원가입</li>
        <li>
          <input
            onChange={(e) => handleChange(e, 0)}
            type="text"
            placeholder="이메일을 입력해주세요"
          />
        </li>
        <li>
          <input
            onChange={(e) => handleChange(e, 1)}
            type="password"
            placeholder="비밀번호"
          />
        </li>
        <li>
          <input
            onChange={(e) => handleChange(e, 2)}
            type="password"
            placeholder="비밀번호 확인"
          />
        </li>

        <div className="name">
          <input
            style={{
              width: "20%",
              margin: "0 2rem 0 0 ",
            }}
            onChange={(e) => handleChange(e, 3)}
            type="text"
            placeholder="성"
          />
          <input
            onChange={(e) => handleChange(e, 4)}
            type="text"
            placeholder="이름"
          />
        </div>

        <li className="agree">
          <span>이메일 개인정보 수집 동의</span>
          <input
            type="checkbox"
            onChange={(e) => {
              console.log(isCheck);
              setIsCheck(!isCheck);
            }}
          />
        </li>

        <button onClick={onsubmit}>가입하기</button>
      </ul>
    </Body_main>
  );
}
export default MainBody;

/*{data: {…}, status: 201, statusText: 'Created', headers: AxiosHeaders, config: {…}, …}
config
: 
{transitional: {…}, adapter: Array(2), transformRequest: Array(1), transformResponse: Array(1), timeout: 0, …}
data
: 
accessToken
: 
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjk5NDI1OTUzLCJleHAiOjE2OTk0MjYwNzN9.v0vptPeNDdt4camzLLYnX3y2Gf2QFttbbzjGEOCT66I"
ok
: 
true
statusCode
: 
200
[[Prototype]]
: 
Object
headers
: 
AxiosHeaders {content-length: '182', content-type: 'application/json; charset=utf-8'}
request
: 
XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
status
: 
201
statusText
: 
"Created"
[[Prototype]]
: 
Object */
