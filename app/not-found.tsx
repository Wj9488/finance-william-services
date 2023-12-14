"use client"

import BackButton from "@/Components/Reusable/BackButton"
import SideNav from "@/Components/Reusable/SideNav"
import Header from "@/Components/Reusable/Header"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"

const ErrorPage = () => {
  return (
    <main>
        <Header pageHeading="PAGE NOT FOUND" pageSubheading="BEA3008" />
        <GenericPageWrapper>
            <BackButton />
            <p className="w-1/2">This page does not exist, please use the back button to go to the home page.</p>
            <SideNav />
        </GenericPageWrapper>
    </main>
  )
}

export default ErrorPage