import React from "react";

type Props = {
  name:string
};

const UserName = async(props: Props) => {

  const { name } = props;

  return (
    <section className="user-name-sec">
      <div className="text-center">
        <h2>
          Hi, <span>{name}</span>
        </h2>
        <p className="text-active_dark">See what’s going on today!</p>
      </div>
    </section>
  );
};

export default UserName;
