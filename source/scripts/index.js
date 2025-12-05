
document.addEventListener('DOMContentLoaded', (e) => {
  let roomsCollection = [...document.querySelectorAll('.room')];
  let wasClicked = false;

  roomsCollection.forEach(room => {
    const roomBtn = room.querySelector('.room__btn');

    room.addEventListener('click', (e) => {
      if(room.classList.contains('room--reserved')) {
        room.classList.remove('room--reserved');
      }
      
    });

    roomBtn.addEventListener('click', (e) => {
      wasClicked = true;
    });

    room.addEventListener('mouseleave', (e) => {
      if(wasClicked) {
        room.classList.add('room--reserved');
        wasClicked = false;
      }
    });
  });
});
