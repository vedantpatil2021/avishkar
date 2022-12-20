import React from 'react'
import BaseTableTable from '../components/basetable/BaseTableTable'
import BaseTableTemp from '../components/basetable/BaseTableTemp'

function SolvedGriev() {
    return (
        <div>
            <BaseTableTemp name="Solved Grievance"/>
            <BaseTableTable col1="Complaint Number" col2="Grievance Name" col3="Action" col4="Register Date"/>
        </div>
    )
}

export default SolvedGriev
