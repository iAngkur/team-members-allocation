const EmployeeInfo = ({
  employee,
  selectedTeam,
  handleEmployeeCardClick,
  profilePic,
}) => {
  const { id, fullName, designation, gender, teamName } = employee;
  return (
    <div
      key={id}
      id={id}
      className={teamName === selectedTeam ? "card m-2 standout" : "card m-2"}
      style={{
        cursor: "pointer",
      }}
      onClick={handleEmployeeCardClick}
    >
      <img className="card-img-top" src={profilePic} alt={gender} />
      <div className="card-body">
        <h5 className="card-title">Full Name: {fullName}</h5>
        <p className="card-text">Designation: {designation}</p>
      </div>
    </div>
  );
};

export default EmployeeInfo;
