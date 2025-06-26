import Button from '@/components/atoms/Button'

const StoreCTA = ({state}) => {
  return (
    <div className="align-center margin-auto flex h-96 w-full flex-col justify-center ">
      <h3 className="m-auto" style={{fontSize: '36px', lineHeight: '47px'}}>
        Get Your {state || 'Florida'} Medical Cannabis Card
      </h3>
      <div
        className="m-auto"
        style={{
          fontSize: '17px',
          lineHeight: '24px',
          letterSpacing: '0.9px'
        }}
      >
        <p
          style={{
            maxWidth: '630px'
          }}
          className="mx-auto"
        >
          Wondering how to get your medical cannabis card in {state || 'Florida'}, but unsure of qualifying conditions, purchase limits, and fees? We are here
          to help.
        </p>
        <p>Follow the link to request assistance applying for your card, renew, and more.</p>
      </div>
      <div className="m-auto mt-0">
        <Button text="Medical Card Assistance" url="/medical-card-assistance" />
      </div>
    </div>
  )
}

export default StoreCTA
