import React from 'react'
import BaseTableTable from '../components/basetable/BaseTableTable'
import BaseTableTemp from '../components/basetable/BaseTableTemp'

function AddState() {
    return (
        <div>
            <BaseTableTemp name="State" modal/>
            <BaseTableTable  col1="Sr. NO." col2="State" col3="Action"/>
        </div>
    )
}

export default AddState
