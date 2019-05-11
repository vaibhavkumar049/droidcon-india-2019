const {Suggestions,LinkOutSuggestion} = require('actions-on-google');

module.exports={
    welcome: function(conv){
        if(conv.user.last.seen){
            conv.ask(`Welcome Back ! How can I help you ?`);
            conv.ask(new Suggestions(['Call For Speakers'],['Notify me'],['Register Now'],['View Details'],['About Venue']));
        }
        else{
            conv.ask(" Welcome to droid con India 2019");
            conv.ask("Consider me your guide to droid con India, I can help you to plan for droid con like when it is Happening or How to register for it.");
            conv.ask(new Suggestions(['Call For Speakers'],['Notify me'],['View Details'],['Register Now'],['About Venue']));

        }
    }
}