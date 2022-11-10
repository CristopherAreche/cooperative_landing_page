import React from "react";

const Card = (props) => {
  return (
    <div class="col-lg-4 p-5">
      <div class="text-center card-box">
        <div class="member-card pt-2 pb-2">
          <div class="thumb-lg member-thumb mx-auto">
            <img src={props.img} class="img-thumbnail" alt="image" />
          </div>
          <div class="">
            <h4>{props.name}</h4>
            <p class="text-muted">{props.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
