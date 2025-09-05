/*
Things to consider: 
  - Use { props } to change the content of each card. 
  - Add a hover effect to the card so that information behind each card is shown in more detail.
    *** I'm thinking the css className:hover {...} and/or maybe the <TSXFunction onhover={'...'} />
*/

import './animateCarousel.css'

export default function AnimateCarousel() {
   return (
    <>
        <div className='carousel'>
            <div className='group'>
                <div className='card'><a>Live</a></div>
                <div className='card'>Love</div>
                <div className='card'>Laugh</div>
            </div>

            <div aria-hidden className='group'>
                <div className='card'><a>Live</a></div>
                <div className='card'>Love</div>
                <div className='card'>Laugh</div>
            </div>
        </div>
    </>
   );
}
