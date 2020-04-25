import React from "react";

import classes from "./style.module.css";

const Users = (props) => {
  
  //// FIXME -  this is side effect
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: "1",
        photoSrc:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Kate_Beckinsale_Comicpalooza_2016_%2827689187571%29_%28cropped%29.jpg/1200px-Kate_Beckinsale_Comicpalooza_2016_%2827689187571%29_%28cropped%29.jpg",
        fullName: "Kate Backinsale",
        description: "hello everyone im actriss :D",
        followed: true,
        location: {
          country: "Belarus",
          region: "Minsk",
        },
      },
      {
        id: "2",
        photoSrc:
          "https://4.bp.blogspot.com/-diLGfD0uzPU/Tw_Sd64_LDI/AAAAAAAAACU/yD7sQh-14rM/s1600/emma%2Bwatson%2B1.jpg",
        fullName: "Emma Watson",
        description: "Hi im Emma Watson",
        followed: true,
        location: {
          country: "USA",
          region: "Washigton",
        },
      },
      {
        id: "3",
        photoSrc:
          "https://i.pinimg.com/originals/eb/7b/67/eb7b67b8703d224fff8742938cf0a042.jpg",
        fullName: "Alexandra Dadario",
        description: "Hi im Emma Watson",
        followed: false,
        location: {
          country: "Ukraine",
          region: "Kiev",
        },
      },
      {
        id: "4",
        photoSrc:
          "https://upload.wikimedia.org/wikipedia/commons/9/9a/TechCrunch_Disrupt_NY_2016_-_Day_3_%2826884815511%29_%28cropped%29.jpg",
        fullName: "Jessica Alba",
        description: "Hi im Jessica Alba",
        followed: false,
        location: {
          country: "Hungaria",
          region: "Budapesht",
        },
      },
    ]);
  }
  const onShowMore = () => {
    props.setUsers([{
      id: "5",
      photoSrc:
        "https://cs4.pikabu.ru/post_img/big/2014/09/02/7/1409654272_332341385.jpg",
      fullName: "Salma Hayek",
      description: "Hi im Salma Hayek",
      followed: false,
      location: {
        country: "USA",
        region: "Califonria",
      },
    }]);
  };
  return (
    <div className="Users">
      {props.users.map((item) => {
        console.log("item", item);
        return (
          <div key={item.id} className={classes.userContaienr}>
            <div className={classes.avatar}>
              <img src={item.photoSrc} alt={item.description} />
            </div>

            <div className={classes.message}>
              <span>{item.description}</span>
            </div>

            <div className={classes.btn}>
              {item.followed ? (
                <button onClick={() => props.follow(item.id)}>FOLLOW</button>
              ) : (
                <button onClick={() => props.unfollow(item.id)}>
                  UNFOLLOW
                </button>
              )}
            </div>
          </div>
        );
      })}
      <div className={`${classes.btnShowMoreContaoner}  flexible jCenter`}>
        <button onClick={onShowMore}>SHOW MORE</button>
      </div>
    </div>
  );
};
export default Users;
