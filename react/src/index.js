const person = {
  talk: function() {
    setTimeout(function() {
      console.log(this);
    }, 1000);
  }
};

person.talk();  // 输出Window