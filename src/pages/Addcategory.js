import React from 'react'
import BaseTableTable from '../components/basetable/BaseTableTable'
import BaseTableTemp from '../components/basetable/BaseTableTemp'

function Addcategory() {
    return (
        <div>
            <BaseTableTemp name="Category" collection="category" S modal/>
            <BaseTableTable col1="Sr. NO." col2="Category" col3="Action" collection="category"/>
        </div>
    )
}

export default Addcategory
