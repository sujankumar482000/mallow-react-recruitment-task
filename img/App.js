import React, { useState } from "react";
import EditUserForm from "./EditUserForm";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, first_name: "Emma", last_name: "Wong", email: "emma.wong@reqres.in", avatar: "" },
  ]);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSave = (updatedUser) => {
    setUsers(prev =>
      prev.map(user => user.id === updatedUser.id ? updatedUser : user)
    );
  };

  return (
    <div>
      <button onClick={() => setSelectedUser(users[0])}>Edit Emma</button>
      {selectedUser && (
        <EditUserForm
          user={selectedUser}
          onSave={handleSave}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </div>
  );
};

export default App;