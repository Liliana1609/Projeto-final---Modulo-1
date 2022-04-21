const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');

button.addEventListener('click' , () => {
  popup.style.display = 'block'
})

popup.addEventListener ('click', event => {
  const classNameOfClikedElement = event.target.classList[0]
  const classNames = ['popup-close', 'popup-wrapper' , 'popup-link' , 'container']
  const shouldClosePopup = classNames.some(className =>
    className === classNameOfClikedElement)

  if (shouldClosePopup) {
    popup.style.display = 'none'
  }
});

const button2 = document.querySelector('#viuvanegra button')
const popup2 = document.querySelector ('#viuvanegra .popup-wrapper')

button2.addEventListener('click' , () => {
  popup2.style.display = 'block'
  })

  popup2.addEventListener ('click', event => {
    const classNameOfClikedElement = event.target.classList[0]
    const classNames = ['popup-close', 'popup-wrapper' , 'popup-link' , 'container']
    const shouldClosePopup = classNames.some(className =>
      className === classNameOfClikedElement)

    if (shouldClosePopup) {
      popup2.style.display = 'none'
    }
  });

  const button3 = document.querySelector('#feiticeira button')
  const popup3 = document.querySelector ('#feiticeira .popup-wrapper')

  button3.addEventListener('click' , () => {
    popup3.style.display = 'block'
    })

    popup3.addEventListener ('click', event => {
      const classNameOfClikedElement = event.target.classList[0]
      const classNames = ['popup-close', 'popup-wrapper' , 'popup-link' , 'container']
      const shouldClosePopup = classNames.some(className =>
        className === classNameOfClikedElement)

      if (shouldClosePopup) {
        popup3.style.display = 'none'
      }
    });
