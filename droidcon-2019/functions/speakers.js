const {Suggestions,BasicCard,Image,List}=require('actions-on-google');
const {sessionData} = require('./session-data');

module.exports = {
    speakers: function(conv) {
        if(!conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT')) {
            conv.ask('Sorry, please try this on a screen device');
            return;
        }
        conv.ask('Here is the list of speakers');
        let listDetails = {};
        sessionData.map((data) => {
            listDetails[data.name] = {
                title: data.name,
                description: data.speakerDetails,
                image: new Image({
                    url: data.profilePic,
                    alt: data.name,
                }),
            }
        });
        conv.ask(new List({
            title: 'Speakers List',
            items: listDetails,
        }))
        conv.ask('What would you like to do now?');
        conv.ask(new Suggestions(['Sessions'],['Details'],['Exit']));
    },

    speakerDetails: function(conv,option) {
        conv.ask(`Ok! Here is details of ${option}`);
        let speakerData = {};
        sessionData.map((data) => {
            if(data.name === option) {
                speakerData = {
                    title: data.name,
                    text: `${data.speakerAbout}`,
                    subtitle: `${data.speakerDetails}`,
                    image: new Image({
                        url: `${data.profilePic}`,
                        alt: option,
                    }),
                }
            }
        })
        conv.ask(new BasicCard(speakerData));
        conv.ask('What would you like to do now?');
        conv.ask(new Suggestions(['Venue'],['Sessions'],['Exit']))
    }
}