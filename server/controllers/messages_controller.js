let messages = [];

let id = 0;

let create = (req, res, next) => {
    console.log(req.body);
    //destructuring text and time variables
    const {text, time } = req.body;
    //pushing id,text, and time onto our messages array
    messages.push( { id, text, time });
    //increasing the id index so we aren't writing over the same spot
    id ++;
    //sending an updated messages array
    res.status(200).json(messages);
};

let read  = (req, res, next) => {
    //sending a messages array
    res.status(200).json(messages);
};

let update = (req, res, next) => {
    //getting the text variable from request.body
    const { text } = req.body;
    //the thing to be updated
    const updateID = req.params.id;
    //finding the index of the id to be updated
    const messageIndex = messages.findIndex( message => {
        return message.id == updateID;
    })
    //making the update. Will return either our update if there is one or just the text that was there if not.
    let message = messages[messageIndex];
    messages[messageIndex] = {
        id: message.id,
        text: text || message.text,
        time: message.time
    }
    res.status(200).json(messages);

};

let destroy = (req, res, next) => {
    //message to be deleted
    const deleteID = req.params.id;
    //finding the index of the deleted message
    messageIndex = messages.findIndex( message => message.id == deleteID);
    //deleting message
    messages.splice(messageIndex, 1);
    //sending updated messages array
    res.status(200).json(messages);
};

//make sure it's module.exports!!!
module.exports = {
    create: create,
    read: read,
    update: update,
    destroy: destroy
}

