const {Suggestions,LinkOutSuggestion,BasicCard,Button,Image} = require('actions-on-google');
module.exports={
    details: function(conv){
        if(!conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT')){
            conv.ask("droidcon is the largest global network of developer conferences "+
                "which bring together the industry's foremost experts dedicated to"+
                " advancing the Android platform. droidcon is"+
                " the place to meet the international Android community, learn from expert"+
                " speakers and dive into the latest Android advances and explore cutting edge "+
                " technologies.This year, droidcon India is happening in Chennai."+
                 "Be sure to grab your seats for an exciting two-day conference full"+
                 " of Android. ");

            return;
        }
            conv.ask("Here is more detailed info about droidcon India");
            // const ssml = '<speak>'+
            //              'Here is more detailed info about droidkon India'+
            //              '</speak>';
            // conv.ask(ssml);
            conv.ask(new BasicCard({
                text: "droidcon is the largest global network of developer conferences "+
                    "which bring together the industry's foremost experts dedicated to"+
                    " advancing the Android platform. droidcon is"+
                    " the place to meet the international Android community, learn from expert"+
                    " speakers and dive into the latest Android advances and explore cutting edge "+
                    " technologies.This year, droidcon India is happening in Chennai."+
                    "Be sure to grab your seats for an exciting two-day conference full"+
                    " of Android. ",
                title : "droidcon India 2019",
                subtitle : "Nov 2nd-3rd | Chennai",
                buttons: new Button({
                    title : "Know more",
                    url: "https://www.in.droidcon.com/"
                }),
                image: new Image({
                    url : "https://i.ibb.co/gyLnrkr/image.jpg",
                    alt : "DroidCon poster"
                }),
                
            })),

        conv.ask(" What would you like to know now?");
        conv.ask(new Suggestions(['Sessions'],['Register Now'],['Give me updates']));


    },
    venue : function(conv) {
        conv.ask('Droidcon 2019 would be held at Hotel Green Park, Chennai');
        conv.ask(new BasicCard({
        text: `Hotel Green Park \nN.S.K. Salai, Arcot Road, Vadapalani, \nChennai, Tamil Nadu 600026, India`,
        image: new Image({
            url: `https://i.ibb.co/KxQx1yk/greenpark.jpg`,
            alt:  `Hotel Green Park`,
        }),
        buttons: new Button({
            title: 'Find Hotel Green Park on Google Maps',
            url: `https://g.page/greenparkchennai?share`,
        }),
    }));
    conv.ask(new Suggestions(['Details'],['Notify me'],['Exit']));
    },
    dosomethingelse: function(conv){
        conv.ask(`There are plenty of things you can try here like, Register me as a Speaker, Notify me, Register me for event`);
        conv.ask(`What would you like to do?`);
        conv.ask(new Suggestions(['Details'],['Notify me'],['Exit']));
    }
}
