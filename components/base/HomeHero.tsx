import TextField from '@/components/partials/TextField';

const HomeHero = () => {
  return (
    <section className="py-12 md:py-24 transition-[padding]">
      <div className="wrapper">
        <h1 className="text-xl text-center font-bold mb-12">Gas Comparison</h1>
        <div className="grid gap-6 mx-auto max-w-[51.5rem] md:grid-cols-2 md:gap-y-8">
          <TextField
            name="distance"
            label="Distance (km) to US"
            placeholder="50"
            tooltip
            tooltipText="One way distance from your starting location to the US gas station. This field will help calculate how much gas is spent driving to and from the gas station."
          />
          <TextField
            name="l/100km"
            label="Average L/100km"
            placeholder="9.1"
            tooltip
            tooltipText="The amount of litres your vehicle uses to travel 100km. This should be on your dashboard of your car."
          />
          <TextField
            name="usd_to_cad_rate"
            label="USD to CAD Rate"
            placeholder="1.34"
            tooltip
            tooltipText="You can also add your foreign exchange fees if you're using a Canadian credit card. Example, your foreign exchange rate is an extra 2% and the USD to CAD rate is 1.30, then you can put 1.32 as the rate."
          />
          <TextField
            name="litres"
            label="Total Litres"
            placeholder="200"
            tooltip
            tooltipText="This should include the amount of litres filling up your vehicle AND the jerry cans. The more litres you fill in one trip, the more money you'll save."
          />
          <TextField name="cad_litre_price" label="CAD $/Litre" placeholder="1.93" />
          <TextField name="usd_gallon_price" label="USD $/Gallon" placeholder="4.39" />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
