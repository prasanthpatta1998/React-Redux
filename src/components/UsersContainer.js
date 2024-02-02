// import React, { useEffect } from "react";
// import { fetchUsers } from "../Features/User/UserActions";
// import { connect } from "react-redux";

// const UsersContainer = ({ userData, fetchData }) => {
//   useEffect(() => fetchData, []);

//   return userData.loading ? (
//     <h2>...loading</h2>
//   ) : userData.error ? (
//     <h2>{userData.error}</h2>
//   ) : (
//     <div>
//       <h2>Users List</h2>
//       <div>
//         {userData &&
//           userData.users &&
//           userData.users.map((user,index) => <p key={index}>{user.name}</p>)}
//       </div>
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     userData: state.user,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchData: () => dispatch(fetchUsers()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../Features/User/UserActions";

const UsersContainer = () => {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchUsers()), []);

  console.log("Called")

  return userData.loading ? (
    <h2>...loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>Users List</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map((user, index) => <p key={index}>{user.name}</p>)}
      </div>
    </div>
  );
};

export default UsersContainer;
