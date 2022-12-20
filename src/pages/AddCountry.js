import React from 'react'
import BaseTableTable from '../components/basetable/BaseTableTable'
import BaseTableTemp from '../components/basetable/BaseTableTemp'

function AddCountry() {
    return (
        <div>
            <BaseTableTemp name="Country" modal/>
            <BaseTableTable  col1="Sr. NO." col2="Country" col3="Action"/>
        </div>
    )
}

export default AddCountry
