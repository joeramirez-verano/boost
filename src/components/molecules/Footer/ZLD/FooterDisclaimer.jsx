import {appController} from '@/store/appController'

/**
 * ZLD Footer Disclaimer Area
 * @return {Element} Plane JSX
 */

const getContentByState = (state) => {
  let Content
  if (state === 'massachusetts') {
    Content = (
      <>
        <span>Please Consume Responsibly.</span>
        <br></br>
        <span>Adult-Use:</span>
        <br></br>
        <span>
          This product has not been analyzed or approved by the Food and Drug Administration (FDA). There is limited information on the side effects of using
          this product, and there may be associated health risks. Marijuana use during pregnancy and breast-feeding may pose potential harms. It is against the
          law to drive or operate machinery when under the influence of this product. KEEP THIS PRODUCT AWAY FROM CHILDREN. There may be health risks associated
          with consumption of this product. Marijuana can impair concentration, coordination, and judgment. The impairment effects of Edibles may be delayed by
          two hours or more. In case of accidental ingestion, contact poison control hotline 1-800-222-1222 or 9-1-1. This product may be illegal outside of MA.
        </span>
        <br></br>
        <span>Medical:</span>
        <br></br>
        <span>
          This product may cause impairment and may be habit forming. Marijuana can impair concentration, coordination and judgment. Do not operate a vehicle or
          machinery under the influence of this drug. There may be health risks associated with consumption of this product. Marijuana should not be used by
          women who are pregnant or breastfeeding.
        </span>
      </>
    )
  }

  if (state === 'maryland') Content = <span>Medical cannabis products are for use only by a certified patient.</span>

  if (state === 'michigan') {
    Content = (
      <span>
        Website content is not intended as medical advice. The information provided is meant to encourage medical marihuana education, not replace direct
        patient-healthcare professional relationships. Always consult your primary care physician or other healthcare provider prior to using medical marihuana
        products for treatment of a medical condition. Medical marihuana is for use only by registered qualifying patients or registered primary caregivers.
      </span>
    )
  }

  if (state === 'connecticut') {
    Content = (
      <>
        <span className="order-1 mt-0 block text-xl lg:text-3xl">
          Do not use cannabis if you are under twenty-one years of age. Keep cannabis out of the reach of children.
        </span>
        <span className="order-3 block">
          <p className="mb-4">
            <ul>
              <li>
                Frequent and prolonged use of cannabis can contribute to mental health problems over time, including anxiety, depression, stunted brain
                development, and impaired memory.
              </li>
              <li>Consumption while pregnant or breastfeeding may be harmful.</li>
              <li>Cannabis has intoxicating effects and may be habit-forming and addictive.</li>
              <li>Consuming more than the recommended amount may result in adverse effects requiring medical attention.</li>
            </ul>
          </p>
          <p>
            Cannabis is an agricultural crop that naturally contains yeast and mold. This cannabis or cannabis product has been tested to ensure that it meets
            or exceeds state standards for the presence of safe levels and varieties of yeast and mold. This cannabis or cannabis product may have undergone one
            or more forms of decontamination or remediation.
          </p>
        </span>
      </>
    )
  }
  return Content ? <>{Content}</> : <></>
}
const FooterDisclaimer = () => {
  const stateValues = appController.useState(['myLocation', 'currentLocation'])

  let Default = (
    <>
      <span className="order-2 block">
        Website content is not intended as medical advice. The information provided is meant to encourage cannabis education, not replace direct
        patient-healthcare professional relationships. Always consult your primary care physician or other healthcare provider prior to using cannabis products
        for treatment of a medical condition.
      </span>
    </>
  )

  let Content = getContentByState(stateValues.currentLocation?.geoState)
  let AgeGateStateContent =
    stateValues.myLocation?.geoState !== stateValues.currentLocation?.geoState ? getContentByState(stateValues.myLocation?.geoState) : <></>

  if (stateValues.currentLocation?.geoState === 'michigan' || stateValues.myLocation?.geoState === 'michigan') {
    Default = <></>
  }

  return (
    <div className="flex flex-col gap-4 text-center text-sm font-semibold leading-5" id="footer-disclaimer">
      {Default}
      {Content}
      {AgeGateStateContent}
    </div>
  )
}

export default FooterDisclaimer
