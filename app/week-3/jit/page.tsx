"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const JIT = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="Just In Time System" pageSubheading="Week 3 Inventory Management"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            - Imported from Japan
                            <br/>
                            - Used to minimise inventory holding cost.
                            <br/>
                            - The philosophy is that material should arrive at exactly
                            the time they are needed for production.
                            <br/>
                            - Ideally the firm would have only work-in-progress inventory.
                            <br/>
                            - The system uses no (or very little) safety stock. 
                            <br/>
                            - The goal of JIT systems is to enhance manufacturing efficiency.
                            <br/>
                            - It uses inventory as a tool for attaining efficiency by emphasising
                            quality of materials used and their timely delivery.
                            <br/>
                            <br/>
                            <mark>Benefits of JIT</mark>
                            <br/>
                            <br/>
                            - Lower level of investment needed in working capital, since inventory levels 
                            have been minimised.
                            <br/>
                            - A reduction in inventory holding costs - these costs can be reduced to a minimum 
                            if a company orders supplies only when it needs them, avoiding the need to have any 
                            inventory at all of raw materials input into the production process.
                            <br/>
                            - A reduction in material handling costs, due to improved materials flow through the production
                            process.
                            - Better relationship with suppliers, since both parties (customers and suppliers) need to 
                            work closely together to make JIT procurement a success. This, however, requires that the customer is 
                            prepared to guarantee only to buy from one supplier in respect of a particular 
                            stock item and to give the supplier access to the customer's sale / production plans. This 
                            could be seen as a disadvantage because the customer is price locked with that one supplier.
                            <br/>
                            Operating efficiency also improves, due to the need to streamline production methods
                            to eliminate inventory between different stages of production process.
                            <br/>
                            - Lower reworking costs due to the emphasis on using high quality materials, since hold ups 
                            in production must be avoided when inventory between production stages has been eliminated.
                            <br/>
                            <br/>
                            <mark>Disadvantages of JIT</mark>
                            <br/>
                            <br/>
                            - Vulnerability to supply chain disruptions. JIT relies heavily on the timely 
                            delivery of inventory. Disruptions such as transport delays, supplier issues or natural
                            diseasters can halt production. 
                            <br/>
                            - High dependency on suppliers. Since JIT minimises inventory levels, businesses are 
                            highly dependent on their suppliers for consistent quality and timely deliveries. 
                            <br/>
                            - Limited room for errors or changes. JIT requires precise forecasting and inventory management.
                            Mistakes in forecasting can lead to stockouts or overproduction.
                            "
                        />
                    </EquationSectionWrapper>
                <SideNav />
            </GenericPageWrapper>
        </main>
    </Transition>
    </>
  )
}

export default JIT