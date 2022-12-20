import React from 'react'
import BaseTableTable from '../components/basetable/BaseTableTable'
import BaseTableTemp from '../components/basetable/BaseTableTemp'

function Addcategory() {
    return (
        <div>
            <BaseTableTemp name="Category" modal/>
            <BaseTableTable col1="Sr. NO." col2="Category" col3="Action"/>
        </div>
    )
}

export default Addcategory
