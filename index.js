var app = new Vue({
    el: '#app',
    mounted: function () {
      this.gen = this.addEmail();
    },
  
    data: {
      
      emails: [
          {"first_name":"Peadar","last_name":"Storror","email":"pstorror0@baidu.com","gender":"Male","img":"img/common/andrew-avatar.png"},
          {"first_name":"Francesco","last_name":"Petrello","email":"fpetrello1@mediafire.com","gender":"Male","img":"img/common/ericf-avatar.png"},
          {"first_name":"Jimmie","last_name":"Sunderland","email":"jsunderland2@google.co.uk","gender":"Male","img":"img/common/reid-avatar.png"},
          {"first_name":"Melodie","last_name":"Buckthorp","email":"mbuckthorp3@g.co","gender":"Female","img":"img/common/tilo-avatar.png"},
          {"first_name":"Reamonn","last_name":"Dowsett","email":"rdowsett4@sun.com","gender":"Male","img":"img/common/images-1.png"},
          {"first_name":"Kath","last_name":"Abrashkin","email":"kabrashkin5@deliciousdays.com","gender":"Female","img":"img/common/avatar-1-1.png"},
          {"first_name":"Hobard","last_name":"Clewes","email":"hclewes6@jalbum.net","gender":"Male","img":"img/common/avatar-7.png"},
        ],
      moreEmails: [
        {"first_name":"Quentin","last_name":"Denness","email":"qdenness7@tmall.com","gender":"Male","img":"img/common/images.png"},
        {"first_name":"Halsy","last_name":"Noyes","email":"hnoyes8@technorati.com","gender":"Male","img":"img/common/download.jpg"},
        {"first_name":"Maddie","last_name":"Whittleton","email":"mwhittleton9@slashdot.org","gender":"Female","img":"img/common/andrew-avatar.png"},
      ],
  
      gen: '',
  
    },
  
    methods: {
      // 3.
      // generator function that returns the next email from the moreEmails array
      addEmail: function* () {
        let index = 0;
  
        while (index < this.moreEmail.length)
          yield this.moreEmail[index++];
      },
  
      btn_addEmail: function () {
        let tempObj = this.gen.next() || {};
        // console.log(tempObj);
  
        // so as to prevent pushing an empty object
        tempObj.done ? console.warn('no more emails') : this.emails.push(tempObj.value);
      },
    }
  })
  
  // Use instead of .map to display emails
  var emailList = new Vue({
    el: '#emailList',
    data: {
      emails: [
          {"first_name":"Peadar","last_name":"Storror","email":"pstorror0@baidu.com","gender":"Male","img":"img/common/andrew-avatar.png"},
          {"first_name":"Francesco","last_name":"Petrello","email":"fpetrello1@mediafire.com","gender":"Male","img":"img/common/ericf-avatar.png"},
          {"first_name":"Jimmie","last_name":"Sunderland","email":"jsunderland2@google.co.uk","gender":"Male","img":"img/common/reid-avatar.png"},
          {"first_name":"Melodie","last_name":"Buckthorp","email":"mbuckthorp3@g.co","gender":"Female","img":"img/common/tilo-avatar.png"},
          {"first_name":"Reamonn","last_name":"Dowsett","email":"rdowsett4@sun.com","gender":"Male","img":"img/common/images-1.png"},
          {"first_name":"Kath","last_name":"Abrashkin","email":"kabrashkin5@deliciousdays.com","gender":"Female","img":"img/common/avatar-1-1.png"},
          {"first_name":"Hobard","last_name":"Clewes","email":"hclewes6@jalbum.net","gender":"Male","img":"img/common/avatar-7.png"},
        ],
    }
  })
  
  // local storage function
  function setLocalStorage() {
    localStorage.setItem(`items`, JSON.stringify(emails));
  }
  
  setLocalStorage();
  
  setLocalStorage();
  
  if (localStorage.getItem(`items`)) {
    emails = JSON.parse(localStorage.getItem(`items`));
    let filtered = emails.filter( email => !email.deleted);
    render(filtered);
  } else {
    render(emails);
  }
  
  render(emails);
  
  // new Vue({
  //   el: '#v-for-object',
  //   data: {
  //     object: {
  //       firstName: 'John',
  //       lastName: 'Doe',
  //       age: 30
  //     }
  //   }
  // })
  

// 4.
// V-on click Example for showing that an email is selected 
var emails = new Vue({
  el: '#emails',
  data: {
      counter: 0
  }
})
  
// V-on click Example for delete button link
var deleteEmail = new Vue({
  el: '#deleteEmail',
  data: {
      counter: 0
  }
})
  
// V-on click Example for trash button link
var trash = new Vue({
  el: '#trash',
  data: {
      counter: 0
  }
})
  
// V-on click Example for inbox button link
var inbox = new Vue({
  el: '#inbox',
  data: {
      counter: 0
  }
})
  
// V-bind to make email look selected
data: {
  isActive: true
  hasError: false
}