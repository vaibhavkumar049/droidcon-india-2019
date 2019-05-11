const {BasicCard,Image,Button,Suggestions,SimpleResponse}=require('actions-on-google')

module.exports={
   ticket: function(conv){
    if(!conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT')){
        conv.ask(`Cupcake the first of the best. The one which introduced android to the whole world, You will be one of the elite few to buy the conference tickets before others! To buy ticket you can visit droid con website.`)
        conv.ask(`Would you like to do something else ?`);
        return;
    }
       conv.ask(new SimpleResponse({
           text:`you can find droid con ticket here`,
           speech:`Cupcake the first of the best. The one which introduced android to the whole world, You will be one of the elite few to buy the conference tickets before others!`
       }));
       conv.ask(new BasicCard({
           text:"Cupcake the first of the best. The one which introduced android to the whole world, You will be one of the elite few to buy the conference tickets before others! Buying this ticket means you get to attend the conference at the lowest price. Prices would go up as the conference dates get closer. Limited quantities only.Ticket price covers Entry to conference, talk/workshop, lunch, coffee/tea.",
           title:"CUPCAKE TICKET",
           subtitle:"Super Early Bird",
           buttons: new Button({
               title:"BOOK TICKET",
               url:"https://www.townscript.com/e/droidcon-india-at-chennai-2019-303302",
           }),
           image: new Image({
               url:"https://s3.gifyu.com/images/giphy567a9f7ab6114e19.gif",
               alt:"ticket booking",
           })
       }));
       conv.ask(new Suggestions(["About the event"],['Call For Speakers'],['Give me updates']))
   }
}

