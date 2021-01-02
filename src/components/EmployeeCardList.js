import React from "react";
import EmployeeCard from "./EmployeeCard";


function EmployeeCardList ({ data }) { 
    return (
        data.map(employee => (
            <EmployeeCard
                key={employee.id}
                image={employee.image}
                name={employee.name}
                dept={employee.department}
                phone={employee.phone}
                email={employee.email}
                
            />
            ))
    )
}

export default EmployeeCardList;