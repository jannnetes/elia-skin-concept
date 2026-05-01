import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider"

export default function BeforeAfter(){
  return (
    <section className="py-20 max-w-3xl mx-auto px-6">
      <h2 className="text-3xl font-display mb-8">Results</h2>
      <ReactCompareSlider
        itemOne={<ReactCompareSliderImage src="/before.jpg" />}
        itemTwo={<ReactCompareSliderImage src="/after.jpg" />}
      />
    </section>
  )
}
