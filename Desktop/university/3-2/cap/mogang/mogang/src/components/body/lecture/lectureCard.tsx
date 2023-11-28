import React from "react";
import Lecture_Card from "./lectureCardstyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as heartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as heartRegular } from "@fortawesome/free-regular-svg-icons";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

interface item {
  skills: Array<string>;
  thumbnailUrl: string;
  title: string;
  provider: string;
  score: number;
  currentPrice: number;
  id: number;
}
interface props {
  item3: Array<item>;
}
interface temp {
  id: number;
}
function LectureList({ item3 }: props) {
  const [item, setItem] = useState();
  const [ids, setIds] = useState<temp[]>([]);
  const navigate = useNavigate();

  const getList = async () => {
    const url = "http://27.119.53.12:4000/graphql";
    try {
      const response = await axios.post(
        url,
        {
          query: `
              query GetLikedLectureOutputDto{
                  getLikedLecture{
                      ok
                      message
                      likedLectures{ 
                          id
                         
                      }
                  }
              }`,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
          },
        }
      );
      console.log(response.data.data.getLikedLecture.likedLectures);
      setIds(response.data.data.getLikedLecture.likedLectures);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  function Card(props: { item: item }) {
    //console.log(props);
    const [isCheck, setIsCheck] = useState(false);

    const changeHeart = async () => {
      const url = "http://27.119.53.12:4000/graphql";
      try {
        const response = await axios.post(
          url,
          {
            query: `
          mutation CreateLikeLectureOutputDto {
              likeLecture(CreateLikeLectureInput: {lectureId: ${props.item.id}}) {
                  ok
                  message
                  likeStatus
              }
          }`,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
            },
          }
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
      for (let i = 0; i < ids.length; i++) {
        if (ids[i].id === props.item.id) {
          setIsCheck(true);
        }
      }
    }, []);

    return (
      props && (
        <Lecture_Card score={props.item.score}>
          <div id="tumbnailBox">
            <img
              id="tumbnail"
              onClick={() => {
                navigate(`/lecture/${props.item.id}`);
              }}
              src={
                props.item.thumbnailUrl === ""
                  ? "   https://cdn.inflearn.com/public/courses/331392/cover/6caf16d0-df2b-40c0-b091-ad7b7b3b9045/331392-eng.png"
                  : props.item.thumbnailUrl
              }
              alt=""
            />
            <FontAwesomeIcon
              onClick={() => {
                //빈거임
                changeHeart();
                setIsCheck(true);
              }}
              icon={heartRegular}
              className={`Like ${isCheck ? "hidden" : ""} `}
            />
            <FontAwesomeIcon
              onClick={() => {
                //찬거임
                changeHeart();
                setIsCheck(false);
              }}
              icon={heartSolid}
              className={`Like ${isCheck ? "" : "hidden"} `}
            />
          </div>
          <div
            className="tag"
            onClick={() => {
              navigate(`/lecture/${props.item.id}`);
            }}
          >
            {props.item.skills.slice(0, 3).map((name, index) => {
              if (name !== "인터랙티브 웹" && name.length < 14)
                return <div key={index}>{name}</div>;
            })}
          </div>
          <div
            onClick={() => {
              navigate(`/lecture/${props.item.id}`);
            }}
            style={{
              padding: "0 0 0 0.1rem",
            }}
          >
            <div id="title">{props.item.title}</div>
            <div id="offer">
              <span>{props.item.provider}</span>
              <div className="parent">
                <div className="child">
                  <img
                    id="star"
                    src={`${process.env.PUBLIC_URL}/img/파란별.png`}
                    alt="모강"
                  />
                </div>
                <img
                  id="backStar"
                  src={`${process.env.PUBLIC_URL}/img/회색별.png`}
                  alt="모강"
                />
              </div>
              <span style={{ fontSize: "0.8rem" }}>({props.item.score})</span>
            </div>
            <div id="price">
              {props.item.currentPrice !== 0
                ? "₩ " + props.item.currentPrice
                : "무료"}
            </div>
          </div>
        </Lecture_Card>
      )
    );
  }

  return (
    item3[0] && (
      <>
        <Card item={item3[0]} />
        <Card item={item3[1]} />
        <Card item={item3[2]} />
      </>
    )
  );
}

export default LectureList;
