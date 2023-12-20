"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const InventoryManagement = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="Inventory Management" pageSubheading="Week 3"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            <mark>Inventory Objective</mark>
                            <br/>
                            <br/>
                            The objective is to turn over inventory as quickly
                            as possible without losing sales from stockouts. 
                            <br/>
                            <br/>
                            <mark>Types of Inventory</mark>
                            <br/>
                            <br/>
                            - Raw material: the inventory purchased from suppliers
                            that ultimately will be transformed into finished goods. 
                            <br/>
                            - Work-in-progress: Inventory in various stages of the completion. 
                            <br/>
                            - Finished Goods: Inventories that have completed the production 
                            process and are ready for sale. 
                            <br/>
                            <br/>
                            <mark>Inventory: Costs</mark>
                            <br/>
                            <br/>
                            Three Categories:
                            <br/>
                            <br/>
                            - Ordering Costs: Making an order and receiving it into inventory … incurred each
                            time an order is placed … e.g. costs of raising purchase requisition,
                            issuing and following up purchase order, transferring goods into
                            inventory, the payment mechanism, accounting, etc.
                            <br>
                            <br>
                            - Carrying / Holding Cost: Arise because a certain level of stock holding is maintained /
                            envisaged … e.g. return on funds invested in stock, costs of
                            insurance, storage (rent, rates, light, heat, refrigeration, staff, etc.),
                            cost of stock depreciating or becoming obsolete. 
                            <br>
                            <br> 
                            - Stock-Out Costs: Concern costs incurred owing to having no stock on hand to satisfy
                            customer demand … e.g. loss of contribution because customers
                            go elsewhere, etc.
                            <br>
                            <br> 
                            Difficult to establish exactly what these costs are (likely to be firm idiosyncratic). We
                            a study of its inventory costs
                            proceed on the assumption that a firm has successfully commissioned and executed.
                            <br/>
                            <br/>
                            <mark>Inventory: Management Models</mark>
                            <br/>
                            <br/>
                            Baumol Economic Order Quantity Models:
                            <br/>
                            - Basic EOQ Model & Stock-Out Model
                            <br/>
                            <br/>
                            Two assumptions:
                            <br/>
                            - Demand for a given item of inventory is at
                            a constant rate and is known in advance. 
                            - Lead Time: this is the period for order placement
                            and receipt into inventory and it is known in advance. 
                            <br/>
                            <br/>
                            <mark>EOQ Model Issues</mark>
                            <br/>
                            <br/>
                            - Most obvious problem with the basic model is that it 
                            ignores 'stock-out' costs. 
                            <br/>
                            - Both acquisition lead time and demand for units usually 
                            fluctuate in a manner not completely known to the decision
                            maker in advance. 
                            <br/>
                            Under certainty, re-order point is usage per day multiplied
                            by lead time in days. This needs adjusting in real life.
                            <br/>
                            - Holding cost per unit is assumed to be constant.
                            <br/>
                            - Demand for a given item is at a constant rate and known in advance. 
                            This is certainly not true for most businesses. 
                            <br/>
                            <br/>
                            <mark>Stock-out Model Assumptions</mark>
                            <br/>
                            <br/>
                            - Assume deliberate policy of allowing stock outs.
                            <br/>
                            - Firm delays reorder beyond the point at which total inventory 
                            is depleted.
                            <br/>
                            Unsatisfied back orders are made up when new inventory is recieved. 
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

export default InventoryManagement