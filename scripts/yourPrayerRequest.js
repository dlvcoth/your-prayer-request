import {generateUniqueId} from '../utils/post.js';
import { getTodayString } from '../utils/date.js';
import { members } from '../data/members.js';

//set default date as today
document.querySelector('.js-date-input')
  .value = getTodayString();


//set members as prayer-requester
members.forEach((member) => {
  let memberHTML = document.createElement("option");
  memberHTML.setAttribute("data-member-id", member.id);
  memberHTML.innerHTML = member.name;
  document.querySelector('.js-prayer-requester').appendChild(memberHTML);
})



// Save button event
document.querySelector('.js-save-new-post-btn')
  .addEventListener('click', ()=>{
    let prayerPostInfo = getNewPostData();
    const prayerId = generateUniqueId();
    generatePostHTML(prayerId, prayerPostInfo);
    setupTitleToggle(prayerId);
    clearInputs();
  });


 // Delete button event
document.querySelector('.js-delete-post-btn')
  .addEventListener('click', ()=>{
    deleteCheckedPost();
  });


document.querySelector('.js-emoji')
  .innerHTML = `${String.fromCodePoint(0x1FAC0)}`;


// Function to get input data
function getNewPostData(){
  console.log(document.querySelector('.js-prayer-requester').dataset.memberId);
  return {
    prayerTitle : document.querySelector('.js-post-title-input').value,
    prayerDetails : document.querySelector('.js-post-content-input').value,
    prayerDate : document.querySelector('.js-date-input').value,
    prayerPerson : document.querySelector('.js-prayer-requester').dataset.memberId
  };
}

function generatePostHTML(prayerId, prayerPostInfo) {
  const {prayerTitle, prayerDetails, prayerDate, prayerPerson} = prayerPostInfo;
  let newRow = document.createElement('tr');
  newRow.className = "js-post-row";
  newRow.setAttribute("data-post-id", `${prayerId}`);
  newRow.innerHTML = `
    <td>
          <input 
            type="checkbox" 
            data-post-id = "${prayerId}">
        </td>
        <td>${prayerDate}</td>
        <td>${prayerDate}</td>
        <td>
          <div class = "post-title js-post-title" data-post-id = "${prayerId}">
            ${prayerTitle}
          </div>
          <div class = "post-content js-post-content" data-post-id = "${prayerId}"
          style = "display: none;">
            ${prayerDetails}
          </div>
        </td>`;
  document.querySelector(".js-post-table").appendChild(newRow);
}

function setupTitleToggle(prayerId){
  const titleElement = document.querySelector(`.js-post-title[data-post-id = "${prayerId}"]`);
  const contentElement = document.querySelector(`.js-post-content[data-post-id = "${prayerId}"]`);
  titleElement.addEventListener('click', () => {
    contentElement.style.display = contentElement.style.display === 'none' ? 'block' : 'none';
  });
}
                    

function clearInputs() {
  document.querySelector('.js-post-title-input').value = '';
  document.querySelector('.js-post-content-input').value = '';
}

function deleteCheckedPost() {
  const checkboxElements = document.querySelectorAll(":checked");
  checkboxElements.forEach((checkbox)=>{
    const prayerId = checkbox.dataset.prayerId;
    document.querySelector(`.js-row-post[data-post-id = "${prayerId}"]`).remove();
  });
}