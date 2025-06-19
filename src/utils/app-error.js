class Apperror extends Error{
    constructor(name,message, explanation, statusCoode){
        super(message);
        this.name = name;
        this.explanation = explanation;
        this.statusCoode = statusCoode;
    }
};

module.exports = Apperror;