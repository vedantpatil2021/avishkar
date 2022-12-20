import React from 'react'
import BaseTableTable from '../components/basetable/BaseTableTable'
import BaseTableTemp from '../components/basetable/BaseTableTemp'

function InProgressGriev() {
    return (
        <div>
            <BaseTableTemp name="In Progress Grievance"/>
            <BaseTableTable col1="Sr. No" col2="Grievance Name" col3="Action" col4="Register Date"/>
        </div>
    )
}

export default InProgressGriev
