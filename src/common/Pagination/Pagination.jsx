import React from 'react';

import classes from "./style.module.css";


const Pagination = (props) => {
    let limit = props.pageSize;
    let totalPages = Math.ceil(props.totalCount / limit);//always math.ceil 
    let pageLimitArray = [];
    for (let i = 1; i <= totalPages; ++i) {
      pageLimitArray.push(i);
    }
    return (
      <div className="flexible jCenter">
        <div className={`${classes.paginationContainer} flexible`}>
          <div className={classes.paginContent}>
            {pageLimitArray.map((item) => {
              return (
                <span
                  key={item}
                  className={props.currentPage === item ? classes.active : ""}
                  onClick={() => props.onActiveClick(item)}
                >
                  &nbsp;&nbsp;
                  {item}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    );
  };
  export default Pagination;