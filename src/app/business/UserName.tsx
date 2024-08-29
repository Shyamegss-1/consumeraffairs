import React from "react";

type Props = {};

const UserName = (props: Props) => {
  return (
    <section className="user-name-sec">
      <div className="text-center">
        <h2>
          Hi, <span>Skyler Reeves!</span>
        </h2>
        <p className="text-active_dark">See what’s going on today!</p>
      </div>
    </section>
  );
};

export default UserName;
