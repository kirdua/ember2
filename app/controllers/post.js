import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    sayHello: function(){
      alert("hello");
    },
    toggleBody: function() {
      this.toggleProperty('isShowingBody');
    },
    submitAction: function() {
      alert(this.get('name'));
      alert(this.get('comment'));
    }
  },
  title: "My Blog Post",
  body: "This is the body of the blog post",
  authors: ["William", "Robert", "Michelle"],
  created: new Date(),
  comments: [
    {
      name: "Mike Smith",
      comment: "Thanks for the great post"
    },
    {
      name: "John Doe",
      comment: "Nice post!"
    },
    {
      name: "Jeff Williams",
      comment: "Good Job!"
    },
  ]
});
