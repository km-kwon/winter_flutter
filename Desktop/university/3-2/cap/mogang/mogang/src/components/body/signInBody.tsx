import Body_main from "./styled/signInBodyStyle";
import LectureList from "./lecture/lectureCard";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

function MainBody() {
  const [form, setForm] = useState(["", "", "", "", ""]);
  const [isCheck, setIsCheck] = useState(false);
  const navigate = useNavigate();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    let copy = [...form];
    copy[index] = event.target.value;
    setForm(copy);
  };
  async function onsubmit() {
    if (isCheck) {
      const url = "http://27.119.53.12:4000/graphql";
      try {
        const response = await axios.post(
          url,
          {
            query: `
          mutation CreateUser($createUserInput: CreateUserInputDto!) {
            createUser(createUserInput: $createUserInput) {
              ok
              message
              user {
                email
                id
              }
            }
          }
        `,
            variables: {
              createUserInput: {
                email: form[0],
                password: form[1],
                checkPassword: form[2],
                firstName: form[3],
                lastName: form[4],
              },
            },
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log(response.data);
        if (!response.data.data.createUser.ok) {
          alert("오류가 발생했습니다.");
        } else {
          alert("회원가입이 완료되었습니다.");
        }
        navigate("/");
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("개인정보 동의를 안하셨습니다.");
    }
  }

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
