import React from 'react'
import CategoryLayout from '../CategoryLayout'
import CategoryWiseCompanyList from '../CategoryWiseCompanyList'

const page = ({ params }: { params: { listingId: string } }) => {
  return (
    <CategoryLayout params={params}>
      <CategoryWiseCompanyList params={params}/>
      {/* <CompanyFooter /> */}
    </CategoryLayout>
  )
}

export default page