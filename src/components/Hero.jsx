import rightNav from '../assets/right-arrow.svg';
import { Card } from './Card';

const Hero = () => {

  return (
    <main>
      <div className="left-col">
        <h1>Quality shoes <br /> without price tag</h1>
        <p>
          No need to spend $xxx on shoes just for the namesake. <br />
          Our premium shoes is made from thesame stuff.
        </p>

        <div className="cta-btns">
          
          <a className="cta-btns-main" href="#" onClick={getShoes}>Browse our collection</a>
        
          <a  className="cta-btns-aside" href="#">
            <span>Spring `23 collection</span>
            <img src={rightNav} alt="arrow" />
          </a>
          
        </div>

        <aside>
          <div className='customers'>
            <p>50K</p>
          </div>
          <div className='content'>
            <p>
              We're proud to anounce that we have served customers of over 
              <strong> 50,000.</strong> It's all possible because of you.
            </p>
          </div>
        </aside>
      </div>

      <div className="right-col">
        <Card name={'Sport Footwear'} desc={'Running Shoe'} price={'$49'} cardClass={'card card-1'}/>
        <Card name={'Sport Footwear'} desc={'Running Shoe'} price={'$49'} cardClass={'card card-2'}/>
        <Card name={'Sport Footwear'} desc={'Running Shoe'} price={'$49'} cardClass={'card card-3'}/>
      </div>
    </main>
  )
}

export default Hero