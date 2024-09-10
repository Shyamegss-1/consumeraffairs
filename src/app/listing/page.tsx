import { redirect } from 'next/navigation'
import { Router } from 'next/router'
import React from 'react'

type Props = {}

const page = (props: Props) => {
      return  redirect('/')
}

export default page;