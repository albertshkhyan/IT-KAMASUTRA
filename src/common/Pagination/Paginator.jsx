import React, { useState } from "react";

import classes from "./style.module.css";

const Pagination = (props) => {
  const {
    pageSize,
    totalCount,
    currentPage,
    onActiveClick,
    portionSize = 10,
  } = props;
  let totalPages = Math.ceil(totalCount / pageSize); //always math.ceil
  /**
   * how to find out how many page numbers to show ? 
        pageSize = section, items etc. when show in display -> pageSize !=  pageNumver
   
   * Math.ceil(4707 / 10) 471 page
   * We must devide pages by portions -> 471/n -> ex: 471 / 10 = 47.1
   
   * in prev button and next button when we click we go on portion of page
        * how to find what portion to show ? 
            * Formula -> (currentPagePortion - 1) * pageSize + 1  
    * What is currentPagePortion. How it find ?
    * to know which portion to show, (which range to show) we need to go through a cycle of all  < pageLimitArray >   and look at < currentPagePortion >. 
    
    -----------Left
    leftPortionCurrentPage for example -> currentPagePortion = 1
        (1 - 1) * 10 + 1 = 1

    -----------Right
    RightPortionCurrentPage: for example -> currentPagePortion = 1

    Ask again -> how find which range to show ? 
    //FOR EX : currentPagePortion = 1
  (currentPagePortion - 1) * props.pageSize + 1;    //with this we filtring pageLimitArray - START  (1 - 1) * 10 + 1 = 1
   currentPagePortion * props.pageSize;             //with this we filtring pageLimitArray - END    1 * 10 = 10
   👍 CURRENT RANGE - 1 - 10


    * 
   */
  let pageLimitArray = [];
  for (let i = 1; i <= totalPages; ++i) {
    pageLimitArray.push(i);
  }
  const [currentPagePortion, setCurrentPagePortion] = useState(1);

  const leftPortionCurrentPage = (currentPagePortion - 1) * portionSize + 1; //with this we filtring pageLimitArray - START
  const rightPortionCurrentPage = currentPagePortion * portionSize; ////with this we filtring pageLimitArray - END

  const portionCount = Math.ceil(totalPages / pageSize); //47 - for show  next button

  return (
    <div className="flexible jCenter">
      <div className={`${classes.paginationContainer} flexible`}>
        {leftPortionCurrentPage > 1 && (
          <button onClick={() => setCurrentPagePortion(currentPagePortion - 1)}>
            Prev
          </button>
        )}
        <div className={classes.paginContent}>
          {pageLimitArray
            .filter(
              (p) => p >= leftPortionCurrentPage && p <= rightPortionCurrentPage
            )
            .map((item) => {
              return (
                <div
                  key={item}
                  className={currentPage === item ? classes.active : ""}
                  onClick={() => onActiveClick(item)}
                >
                  {item}
                </div>
              );
            })}
        </div>
        {currentPagePortion < portionCount && (
          <button onClick={() => setCurrentPagePortion(currentPagePortion + 1)}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};
export default Pagination;
