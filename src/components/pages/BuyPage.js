import React from "react"
import { PaymentForm } from "../vitals/PaymentForm"
import { Signup } from "../vitals/Signup"
import { HeroArea } from "../sections/HeroArea"
import { AboutArea } from "../sections/AboutArea"
import { BestArea } from "../sections/BestArea"
import { ServiceArea } from "../sections/ServiceArea"
import { PricingArea } from "../sections/PricingArea"
import { Testimonials } from "../sections/Testimonials"
import { FAQ } from "../sections/FAQ"

export const BuyPage = () => {
    return (
        <div id="appCapsule">
            <HeroArea />
            <AboutArea />
            <BestArea />
            <ServiceArea />
            <PricingArea />
            <div className="container">
                <div className="card m-1 mt-3 mb-3">
                    <div className="card-body">
                        <div className="card-title">Get into the course</div>
                        <Signup />
                        <PaymentForm />
                    </div>
                </div>
            </div>
            <Testimonials />
            <FAQ/>
        </div>
    )
}