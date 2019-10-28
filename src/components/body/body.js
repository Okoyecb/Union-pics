import React, { Component } from 'react';
import FsLightbox from 'fslightbox-react';
import Card from '../cards/cards';


class Cards extends Component {
  state = {
    toggler: false,
    slide: 1
  }

  openLightboxOnSlide = (slideNumber) => {
    this.setState({ 
      toggler: !this.state.toggler,
      slide: slideNumber
    });
  }

  render(){
    return(
      <>
      <div className="card-grid">
        <Card
            image={'https://res.cloudinary.com/okoyecb/image/upload/v1566914757/photo-1526047932273-341f2a7631f9_m8rv4t.jpg'}
            subtitle={'00985CE'}
            item={'2019'}
            showLightbox={ this.openLightboxOnSlide.bind(this, 1)}
          />
                  <Card
                    image={'https://res.cloudinary.com/okoyecb/image/upload/v1557575555/ibiza_b9eedq.jpg'}
                    subtitle={'00985CE'}
                    item={'2019'}
                    showLightbox={ this.openLightboxOnSlide.bind(this, 2) }
                  />
                  <Card
                    image={'https://res.cloudinary.com/okoyecb/image/upload/v1566914944/1000x750-fit-113_wgqfes.jpg'}
                    subtitle={'00985CE'}
                    item={'2019'}
                    showLightbox={ this.openLightboxOnSlide.bind(this, 3) }
                  />

                <Card
                    image={'https://res.cloudinary.com/okoyecb/image/upload/v1557575555/ibiza_b9eedq.jpg'}
                    subtitle={'00985CE'}
                    item={'2019'}
                    showLightbox={ this.openLightboxOnSlide.bind(this, 4) }
                  />
          
                <Card
                  image={'https://res.cloudinary.com/okoyecb/image/upload/v1557575854/zoeweb-001_p6cdg1.jpg'}
                  subtitle={'00985CE'}
                  item={'2019'}
                  showLightbox={ this.openLightboxOnSlide.bind(this, 5) }
                 />

                <Card
                  image={'https://res.cloudinary.com/okoyecb/image/upload/v1566915064/02_01_slide_nature_ioldul.jpg'}
                  subtitle={'00985CE'}
                  item={'2019'}
                  showLightbox={ this.openLightboxOnSlide.bind(this, 6) }
                />

                 <Card
                   image={'https://res.cloudinary.com/okoyecb/image/upload/v1557575541/Nissan_X-Trail_001_0_xacb2p.jpg'}
                   subtitle={'00985CE'}
                  item={'2019'}
                  showLightbox={ this.openLightboxOnSlide.bind(this, 7) }
                 />

                 <Card
                   image={'https://res.cloudinary.com/okoyecb/image/upload/v1566914944/1000x750-fit-113_wgqfes.jpg'}
                   subtitle={'00985CE'}
                   item={'2019'}
                   showLightbox={ this.openLightboxOnSlide.bind(this, 8) }
                 />

               <Card
                   image={'https://res.cloudinary.com/okoyecb/image/upload/v1557575555/ibiza_b9eedq.jpg'}
                   subtitle={'00985CE'}
                   item={'2019'}
                   showLightbox={ this.openLightboxOnSlide.bind(this, 9) }
                 />
                
                 <Card
                   image={'https://res.cloudinary.com/okoyecb/image/upload/v1557575545/Nissan-QQ_2017-UK-edition_050_figpd4.jpg'}
                   subtitle={'00985CE'}
                   item={'2019'}
                   showLightbox={ this.openLightboxOnSlide.bind(this, 10) }
                />

               <Card                   
                   image={'https://res.cloudinary.com/okoyecb/image/upload/v1566915064/02_01_slide_nature_ioldul.jpg'}
                  subtitle={'00985CE'}
                  item={'2019'}
                  showLightbox={ this.openLightboxOnSlide.bind(this, 11) }
               />

                <Card                  
                  image={'https://res.cloudinary.com/okoyecb/image/upload/v1566915209/ecosystem_vx7fag.jpg'}
                  subtitle={'00985CE'}
                  item={'2019'}
                  showLightbox={ this.openLightboxOnSlide.bind(this, 12) }
                />
          <FsLightbox
            toggler={this.state.toggler}
            sources={ [
              'https://res.cloudinary.com/okoyecb/image/upload/v1566914757/photo-1526047932273-341f2a7631f9_m8rv4t.jpg',
              'https://res.cloudinary.com/okoyecb/image/upload/v1557575555/ibiza_b9eedq.jpg',
              'https://res.cloudinary.com/okoyecb/image/upload/v1566914944/1000x750-fit-113_wgqfes.jpg',
              'https://res.cloudinary.com/okoyecb/image/upload/v1557575555/ibiza_b9eedq.jpg',
              'https://res.cloudinary.com/okoyecb/image/upload/v1557575854/zoeweb-001_p6cdg1.jpg',
              'https://res.cloudinary.com/okoyecb/image/upload/v1566915064/02_01_slide_nature_ioldul.jpg',
              'https://res.cloudinary.com/okoyecb/image/upload/v1557575541/Nissan_X-Trail_001_0_xacb2p.jpg',
              'https://res.cloudinary.com/okoyecb/image/upload/v1566914944/1000x750-fit-113_wgqfes.jpg',
              'https://res.cloudinary.com/okoyecb/image/upload/v1557575555/ibiza_b9eedq.jpg',
              'https://res.cloudinary.com/okoyecb/image/upload/v1557575545/Nissan-QQ_2017-UK-edition_050_figpd4.jpg',
              'https://res.cloudinary.com/okoyecb/image/upload/v1566915064/02_01_slide_nature_ioldul.jpg',
              'https://res.cloudinary.com/okoyecb/image/upload/v1566915209/ecosystem_vx7fag.jpg'
              ] }
              slide={this.state.slide}
          />
      </div>
      

      </>
    )

  }
}

export default Cards;
