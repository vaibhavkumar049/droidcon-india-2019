const {BasicCard,Image,Button,Suggestions,SimpleResponse,Carousel}=require('actions-on-google')

module.exports={
   cup_cake: function(conv){
    if(!conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT')){
        conv.ask(`Cupcake the first of the best. The one which introduced android to the whole world, You will be one of the elite few to buy the conference tickets before others! To buy ticket you can visit droid con website.`)
        // conv.ask('Cupcake the first of the best. The one which introduced android to the whole world.')
        conv.ask(`Would you like to do something else ?`);
        return;
    }
       conv.ask(new SimpleResponse({
           text:`Here is more info about cupcake tickets.`,
        //    speech:'Cupcake the first of the best. The one which introduced android to the whole world.',
           speech:`Cupcake the first of the best. The one which introduced android to the whole world, You will be one of the elite few to buy the conference tickets before others!`

       }));
       conv.ask(new BasicCard({
           text:"Cupcake the first of the best. The one which introduced android to the whole world, You will be one of the elite few to buy the conference tickets before others! Buying this ticket means you get to attend the conference at the lowest price. Prices would go up as the conference dates get closer. Limited quantities only.Ticket price covers Entry to conference, talk/workshop, lunch, coffee/tea.",
            // text:"Cupcake the first of the best. The one which introduced android to the whole world. Visit the site for more details.",
           title:"CUPCAKE TICKET",
           subtitle:"Super Early Bird",
           buttons: new Button({
               title:"GET TICKETS",
            //    url:"https://www.in.droidcon.com/",
               url:"https://www.townscript.com/e/droidcon-india-at-chennai-2019-303302",
           }),
           image: new Image({
               url:"https://s3.gifyu.com/images/giphy567a9f7ab6114e19.gif",
               alt:"cupcake tickets",
           })
       }));
       conv.ask(new Suggestions(["About the event"],['Call For Speakers'],['Give me updates']))
   },
   student: function(conv){
    if(!conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT')){
        conv.ask(`If you are a student and cannot afford the higher priced tickets, this is for you. We have limited quantities of student tickets so grab them before they are gone.`)
        // conv.ask('If you are a student then this is for you. Visit the site for more details')
        
        return;
    }
       conv.ask(new SimpleResponse({
           text:`Here is more info about student tickets`,
           speech:`If you are a student then this is for you. We have limited quantities of student tickets so grab them before they are gone.`
       }));
       conv.ask(new BasicCard({
           text:"If you are a student and cannot afford the higher priced tickets, this is for you. We have limited quantities of student tickets so grab them before they are gone.Ticket price covers Entry to conference, talk/workshop, lunch, coffee/tea.",
            // text:"If you are a student then this is for you. Visit the site for more details.",
           title:"STUDENT TICKET",
        //    subtitle:"Super Early Bird",
           buttons: new Button({
               title:"GET TICKETS",
            //    url:"https://www.in.droidcon.com/",
               url:"https://www.townscript.com/e/droidcon-india-at-chennai-2019-303302",
           }),
           image: new Image({
               url:"https://i.ibb.co/rQRv8VL/students.png",
               alt:"student ticket",
           })
       }));
       conv.ask(`Would you like to do something else ?`);
       conv.ask(new Suggestions(["About the event"],['Call For Speakers'],['Give me updates']))
   },
   ticket: function(conv){
    if (!conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT')) {
        conv.ask('Cupcake tickets are available right now. It offers tickets at the lowest price. Visit the site and get one before it ends. Also if you are a student you can get student tickets at a much lower price.');
        return;
      }
      
      conv.ask('Choose the one you would like to know about.');
      // Create a carousel
      conv.ask(new Carousel({
        items: {
          // Add the first item to the carousel
          'cup-cake': {
            // synonyms: [
            //   'synonym 1',
            //   'synonym 2',
            //   'synonym 3',
            // ],
            title: 'CUPCAKE TICKETS',
            description: 'Super Early Bird Tickets.',
            image: new Image({
              url: 'https://i.ibb.co/Lkhgq1F/cup.jpg',
              alt: 'Cup cake tickets',
            }),
          },
          // Add the second item to the carousel
          'students': {
        //     synonyms: [
        //       'Google Home Assistant',
        //       'Assistant on the Google Home',
        //   ],
            title: 'STUDENT TICKETS',
            description: 'For Students only.',
            image: new Image({
              url: 'https://i.ibb.co/tzHPqwn/studenttix.gif',
              alt: 'Student tickets',
            }),
          },
        },
      }));
   },
   volunteer: function(conv){
    if(!conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT')){
        conv.ask(`Our volunteer program is for those who are passionate about Android and want to attend the conference. Head over to the site and apply for volunteer`)
        conv.ask(`Would you like to do something else ?`);
        return;
    }
       conv.ask(new SimpleResponse({
           text:`You can apply for volunteer from the link below`,
           speech:`If you are a student and cannot afford the higher priced tickets, this is for you. We have limited quantities of student tickets so grab them before they are gone.`
       }));
       conv.ask(new BasicCard({
           text:"Our volunteer program is for those who are passionate about Android and want to attend the conference. All we ask in exchange for you getting the conference tickets for free is to help us out when the conference happens",
           title:"Apply as Volunteers",
        //    subtitle:"Super Early Bird",
           buttons: new Button({
               title:"Apply for volunteer",
               url:"https://droidcon1.typeform.com/to/COssSA",
           }),
           image: new Image({
               url:"https://i.ibb.co/Kz4kqhf/vol.jpg",
               alt:"Volunteers",
           })
       }));
       conv.ask('What would you like to do now?');
       conv.ask(new Suggestions(["About the event"],['Call For Speakers'],['Give me updates']))
   }
}

