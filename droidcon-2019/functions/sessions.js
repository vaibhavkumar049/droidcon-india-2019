const {Suggestions,BasicCard,Image,List}=require('actions-on-google');
const {sessionData} = require('./session-data');

module.exports = {
    sessions: function(conv) {
        if(!conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT')) {
            conv.ask('Sorry, please try this on a screen device');
            return;
        }
        conv.ask('Here is the list of sessions');
        let listDetails = {};
        sessionData.map((data) => {
            listDetails[data.session] = {
                title: data.session,
                description: `By: ${data.name}`,
                image: new Image({
                    url: data.profilePic,
                    alt: data.name,
                }),
            }
        });
        conv.ask(new List({
            title: 'Sessions List',
            items: listDetails,
        }))
        conv.ask('What would you like to do now?');
        conv.ask(new Suggestions(['Speakers'],['Details'],['Exit']));
    },

    sessionDetails: function(conv,option) {
        conv.ask(`Ok! Here is details of ${option}`);
        let sessionDetails = {};
        sessionData.map((data) => {
            if(data.session === option) {
                sessionDetails = {
                    title: data.session,
                    text: `${data.sessionAbout}`,
                    subtitle: `By: ${data.name}`,
                    image: new Image({
                        url: `${data.profilePic}`,
                        alt: data.name,
                    }),
                }
            }
        })
        conv.ask(new BasicCard(sessionDetails));
        conv.ask('What would you like to do now?');
        conv.ask(new Suggestions(['Venue'],['Speakers'],['Exit']))
    }
}